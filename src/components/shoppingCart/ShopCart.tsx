import RootLayout from "../layout";

const ShoppingCart = () => {
  return (
    <div className="container mx-auto my-24">
      <h3 className="text-4xl text-secondary2">รายการสินค้า <span className="">(2)</span></h3>
      <div className="grid md:grid-cols-7 gap-10 mt-10">
        <div className="col-span-5 bg-secondary2"></div>
        <div className="col-span-2 bg-secondary1">2</div>
      </div>
    </div>
  )
}
export default ShoppingCart;