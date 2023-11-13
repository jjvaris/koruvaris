import Instagram from './Insta';

export default function MobileNav({ hide }: { hide: () => void }) {
  return (
    <div
      className="fixed flex flex-col inset-0 bg-white opacity-[98%] z-10 justify-center items-center gap-12"
      onClick={hide}
    >
      <nav className="flex flex-col gap-6 text-3xl mt-24" onClick={hide}>
        <a
          href="#esittely"
          className="text-gray-700 hover:text-black p-2 border border-transparent"
          onClick={hide}
        >
          Esittely
        </a>
        <a
          href="#kuvat"
          className="text-gray-700 hover:text-black p-2 border border-transparent"
          onClick={hide}
        >
          Kuvat
        </a>
        <a
          href="#ota-yhteytta"
          className="text-gray-700 hover:text-black p-2 border border-transparent"
          onClick={hide}
        >
          Ota yhteyttä
        </a>
        {/* <a
          className="text-gray-700 hover:text-black p-2 border border-transparent"
          onClick={hide}
        >
          Verkkokauppa
        </a> */}
      </nav>
      <a
        href="mailto:koruvaris@gmail.com"
        className="font-mono text-gray-500 hover:text-black"
      >
        koruvaris@gmail.com
      </a>
      <Instagram />
    </div>
  );
}
