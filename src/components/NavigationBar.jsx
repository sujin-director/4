import React from 'react';

export default function NavigationBar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 text-white z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="text-xl font-bold tracking-wide">SUJIN PD</div>
        <div className="space-x-6 text-sm md:text-base">
          <a href="#home" className="hover:text-gray-300">HOME</a>
          <a href="#about" className="hover:text-gray-300">ABOUT</a>
          <a href="#philosophy" className="hover:text-gray-300">PHILOSOPHY</a>
          <a href="#service" className="hover:text-gray-300">SERVICE</a>
          <a href="#whyme" className="hover:text-gray-300">WHY ME</a>
          <a href="#portfolio" className="hover:text-gray-300">PORTFOLIO</a>
          <a href="#contact" className="hover:text-gray-300">CONTACT</a>
        </div>
      </div>
    </nav>
  );
}
