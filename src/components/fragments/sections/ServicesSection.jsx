import Link from "next/link";

export default function ServicesSection({ data, styles, uri }) {
  return (
    <section className="container mx-auto sm:px-24  my-14">
      <div className="flex flex-col rounded-r-3xl rounded-l-full justify-between">
        <div className="w-full p-2">
          <div className="w-full h-full rounded-2xl transition-all duration-500 shadow-md max-h-60  shadow-blue-500 p-0 hover:rotate-1 cursor-pointer hover:bg-blue-200 text-slate-800 text-justify">
            <div
              className={`flex w-full h-full transition-all duration-500 rounded-2xl overflow-hidden hover:shadow-2xl bg-yellow-100 hover:-rotate-1 hover:scale-105 text-slate-800 text-justify ${styles.eserviceImage}`}
            >
              <div className=" p-5 bg-blue-100 shadow-xl rounded-l-full flex items-center ">
                <h3 className="font-bold text-gray-600">
                  {data.get_content?.title}
                </h3>
              </div>
              <span className="flex-1 py-8 px-4 text-gray-700 text-sm text-justify">
                {data.get_content?.description}
              </span>
            </div>
          </div>
        </div>
        <div className="flex-1 p-2 bg-gradient-to-t from-slate-50 rounded-b-2xl border-b">
          <div
            className={`w-full p-8 grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-4 ${styles.servicesMenu}`}
          >
            {data.get_content?.get_content_files?.map((item) => (
              <Link href={item.link} key={item.id} passHref>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="intro-x flex flex-col items-center"
                >
                  <div className={styles.rotate}>
                    <img src={uri + item.image_url} alt={item.name} />
                  </div>
                  <h4>{item.link_name}</h4>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
