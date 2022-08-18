import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import { Logo, Menu, Auth, ShopMenu, MobileMenu } from "../../";

export default function Nav() {
  const router = useRouter();
  const [active, setActive] = useState(false);
  useEffect(() => {
    setActive(false);
  }, [router.asPath]);

  return (
    <>
      <div className="bg-white sticky top-0 z-50 shadow-xl">
        <div className="container mx-auto sm:px-24 px-8 ">
          <div className="md:hidden grid grid-cols-2 gap-2 items-center">
            <Logo />
            <div className="flex justify-end">
              <span
                className={`mdi ${
                  active ? "mdi-close" : "mdi-menu"
                } mdi-36px cursor-pointer`}
                onClick={() => setActive((prevState) => !prevState)}
              />
            </div>
          </div>
          <div className="md:flex justify-between hidden">
            <Logo />
            <Menu />
            {/* <ShopMenu /> */}
            {/* <Auth /> */}
          </div>
        </div>
        <div className="relative ">
          <div className={`mobile-menu ${active ? "show" : "hide"} `}>
            <MobileMenu />
          </div>
        </div>
      </div>
    </>
  );
}
