import Link from "next/link";

import { isEmpty } from "loadsh";
import config from "../../../../services/config.json";
const Menu = ({ data }) => {
  return (
    <div className="w-2/3 flex items-center justify-start px-5">
      <ul className="nav">
        {!isEmpty(data) &&
          data.map((item) =>
            item.show_In_Menu ? (
              <li
                className={`bg-slate-50 rounded mx-1 ${
                  item.drop_Down_Menu && "dropdown-top-menu"
                }`}
                key={item.id}
              >
                <Link href={`/${item.category_slug}`}>
                  <a>{item.category_name}</a>
                </Link>
                {item.drop_Down_Menu ? (
                  <div className="dropdown-content">
                    <ul className="-intro-y bg-white border-t-4 border-blue-600 rounded flex ">
                      {item.get_category?.map((childCategory) => (
                        <li key={childCategory.id}>
                          <Link href={`/${childCategory.category_slug}`}>
                            <a>
                              <img
                                src={
                                  config.karafarinBase +
                                  childCategory.category_image_url
                                }
                                alt={childCategory.category_name}
                              />
                              <span>{childCategory.category_name}</span>
                            </a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </li>
            ) : null
          )}
      </ul>
    </div>
  );
};

export default Menu;
