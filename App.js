// 강수진 PD 포트폴리오 메인 React 코드
import React from 'react';
import NavigationBar from './components/NavigationBar';

export default function App() {
  return (
    <main className="relative text-white font-sans scroll-smooth">
      {/* 배경 이미지 */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/금보원(5.2)0126.JPG')" }}
      />

      {/* 네비게이션 바 */}
      <NavigationBar />

      {/* 홈 섹션 */}
      <section id="home" className="relative min-h-screen flex flex-col justify-center items-center px-6 text-center pt-24 z-10 bg-black bg-opacity-60">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">무대 연출 Director, 강수진 PD</h1>
        <p className="text-xl md:text-2xl max-w-2xl leading-relaxed tracking-wide">
          믿고 맡기는 연출 파트너,<br className="md:hidden" /> 기획도 알고, 콘솔도 아는 사람
        </p>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-white text-black py-24 px-6 z-10 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 tracking-tight">ABOUT</h2>
          <p className="text-lg leading-loose tracking-wide">
            15년간 현장에서 기획과 연출을 모두 경험하며, 정부 및 공공기관 행사에 특화된 노하우를 쌓아왔습니다.
            <br /> 기획자의 언어를 이해하고, 연출자의 감각으로 무대를 설계합니다.
          </p>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section id="philosophy" className="py-24 px-6 z-10 relative bg-gray-50 text-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 tracking-tight">PHILOSOPHY</h2>
          <p className="text-lg leading-loose tracking-wide">
            운영과 무대, 둘을 동시에 설계할 수 있는 사람.
            <br />현장을 아는 연출자가 기획과 한 팀이 될 때, 행사는 완성됩니다.
          </p>
        </div>
      </section>

      {/* SERVICE */}
      <section id="service" className="bg-white text-black py-24 px-6 z-10 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 tracking-tight">SERVICE</h2>
          <ul className="list-disc list-inside text-lg leading-loose tracking-wide">
            <li>무대 연출 총괄 및 콘솔 운영</li>
            <li>큐시트 / 시나리오 구성</li>
            <li>무대 콘셉트 및 화면 구성 기획</li>
            <li>하이브리드 행사 연출</li>
          </ul>
        </div>
      </section>

      {/* WHY ME */}
      <section id="whyme" className="py-24 px-6 z-10 relative bg-gray-50 text-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 tracking-tight">WHY ME</h2>
          <ul className="list-disc list-inside text-lg leading-loose tracking-wide">
            <li>기획자 출신 연출가 – 운영과 무대를 동시에 이해</li>
            <li>정부 입찰 행사 경험 다수</li>
            <li>유연한 커뮤니케이션과 실전 감각</li>
            <li>외주가 아닌 팀처럼 함께하는 자세</li>
          </ul>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="bg-white text-black py-24 px-6 z-10 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 tracking-tight">PORTFOLIO</h2>
          <p className="text-lg leading-loose tracking-wide">
            정부 행사 / 공공 캠페인 / 브랜드 런칭 등 다양한 사례 다수 진행
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 z-10 relative bg-gray-50 text-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 tracking-tight">CONTACT</h2>
          <p className="text-lg leading-loose tracking-wide mb-6">연출이 고민이라면 지금 연락주세요.</p>
          <a href="mailto:sujinpd@email.com" className="inline-block bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition">이메일 보내기</a>
        </div>
      </section>
    </main>
  );
}
