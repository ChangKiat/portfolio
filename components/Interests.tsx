
import React from 'react';
import { Interest } from '../types';

const interests: Interest[] = [
  {
    title: 'Travel',
    description: 'Exploring the unknown. From the bustling streets of Tokyo to the quiet fjords of Norway.',
    icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
    imageUrls: [
      'https://portfolio-ck.s3.ap-southeast-1.amazonaws.com/china.jpg',
      'https://portfolio-ck.s3.ap-southeast-1.amazonaws.com/poland.jpg',
      'https://portfolio-ck.s3.ap-southeast-1.amazonaws.com/newzeland.jpg',
      'https://portfolio-ck.s3.ap-southeast-1.amazonaws.com/my.jpg'
    ]
  },
  {
    title: 'Music',
    description: 'The soundtrack to my code. My favorite Lo-fi and Jazz beats to keep the flow state going.',
    icon: 'M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3',
    youtubeId: 'jfKfPfyJRdk'
  },
  {
    title: 'Sport',
    description: 'Climbing and swimming. Pushing physical limits helps maintain mental clarity.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    imageUrls: [
      'https://portfolio-ck.s3.ap-southeast-1.amazonaws.com/genting.jpeg',
      'https://portfolio-ck.s3.ap-southeast-1.amazonaws.com/snowMoutain.jpg',
      'https://portfolio-ck.s3.ap-southeast-1.amazonaws.com/ranjani.jpeg',
      'https://portfolio-ck.s3.ap-southeast-1.amazonaws.com/kk.jpeg'
    ]
  },
  {
    title: 'Handmade',
    description: 'Crafting with my hands. Woodworking and leather crafting allow me to build physical things.',
    icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z',
    imageUrls: [
      'https://portfolio-ck.s3.ap-southeast-1.amazonaws.com/cup.jpg',
      'https://portfolio-ck.s3.ap-southeast-1.amazonaws.com/bear.jpeg'
    ]
  }
];

const Interests: React.FC = () => {
  return (
    <section id="interests" className="py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4 gradient-text">Beyond the Code</h2>
        <p className="text-slate-400 max-w-xl mx-auto">Life is more than just logic. Here's what keeps me inspired and balanced when I'm away from the keyboard.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {interests.map((item, i) => (
          <div key={i} className="group relative flex flex-col bg-slate-900/40 rounded-3xl overflow-hidden border border-slate-800 hover:border-blue-500/30 transition-all duration-500 shadow-xl">
            {/* Visual Header / Gallery */}
            <div className="h-72 relative overflow-hidden bg-slate-800">
              {item.youtubeId ? (
                <div className="w-full h-full bg-slate-900">
                  <iframe
                    className="w-full h-full opacity-90"
                    src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=0&mute=1&controls=0&modestbranding=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                </div>
              ) : (
                <div className="grid grid-cols-3 h-full gap-1 p-1">
                  {item.imageUrls?.map((url, idx) => (
                    <div key={idx} className={`relative overflow-hidden ${idx === 0 ? 'col-span-2' : 'col-span-1'}`}>
                      <img 
                        src={url} 
                        alt={`${item.title} gallery ${idx}`} 
                        className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out"
                      />
                    </div>
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                </div>
              )}
              
              {/* Icon Overlay */}
              <div className="absolute bottom-6 left-6 w-12 h-12 rounded-2xl glass flex items-center justify-center text-blue-400 group-hover:text-blue-300 group-hover:scale-110 transition-all z-10">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                </svg>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-8">
              <h3 className="text-2xl font-bold text-slate-100 mb-3">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed mb-6 text-sm md:text-base">{item.description}</p>
              
              {item.youtubeId ? (
                <a 
                  href={`https://www.youtube.com/watch?v=${item.youtubeId}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors bg-blue-500/10 px-4 py-2 rounded-full"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                  Listen to my playlist
                </a>
              ) : (
                <div className="flex gap-2">
                   <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold border border-slate-800 px-2 py-1 rounded">Gallery View</span>
                   <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold border border-slate-800 px-2 py-1 rounded">{item.imageUrls?.length} Photos</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <p className="text-slate-500 italic text-sm">
          "Creativity is intelligence having fun." – Albert Einstein
        </p>
      </div>
    </section>
  );
};

export default Interests;
