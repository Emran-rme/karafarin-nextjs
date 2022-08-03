import { toast } from "react-toastify";

export const successMessage = (message, colored = null) => {
  toast.success(message, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: colored,
    progress: undefined,
  });
};

export const errorMessage = (message, colored = null) => {
  toast.error(message, {
    icon: () => (
      <div className="Toastify__toast-icon Toastify--animate-icon Toastify__zoom-enter">
        <svg
          viewBox="0 0 24 24"
          width="100%"
          height="100%"
          fill={colored ? "#fff" : "var(--toastify-icon-color-error)"}
        >
          <path d="M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z" />
        </svg>
      </div>
    ),
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: colored,
    progress: undefined,
  });
};

export const translateEnglishNumberToPersian = (number) => {
  if (number !== undefined) {
    number = number.toString();
    const find = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const replace = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    for (let i = 0; i < find.length; i++) {
      number = number.replace(new RegExp(find[i], "g"), replace[i]);
    }
    return number;
  }
};
