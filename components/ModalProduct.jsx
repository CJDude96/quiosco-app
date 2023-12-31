import { useState, useEffect } from "react";
import Image from "next/image";
import useQuiosco from "../hooks/useQuiosco";
import { moneyFormat } from "../helpers";

const ModalProduct = () => {
  const { order, product, handleChangeModal, handleAddOrder } = useQuiosco();
  const [amount, setAmount] = useState(1);
  const [editOrder, setEditOrder] = useState(false);

  useEffect(() => {
    if (order.some((orderState) => orderState.id === product.id)) {
      const orderToEdit = order.find(
        (orderState) => orderState.id === product.id
      );
      setEditOrder(true);
      setAmount(orderToEdit.amount);
    }
  }, [order, product]);

  return (
    <div className="w-full bg-amber-100 p-5">
      <button
        className="fixed top-4 right-4"
        type="button"
        onClick={handleChangeModal}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <div className="flex flex-col md:flex-row gap-10">
        <div className="mx-auto sm:flex md:w-1/3">
          <Image
            width={300}
            height={400}
            alt={`product ${product.name}`}
            src={`/assets/img/${product.image}.jpg`}
            className="sm:justify-center"
          />
        </div>

        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold mt-5">{product.name}</h1>
          <p className="mt-5 font-black text-5xl text-amber-500">
            {moneyFormat(product.price)}
          </p>

          <div className="flex gap-4 mt-5">
            <button
              type="button"
              onClick={() => {
                if (amount <= 1) return;
                setAmount(amount - 1);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>

            <p className="text-3xl">{amount}</p>

            <button
              type="button"
              onClick={() => {
                if (amount >= 10) return;
                setAmount(amount + 1);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>

          <button
            type="button"
            className="bg-indigo-600 hover:bg-indigo-800 
            px-5 py-2 mt-5 text-white font-bold uppercase rounded"
            onClick={() => handleAddOrder({ ...product, amount })}
          >
            {editOrder ? "Actualizar pedido" : "Agregar a orden"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalProduct;
