export default function Modal({ children, title, closeModal, showModal }) {
  return (
    <div
      className={`overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full flex justify-center items-center bg-black bg-transparent bg-opacity-75 ${
        !showModal && "hidden"
      }`}
    >
      <div className="relative p-4 w-full max-w-2xl h-full md:h-auto intro-y">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex justify-between items-center p-2 rounded-t border-b dark:border-gray-600">
            <h4 className="text-base font-semibold text-gray-900 dark:text-white">
              {title}
            </h4>
            <span
              onClick={closeModal}
              className="mdi mdi-close text-white bg-red-600 px-1 py-0 cursor-pointer hover:bg-red-700"
            />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
