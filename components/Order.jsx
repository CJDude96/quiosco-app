import React from "react";
import Image from "next/image";
import axios from "axios";
import { moneyFormat } from "../helpers";

const Order = ({ orderData }) => {
  const { id, name, total, order } = orderData;

  const finishOrder = async () => {
    try {
      await axios.post(`/api/orders/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="border-2 border-amber-700 px-10 py-5 space-y-5 mb-2 rounded-lg">
      <h3 className="text-2xl font-bold">Orden: {id}</h3>
      <p className="text-lg my-10">Cliente: {name}</p>
      <div>
        {order.map((plate) => (
          <div
            key={plate.id}
            className="py-3 flex border-b 
            last-of-type:border-0 items-center"
          >
            <div className="w-32">
              <Image
                width={400}
                height={500}
                src={`/assets/img/${plate.image}.jpg`}
                alt={plate.name}
                className="rounded-lg"
              />
            </div>

            <div className="p-5 space-y-2">
              <h4 className="text-xl font-bold text-amber-500">{plate.name}</h4>
              <p className="text-lg font-bold">Cantidad: {plate.amount}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="md:flex md:items-center md:justify-between my-10">
        <p className="mt-5 font-black text-4xl text-amber-500">
          Total: {moneyFormat(total)}
        </p>

        <button
          className="bg-indigo-600 hover:bg-indigo-800 
            text-white mt-5 md:mt-0 py-3 px-10 uppercase font-bold rounded-lg"
          type="button"
          onClick={finishOrder}
        >
          Completar orden
        </button>
      </div>
    </div>
  );
};

export default Order;
