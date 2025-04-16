// App.js
import React from 'react';
import NavigationBar from './components/NavigationBar';

export default function App() {
  return (
    <main className="text-white">
      <NavigationBar />
      <section id="home" className="min-h-screen flex justify-center items-center text-center bg-black bg-opacity-60">
        <h1 className="text-4xl font-bold">무대 연출 Director, 강수진 PD</h1>
        <p>믿고 맡기는 연출 파트너</p>
      </section>
    </main>
  );
}
