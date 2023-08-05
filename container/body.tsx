import CareMeeNeed from "@/components/Card/CardMeeNeed";
import CardProduct from "@/components/Card/CardProduct";
import Menu from "@/components/Menu";


export default function Body() {
  return (
    <div className='bg-[#1E293B] container'>
    <img src="../images/imgslider/222.jpg" className='w-full h-[800px] lg/h-[600px]' alt="" />
    
    <Menu/>

    <div className="mt-10">
    <CareMeeNeed/>
    </div>

    {/* <div>
      <h1 className=" text-3xl text-white mb-8">สินค้าแนะนำ</h1>
      <CardProduct/>
    </div> */}

    
      

      



    </div>


 
  )
}
