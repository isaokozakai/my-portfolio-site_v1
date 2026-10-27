import type { MouseEvent } from 'react';

type NavLinkProps = {
  url: string;
  text: string;
  handleClick: (event: MouseEvent<HTMLAnchorElement>) => void;
};

const NavLink = ({ url, text, handleClick }: NavLinkProps) => {
  return (
    <a
      href={url}
      onClick={handleClick}
      className="block border-t border-[#777] text-center text-[20px] leading-8.75 font-bold text-white transition-colors duration-300 hover:text-[#ffa500] md:inline-block md:border-0 md:px-6 md:text-base md:leading-normal md:last:max-lg:pr-0"
    >
      {text}
    </a>
  );
};

export default NavLink;
