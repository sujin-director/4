
import React from 'react';
import NavigationBar from './components/NavigationBar';

export default function App() {
  return (
    <main className="relative text-white font-sans">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/금보원(5.2)0126.JPG')" }}
      />
      <NavigationBar />

      <section id="home" className="relative min-h-screen flex flex-col justify-center items-center px-6 text-center pt-24 z-10 bg-black bg-opacity-60">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">무대 연출 Director, 강수진 PD</h1>
        <p className="text-lg md:text-xl max-w-2xl leading-relaxed">
          믿고 맡기는 연출 파트너,<br className="md:hidden" /> 기획도 알고, 콘솔도 아는 사람
        </p>
      </section>

      <section id="about" className="bg-white text-black py-16 px-6 z-10 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">ABOUT</h2>
          <p className="text-lg leading-relaxed">
            15년간 현장에서 기획과 연출을 모두 경험하며, 정부 및 공공기관 행사에 특화된 노하우를 쌓아왔습니다.
            <br /> 기획자의 언어를 이해하고, 연출자의 감각으로 무대를 설계합니다.
          </p>
        </div>
      </section>

      <section id="philosophy" className="py-16 px-6 z-10 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">PHILOSOPHY</h2>
          <p className="text-lg leading-relaxed">
            운영과 무대, 둘을 동시에 설계할 수 있는 사람.
            <br />현장을 아는 연출자가 기획과 한 팀이 될 때, 행사는 완성됩니다.
          </p>
        </div>
      </section>

      <section id="service" className="bg-white text-black py-16 px-6 z-10 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">SERVICE</h2>
          <ul className="list-disc list-inside text-lg">
            <li>무대 연출 총괄 및 콘솔 운영</li>
            <li>큐시트 / 시나리오 구성</li>
            <li>무대 콘셉트 및 화면 구성 기획</li>
            <li>하이브리드 행사 연출</li>
          </ul>
        </div>
      </section>

      <section id="whyme" className="py-16 px-6 z-10 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">WHY ME</h2>
          <ul className="list-disc list-inside text-lg">
            <li>기획자 출신 연출가 – 운영과 무대를 동시에 이해</li>
            <li>정부 입찰 행사 경험 다수</li>
            <li>유연한 커뮤니케이션과 실전 감각</li>
            <li>외주가 아닌 팀처럼 함께하는 자세</li>
          </ul>
        </div>
      </section>

      <section id="portfolio" className="bg-white text-black py-16 px-6 z-10 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">PORTFOLIO</h2>
          <p className="text-lg">정부 행사 / 공공 캠페인 / 브랜드 런칭 등 다양한 사례 다수 진행</p>
        </div>
      </section>

      <section id="contact" className="py-16 px-6 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">CONTACT</h2>
          <p className="text-lg mb-4">연출이 고민이라면 지금 연락주세요.</p>
          <a href="mailto:sujinpd@email.com" className="inline-block bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">이메일 보내기</a>
        </div>
      </section>
    </main>
  );
}
