import React from 'react';
import { Certification } from '../types';

const certs: Certification[] = [
  {
    name: 'AWS Certified AI Practitioner Early Adopter',
    issuer: 'Amazon Web Services',
    date: 'Jan 2025',
    verifyUrl: 'https://www.credly.com/badges/52555f02-7cc7-4f83-9b6c-1359b6e24f19/linked_in_profile'
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'Jul 2024',
    verifyUrl: '#'
  },
  {
    name: 'Guidewire Certified Associate - InsuranceSuite Developer - Elysian',
    issuer: 'Guidewire',
    date: 'Oct 2024',
    verifyUrl: 'https://education.guidewire.com/lmt/lmtlogin.prHome?site=guidewire#certification-checker'
  },
  {
    name: 'Guidewire Certified Specialist - PolicyCenter Configuration - Elysian',
    issuer: 'Guidewire',
    date: 'Nov 2023',
    verifyUrl: 'https://education.guidewire.com/lmt/lmtlogin.prHome?site=guidewire#certification-checker'
  }
];

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24">
      <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
        <div>
          <h2 className="text-3xl font-bold mb-4 gradient-text">Certifications</h2>
          <p className="text-slate-400">Recognized credentials validating my technical expertise and commitment to learning.</p>
        </div>
        <div className="flex gap-4">
          <div className="glass px-4 py-2 rounded-lg text-xs font-mono text-blue-300">Verified Skills: 4+</div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {certs.map((cert, i) => (
          <div key={i} className="glass p-6 rounded-2xl flex flex-col justify-between hover:bg-white/5 transition-all duration-300 group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-blue-500/50 transition-all duration-300">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="font-bold text-slate-100 mb-2 leading-tight">{cert.name}</h3>
              <p className="text-slate-500 text-sm mb-1">{cert.issuer}</p>
              <p className="text-slate-600 text-xs font-mono">{cert.date}</p>
            </div>
            
            <a 
              href={cert.verifyUrl}
              className="mt-6 flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors uppercase tracking-wider"
            >
              Verify Certificate
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
