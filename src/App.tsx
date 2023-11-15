import logo from './assets/koruvaris.jpeg';
import bg from './assets/bg.jpeg';
import img1 from './assets/gallery/1.jpg';
import img2 from './assets/gallery/2.jpg';
import img3 from './assets/gallery/3.jpg';
import img4 from './assets/gallery/4.jpg';
import img5 from './assets/gallery/5.jpg';
import img6 from './assets/gallery/6.jpeg';
import profile from './assets/profile.jpeg';
import './App.css';
import useScreenOrientation from './hooks/useOrientation';
import Instagram from './components/Insta';
import { useState } from 'react';
import MobileNav from './components/MobileNav';

function App() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useScreenOrientation();
  return (
    <div className="flex flex-col items-center justify-center text-center font-mono scroll-smooth">
      <div
        className="bg-cover bg-center flex flex-col w-full text-center relative"
        style={{
          backgroundImage: `url(${bg})`,
          minHeight: 'var(--inner-heigth)',
        }}
      >
        <div className="self-end m-2 z-30">
          <button
            className="sm:hidden bg-transparent p-1 hover:border-transparent focus:outline-none"
            onClick={() => setIsMobileNavOpen((isOpen) => !isOpen)}
          >
            {isMobileNavOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1"
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1"
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
        {isMobileNavOpen && (
          <MobileNav hide={() => setIsMobileNavOpen(false)} />
        )}
        <nav className="hidden sm:flex gap-10 self-center mt-10 z-20">
          <a
            href="#esittely"
            className="text-gray-700 hover:text-black p-2 border border-transparent hover:border-black"
          >
            Esittely
          </a>
          <a
            href="#kuvat"
            className="text-gray-700 hover:text-black p-2 border border-transparent hover:border-black"
          >
            Kuvat
          </a>
          <a
            href="#ota-yhteytta"
            className="text-gray-700 hover:text-black p-2 border border-transparent hover:border-black"
          >
            Ota yhteyttä
          </a>
          {/* <a className="text-gray-700 hover:text-black p-2 border border-transparent hover:border-black">
            Verkkokauppa
          </a> */}
        </nav>
        <div className="px-10 py-10 flex flex-col flex-grow items-center justify-center gap-6 justify-self-center">
          <div
            className="logo justify-self-center px-5"
            style={{ maxWidth: 'min(25rem, var(--logo-width))' }}
          >
            <img src={logo} alt="Koruvaris logo" />
          </div>
          <h2 className="font-mono text-lg md:text-xl text-gray-800">
            Verkkokauppa avataan pian
          </h2>
          <a
            href="mailto:koruvaris@gmail.com"
            className="font-mono text-gray-500 hover:text-black"
          >
            koruvaris@gmail.com
          </a>
          <div className="">
            <Instagram />
          </div>
        </div>

        <div className="basis-24">
          <div id="scroll-down" className="scroll-smooth">
            <a href="#esittely">
              <span />
              <span />
              <span />
            </a>
          </div>
        </div>
      </div>
      <main
        id="esittely"
        className="max-w-2xl p-10 gap-6 flex flex-col items-center scroll-smooth"
      >
        <h1 className="text-xl text-gray-800 mt-10">Koruvaris</h1>
        {/* <hr className="h-px bg-gray-700 border-0 w-full" /> */}
        <p>
          Tervehdys! Koruvaris kiittää, että olet eksynyt sivuilleni ja olet
          ehkä aikeissasi ostaa itsellesi tai läheisellesi iloksi suomalaista
          käsityötä.
        </p>

        <p>
          Korut tämä Varis valmistaa kotoa käsin Espoossa pienessä pajassaan
          (eli keittiössä) illan hiljaisina tunteinta pikkulasten mentyä
          nukkumaan.
        </p>
        <p>
          Korut ovat tehty pääsääntöisesti polymeerisavesta, johon tykkään
          yhdistellä kimallusta lehtikullalla/hopealla ja viimeisenä silauksena
          lisätä helmiä. Massat sekoitan itse, joten jokainen korupari on
          uniikki. Teräosina käytän koruissa kirurginterästä, joka takaa korun
          kestävyyden ja ne sopivat myös allergisille.
        </p>
        <p>
          Tarkoitus näillä helyillä on tuoda iloa sinulle, kuten ne tuovat
          minullekin niitä valmistaessani/tehdessäni ja nähdessäni valmiit
          kaunokaiset. Eli anna mennä ja nauti korujen tuomasta piristyksestä!
        </p>
        <div className="w-52 md:w-60 px-4">
          <img
            src={profile}
            alt="Henkilökuva"
            className="shadow rounded-full max-w-full h-auto align-middle border-none"
          />
        </div>
        <p className="flex gap-6">
          <span className="self-center">- Elisa</span>
        </p>

        <hr id="kuvat" className="h-px my-8 bg-gray-700 border-0 w-full" />
        {/* <hr className="h-px my-8 bg-gray-700 border-0 w-full" /> */}
        <div className="grid grid-cols-2 gap-4 sm:gap-10">
          <img className="aspect-square object-cover" src={img1}></img>
          <img className="aspect-square object-cover" src={img2}></img>
          <img className="aspect-square object-cover" src={img3}></img>
          <img className="aspect-square object-cover" src={img4}></img>
          <img className="aspect-square object-cover" src={img5}></img>
          <img className="aspect-square object-cover" src={img6}></img>
        </div>
        {/* <hr className="h-px my-12 bg-gray-700 border-0 w-full" /> */}
        <div
          id="ota-yhteytta"
          className="flex flex-col items-center pb-10 mt-16"
        >
          <h2 className="text-xl mb-10">Ota yhteyttä</h2>
          <p>Koruvaris</p>
          <a href="tel:0503437824" className=" text-black hover:text-gray-500">
            050 343 7824
          </a>
          <a
            href="mailto:koruvaris@gmail.com"
            className=" text-black hover:text-gray-500"
          >
            koruvaris@gmail.com
          </a>
          <p className="text-sm mt-10">Y-tunnus: 3398198-4</p>
          <div className="mt-10">
            <Instagram />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
