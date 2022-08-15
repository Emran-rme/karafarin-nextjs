import { Logo, Menu, Auth, ShopMenu } from "../../";

export default function Nav() {
  return (
    <>
      <div className="bg-white sticky top-0 z-50 shadow-xl">
        <div className="container mx-auto px-24">
          <div className="sm:flex justify-between hidden">
            <Logo />
            <Menu />
            <ShopMenu />
            <Auth />
          </div>
        </div>
      </div>
    </>
  );
}
