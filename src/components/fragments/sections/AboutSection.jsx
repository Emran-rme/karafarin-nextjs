export default function AboutSection({ data, uri }) {
  return (
    <section className="container mx-auto px-28 mt-10 grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-4 justify-between">
      <div className="flex-1">
        <h3 className="text-lg font-bold py-4 text-blue-700 ">
          با امکان مدیریت این بخش
        </h3>
        <div className="text-justify mt-4 text-base leading-10 text-slate-500 ">
          {data.get_content.description}
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={uri + data.get_content.image}
          width={500}
          height={500}
          className="w-4/5"
        />
      </div>
    </section>
  );
}
