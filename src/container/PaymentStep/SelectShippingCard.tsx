import React, { useState } from "react";
import Select from "react-select";
import { GrDeliver } from "react-icons/gr";


const SelectShippings = () => {

    return (
        <>
            <div className="md:ml-10 mt-5">
                <p className="text-left">เลือกวิธีจัดส่ง</p>
                <div className="flex flex-wrap justify-center gap-2 mt-2">
                    <div className="w-64 mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg hover:border-sky-500 hover:ring-sky-500 cursor-pointer">
                        <button className="flex items-center space-x-3">
                            <GrDeliver />
                            <h3 className="text-slate-900 text-sm font-semibold">New project</h3>
                        </button>
                        <p className="text-slate-500 text-sm">Create a new project.</p>
                    </div>

                    <div className="w-64 mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg hover:border-sky-500 hover:ring-sky-500 cursor-pointer">
                        <button className="flex items-center space-x-3">
                            <GrDeliver />
                            <h3 className="text-slate-900 text-sm font-semibold">New project</h3>
                        </button>
                        <p className="text-slate-500 text-sm">Create a new project .</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SelectShippings;