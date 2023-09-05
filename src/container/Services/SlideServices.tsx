import * as React from "react"

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useState } from "react"

export default function SlideServices() {
    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
    })

    return (
        <>
            <div className="navigation-wrapper">
                <div ref={sliderRef} className="keen-slider">


                    {/* 1 */}
                    <div className="keen-slider__slide number-slide1 relative">
                        <div
                            className="background-container"
                            style={{
                                backgroundImage: `url("https://assets.beartai.com/uploads/2023/08/Apollo_17.jpg")`,
                            }}
                        >
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center drop-shadow-[0_1.2px_10px_rgba(0,0,0,0.8)]">
                            <img src="https://assets.beartai.com/uploads/2023/08/Apollo_17.jpg" alt="" />
                        </div>
                        <h1 className="absolute bottom-0 left-0 text-white p-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                            Title/Name 1 {/* เปลี่ยนเป็นข้อมูลจริงที่คุณต้องการแสดง */}
                        </h1>

                        <h1 className="absolute bottom-0 right-0 text-white p-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                            Link อ่านต่อ 1 {/* เปลี่ยนเป็นข้อมูลจริงที่คุณต้องการแสดง */}
                        </h1>
                    </div>


                    {/* 2 */}
                    <div className="keen-slider__slide number-slide2 relative">
                        <div
                            className="background-container"
                            style={{
                                backgroundImage: `url("https://assets.beartai.com/uploads/2023/08/Apollo_11_Lunar_Module_Eagle_in_landing_configuration_in_lunar_orbit_from_the_Command_and_Service_Module_Columbia.jpg")`,
                            }}
                        >
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center drop-shadow-[0_1.2px_10px_rgba(0,0,0,0.8)]">
                            <img src="https://assets.beartai.com/uploads/2023/08/Apollo_11_Lunar_Module_Eagle_in_landing_configuration_in_lunar_orbit_from_the_Command_and_Service_Module_Columbia.jpg" alt="" />
                        </div>
                        <h1 className="absolute bottom-0 left-0 text-white p-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                            Title/Name 2 {/* เปลี่ยนเป็นข้อมูลจริงที่คุณต้องการแสดง */}
                        </h1>
                        <h1 className="absolute bottom-0 right-0 text-white p-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                            Link อ่านต่อ 2 {/* เปลี่ยนเป็นข้อมูลจริงที่คุณต้องการแสดง */}
                        </h1>
                    </div>


                    {/* 3 */}
                    <div className="keen-slider__slide number-slide3 relative">
                        <div
                            className="background-container"
                            style={{
                                backgroundImage: `url("https://assets.beartai.com/uploads/2023/08/Apollo_15_Lunar_Rover_and_Irwin-1024x768.jpg")`,
                            }}
                        >
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center drop-shadow-[0_1.2px_10px_rgba(0,0,0,0.8)]">
                            <img src="https://assets.beartai.com/uploads/2023/08/Apollo_15_Lunar_Rover_and_Irwin-1024x768.jpg" alt="" />
                        </div>
                        <h1 className="absolute bottom-0 left-0 text-white p-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                            Title/Name 3 {/* เปลี่ยนเป็นข้อมูลจริงที่คุณต้องการแสดง */}
                        </h1>
                        <h1 className="absolute bottom-0 right-0 text-white p-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                            Link อ่านต่อ 3 {/* เปลี่ยนเป็นข้อมูลจริงที่คุณต้องการแสดง */}
                        </h1>
                    </div>
                    {/* และทำเช่นนี้กับแต่ละรูปภาพใน Slider */}


                    {/* 4 */}
                    <div className="keen-slider__slide number-slide4 relative">
                        <div
                            className="background-container"
                            style={{
                                backgroundImage: `url("https://assets.beartai.com/uploads/2023/09/Redmi-12.jpg")`,
                            }}
                        >
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center drop-shadow-[0_1.2px_10px_rgba(0,0,0,0.8)]">
                            <img src="https://assets.beartai.com/uploads/2023/09/Redmi-12.jpg" alt="" />
                        </div>
                        <h1 className="absolute bottom-0 left-0 text-white p-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                            Title/Name 4 {/* เปลี่ยนเป็นข้อมูลจริงที่คุณต้องการแสดง */}
                        </h1>

                        <h1 className="absolute bottom-0 right-0 text-white p-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                            Link อ่านต่อ 4 {/* เปลี่ยนเป็นข้อมูลจริงที่คุณต้องการแสดง */}
                        </h1>
                    </div>


                    {/* 5 */}
                    <div className="keen-slider__slide number-slide5 relative">
                        <div
                            className="background-container"
                            style={{
                                backgroundImage: `url("https://assets.beartai.com/uploads/2023/08/Apollo_11_Lunar_Module_Eagle_in_landing_configuration_in_lunar_orbit_from_the_Command_and_Service_Module_Columbia.jpg")`,
                            }}
                        >
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center drop-shadow-[0_1.2px_10px_rgba(0,0,0,0.8)]">
                            <img src="https://assets.beartai.com/uploads/2023/08/Apollo_11_Lunar_Module_Eagle_in_landing_configuration_in_lunar_orbit_from_the_Command_and_Service_Module_Columbia.jpg" alt="" />
                        </div>
                        <h1 className="absolute bottom-0 left-0 text-white p-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                            Title/Name 5 {/* เปลี่ยนเป็นข้อมูลจริงที่คุณต้องการแสดง */}
                        </h1>
                        <h1 className="absolute bottom-0 right-0 text-white p-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                            Link อ่านต่อ 5 {/* เปลี่ยนเป็นข้อมูลจริงที่คุณต้องการแสดง */}
                        </h1>
                    </div>


                    {/* 6 */}
                    <div className="keen-slider__slide number-slide6 relative">
                        <div
                            className="background-container"
                            style={{
                                backgroundImage: `url("https://assets.beartai.com/uploads/2023/08/Apollo_15_Lunar_Rover_and_Irwin-1024x768.jpg")`,
                            }}
                        >
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center drop-shadow-[0_1.2px_10px_rgba(0,0,0,0.8)]">
                            <img src="https://assets.beartai.com/uploads/2023/08/Apollo_15_Lunar_Rover_and_Irwin-1024x768.jpg" alt="" />
                        </div>
                        <h1 className="absolute bottom-0 left-0 text-white p-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                            Title/Name 6 {/* เปลี่ยนเป็นข้อมูลจริงที่คุณต้องการแสดง */}
                        </h1>
                        <h1 className="absolute bottom-0 right-0 text-white p-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                            Link อ่านต่อ 6 {/* เปลี่ยนเป็นข้อมูลจริงที่คุณต้องการแสดง */}
                        </h1>
                    </div>

                    {/* <div className="keen-slider__slide number-slide4">4</div>
                    <div className="keen-slider__slide number-slide5">5</div>
                    <div className="keen-slider__slide number-slide6">6</div> */}
                </div>
                {loaded && instanceRef.current && (
                    <>
                        <Arrow
                            left
                            onClick={(e: any) =>
                                e.stopPropagation() || instanceRef.current?.prev()
                            }
                            disabled={currentSlide === 0}
                        />

                        <Arrow
                            onClick={(e: any) =>
                                e.stopPropagation() || instanceRef.current?.next()
                            }
                            disabled={
                                currentSlide ===
                                instanceRef.current.track.details.slides.length - 1
                            }
                        />
                    </>
                )}
            </div>
            {loaded && instanceRef.current && (
                <div className="dots">
                    <div className="dots">
                        {Array.from({ length: instanceRef.current.track.details.slides.length }).map((_, idx) => {
                            return (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        instanceRef.current?.moveToIdx(idx)
                                    }}
                                    className={"dot" + (currentSlide === idx ? " active" : "")}
                                ></button>
                            )
                        })}
                    </div>

                </div>
            )}
        </>
    )
}

function Arrow(props: {
    disabled: boolean
    left?: boolean
    onClick: (e: any) => void
}) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
        <svg
            onClick={props.onClick}
            className={`arrow ${props.left ? "arrow--left" : "arrow--right"
                } ${disabeld}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            {props.left && (
                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" stroke="black" stroke-width="1" />
            )}
            {!props.left && (
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" stroke="black" stroke-width="1" />
            )}
        </svg>
    )
}

