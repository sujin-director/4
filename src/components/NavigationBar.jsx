
import React from 'react';

export default function NavigationBar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 text-white z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-bold text-xl">강수진 PD</span>
        <div className="space-x-6 text-sm md:text-base">
          <a href="#home" className="hover:text-gray-400">HOME</a>
          <a href="#about" className="hover:text-gray-400">ABOUT</a>
          <a href="#philosophy" className="hover:text-gray-400">PHILOSOPHY</a>
          <a href="#service" className="hover:text-gray-400">SERVICE</a>
          <a href="#whyme" className="hover:text-gray-400">WHY ME</a>
          <a href="#portfolio" className="hover:text-gray-400">PORTFOLIO</a>
          <a href="#contact" className="hover:text-gray-400">CONTACT</a>
        </div>
      </div>
    </nav>
  );
}
