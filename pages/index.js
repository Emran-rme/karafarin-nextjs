import Head from "next/head";

import SlidersSection from "../src/components/fragments/sections/SlidersSection";
import Index from "../src/components/fragments/dynamicComponent";

import styles from "../styles/Home.module.css";
import { initMain } from "../src/services/mainService";

export default function Home({ data }) {
  const { sliders, sections,  uri } = data.data;

  
  
  return (
    <div className="continer">
      <Head>
        <title>بیمه کارآفرین نمایندگی بابازاده</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <SlidersSection sliders={sliders} uri={uri}/>
        {sections.map(section => 
          <Index
            key={section.id}
            styles={styles}
            type={section.type}
            data={section}
            uri={uri}
          />
        )}
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const response = await initMain();
  const data = await response.data;

  return {
    props: { data },
    revalidate: 10,
  };
}