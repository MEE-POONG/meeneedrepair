import React from 'react';

// Type definition for the Step1 component
interface Step1Props {
    nextStep: () => void;
}

function Step1SelectAddress({ nextStep }: Step1Props) {
    return (
        <div className='container mx-auto bg-secondary2 rounded-md p-5'>
            <div className="flex items-center text-sm md:text-lg mb-3">                            
                <p className="text-white px-3 py-0.5 bg-secondary1 rounded-full mr-2">
                    1
                </p>
                <span>ข้อมูลสำหรับจัดส่ง</span>
            </div>
            <fieldset className="md:ml-10 text-left">
                <div>
                    <input id="draft" className="peer/draft mr-2 cursor-pointer" type="radio" name="status" />
                    <label htmlFor="draft" className="peer-checked/draft:text-sky-500">ส่งตามที่อยู่</label>
                </div>
                <div>
                    <input id="published" className="peer/published mr-2 cursor-pointer" type="radio" name="status" />
                    <label htmlFor="published" className="peer-checked/published:text-sky-500">รับสินค้าเองที่ร้าน</label>
                </div>
            </fieldset>





            <button onClick={nextStep}
                className='py-1 px-6 rounded-full bg-secondary1 text-white text-rig'
            >
                Next
            </button>
        </div>
    );
}
export default Step1SelectAddress;
