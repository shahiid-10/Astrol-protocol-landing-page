import Logo from "../assets/logo.svg";
import Docs from "../assets/doc-icon.svg";
import Twitter from "../assets/twitter-icon.svg";
import Discord from "../assets/discord-icon.svg";
import CTA_Rocket from "../assets/rocket-icon.svg";
import Footer from "../assets/footer-image.svg";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-bg-stars bg-transparent static z-[1] ">
      {/* Navbar  */}
      <nav className="py-8 px-[1rem] md:px-20 flex justify-between items-center">
        <div className="flex justify-center items-center gap-2 ">
          <img
            src={Logo}
            alt="astrol logo"
            width={38}
            height={35}
            className="aspect-[0.93]"
          />
          <span className="text-white text-[25px] font-semibold font-custom">
            Astrol Protocol
          </span>
        </div>

        <div onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          {menuOpen ? (
            <IoClose color="#fff" size={30} />
          ) : (
            <IoMenu color="#fff" size={30} />
          )}
        </div>

        <div
          className={
            menuOpen
              ? "fixed top-20 border-2 ease-linear border-white shadow-lg bg-transparent shadow-white p-3 rounded-lg right-10"
              : "hidden md:border-none md:shadow-none md:flex md:items-center md:gap-[20px] md:static"
          }
        >
          <a href="https://doc.astrol.io/" target="_blank" onClick={() => setMenuOpen(!menuOpen)}>
            <img
              src={Docs}
              alt="astrol protocol docs"
              height={30}
              width={30}
              className="cursor-pointer mt-1 md:mt-0"
            />
          </a>
          <a href="https://x.com/AstrolFinance" target="_blank" onClick={() => setMenuOpen(!menuOpen)}>
            <img
              src={Twitter}
              alt="astrol protocol twitter"
              height={30}
              width={30}
              className="cursor-pointer mt-2 md:mt-0"
            />
          </a>
          <a href="https://astrol.io/discord" target="_blank" onClick={() => setMenuOpen(!menuOpen)}>
            <img
              src={Discord}
              alt="astrol protocol discord"
              height={30}
              width={30}
              className="cursor-pointer mt-2 md:mt-0"
            />
          </a>
        </div>
      </nav>

      {/* Hero */}
      <div className="text-white font-custom flex flex-col justify-center  items-center mt-[20vh] md:mt-[8.8vh] px-4 md:px-2 text-center">
        <h1 className="text-[2.2rem]  md:text-[3.8rem]  text-center">
          First Native Lending Protocol On{" "}
          <span className="text-[#A5FFA3]">Eclipse</span>
        </h1>
        <h2 className="my-2 text-[1.7rem]">(Launching soon!)</h2>
        <button className="bg-[#A5FFa3] w-fit text-black font-bold flex items-center gap-[6px] rounded-[45px] text-[1.2rem] font-medium px-[28px] py-[22px]">
          <img src={CTA_Rocket} alt="" height={24} width={24} />
          Join Us Early
        </button>
      </div>

      {/* Footer  */}
      <div className="w-full fixed bottom-0 z-10">
        <img src={Footer} alt="footer img" className="w-screen" />
      </div>
    </div>
  );
}
