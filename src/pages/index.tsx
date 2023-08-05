import RootLayout from '@/components/layout'
import CardMeeNeed from '@/container/Home/CardMeeNeed'
import CardProduct from '@/container/Home/CardProduct'
import Menuservice from '@/container/Home/Menuservice'
import TopItem from '@/container/Home/Topitem'


export default function Home() {
  return (
    <RootLayout>
      <TopItem />
      <div className='container mx-auto'>
        <Menuservice />
        <CardMeeNeed />
        <CardProduct />
      </div>
    </RootLayout>
  )
}
