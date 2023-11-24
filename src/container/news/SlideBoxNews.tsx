
export default function SlideBoxNews() {
    return (
        <div className="grid grid-cols-12">
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-60 rounded-xl bg-clip-border">
                <img src="images/blog.jpg" alt="img-blur-shadow" />
                <div className="mt-2">
                    <h5 className="block">UI/UX Review Check</h5>
                </div>
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">The place is close to Barceloneta Beach and bus stop just 2 min by walk</p>


                <div className="col-span-2">
                    <img src="images/blog.jpg" alt="img-blur-shadow" />
                    <div className="mt-2">
                        <h5 className="block">UI/UX Review Check</h5>
                    </div>
                    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">The place is close to Barceloneta Beach and bus stop just 2 min by walk</p>
                </div>
            </div >
        </div>
    )
}
