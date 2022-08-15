import Image from "next/image";
import Link from "next/link";
const Logo = () => {
  return (
    <div className="w-1/5 flex items-center cursor-pointer py-2 ">
      <Link href="/">
        <a className="w-4/5">
          <Image
            src="/assets/static/images/logo-h.png"
            width={204}
            height={75}
          />
        </a>
      </Link>
    </div>
  );
};

export default Logo;
