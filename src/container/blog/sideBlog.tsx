import React, { useState, useEffect } from "react";


const SideBlog = () => {


    return (
        <div
            style={{
                position: "fixed",
                bottom: 50,
                right: 45,
                zIndex: 1,
                // backgroundColor: "#212529",
                color: "#fff",
                padding: "10px 15px",
                cursor: "pointer",
            }}
        >
           
        
            <div className="my-20 pt-12 ">
            <p className="text-[30px] text-black text-center"> บทความที่แนะนำ</p>
                <div className="my-3 h-full w-full">
                    <img src="/images/ข่าว.png" alt="" />
                </div>
                <div className="my-12 h-full w-full">
                    <img src="/images/ข่าว.png" alt="" />
                </div>
                <div className="my-12 h-full w-full">
                    <img src="/images/ข่าว.png" alt="" />
                </div>
            
            </div>
        </div>
    );
};

export default SideBlog;