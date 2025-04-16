// NavigationBar.js
import React from 'react';

export default function NavigationBar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 text-white flex justify-center space-x-6 py-4 z-50">
      <a href="#home">HOME</a>
      <a href="#about">ABOUT</a>
      <a href="#philosophy">PHILOSOPHY</a>
      <a href="#service">SERVICE</a>
      <a href="#whyme">WHY ME</a>
      <a href="#portfolio">PORTFOLIO</a>
      <a href="#contact">CONTACT</a>
    </nav>
  );
}
