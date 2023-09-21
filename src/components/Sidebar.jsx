import  Image  from "next/image";
import logo from "../../public/assets/img/logo.svg"
import useQuiosco from "@/hooks/useQuiosco"
import Categorias from "@/components/Categorias"

const Sidebar = () => {
    const {categorias} = useQuiosco();
  return (
    <>
      <Image width={300} height={100} src={logo} alt = "logotipo" />
      <nav className="mt-10">
        {categorias.map((categoria)=>(
            <Categorias
                key= {categoria.id}
                categoria = {categoria}
            />
        ))}
      </nav>
    </>
  );
};

export default Sidebar;
