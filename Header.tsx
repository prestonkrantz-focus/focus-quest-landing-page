import React from 'react';

interface HeaderProps {
  onReserveClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onReserveClick }) => {
  const navItems = [
    { name: 'THE RITUAL', href: '#ritual' },
    { name: 'ENGINEERING', href: '#engineering' },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-30 p-4 md:p-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-black tracking-tighter text-white">
          HYPERFOCUS
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold uppercase tracking-widest text-gray-400 hover:text-white transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
          <button
            onClick={onReserveClick}
            className="text-sm font-semibold uppercase tracking-widest text-yellow-400 hover:text-white transition-colors duration-300 border-b-2 border-transparent hover:border-yellow-400"
          >
            RESERVE
          </button>
        </nav>
        <div className="md:hidden">
            <button
                onClick={onReserveClick}
                className="text-sm font-semibold uppercase tracking-widest text-yellow-400"
            >
                RESERVE
            </button>
        </div>
      </div>
    </header>
  );
};

export default Header;