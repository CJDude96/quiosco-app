import Image from "next/image";
import useQuiosco from "../hooks/useQuiosco";

const Category = ({ category }) => {
  const { actualCat, handleClickCategory } = useQuiosco();
  const { name, icon, id } = category;

  return (
    <button
      type="button"
      onClick={() => handleClickCategory(id)}
      className={`${
        actualCat?.id === id ? "bg-amber-400" : null
      }  text-2xl font-bold hover:cursor-pointer 
      flex items-center gap-4 w-full border p-5 hover:bg-amber-400`}
    >
      <Image
        width={70}
        height={70}
        src={`/assets/img/icono_${icon}.svg`}
        alt={`Icon ${name}`}
        style={{ width: "70px", height: "70px" }}
      />
      {name}
    </button>
  );
};

export default Category;
