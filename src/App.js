import React, { useState, useEffect } from 'react'
import './App.css'
import Image from "./assets/poto.png";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  if (!isMobile) {
    return (
      <div>
        <section>
          <nav>
            <div className="bg-purple-950 justify-between flex flex-row px-14 py-4 text-white">
              <h1 className="font-extrabold text-2xl">Zelovxx™</h1>
              <ul className="text-2xl flex flex-row justify-end no-underline gap-6">
                <li>
                  <a href="" className="hover:underline hover:text-purple-400">
                    Home
                  </a>
                </li>
                <li>
                  <a href="" className="hover:underline hover:text-purple-400">
                    Profile
                  </a>
                </li>
                <li>
                  <a href="" className="hover:underline hover:text-purple-400">
                    Portofolio
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </section>

        <section className="flex flex-row">
          <div className="bg-purple-800 h-screen relative">
            <div className="flex justify-center py-4 text-white font-semibold text-lg">
              <h1 className="typing-right text-7xl font-bold">
                ıɐʞǝs ou ɐɯɐsɐʞɐs nosoʞoʎ
              </h1>
            </div>

            <div className="bottom-0 absolute right-0">
              <img
                src={Image}
                className="h-auto max-w-lg transition-all duration-300 rounded-lg blur-sm hover:blur-none cursor-pointer"
              />
            </div>

            <div className="px-12 py-6 flex flex-col w-1/2">
              <div className=" text-white px-4 py-2">
                <h1 className="typing text-5xl font-extrabold">
                  Halo, aku Habibie
                </h1>
                <h2 className="split text-3xl font-bold py-2">
                  Teknik Informatika
                </h2>
                <p className="split text-lg py-2">
                  ¡ʇɐƃuɐɯǝs dɐʇǝʇ ɐʎuɐʇɐʞ-ɐʇɐʞ ǝsoq dɐıs ¿ɐdɐ ɐlısɐɔuɐd Ɛ-ǝʞ
                  ɐlıs 'ʇɐƃuı ˙ɐıƃɐɥɐq uɐp dnpıɥ dɐʇǝʇ ɹɐıq uıʞƃunɯ ʞıɐqǝs
                  uıuɐlɐɾıp snɹɐɥ dnpıɥ ɐƃnɾ ɐʎuɐɯɐu ɥɐlɥɐpns ɐʎ dnpıɥ ɥɐlɐɯ
                  ɐʎuǝdɐɔ-ǝdɐɔ ıƃɐl dnpıɥ ƃuɐpɐʞ
                </p>

                <div className="flex py-2 gap-2 text-center text-md font-medium">
                  <div>
                    <button className="animated-button bg-purple-400 hover:bg-purple-950 rounded-md w-24 h-10">
                      Info
                    </button>
                  </div>

                  <div>
                    <button className="animated-button bg-purple-400 hover:bg-purple-950 rounded-md w-24 h-10">
                      Dm
                    </button>
                  </div>
                </div>
              </div>

              <div className="px-4 py-2">
                <ul className="flex-row flex gap-7">
                  <button className="animated-button cursor-pointer hover:bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] bg-purple-950 rounded-full w-10 h-10 px-2">
                    <svg
                      className="w-6 h-6 text-gray-800 text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        fill-rule="evenodd"
                        d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                  <button className="animated-button cursor-pointer hover:bg-blue-600 bg-purple-950 rounded-full w-10 h-10 px-2">
                    <svg
                      className="w-6 h-6 text-gray-800 text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                  <button className="animated-button cursor-pointer hover:bg-black bg-purple-950 rounded-full w-10 h-10 px-2">
                    <svg
                      class="w-6 h-6 text-gray-800 text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
                    </svg>
                  </button>
                  <button className="animated-button cursor-pointer hover:bg-green-600 bg-purple-950 rounded-full w-10 h-10 px-2">
                    <svg
                      className="w-6 h-6 text-gray-800 text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        fill-rule="evenodd"
                        d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"
                        clip-rule="evenodd"
                      />
                      <path
                        fill="currentColor"
                        d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"
                      />
                    </svg>
                  </button>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-purple-950">
          <div class="w-full mx-auto max-w-screen-xl p-4 flex items-center justify-between ">
            <span class="text-sm text-white text-center">
              © 2025{" "}
              <a href="" class="hover:underline">
                Zelovxx™
              </a>
              . All Rights Reserved.
            </span>
            <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-200 text-gray-200 mt-0">
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">
                  About
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    );
  } else {
    return (
      <div>
        <section className="relative">
          <nav>
            <div className="bg-purple-950 flex justify-between items-center px-4 py-4 text-white">
              {/* Logo */}
              <h1 className="font-extrabold text-2xl">Zelovxx™</h1>

              {/* Tombol Hamburger */}
              <button
                className="text-white text-2xl focus:outline-none"
                onClick={toggleMenu}
              >
                ☰
              </button>
            </div>
          </nav>

          {/* Overlay */}
          {isOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={toggleMenu}
            ></div>
          )}

          {/* Sidebar */}
          <div
            className={`fixed top-0 right-0 h-full bg-purple-950 text-white shadow-lg transform transition-transform duration-300 ease-in-out w-64 z-50 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <button
              className="text-white text-xl absolute top-4 right-4 focus:outline-none"
              onClick={toggleMenu}
            >
              ✕
            </button>
            <ul className="flex flex-col gap-4 px-4 py-12">
              <li className="hover:bg-purple-500 rounded-sm px-2 py-2">
                <a href="#" className="hover:text-gray-300 ">
                  Home
                </a>
              </li>
              <li className="hover:bg-purple-500 rounded-sm px-2 py-2">
                <a href="#" className="hover:text-gray-300">
                  Profile
                </a>
              </li>
              <li className="hover:bg-purple-500 rounded-sm px-2 py-2">
                <a href="#" className="hover:text-gray-300">
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section className="flex flex-col">
          <div className="bg-purple-800 h-full">
            <div className="flex justify-center py-4 text-white font-semibold text-lg">
              <h1 className="typing-right text-2xl font-extrabold">
                ıɐʞǝs ou ɐɯɐsɐʞɐs nosoʞoʎ
              </h1>
            </div>

            <div className="px-4 py-2">
              <div className="bg-purple-600 text-white rounded-lg px-4 py-2">
                <h1 className="typing text-4xl font-extrabold py-1">
                  Halo, aku Habibie
                </h1>
                <h2 className="split text-2xl font-bold py-1">
                  Teknik Informatika
                </h2>
                <p className="split text-lg py-1">
                  ¡ʇɐƃuɐɯǝs dɐʇǝʇ ɐʎuɐʇɐʞ-ɐʇɐʞ ǝsoq dɐıs ¿ɐdɐ ɐlısɐɔuɐd Ɛ-ǝʞ
                  ɐlıs 'ʇɐƃuı ˙ɐıƃɐɥɐq uɐp dnpıɥ dɐʇǝʇ ɹɐıq uıʞƃunɯ ʞıɐqǝs
                  uıuɐlɐɾıp snɹɐɥ dnpıɥ ɐƃnɾ ɐʎuɐɯɐu ɥɐlɥɐpns ɐʎ dnpıɥ ɥɐlɐɯ
                  ɐʎuǝdɐɔ-ǝdɐɔ ıƃɐl dnpıɥ ƃuɐpɐʞ
                </p>
              </div>
            </div>
            <div className="flex px-4 py-2 gap-2 text-center text-md font-medium text-white">
              <div>
                <button className="animated-button bg-purple-400 hover:bg-purple-950 rounded-md w-24 h-10">
                  Info
                </button>
              </div>

              <div>
                <button className="animated-button bg-purple-400 hover:bg-purple-950 rounded-md w-24 h-10">
                  Dm
                </button>
              </div>
            </div>
            <div className="px-4 py-2">
              <ul className="flex-row flex gap-7">
                <button className="animated-button cursor-pointer hover:bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] bg-purple-950 rounded-full w-10 h-10 px-2">
                  <svg
                    className="w-6 h-6 text-gray-800 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
                <button className="animated-button cursor-pointer hover:bg-blue-600 bg-purple-950 rounded-full w-10 h-10 px-2">
                  <svg
                    className="w-6 h-6 text-gray-800 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
                <button className="animated-button cursor-pointer hover:bg-black bg-purple-950 rounded-full w-10 h-10 px-2">
                  <svg
                    class="w-6 h-6 text-gray-800 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
                  </svg>
                </button>
                <button className="animated-button cursor-pointer hover:bg-green-600 bg-purple-950 rounded-full w-10 h-10 px-2">
                  <svg
                    className="w-6 h-6 text-gray-800 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"
                      clip-rule="evenodd"
                    />
                    <path
                      fill="currentColor"
                      d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"
                    />
                  </svg>
                </button>
              </ul>
            </div>
            <img
              src={Image}
              className="h-auto max-w-lg transition-all duration-300 rounded-lg blur-sm hover:blur-none cursor-pointer"
            />
          </div>
        </section>
        <footer className="bg-purple-950">
          <div class="w-full mx-auto max-w-screen-xl p-4 flex flex-col items-center justify-between ">
            <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-200 text-gray-200 mt-0">
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">
                  About
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
            <span class="text-sm text-white text-center">
              © 2025{" "}
              <a href="" class="hover:underline">
                Zelovxx™
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
