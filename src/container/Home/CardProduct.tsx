import Link from "next/link";

export default function CardProduct() {
	return (
		<div className="container mx-auto">
			<h4 className="text-3xl font-bold text-white mb-5 text-center md:text-left">สินค้าแนะนำ</h4>

			<div className="grid grid-col md:grid-cols-3 lg:grid-cols-5 justify-center gap-5 px-5 md:px-0">
				<div className="bg-secondary1 rounded-lg overflow-hidden">
					<img src="./images/computer.jpg" alt="" />

					<div className="p-4">
						<p className="text-white text-xl">Product Name</p>
						<p className="text-white line-clamp-2">description, description,description
							description, description......
						</p>

						<div className="flex justify-between mt-2">
							<p className="text-xl font-semibold bg-gradient-to-r from-[#CA0808] to-[#0FC0E7] bg-clip-text text-transparent">
								฿20,200
							</p>
							<button
								className="text-sm font-normal text-white bg-natural01 px-5 py-1.5 rounded-full"
								type="submit">
									หยิบใส่ตะกร้า
							</button>
						</div>
					</div>

				</div>

				{/* <div className="bg-secondary1 rounded-lg overflow-hidden">
					<img src="./images/computer.jpg" alt="" />

					<div className="p-4">
						<p>Product Name</p>
						<p>description, description,description
							description, description......
						</p>

						<div className="flex justify-between mt-2">
							<p className="text-xl font-semibold bg-gradient-to-r from-[#CA0808] to-[#0FC0E7] bg-clip-text text-transparent">
								฿20,200
							</p>
							<button
								className="text-sm font-normal text-white"
								type="submit">
									หยิบใส่ตะกร้า
							</button>
						</div>
					</div>

				</div>

				<div className="bg-secondary1 rounded-lg overflow-hidden">
					<img src="./images/computer.jpg" alt="" />

					<div className="p-4">
						<p>Product Name</p>
						<p>description, description,description
							description, description......
						</p>

						<div className="flex justify-between mt-2">
							<p className="text-xl font-semibold bg-gradient-to-r from-[#CA0808] to-[#0FC0E7] bg-clip-text text-transparent">
								฿20,200
							</p>
							<button
								className="text-sm font-normal text-white"
								type="submit">
									หยิบใส่ตะกร้า
							</button>
						</div>
					</div>

				</div>

				<div className="bg-secondary1 rounded-lg overflow-hidden">
					<img src="./images/computer.jpg" alt="" />

					<div className="p-4">
						<p>Product Name</p>
						<p>description, description,description
							description, description......
						</p>

						<div className="flex justify-between mt-2">
							<p className="text-xl font-semibold bg-gradient-to-r from-[#CA0808] to-[#0FC0E7] bg-clip-text text-transparent">
								฿20,200
							</p>
							<button
								className="text-sm font-normal text-white"
								type="submit">
									หยิบใส่ตะกร้า
							</button>
						</div>
					</div>

				</div>

				<div className="bg-secondary1 rounded-lg overflow-hidden">
					<img src="./images/computer.jpg" alt="" />

					<div className="p-4">
						<p>Product Name</p>
						<p>description, description,description
							description, description......
						</p>

						<div className="flex justify-between mt-2">
							<p className="text-xl font-semibold bg-gradient-to-r from-[#CA0808] to-[#0FC0E7] bg-clip-text text-transparent">
								฿20,200
							</p>
							<button
								className="text-sm font-normal text-white"
								type="submit">
									หยิบใส่ตะกร้า
							</button>
						</div>
					</div>

				</div> */}
			</div>
		</div>
	);
}
