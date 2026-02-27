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
  const [isImageLoading, setIsImageLoading] = useState(true);

  const certifications: Certification[] = [
    { id: 12, title: 'Big Data Foundation', issuer: 'IBM', date: '2025', skills: 'Big Data · Hadoop', logo: '/ibm_logo.jpg', certificateUrl: '/certificates/new ibm data foundation.jpg' },
    { id: 15, title: 'IBM Data Fundamentals', issuer: 'IBM', date: '2025', skills: 'Data Analysis · Data Science Methodology', logo: '/ibm_logo.jpg', certificateUrl: '/certificates/new ibm data fundamentals.jpg' },
    { id: 16, title: 'IBM Artificial Intelligence Foundation', issuer: 'IBM', date: '2025', skills: 'AI · Machine Learning', logo: '/ibm_logo.jpg', certificateUrl: '/certificates/new ibm ai foundation.jpg' },
    { id: 18, title: 'Meta Introduction to Data Analysis', issuer: 'Meta', date: '2025', skills: 'Data Analysis · Analytics', logo: '/meta_logo.jpg', certificateUrl: '/certificates/coursera-data-analysis-python.png' },
    { id: 17, title: 'Introduction to Data Science', issuer: 'Cisco Networking Academy', date: '2025', skills: 'Data Modeling · Data Science', logo: '/cisco_networking_academy1_logo.jpg', certificateUrl: '/certificates/new cisco.jpg' },
    { id: 1, title: 'Data Analytics Job Simulation', issuer: 'Deloitte', date: 'Jun 2025', skills: 'Data Analysis · Data Modeling · Tableau', logo: '/deloitte_logo.jpg', certificateUrl: '/certificates/deloitte-data-analytics.jpg' },
    { id: 4, title: 'CSS', issuer: 'HackerRank', date: 'Mar 2025', credentialId: 'F96608F4191E', skills: 'Cascading Style Sheets (CSS)', logo: '/hackerrank_logo css.jpg', certificateUrl: '/certificates/hackerrank-css.png' },
    { id: 6, title: 'Introduction to Programming Using HTML', issuer: 'Simplilearn', date: 'Mar 2025', skills: 'HTML Scripting', logo: '/simplylearn html.jpg', certificateUrl: '/certificates/simplilearn-html.png' },
    { id: 3, title: 'Unity Essentials', issuer: 'Unity', date: 'May 2025', skills: 'Unity · 3D Modeling', logo: '/unity_logo.jpg', certificateUrl: '/certificates/unity-essentials-hq.png' },
    { id: 10, title: 'Analyzing and Visualizing Data with Microsoft Power BI', issuer: 'Infosys Springboard', date: '2025', skills: 'Microsoft Power BI · Data Modeling', logo: '/infosys_springboard_logo.jpg', certificateUrl: '/certificates/new power bi.jpg' },
    { id: 7, title: 'Basics of Python', issuer: 'Infosys Springboard', date: 'Feb 2025', skills: 'Python (Programming Language)', logo: '/infosys_springboard_logo.jpg', certificateUrl: '/certificates/new basics of python.jpg' },
    { id: 9, title: 'MYSQL', issuer: 'Udemy', date: '2024', credentialId: 'UC-06eab641-f449-4388-8471-f81701dd0a65', skills: 'Database creation · Management', logo: '/udemy_logo mysql.jpg', certificateUrl: '/certificates/udemy sql.jpg' },
  ];

  const closeModal = useCallback(() => {
    setOpenCert(null);
    setCertImageError(false);
    setCertImageTryIndex(0);
    setIsImageLoading(true);
  }, []);

  useEffect(() => {
    setCertImageError(false);
    setCertImageTryIndex(0);
    setIsImageLoading(true);
  }, [openCert?.id]);

  const certUrls = openCert?.certificateUrl ? getCertificateUrls(openCert.certificateUrl) : [];
  const currentCertSrc = certUrls[certImageTryIndex];
  const canTryNext = certImageTryIndex < certUrls.length - 1;

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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {certifications.map((cert, index) => (
        <motion.button
          key={cert.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
          onClick={() => setOpenCert(cert)}
          className="group relative text-left h-full"
        >
          <div className="glass p-8 rounded-[2.5rem] h-full flex flex-col hover-glow transition-all duration-700">
             <div className="flex gap-6 items-center mb-8">
              <div className="w-16 h-16 bg-white rounded-2xl p-3 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-accent transition-all duration-500">
                <img src={cert.logo} alt={cert.issuer} className="w-full h-full object-contain" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-[0.2em] text-accent font-black mb-1">{cert.issuer}</p>
                <h3 className="font-display font-bold text-xl leading-tight group-hover:text-black transition-colors">
                  {cert.title}
                </h3>
              </div>
            </div>
            
            <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-end">
              <div className="px-4 py-2 glass rounded-full text-[10px] font-bold text-accent group-hover:bg-accent group-hover:text-white transition-all uppercase tracking-widest">
                View Certificate
              </div>
            </div>
          </div>
        </motion.button>
      ))}

      {/* Immersive Modal */}
      <AnimatePresence>
        {openCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-background/90 backdrop-blur-2xl"
            onClick={(e) => e.target === e.currentTarget && closeModal()}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-6xl max-h-[90vh] flex flex-col glass rounded-[3rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-8 py-4 border-b border-white/5 relative z-20 bg-white/80 backdrop-blur-md">
                <div className="space-y-0.5">
                  <p className="text-accent text-[10px] font-black uppercase tracking-[0.2em]">{openCert.issuer}</p>
                  <h2 className="text-xl font-display font-bold tracking-tight">{openCert.title}</h2>
                </div>
                <button
                  onClick={closeModal}
                  className="w-10 h-10 rounded-xl glass hover:bg-black/5 flex items-center justify-center group transition-colors"
                >
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Modal Body */}
              <div className="flex-grow overflow-auto bg-zinc-50 flex items-start justify-center p-2 relative">
                 {openCert.certificateUrl ? (
                   <div className="relative w-full h-full flex items-center justify-center">
                     {isImageLoading && !certImageError && (
                       <div className="absolute inset-0 flex items-center justify-center z-10">
                         <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
                       </div>
                     )}
                     {!certImageError && currentCertSrc ? (
                        <div className="relative h-full w-full flex items-center justify-center p-2">
                          <img
                            src={encodeURI(currentCertSrc)}
                            alt={openCert.title}
                            onLoad={() => setIsImageLoading(false)}
                            className={`max-w-full max-h-full w-auto h-auto rounded-xl shadow-2xl transition-all duration-700 bg-white ${isImageLoading ? 'opacity-0 scale-95 blur-md' : 'opacity-100 scale-100 blur-0'}`}
                            style={{ 
                              imageRendering: 'auto',
                              WebkitBackfaceVisibility: 'hidden'
                            }}
                            onError={() => {
                              if (canTryNext) setCertImageTryIndex((i) => i + 1);
                              else {
                                setCertImageError(true);
                                setIsImageLoading(false);
                              }
                            }}
                          />
                        </div>
                     ) : (
                       <div className="text-center py-24 px-12 glass rounded-[3rem] max-w-2xl border-white/5">
                         <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-8">
                           <svg className="w-12 h-12 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                           </svg>
                         </div>
                         <h4 className="text-2xl font-display font-bold mb-4">Verification Layer Enabled</h4>
                         <div className="space-y-6 text-left">
                           <div className="p-8 glass rounded-2xl border-white/5 space-y-4">
                             <p className="text-secondary leading-relaxed font-medium italic">"Image preview restricted. Validated via verified institutional credentials."</p>
                             <div className="h-px bg-white/5 w-full" />
                             <div>
                                <p className="text-[10px] uppercase tracking-widest text-accent font-black mb-1">Key Competencies</p>
                                <p className="text-lg font-bold">{openCert.skills}</p>
                             </div>
                             {openCert.credentialId && (
                               <div>
                                  <p className="text-[10px] uppercase tracking-widest text-accent font-black mb-1">Authorization ID</p>
                                  <p className="font-mono text-secondary text-sm">{openCert.credentialId}</p>
                               </div>
                             )}
                           </div>
                         </div>
                       </div>
                     )}
                   </div>
                 ) : null}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
