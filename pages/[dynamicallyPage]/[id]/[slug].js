import Head from "next/head";
import { useRouter } from "next/router";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { SinglePage } from "../../../src/components/";
import { setPages } from "../../../src/redux/actions/pages";
import {
  clearPageInfo,
  setPageInfo,
} from "../../../src/redux/actions/singlePAge";
import { dynamicallyPageURL } from "../../../src/services/mainService";
import { clearComment, initComment } from "../../../src/redux/actions/comments";
import { clearScore, initScore } from "../../../src/redux/actions/score";

export default function Slug({ data }) {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPages(router.query.dynamicallyPage, "5"));
    dispatch(setPageInfo(data.page));
    if (data.page.plugin_list?.split(",").includes("Comments")) {
      dispatch(initComment(router.query.id));
    }
    if (data.page.plugin_list?.split(",").includes("Score")) {
      dispatch(initScore(router.query.id));
    }
    return () => {
      dispatch(clearPageInfo());
      dispatch(clearScore());
      dispatch(clearComment());
    };
  }, [data.page]);

  return (
    <div className="container px-24 mx-auto">
      <Head>
        <title> {data.page.page_title} | بیمه کارآفرین نمایندگی بابازاده</title>
        <meta
          name="description"
          content={data.page?.page_body
            ?.replace(/(<([^>]+)>)/gi, "")
            .replace(/\&nbsp;/g, " ")
            .substring(0, data.page?.page_body.indexOf(".") - 1)}
        />
        <meta name="keywords" content={data.page?.keywords} />
      </Head>

      <SinglePage data={data} />
    </div>
  );
}

export async function getServerSideProps(ctx) {
  let catSlug = ctx.query.dynamicallyPage;
  let id = ctx.query.id;
  let pageSlug = ctx.query.slug;
  const response = await dynamicallyPageURL(catSlug, id, pageSlug);
  const data = await response.data.data;

  return {
    props: { data },
  };
}

// export async function getStaticProps(paths) {
//   const response = await showNews(paths.params.id, paths.params.slug);
//   const data = await response.data.page;

//   return {
//     props: { data },
//   };
// }

// export async function getStaticPaths() {
//   const response = await news();
//   const { pages } = await response.data;

//   const paths = pages.map((page) => ({
//     params: {
//       id: page.id.toString(),
//       slug: page.page_slug,
//     },
//   }));
//   return {
//     paths,
//     fallback: false,
//   };
// }
