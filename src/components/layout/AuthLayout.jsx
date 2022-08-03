import Link from "next/link";

import loginStyles from "../../../styles/Login.module.css";
export default function Auth({ children }) {
  return (
    <>
      <div className={`bg-white ${loginStyles.leftDesign}`}></div>
      <div className="absolute w-full flex items-center h-full">
        <div className="container px-24 mx-auto ">
          <div className="w-full p-10 shadow-[0_0_30px_1px_rgba(0,0,0,0.3)] flex justify-between rounded-2xl">
            {children}
            <div className="w-full flex justify-center items-center">
              <Link href="/">
                <img
                  src="/assets/static/images/logo.png"
                  alt="بیمه کارآفرین نمایندگی بابازاده"
                  className="cursor-pointer"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
