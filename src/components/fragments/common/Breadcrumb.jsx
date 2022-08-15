export default function Breadcrumb() {
  return (
    <div className="bg-gray-300">
      <div className="container px-24 mr-auto flex flex-col justify-center py-10">
        <h1 className="font-bold text-3xl text-gray-700">فروشگاه </h1>
        <div className="flex mt-4 text-gray-500 items-center">
          <span>صفحه اصلی</span>
          <span className="mdi mdi-chevron-left mdi-24px" />
          <span>فروشگاه</span>
        </div>
      </div>
    </div>
  );
}
