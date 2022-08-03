export default function Alert({ title, color = "red" }) {
  return (
    <div
      className={`bg-${color}-100 border-r-4 col-span-4 mt-12 rounded-md border-${color}-500 text-${color}-700 p-6`}
      role="alert"
    >
      <h2 className="font-bold ml-2">{title}</h2>
    </div>
  );
}
