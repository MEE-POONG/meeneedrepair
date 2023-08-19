import Image from 'next/image';
import Link from 'next/link';
export default function CardMeeNeed() {
  return (
    <div className="container mx-auto py-6">
      <div className="bg-[#1E293B] p-6 rounded-lg lg:w-[1389px] lg:h-[502px] mx-5 md:mx-auto">
        <div className="grid md:grid-cols-3 items-center gap-8">
          <div>
            <Image
              className='mx-auto mt-10 '
              src="/images/LOGOO.png"
              width={280}
              height={280}
              alt="Picture of the author"
            />
          </div>
          <div className='md:col-span-2 md:pr-8 lg:mt-20'>
            <p className='text-lg text-secondary2 text-center md:text-left'>ทำความรู้จัก</p>
            <div className='md:flex my-6 text-center md:text-right items-end'>
              <h3 className='text-5xl md:text-7xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-sky-400'
              > Mee Need
              </h3>
              <p className='text-secondary2 text-xl ml-2 text-center md:text-left'>REPAIR</p>
            </div>

            <div className='text-secondary2  text-center md:text-left md:pr-24'>
              Me Support ให้บริการด้านไอทีซัพพอร์ท
              ให้คำปรึกษาด้านการใช้งานอุปกรณ์ไอที
              รวมถึงรับซ่อมอุปกรณ์ไอทีทุกประเภท
              และจำหน่ายสินค้าไอทีหลากหลายประเภท
            </div>
            <div className='text-center md:text-right mt-12 lg:mt-28 '>
              <Link href='/about' className='bg-natural04 py-2 px-5 rounded-lg'>รู้จักเรามากขึ้น</Link>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}
