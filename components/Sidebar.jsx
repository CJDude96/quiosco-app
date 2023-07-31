import Image from "next/image";
import useQuiosco from "../hooks/useQuiosco";
import Category from "./Category";

const Sidebar = () => {

  const { categories } = useQuiosco()

  return (
    <>
      <Image
        width={0}
        height={0}
        src={"/assets/img/logo.svg"}
        alt="LogoImage"
        priority
        className="w-9/12 m-auto"
      />
      <nav className="mt-10">
        {
          categories.map( category => (
            <Category key={category.id} category={category} />
          ))
        }
      </nav>
      
    </>
  );
};

export default Sidebar;
