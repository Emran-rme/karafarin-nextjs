import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCategories } from "../../redux/actions/main";
import { Footer, Nav, TopBanner } from "../";

export default function MainLayout({ children }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCategories());
  }, []);
  return (
    <>
      <TopBanner />
      <Nav />
      {children}
      <Footer />
    </>
  );
}
