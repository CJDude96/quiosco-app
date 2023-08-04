import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const QuioscoContext = createContext();

const QuiscoProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [actualCat, setActualCat] = useState({});
  const [product, setProduct] = useState({});
  const [modal, setModal] = useState(false);
  const [order, setOrder] = useState([]);
  const [name, setName] = useState("");
  const [total, setTotal] = useState(0);

  const router = useRouter();

  const getCategories = async () => {
    const { data } = await axios("/api/categories");
    setCategories(data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    setActualCat(categories[0]);
  }, [categories]);

  useEffect(() => {
    const newTotal = order.reduce(
      (total, product) => product.price * product.amount + total,
      0
    );

    setTotal(newTotal);
  }, [order]);

  const handleClickCategory = (id) => {
    const category = categories.filter((obj) => obj.id === id);
    setActualCat(category[0]);
    router.push("/");
  };

  const handleSetProduct = (newProduct) => {
    setProduct(newProduct);
  };

  const handleChangeModal = () => {
    setModal(!modal);
  };

  const handleAddOrder = ({ categoryId, ...newOrder }) => {
    if (order.some((orderState) => orderState.id === newOrder.id)) {
      const orderAct = order.map((orderState) =>
        orderState.id === newOrder.id ? newOrder : orderState
      );
      setOrder(orderAct);
      toast.success("¡Pedido actualizado!");
    } else {
      setOrder([...order, newOrder]);
      toast.success("¡Agregado al pedido!");
    }

    setModal(false);
  };

  const handleEditOrder = (id) => {
    const productAct = order.filter((product) => product.id === id);
    setProduct(productAct[0]);
    setModal(!modal);
  };

  const handleDeleteOrder = (id) => {
    const newOrder = order.filter((product) => product.id !== id);
    setOrder(newOrder);
  };

  const sendOrder = async (e) => {
    e.preventDefault();
  };

  return (
    <QuioscoContext.Provider
      value={{
        categories,
        actualCat,
        handleClickCategory,
        product,
        handleSetProduct,
        modal,
        handleChangeModal,
        order,
        handleAddOrder,
        handleEditOrder,
        handleDeleteOrder,
        name,
        setName,
        sendOrder,
        total,
      }}
    >
      {children}
    </QuioscoContext.Provider>
  );
};

export { QuiscoProvider };

export default QuioscoContext;
