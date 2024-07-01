import { ProductButtons, ProductImage, ProductTitle } from "../components"
import ProductCard from "../components/ProductCard"

const ShopingPage = () => {

  const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png',
  }

  return (
    <div>
      <h1>Shoping Store</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <ProductCard product={product} >
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  )
}

export default ShopingPage