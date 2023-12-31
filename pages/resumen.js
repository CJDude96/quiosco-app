import Layout from "../layout/Layout";
import useQuiosco from "../hooks/useQuiosco";
import ProductResume from "../components/ProductResume";

export default function Resumen() {
  const { order } = useQuiosco();

  return (
    <Layout page={"Resumen"}>
      <h1 className="text-4xl font-black">Resumen</h1>
      <p className="text-2xl my-10">Revisa tu pedido</p>

      {order.length === 0 ? (
        <p className="text-2xl my-10 text-center">
          No hay elementos en tu pedido
        </p>
      ) : (
        order.map((product) => (
          <ProductResume key={product.id} product={product} />
        ))
      )}
    </Layout>
  );
}
