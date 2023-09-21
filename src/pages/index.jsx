import Layout from "@/layout/Layout";
import Productos from "@/components/Productos"
import useQuiosco from "@/hooks/useQuiosco";

export default function Home() {
  const {categoriaActual} = useQuiosco();
  return (
    <Layout>
      <h1 className="text-4xl font-black">{categoriaActual?.nombre}</h1>
      <p className="text-2xl my-10">Elige y personaliza tu pedido a continuación</p>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {categoriaActual?.productos?.map(producto=>(
        <Productos key={producto.id} producto={producto}/>
      ))}
      </div>
    </Layout>
  );
}

