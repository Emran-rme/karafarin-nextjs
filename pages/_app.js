import { Provider } from "react-redux";

import MainLayout from "../src/components/layout/MainLayout";
import "../styles/globals.css";
import { store } from "../src/redux/store/index";
import NextNProgress from "nextjs-progressbar";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <MainLayout>
        <NextNProgress height={5} />
        <ToastContainer />
        <Component {...pageProps} />
      </MainLayout>
    </Provider>
  );
}

export default MyApp;
