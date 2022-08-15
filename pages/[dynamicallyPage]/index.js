import Head from "next/head";
import Link from "next/link";

import { useState } from "react";
import { isEmpty } from "loadsh";

import { dynamicallyCatURL } from "../../src/services/mainService";

import { PostCard, Alert } from "../../src/components";

export default function index({ data }) {
  const [search, setSearch] = useState("");
  const filteredPost = data.pages.filter((page) =>
    page.page_title.includes(search)
  );

  return (
    <div className="container px-24 mx-auto">
      <Head>
        <title>
          {data.category.category_name} | بیمه کارآفرین نمایندگی بابازاده
        </title>
      </Head>
      <div
        className={`bg-slate-100 w-full p-8 my-8 rounded-md border border-slate-200 flex justify-between items-center ${
          isEmpty(filteredPost) && "hidden"
        }`}
      >
        <h1 className="font-bold text-xl">{data.category.category_name} </h1>
        <div className="flex items-center">
          <input
            className="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
            placeholder="جستجو..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-4 my-8">
        {!isEmpty(filteredPost) ? (
          filteredPost.map((news) => (
            <PostCard page={news} key={news.id} uri={data.uri} />
          ))
        ) : !isEmpty(data.category.get_category) ? (
          <div className="col-span-12 ">
            <div className="grid xl:grid-cols-8 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-4">
              {data.category.get_category?.map((item) => (
                <Link href={`/${item.category_slug}`}>
                  <a className="flex flex-col justify-center items-center grayscale-0 hover:grayscale transition-all duration-300">
                    <span className="my-4">
                      {isEmpty(item.category_image_url) ? (
                        <span
                          className="category-item-box bg-lime-600"
                          cat-data={item.category_name}
                        />
                      ) : (
                        <img
                          src={data.uri + item.category_image_url}
                          alt={item.category_name}
                        />
                      )}
                    </span>
                    <span className="text-sm text-gray-500 font-normals">
                      {item.category_name}
                    </span>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <Alert title="محتوایی یافت نشد :(" />
        )}
      </div>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  let slug = ctx.query.dynamicallyPage;
  const response = await dynamicallyCatURL(slug);
  const data = await response.data.data;

  return {
    props: { data },
  };
}
