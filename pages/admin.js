import useSWR from "swr";
import axios from "axios";
import AdminLayout from "../layout/AdminLayout";
import Order from "../components/Order";

export default function Admin() {
  const fetcher = () => axios("/api/orders").then((data) => data.data);
  const { data, error, isLoading } = useSWR("/api/orders", fetcher);

  return (
    <AdminLayout page={"admin"}>
      <h1 className="text-4xl font-black">Panel de Administracion</h1>
      <p className="text-2xl my-10">Administra las ordenes</p>

      {data && data.length
        ? data.map((order) => <Order key={order.id} orderData={order} />)
        : (<p>No hay ordenes pendientes</p>)}
    </AdminLayout>
  );
}
