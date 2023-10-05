import Head from "next/head";
import Sidebar from "../components/Sidebar";
import ReactModal from "react-modal";
import Steps from "../components/Steps";
import { ToastContainer } from "react-toastify";
import ModalProduct from "../components/ModalProduct";
import useQuiosco from "../hooks/useQuiosco";

import "react-toastify/dist/ReactToastify.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function Layout({ children, page = "default" }) {
  const { modal } = useQuiosco();
  return (
    <>
      <Head>
        <title>Cafe </title>
        <meta name="description" content="Quiosco Cafeteria" />
      </Head>

      <div className="md:flex">
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5">
          <Sidebar />
        </aside>
        <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
          <div className="p-10 mt-3">
            <Steps />
            {children}
          </div>
        </main>
      </div>

      {modal && (
        <ReactModal ariaHideApp={false} isOpen={modal} style={customStyles}>
          <ModalProduct />
        </ReactModal>
      )}

      <ToastContainer />
    </>
  );
}
