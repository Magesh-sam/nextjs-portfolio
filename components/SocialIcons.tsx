import Link from "next/link";
import React from "react";

const socialLinkData = [
  {
    name: "github",
    url: "https://github.com/Magesh-sam",
    children: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 20 20"
      >
        <title>{"github [#fafafa142]"}</title>
        <path
          fill="#fafafa"
          className="group-hover:fill-pink-500"
          fillRule="evenodd"
          d="M10 0c5.523 0 10 4.59 10 10.253 0 4.529-2.862 8.371-6.833 9.728-.507.101-.687-.219-.687-.492 0-.338.012-1.442.012-2.814 0-.956-.32-1.58-.679-1.898 2.227-.254 4.567-1.121 4.567-5.059 0-1.12-.388-2.034-1.03-2.752.104-.259.447-1.302-.098-2.714 0 0-.838-.275-2.747 1.051A9.396 9.396 0 0 0 10 4.958a9.375 9.375 0 0 0-2.503.345C5.586 3.977 4.746 4.252 4.746 4.252c-.543 1.412-.2 2.455-.097 2.714-.639.718-1.03 1.632-1.03 2.752 0 3.928 2.335 4.808 4.556 5.067-.286.256-.545.708-.635 1.371-.57.262-2.018.715-2.91-.852 0 0-.529-.985-1.533-1.057 0 0-.975-.013-.068.623 0 0 .655.315 1.11 1.5 0 0 .587 1.83 3.369 1.21.005.857.014 1.665.014 1.909 0 .271-.184.588-.683.493C2.865 18.627 0 14.783 0 10.253 0 4.59 4.478 0 10 0"
        />
      </svg>
    ),
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/mageshkannan-annathurai/",
    children: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        stroke="#fafafa"
        viewBox="0 0 24 24"
        className="group-hover:stroke-pink-500"
      >
        <path
          className="group-hover:fill-pink-500 "
          fill="#fafafa"
          fillRule="evenodd"
          d="M6 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4H6ZM4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Zm5 5a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0v-6Zm.5-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM12 10c.34 0 .64.17.82.428A3.51 3.51 0 0 1 14.5 10c2.16 0 3.5 1.926 3.5 3.571V17a1 1 0 1 1-2 0V13.57c0-.768-.66-1.571-1.5-1.571-.524 0-1.103.285-1.5.963V17a1 1 0 1 1-2 0V11a1 1 0 0 1 1-1Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "twitter/x",
    url: "https://twitter.com/Mageshkannan_A",
    children: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="#fafafa"
        stroke="#fafafa"
        className="group-hover:fill-pink-500 group-hover:stroke-pink-500"
        preserveAspectRatio="xMidYMid"
        viewBox="0 0 31.812 26"
      >
        <path d="M20.877 2c1.642 0 3.505.652 4.549 1.738a11.639 11.639 0 0 0 3.624-1.352 5.615 5.615 0 0 1-2.51 3.083 11.668 11.668 0 0 0 3.28-.879 11.493 11.493 0 0 1-2.849 2.887c.01.238.016.478.016.718C26.987 15.562 21.445 24 10.939 24c-3.224 0-6.432-.867-8.957-2.449.446.054.901.08 1.361.08 2.676 0 5.139-.891 7.096-2.389-2.502-.043-4.612-1.656-5.336-3.869.347.064.707.1 1.075.1.518 0 1.025-.067 1.503-.196C5.068 14.768 3.1 12.514 3.1 9.813V9.74c.771.418 1.65.67 2.587.7-1.533-1.003-2.54-2.706-2.54-4.641 0-1.022.281-1.981.772-2.801 2.816 3.369 7.026 5.59 11.774 5.824a5.407 5.407 0 0 1-.15-1.269c0-3.08 2.178-5.553 5.334-5.553m8.943 2.59h.005M20.877 0c-3.844 0-6.817 2.753-7.263 6.552-3.189-.647-6.09-2.348-8.174-4.841a1.982 1.982 0 0 0-3.224.255A7.472 7.472 0 0 0 1.625 8.4a2.006 2.006 0 0 0-.512 1.34v.073c0 1.959.769 3.776 2.047 5.139-.073.342-.057.703.055 1.046a7.54 7.54 0 0 0 2.284 3.398 9.884 9.884 0 0 1-3.277.169 1.988 1.988 0 0 0-2.114 1.321c-.31.884.032 1.867.824 2.363C3.764 25.023 7.318 26 10.939 26c6.839 0 11.086-3.157 13.444-5.805 2.86-3.211 4.524-7.477 4.589-11.74a13.45 13.45 0 0 0 2.438-2.663c.251-.334.4-.751.4-1.202 0-.681-.337-1.282-.852-1.644a2.01 2.01 0 0 0-.655-2.113 1.982 1.982 0 0 0-2.247-.179 9.529 9.529 0 0 1-2.125.908C24.555.592 22.688 0 20.877 0Z" />
      </svg>
    ),
  },
  {
    name: "gmail",
    url: "mailto:mageshkannanam@gmail.com",
    children: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        viewBox="0 0 192 192"
      >
        <path
          stroke="#fafafa"
          className="group-hover:stroke-pink-500"
          strokeLinejoin="round"
          strokeWidth={12}
          d="M22 57.265V142c0 5.523 4.477 10 10 10h24V95.056l40 30.278 40-30.278V152h24c5.523 0 10-4.477 10-10V57.265c0-13.233-15.15-20.746-25.684-12.736L96 81.265 47.684 44.53C37.15 36.519 22 44.032 22 57.265Z"
        />
      </svg>
    ),
  },
];

function SocialIcons() {
  return (
    <div className="  flex   items-center gap-x-3 ">
      {socialLinkData.map(({ name, url, children }) => (
        <Link
          target="_blank"
          key={name}
          href={url}
          aria-label={name}
          title={name}
          className="group block p-2 transition duration-300 ease-in-out hover:-translate-y-1 "
        >
          {children}
        </Link>
      ))}
    </div>
  );
}

export default SocialIcons;