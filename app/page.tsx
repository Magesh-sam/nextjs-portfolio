import Image from "next/image";
import Link from "next/link";
import github from '@/public/github.svg'
import linkedin from '@/public/linkedin.svg'
import mail from '@/public/mail.svg'
export default function Home() {
  return (
    <main className="flex flex-col justify-center ml-[4%] gap-[50px] pt-[10%]   ">
      <h1 className="text-bold text-6xl xl:text-7xl lg:text-8xl">Hello, <span className="wave">👋</span></h1>
      <h2 className="text-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        {"I'm Mageshkannan"}
      </h2>
      <p className="text-[var(--secondary-text)] text-3xl lg:text-4xl xl:text-5xl lg:6xl leading-[40px] sm:leading-[43px] md:leading-[45px] lg:leading-[50px] xl:leading-[60px] 2xl:leading-[70px] w-[90%] xl:w-[80%]">
        A Frontend Developer with an Innovative Mind that creates Creative,
        Engaging, and Entertaining Frontend for Websites and Web Applications!
      </p>
      <section className="flex gap-[50px] items-center" aria-label="Social Icons Section">
        <Link aria-label="github link" href="https://github.com/Magesh-sam">
          <Image src={github} alt="github icon" width={50} height={50} />
        </Link>
        <Link aria-label="linkedin link" href='https://www.linkedin.com/in/mageshkannan-annathurai/'>
          <Image src={linkedin} alt="linkedin icon" width={50} height={50} />
        </Link>
        <Link aria-label='email' href='mailto:mageshkannanam@gmail.com' >
          <Image src={mail} alt="mail icon" width={50} height={50}  />
        </Link>
      </section>
    </main>
  );
}
