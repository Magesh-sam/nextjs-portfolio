import Image from "next/image";
import Link from "next/link";
import React from "react";

function SocialIcons() {
  return (
    <div className="social-icons fixed bottom-0 left-5 flex flex-col items-center gap-y-5">
      <Link
        href="mailto:mageshkannanam@gmail.com"
        className="transition-all hover:-translate-y-1  "
        title="mail"
        target="_blank"
      >
        <Image
          src={"/social-icons/gmail.svg"}
          width={20}
          height={20}
          alt="mail"
        />
      </Link>

      <Link
        className="transition-all hover:-translate-y-1  "
        href="https://github.com/Magesh-sam"
        title="github"
        target="_blank"
      >
        <Image
          src={"/social-icons/github.svg"}
          width={20}
          height={20}
          alt="twitter"
        />
      </Link>
      <Link
        className="transition-all hover:-translate-y-1  "
        href="https://www.linkedin.com/in/mageshkannan-annathurai/"
        title="linkedin"
        target="_blank"
      >
        <Image
          src={"/social-icons/linkedin.svg"}
          width={20}
          height={20}
          alt="twitter"
        />
      </Link>
      <Link
        className="transition-all hover:-translate-y-1  "
        href="https://twitter.com/Mageshkannan_A"
        title="twitter"
        target="_blank"
      >
        <Image
          src={"/social-icons/twitter.svg"}
          width={20}
          height={20}
          alt="twitter"
        />
      </Link>
      <Link
        className="transition-all hover:-translate-y-1  "
        href="https://www.instagram.com/m_a_g_e_s_h_sam/"
        title="instagram"
        target="_blank"
      >
        <Image
          src="/social-icons/insta.svg"
          width={20}
          height={20}
          alt="instagram"
        />
      </Link>

      <div className=" h-[75px] w-[1px] border border-white" />
    </div>
  );
}

export default SocialIcons;
