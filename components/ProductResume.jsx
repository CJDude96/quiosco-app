import Image from "next/image";
import { moneyFormat } from "../helpers";
import useQuiosco from "../hooks/useQuiosco";

const ProductResume = ({ product }) => {
  const { handleEditOrder, handleDeleteOrder } = useQuiosco();

  return (
    <div
      className="shadow p-5 mb-5 flex gap-10 
    items-center justify-between 
    bg-amber-100 rounded-md"
    >
      <div className="md:w-5/6 flex flex-row gap-3">
        <div className="w-2/6 md:w-4/12 lg:w-1/6">
          <Image
            width={150}
            height={250}
            alt={`Imagen ${product.name}`}
            src={`/assets/img/${product.image}.jpg`}
            className="rounded-lg"
          />
        </div>
        <div className="w-3/6 md:3/6 lg:w-5/6 ">
          <p className="text-xl md:text-2xl font-bold">{product.name}</p>
          <p className="text-md md:text-xl font-semibold mt-2">
            Cantidad: {product.amount}
          </p>
          <p className="text-md md:text-xl font-semibold text-amber-700 mt-2">
            Precio: {moneyFormat(product.price)}
          </p>
          <p className="text-md md:text-xl font-semibold text-amber-800 mt-2">
            Subtotal: {moneyFormat(product.price * product.amount)}
          </p>
        </div>
      </div>

      <div>
        <button
          type="button"
          className="bg-sky-700 px-5 py-2 flex rounded-md justify-between
            shadow-md font-bold w-full text-white uppercase mb-5 text-center"
          onClick={() => handleEditOrder(product.id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
            />
          </svg>
        </button>

        <button
          type="button"
          className="bg-red-700 px-5 py-2 flex rounded-md justify-between
            shadow-md font-bold w-full text-white uppercase text-center"
          onClick={() => handleDeleteOrder(product.id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductResume;
