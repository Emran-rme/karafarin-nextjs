import Footer from "../common/Footer";
import Nav from "../common/Nav";
import TopBanner from "../common/TopBanner";

export default function MainLayout({ children }) {
  return (
    <div dir="rtl">
      <TopBanner />
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
