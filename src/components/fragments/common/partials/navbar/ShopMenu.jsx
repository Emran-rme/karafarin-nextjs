import Link from "next/link";

const ShopMeneu = () => {
  return (
    <div className="w-1/3 flex items-center px-2">
      <Link href="/courses">
        <a className="border rounded-xl text-center text-blue-800 text-sm border-blue-700 w-full py-1 px-4 cursor-pointer hover:bg-slate-100 ">
          <span className="mdi mdi-basket-outline ml-3" />
          <span>فروشگاه</span>
        </a>
      </Link>
      <a className="relative -right-4 border border-r-0 hover:border hover:rounded-xl rounded-l-xl text-sm text-center text-blue-800 border-blue-700 w-full py-1 px-4 cursor-pointer hover:bg-slate-100 ">
        <span className="mdi mdi-shopping ml-3" />
        <span>سبد خرید</span>
      </a>
    </div>
  );
};

export default ShopMeneu;
