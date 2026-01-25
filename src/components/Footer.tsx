'use client';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Puli Bharat</h3>
            <p className="text-gray-600 font-medium max-w-sm">
              AI/ML Engineer & Web Developer creating innovative, data-driven solutions for real-world problems.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-600 font-medium text-sm">
              <li>
                <a href="mailto:pulibharat2007@gmail.com" className="hover:text-blue-600 transition-colors">
                  pulibharat2007@gmail.com
                </a>
              </li>
              <li>
                <span>Kakinada, Andhra Pradesh, India</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-4">Connect</h4>
            <div className="flex flex-col space-y-2 text-gray-600 font-medium text-sm">
              <a href="https://www.linkedin.com/in/puli-bharat-58040a310" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">LinkedIn</a>
              <a href="https://github.com/pulibharat" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">GitHub</a>
              <a href="https://medium.com/@pulibharat" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">Medium</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 text-center text-gray-500 text-sm font-medium">
          <p>&copy; {new Date().getFullYear()} Puli Bharat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
