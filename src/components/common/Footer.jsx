import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  const { footer } = useSelector((state) => state.main);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="bg-slate-200 w-full ">
      <div className="container mx-auto px-24 pt-10 flex flex-col ">
        <div className="flex justify-between">
          <div className="w-1/4 px-5 text-gray-700">
            <h5 className="font-bold pb-4 text-lg text-green-700 border-b-2 border-orange-400">
              {footer?.firstPartTitle}
            </h5>
            <ul className="mt-6 leading-7">
              {footer?.servicesLink &&
                JSON.parse(footer?.servicesLink).map((item) => (
                  <li>
                    <Link href={item.linkHref} passHref>
                      <a target="_blank" className="w-6 mx-2 hover:grayscale">
                        {item.linkName}
                      </a>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
          <div className="w-1/4 px-5 text-gray-700">
            <h5 className="font-bold pb-4 text-lg text-green-700 border-b-2 border-orange-400">
              {footer?.secondPartTitle}
            </h5>
            <ul className="mt-6 leading-7">
              {footer?.link &&
                JSON.parse(footer?.link).map((item) => (
                  <li>
                    <Link href={item.href} passHref>
                      <a target="_blank" className="w-6 mx-2 hover:grayscale">
                        {item.name}
                      </a>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
          <div className="w-2/4 px-5 text-gray-700">
            <h5 className="font-bold pb-4 text-lg text-green-700 border-b-2 border-orange-400">
              {footer?.thirdPartTitle}
            </h5>
            <p className="mt-6 leading-7">{footer?.body}</p>
          </div>
        </div>
        <div className="bg-blue-800 w-full px-10 py-8 mt-8 rounded-full flex justify-between">
          <div className="flex-1 text-slate-200">
            <h6 className="font-bold text-2xl my-5">نیاز به راهنمایی دارید؟</h6>
            <p>
              برای مشاوره تخصصی و رایگان در مورد خرید بیمه نامه با کارشناسان ما
              تماس بگیرید.
            </p>
          </div>
          <div className="flex-1 bg-yellow-300 rounded-l-full w-full px-10 p-8 flex justify-between">
            <div className="flex flex-col text-slate-700">
              <h6 className="font-bold">شماره تماس:</h6>
              <span>{footer?.tel}</span>
            </div>
            <div className="flex flex-col text-slate-700">
              <h6 className="font-bold">ایمیل:</h6>
              <span>{footer?.email}</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-10">
          <div className="mt-4 flex bg-gray-300 p-4 rounded-t-3xl">
            <h6>مارا در شبکه های اجتماعی دنبال کنید :</h6>
            {footer?.instagram && (
              <Link href={footer?.instagram} passHref>
                <a target="_blank" className="w-6 mx-2 hover:grayscale">
                  <img
                    className="w-full"
                    src="/assets/static/images/social-media/instagram_icon.png"
                    alt="instagram"
                  />
                </a>
              </Link>
            )}
            {footer?.facebook && (
              <Link href={footer?.facebook} passHref>
                <a target="_blank" className="w-6 mx-2 hover:grayscale">
                  <img
                    className="w-full"
                    src="/assets/static/images/social-media/facebook_icon.png"
                    alt="facebook"
                  />
                </a>
              </Link>
            )}
            {footer?.whatsapp && (
              <Link href={footer?.whatsapp} passHref>
                <a target="_blank" className="w-6 mx-2 hover:grayscale">
                  <img
                    className="w-full"
                    src="/assets/static/images/social-media/whatsapp_icon.png"
                    alt="whatsapp"
                  />
                </a>
              </Link>
            )}
            {footer?.telegram && (
              <Link href={footer?.telegram} passHref>
                <a target="_blank" className="w-6 mx-2 hover:grayscale">
                  <img
                    className="w-full"
                    src="/assets/static/images/social-media/telegram_icon.png"
                    alt="telegram"
                  />
                </a>
              </Link>
            )}
            {footer?.youtube && (
              <Link href={footer?.youtube} passHref>
                <a target="_blank" className="w-6 mx-2 hover:grayscale">
                  <img
                    className="w-full"
                    src="/assets/static/images/social-media/youtube_icon.png"
                    alt="youtube"
                  />
                </a>
              </Link>
            )}
          </div>
          <div className="flex justify-end relative mt-20 ">
            {isVisible && (
              <span
                className="p-4 rounded-t-full bg-blue-900  bottom-0 flex justify-center items-start fixed "
                onClick={scrollToTop}
              >
                <span className="cursor-pointer mdi mdi-chevron-up-circle text-white mdi-36px" />
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
