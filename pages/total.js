import { useEffect, useCallback } from "react";
import Layout from "../layout/Layout";
import useQuiosco from "../hooks/useQuiosco";
import { moneyFormat } from "../helpers";

export default function Total() {
  const { order, name, setName, sendOrder, total } = useQuiosco();

  const validateOrder = useCallback(() => {
    return order.length === 0 || name === '' || name.length < 3;
  }, [order, name]);


  useEffect(() => {
    validateOrder;
  }, [order, validateOrder]);

  return (
    <Layout page={"Total"}>
      <h1 className="text-4xl font-black">Total</h1>
      <p className="text-2xl my-10">Total de tu pedido</p>
      <form onSubmit={sendOrder}>
        <div>
          <label
            htmlFor="name"
            className="block text-slate-800 text-xl font-bold"
          >
            Nombre:
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mt-10">
          <p className="text-2xl">
            Total a pagar: <span className="font-bold">{moneyFormat(total)}</span>
          </p>
        </div>

        <div>
          <input
            type="submit"
            className={`${
              validateOrder()
                ? "bg-indigo-200"
                : "bg-indigo-800 hover:bg-indigo-700"
            } w-full lg:w-auto px-5 py-2 mt-5
            rounded font-bold text-white`}
            value="Confirmar Pedido"
            disabled={validateOrder()}
          />
        </div>
      </form>
    </Layout>
  );
}
