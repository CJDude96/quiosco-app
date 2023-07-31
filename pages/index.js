import Layout from '../layout/Layout'
import useQuiosco from '../hooks/useQuiosco'
import Product from '../components/Product'

export default function Home() {

  const {actualCat} = useQuiosco()
  return (
    <Layout page={`Menu`}>
      <h1 className='text-4xl font-bold'>
        {actualCat?.name}
      </h1>
      <p className='text-2xl my-10'>
        Elige y personaliza tu pedido
      </p>

      <div className='grid gap-4 grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
        {
          actualCat?.products?.map((product) => (
            <Product key={product.id} product={product} />
          ))
        }
      </div>
    </Layout>
  )
}
