import { useState } from "react";

import "./App.css";

// import img-girl from ./

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="container">
        <header className="flex  items-center justify-around gap-[476px]">
          <div className="flex items-center cursor-pointer">
            <img src="/image 48.svg" alt="Logo" />
            <h1 className="text-xl">
              <strong className="text-purple-700">Talk</strong> Business
            </h1>
          </div>
          <nav className="flex items-center justify-between gap-[30px]">
            <ul className="flex items-center justify-between gap-[50px] text-lg ">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">Services</li>
              <li className="cursor-pointer">Systems</li>
            </ul>
            <button className="w-40 h-16 ease-in duration-300   text-purple-700    text-lg border-solid border-2 border-purple-600 rounded-full">
              Contact us
            </button>
          </nav>
        </header>
        <div className="pt-36">
          <h2 className=" text-6xl font-bold">
            Become a better <br /> business with us.
          </h2>
          <p className="pt-4 w-full text-center  text-2xl font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
            Nullam turpis tortor, ultricies ut justo eu.
          </p>
          <button className="w-72 h-16 ease-in mt-8 duration-300 text-xl rounded-full   text-white bg-purple-700   font-semibold border-solid border-2 border-purple-600">
            Our Business
          </button>
        </div>
      </div>
      <main>
        <img
          style={{
            width: "1440px",
            height: "620px",
            marginBottom: "190px",
            marginTop: "130px",
          }}
          src="/img-girl.png"
          alt="Girl"
        />
      </main>
      <section>
        <div className="container">
          <h3 className="font-bold text-5xl pb-48">
            Here is what’s happening in <br /> the world of talk business.
          </h3>
          <div>
            <div className="flex justify-center items-center gap-28">
              <div>
                <strong className="text-purple-700">MAY 2021</strong>
                <p className="text-lg font-bold pt-6">
                  Agile focused <br /> business services <br /> and more.
                </p>
              </div>
              <img src="/MAN.png" alt="MAN" />
            </div>
            <div className="flex justify-center items-center gap-28 mt-16">
              <div>
                <strong className="text-purple-700">JUN 2021</strong>
                <p className="text-lg font-bold pt-6">
                  Agile focused <br /> business services <br /> and more.
                </p>
              </div>
              <img src="/COFEE.png" alt="COFFE" />
            </div>
            <div className="flex justify-center items-center gap-28 mt-16 mb-28">
              <div>
                <strong className="text-purple-700">JUL 2021</strong>
                <p className="text-lg font-bold pt-6">
                  Agile focused <br /> business services <br /> and more.
                </p>
              </div>
              <img src="/WATCH.png" alt="WATCH" />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-violet-950">
        <div className="container">
          <h2 className="text-white text-6xl font-semibold">
            Let’s start working to build a brighter future.
          </h2>
          <button className="w-60 h-16 ease-in mt-8 duration-300 text-xl ml-96 text-white    font-semibold border-solid border-2 border-white">
            Join our mailing list
          </button>
        </div>

        <p className="pl-16 text-base font-semibold text-white pb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
          Elementum posuere eget elementum <br /> vulputate elementum viverra
          sapien tellus aenean.
        </p>
        <div className="pl-16 pb-36 flex gap-8 items-center text-white text-lg ">
          <p>Fb</p>
          <p>In</p>
          <p>Tw</p>
          <p>Ln</p>
        </div>
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-between cursor-pointer">
              <img src="/image 50.svg" alt="Lpgo footer" />
              <strong className="text-white text-xl">New Business</strong>
            </div>
            <p className="text-slate-300">
              Copyright 2021. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
