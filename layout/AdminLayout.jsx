import Head from "next/head";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AdminLayout({ children, page }) {
  return (
    <>
      <Head>
        <title>Café</title>
        <meta name="description" content="Quiosco Cafetería" />
      </Head>

      <div className="md:flex">
            <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5 py-5">
                <Image
                    priority
                    width={300}
                    height={300}
                    src="/assets/img/logo.svg"
                    alt="imagen logotipo"
                    className="mx-auto"
                    style={{width:300,height:300}}
                />
            </aside>

            <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
                <div className="p-10">
                    {children}
                </div>
            </main>
      </div>
      <ToastContainer />
    </>
  );
}