'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Certification = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  skills: string;
  logo: string;
  credentialId?: string;
  /** Path to certificate image or PDF in public (e.g. /certificates/ibm-big-data.jpg). Shown in modal when set. */
  certificateUrl?: string;
};

function getCertificateUrls(path: string): string[] {
  const base = path.replace(/\.[^.]+$/, '');
  return [...new Set([path, `${base}.png`, `${base}.jpg`, `${base}.jpeg`])];
}

export default function Certifications() {
  const [openCert, setOpenCert] = useState<Certification | null>(null);
  const [certImageError, setCertImageError] = useState(false);
  const [certImageTryIndex, setCertImageTryIndex] = useState(0);
  const [certNaturalWidth, setCertNaturalWidth] = useState<number | null>(null);

  // certificateUrl points to files in public/certificates/ — names match your Desktop\images\certificates folder.
  const certifications: Certification[] = [
    // Best first: IBM → Meta → Cisco → Deloitte → then rest (CSS/HTML/Unity…)
    // Using your newer “new …” certificate images (better crop) where available.
    { id: 12, title: 'Big Data Foundation', issuer: 'IBM', date: '2025', skills: 'Big Data · Hadoop', logo: '/ibm_logo.jpg', certificateUrl: '/certificates/new ibm data foundation.jpg' },
    { id: 15, title: 'IBM Data Fundamentals', issuer: 'IBM', date: '2025', skills: 'Data Analysis · Data Science Methodology', logo: '/ibm_logo.jpg', certificateUrl: '/certificates/new ibm data fundamentals.jpg' },
    { id: 16, title: 'IBM Artificial Intelligence Foundation', issuer: 'IBM', date: '2025', skills: 'AI · Machine Learning', logo: '/ibm_logo.jpg', certificateUrl: '/certificates/new ibm ai foundation.jpg' },
    { id: 18, title: 'Meta Introduction to Data Analysis', issuer: 'Meta', date: '2025', skills: 'Data Analysis · Analytics', logo: '/meta_logo.jpg', certificateUrl: '/certificates/coursera-data-analysis-python.png' },
    { id: 17, title: 'Introduction to Data Science', issuer: 'Cisco Networking Academy', date: '2025', skills: 'Data Modeling · Data Science', logo: '/cisco_networking_academy1_logo.jpg', certificateUrl: '/certificates/new cisco.jpg' },
    { id: 1, title: 'Data Analytics Job Simulation', issuer: 'Deloitte', date: 'Jun 2025', skills: 'Data Analysis · Data Modeling · Tableau', logo: '/deloitte_logo.jpg', certificateUrl: '/certificates/deloitte-data-analytics.jpg' },
    { id: 4, title: 'CSS', issuer: 'HackerRank', date: 'Mar 2025', credentialId: 'F96608F4191E', skills: 'Cascading Style Sheets (CSS)', logo: '/hackerrank_logo css.jpg', certificateUrl: '/certificates/hackerrank-css.png' },
    { id: 6, title: 'Introduction to Programming Using HTML', issuer: 'Simplilearn', date: 'Mar 2025', skills: 'HTML Scripting', logo: '/simplylearn html.jpg', certificateUrl: '/certificates/simplilearn-html.png' },
    // Use higher-quality saved image for proper preview size
    { id: 3, title: 'Unity Essentials', issuer: 'Unity', date: 'May 2025', skills: 'Unity · 3D Modeling', logo: '/unity_logo.jpg', certificateUrl: '/certificates/unity-essentials-hq.png' },
    { id: 10, title: 'Analyzing and Visualizing Data with Microsoft Power BI', issuer: 'Infosys Springboard', date: '2025', skills: 'Microsoft Power BI · Data Modeling', logo: '/infosys_springboard_logo.jpg', certificateUrl: '/certificates/new power bi.jpg' },
    { id: 7, title: 'Basics of Python', issuer: 'Infosys Springboard', date: 'Feb 2025', skills: 'Python (Programming Language)', logo: '/infosys_springboard_logo.jpg', certificateUrl: '/certificates/new basics of python.jpg' },
    // Use the high-quality file (the other Udemy one is a tiny thumbnail)
    { id: 9, title: 'MYSQL', issuer: 'Udemy', date: '2024', credentialId: 'UC-06eab641-f449-4388-8471-f81701dd0a65', skills: 'Database creation · Management', logo: '/udemy_logo mysql.jpg', certificateUrl: '/certificates/udemy sql.jpg' },
  ];

  const closeModal = useCallback(() => {
    setOpenCert(null);
    setCertImageError(false);
    setCertImageTryIndex(0);
  }, []);

  useEffect(() => {
    setCertImageError(false);
    setCertImageTryIndex(0);
    setCertNaturalWidth(null);
  }, [openCert?.id]);

  const certUrls = openCert?.certificateUrl ? getCertificateUrls(openCert.certificateUrl) : [];
  const currentCertSrc = certUrls[certImageTryIndex];
  const canTryNext = certImageTryIndex < certUrls.length - 1;

  // Prevent blurry upscaling: cap display width to the image's natural pixel width.
  useEffect(() => {
    if (!openCert || !currentCertSrc || certImageError) return;
    let cancelled = false;
    const img = new Image();
    img.onload = () => {
      if (!cancelled) setCertNaturalWidth(img.naturalWidth || null);
    };
    img.onerror = () => {
      if (!cancelled) setCertNaturalWidth(null);
    };
    img.src = encodeURI(currentCertSrc);
    return () => {
      cancelled = true;
    };
  }, [openCert?.id, currentCertSrc, certImageError]);

  useEffect(() => {
    if (!openCert) return;
    const onEscape = (e: KeyboardEvent) => e.key === 'Escape' && closeModal();
    document.addEventListener('keydown', onEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onEscape);
      document.body.style.overflow = '';
    };
  }, [openCert, closeModal]);

  return (
    <section id="certifications" className="py-20 bg-slate-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-blue-700 mb-12 text-center"
        >
          Certifications
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.button
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              whileHover={{ scale: 1.03, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
              whileTap={{ scale: 0.98 }}
              type="button"
              onClick={() => setOpenCert(cert)}
              className="text-left bg-white border border-slate-200 p-6 rounded-lg shadow-sm transition-shadow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <div className="flex gap-4 mb-4">
                <img src={cert.logo} alt={cert.issuer} className="w-16 h-16 object-contain flex-shrink-0" />
                <div className="min-w-0">
                  <h3 className="font-bold text-slate-900 text-base leading-tight mb-1 line-clamp-2">
                    {cert.title}
                  </h3>
                  <p className="text-slate-600 text-sm font-medium">{cert.issuer}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Issued {cert.date}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Pop-in modal – certificate image as main content, same style as reference (~2/3 width, ~3/4 height) */}
      <AnimatePresence>
        {openCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50"
            onClick={(e) => e.target === e.currentTarget && closeModal()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="cert-modal-title"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
              className="bg-white rounded-xl shadow-xl w-[min(66vw,56rem)] max-w-[95vw] max-h-[75vh] flex flex-col overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="shrink-0 relative flex items-center justify-between gap-4 px-6 py-4 border-b border-gray-200">
                <h2 id="cert-modal-title" className="text-lg font-bold text-gray-900 pr-10 flex-1 min-w-0">
                  {openCert.title}
                </h2>
                <button
                  type="button"
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors shrink-0"
                  aria-label="Close"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Certificate image/PDF as primary content – try .jpg, .png, .jpeg; show placeholder if all fail */}
              {openCert.certificateUrl ? (
                <div className="flex-1 min-h-0 overflow-auto p-4 bg-gray-100/50 flex justify-center items-center">
                  {openCert.certificateUrl.toLowerCase().endsWith('.pdf') ? (
                    <iframe
                      src={openCert.certificateUrl}
                      title={openCert.title}
                      className="w-full min-h-[60vh] border-0 rounded-lg shrink-0"
                    />
                  ) : !certImageError && currentCertSrc ? (
                    <a
                      href={encodeURI(currentCertSrc)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex justify-center"
                      title="Open certificate in new tab"
                    >
                      <img
                        key={currentCertSrc}
                        src={encodeURI(currentCertSrc)}
                        alt={`${openCert.title} – Certificate`}
                        className="w-full max-w-5xl h-auto max-h-[calc(75vh-6.5rem)] object-contain rounded-lg shadow-sm block bg-white"
                        style={{ width: certNaturalWidth ? `min(100%, ${certNaturalWidth}px)` : undefined }}
                        loading="eager"
                        draggable={false}
                        onError={() => {
                          if (canTryNext) setCertImageTryIndex((i) => i + 1);
                          else setCertImageError(true);
                        }}
                      />
                    </a>
                  ) : (
                    <div className="flex flex-col items-center justify-center gap-4 py-8 px-4 text-center max-w-md">
                      <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center">
                        <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-gray-700 font-medium">Certificate image not found</p>
                      <p className="text-sm text-gray-500">
                        Add a file to <code className="bg-gray-200 px-1.5 py-0.5 rounded text-xs">public/certificates/</code> named{' '}
                        <strong>{openCert.certificateUrl.split('/').pop()}</strong> or the same name with <code className="text-gray-600">.png</code>. See that folder&apos;s README for the list.
                      </p>
                      <div className="border-t border-gray-200 w-full pt-4 mt-2 text-left space-y-2">
                        <p className="text-xs text-gray-500">{openCert.issuer} · Issued {openCert.date}</p>
                        <p className="text-sm text-gray-600">{openCert.skills}</p>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="p-6 pt-4 space-y-4">
                  <div className="flex items-center gap-4">
                    <img src={openCert.logo} alt={openCert.issuer} className="w-14 h-14 object-contain" />
                    <div>
                      <p className="font-semibold text-gray-900">{openCert.issuer}</p>
                      <p className="text-gray-500 text-sm font-medium">Issued {openCert.date}</p>
                    </div>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-4 py-2">
                    <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Certificate</p>
                    <p className="text-gray-900 font-medium">{openCert.title}</p>
                  </div>
                  {openCert.credentialId && (
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Credential ID:</span> {openCert.credentialId}
                    </div>
                  )}
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Skills:</span> {openCert.skills}
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
