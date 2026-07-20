import React from 'react';

const certificates = [
  { name: 'AZ-900 Microsoft Azure Fundamentals', image: `${import.meta.env.BASE_URL}certificates/az-900.jpg` },
  { name: 'HaxCrux 2026', image: `${import.meta.env.BASE_URL}certificates/haxcrux-2026.jpg` },
  { name: 'Hack-The-Den', image: `${import.meta.env.BASE_URL}certificates/hack-the-den.jpg` },
  { name: 'Introduction to Artificial Intelligence', image: `${import.meta.env.BASE_URL}certificates/introduction-to-ai.jpg` },
  { name: 'Node.js by Unstop', image: `${import.meta.env.BASE_URL}certificates/nodejs-unstop.jpg` },
];

export default function Certificates() {
  return (
    <section id="certificates" className="bg-[#020202] px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.4em] text-blue-500">Credentials</p>
        <h2 className="mb-12 text-4xl font-black uppercase tracking-tighter text-white md:text-6xl">
          Certificates<span className="text-blue-500">.</span>
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate) => {
            const className = "block border border-white/10 bg-white/5 p-6 text-sm font-medium uppercase tracking-wider text-gray-200 transition-colors";
            return certificate.image ? (
              <a key={certificate.name} href={certificate.image} target="_blank" rel="noopener noreferrer" className={`${className} hover:border-blue-500 hover:text-white`}>
                {certificate.name}
              </a>
            ) : (
              <div key={certificate.name} className={className}>
                {certificate.name}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
