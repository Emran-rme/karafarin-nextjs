import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { setCategories } from "../../redux/actions/main";
import Logo from "./partials/navbar/Logo";
import Menu from "./partials/navbar/Menu";
import Auth from "./partials/navbar/Auth";
import ShopMenu from "./partials/navbar/ShopMenu";

export default function Nav() {
  const data = useSelector((state) => state.main);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCategories());
  }, []);
  return (
    <>
      <div className="bg-white sticky top-0 z-50 shadow-xl">
        <div className="container mx-auto px-24">
          <div className="flex justify-between ">
            <Logo />
            <Menu data={data.categories} />
            {/* <ShopMenu/> */}
            <Auth />
          </div>
        </div>
      </div>
    </>
  );
}
