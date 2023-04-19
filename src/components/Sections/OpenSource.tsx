import Image from "next/image";
import { Github } from "../Icons";
import userImage from "../../images/37072694.png";
import userImage1 from "../../images/download.png";
import userImage2 from "../../images/download (1).png";
import userImage3 from "../../images/download (2).png";
import userImage4 from "../../images/download (3).png";
import userImage5 from "../../images/download (4).png";
import userImage6 from "../../images/download (5).png";
import userImage7 from "../../images/download (6).png";
import userImage8 from "../../images/download (7).png";
import userImage9 from "../../images/download (8).png";
import userImage10 from "../../images/download (9).png";
import userImage11 from "../../images/download (10).png";
import userImage12 from "../../images/download (11).png";
import userImage13 from "../../images/download (12).png";
import Link from "next/link";

const OpenSource = () => {
  return (
    <section className="bg-[#1d1d1d]">
      <div className="w-full max-w-[1360px] mx-auto px-5 py-24 flex flex-col gap-y-12 text-[#ededed] relative">
        <div className="flex items-center gap-x-6">
          <div className="mt-1">
            <Github width={54} height={54} />
          </div>
          <h2 className="text-5xl font-bold">Open Source</h2>
        </div>

        <p className="text-3xl">
          CodeImage is an open source project, which is available entirely on
          Github.
        </p>

        <div className="flex gap-x-1.5 flex-wrap gap-y-4">
          <Image
            className="rounded-full"
            src={userImage}
            alt=""
            width={56}
            height={56}
          />
          <Image
            className="rounded-full"
            src={userImage1}
            alt=""
            width={56}
            height={56}
          />
          <Image
            className="rounded-full"
            src={userImage2}
            alt=""
            width={56}
            height={56}
          />
          <Image
            className="rounded-full"
            src={userImage3}
            alt=""
            width={56}
            height={56}
          />
          <Image
            className="rounded-full"
            src={userImage4}
            alt=""
            width={56}
            height={56}
          />
          <Image
            className="rounded-full"
            src={userImage5}
            alt=""
            width={56}
            height={56}
          />
          <Image
            className="rounded-full"
            src={userImage6}
            alt=""
            width={56}
            height={56}
          />
          <Image
            className="rounded-full"
            src={userImage7}
            alt=""
            width={56}
            height={56}
          />
          <Image
            className="rounded-full"
            src={userImage8}
            alt=""
            width={56}
            height={56}
          />
          <Image
            className="rounded-full"
            src={userImage9}
            alt=""
            width={56}
            height={56}
          />
          <Image
            className="rounded-full"
            src={userImage10}
            alt=""
            width={56}
            height={56}
          />
          <Image
            className="rounded-full"
            src={userImage11}
            alt=""
            width={56}
            height={56}
          />
          <Image
            className="rounded-full"
            src={userImage12}
            alt=""
            width={56}
            height={56}
          />
          <Image
            className="rounded-full"
            src={userImage13}
            alt=""
            width={56}
            height={56}
          />
        </div>

        <p className="text-3xl">
          Contributors can help fix bugs and implement new features in
          CodeImage.
        </p>
        <Link
          className="text-3xl"
          href="https://github.com/riccardoperra/codeimage"
        >
          Become a contributor →
        </Link>
      </div>
    </section>
  );
};

export default OpenSource;
