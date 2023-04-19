import { Github } from "./Icons";
import Logo from "./Logo";

const Nav = () => {
  return (
    <nav className="bg-[rgba(0_0_0/.01)] h-[56px] flex flex-col justify-center items-center backdrop-blur-[20px] backdrop-saturate-[180%] sticky inset-0 z-50 border-b-[#252525] border-b-[.5px]">
      <div className="w-full max-w-[1360px] flex justify-between items-center mx-auto px-5">
        <Logo />
        <div className="flex items-center gap-x-3 text-white">
          <button className="bg-[#111] relative flex items-center gap-x-2 border-[#252525] h-fit border-[.5px] rounded-lg py-1.5 px-3 text-sm font-semibold">
            <Github className="w-5" />
            <span>Login</span>
          </button>
          <button className="bg-[lch(45%_70_270)] rounded-md py-1.5 px-3 h-fit text-sm hidden md:block">Getting started</button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
