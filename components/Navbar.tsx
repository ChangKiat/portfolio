
import React from 'react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Life', id: 'interests' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 glass rounded-full px-6 py-3 shadow-2xl">
      <ul className="flex items-center gap-4 md:gap-8 text-[10px] md:text-sm font-medium">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`transition-colors duration-200 hover:text-blue-400 whitespace-nowrap uppercase tracking-wider ${
                activeSection === item.id ? 'text-blue-400' : 'text-slate-400'
              }`}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
