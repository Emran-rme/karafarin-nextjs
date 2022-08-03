import Head from "next/head";
import Link from "next/link";
import Auth from "../../src/components/layout/AuthLayout";

export default function Login() {
  return (
    <div className="w-full bg-blue-900 h-screen relative">
      <Head>
        <title>ورود | بیمه کارآفرین نمیاندگی بابازاده</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Auth>
        <form className="w-full max-w-sm">
          <div className="flex items-center border-b border-teal-500 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-100 mr-3 py-1 px-2 leading-tight focus:outline-none "
              type="text"
              placeholder="نام کاربری"
              aria-label="User name"
            />
          </div>
          <div className="flex items-center border-b border-teal-500 py-2 my-8">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-100 mr-3 py-1 px-2 leading-tight focus:outline-none "
              type="password"
              placeholder="گذرواژه"
              aria-label="password"
            />
          </div>
          <div className="flex justify-between">
            <Link href="/">
              <span className="text-gray-100 hover:text-gray-300 cursor-pointer">
                رمز عبور خود را فراموش کرده اید؟
              </span>
            </Link>
            <button
              className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="button"
            >
              <span className="mdi mdi-account-lock mx-1"></span>
              <span>ورود</span>
            </button>
          </div>
          <div
            className="bg-orange-100 border-r-4 mt-12 rounded-md border-orange-500 text-orange-700 p-4"
            role="alert"
          >
            <span className="font-bold ml-2">کاربر جدید هستید ؟</span>
            <Link href="/auth/register">ثبت نام در سایت</Link>
          </div>
        </form>
      </Auth>
    </div>
  );
}
