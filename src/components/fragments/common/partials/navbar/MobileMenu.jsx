import { useSelector } from "react-redux";
import { isEmpty } from "loadsh";
import Link from "next/link";
const MobileMenu = () => {
  const { categories: data } = useSelector((state) => state.main);

  return (
    <ul className=" mt-4">
      {!isEmpty(data) &&
        data.map((item) =>
          item.show_In_Menu ? (
            <li key={item.id}>
              <Link href={`/${item.category_slug}`}>
                <a className="py-2 px-4 rounded-lg bg-white mt-1 block hover:bg-slate-100 text-blue-600 hover:text-blue-700 shadow-md">
                  {item.category_name}
                </a>
              </Link>
            </li>
          ) : null
        )}
    </ul>
  );
};

export default MobileMenu;
