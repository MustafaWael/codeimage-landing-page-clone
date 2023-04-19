import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#111111]">
      <div className="w-full max-w-[1360px] mx-auto px-5 py-6 md:mt-20 flex flex-col xl:flex-row text-[#ededed] gap-y-4">
        <div className="flex flex-col md:flex-row">
          <span>© 2022 Riccardo Perra.</span>
          <span>Made with SolidJS ❤️</span>
        </div>

        <div className="flex gap-x-12 text-sm">
          <Link href="https://github.com/riccardoperra/codeimage">Github</Link>
          <Link href="https://github.com/riccardoperra/codeimage/issues">
            Issues & Feedback
          </Link>
          <Link href="https://github.com/riccardoperra/codeimage/releases">
            Releases
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
