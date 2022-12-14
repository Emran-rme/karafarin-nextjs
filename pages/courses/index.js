import Head from "next/head";
import { CourseCard, Breadcrumb } from "../../src/components/";

export default function Shop() {
  return (
    <div className="w-full">
      <Head>
        <title>فروشگاه | بیمه کارآفرین نمایندگی بابازاده</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Breadcrumb />

      <div className="container px-24 mx-auto">
        <div className="bg-slate-100 w-full p-8 my-8 rounded-md border border-slate-200 flex justify-between items-center">
          <div className="inline-block relative w-64">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
            <select className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
              <option>رایگان</option>
              <option>ارزانترین</option>
              <option>گران ترین</option>
            </select>
          </div>
          <div className="flex items-center ">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              placeholder="جستجو..."
            />
          </div>
        </div>
        <div className="grid  md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 my-8">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </div>
    </div>
  );
}
