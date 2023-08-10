import Link from "next/link";

export default function CardProduct() {
	return (
		<div className="container mx-auto py-6 ">
            <h3 className="text-3xl font-bold text-white mb-5 text-center md:text-left">สินค้าแนะนำ</h3>
			<div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-6">
				{/* Card1 */}
				<div className="max-w-xs rounded-lg overflow-hidden shadow-lg hover:shadow-xl">
					<img src="../images/computer.jpg" alt=""
						className="w-full" />
					<div className="px-4 py-4 bg-[#1E293B]">
						<div className="mb-2">
							<h2 className="text-2xl font-bold text-white">Beautiful House</h2>
							<p className="text-white mt-3 ">
								description, description,description description......
							</p>
							<div className="py-5 flex justify-between items-center">
								<div className="flex items-center gap-5">
									<p className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#CA0808]  to-[#0FC0E7]">$200,000</p>
									<Link href=''
										className="bg-yellow-400 py-2 px-4 rounded-full">
										หยิบใส่ตะกร้า
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Card2 */}
				<div className="max-w-xs rounded-lg overflow-hidden shadow-lg hover:shadow-xl">
					<img src="../images/computer.jpg" alt=""
						className="w-full" />
					<div className="px-4 py-4 bg-[#1E293B]">
						<div className="mb-2">
							<h2 className="text-2xl font-bold text-white">Beautiful House</h2>
							<p className="text-white mt-3 ">
								description, description,description description......
							</p>
							<div className="py-5 flex justify-between items-center">
								<div className="flex items-center gap-5">
									<p className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#CA0808]  to-[#0FC0E7]">$200,000</p>
									<Link href=''
										className="bg-yellow-400 py-2 px-4 rounded-full">
										หยิบใส่ตะกร้า
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Card3 */}
				<div className="max-w-xs rounded-lg overflow-hidden shadow-lg hover:shadow-xl">
					<img src="../images/computer.jpg" alt=""
						className="w-full" />
					<div className="px-4 py-4 bg-[#1E293B]">
						<div className="mb-2">
							<h2 className="text-2xl font-bold text-white">Beautiful House</h2>
							<p className="text-white mt-3 ">
								description, description,description
								description, description......
							</p>
							<div className="py-5 flex justify-between items-center">
								<div className="flex items-center gap-5">
									<p className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#CA0808]  to-[#0FC0E7]">$200,000</p>
									<Link href=''
										className="bg-yellow-400 py-2 px-4 rounded-full">
										หยิบใส่ตะกร้า
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Card4 */}
				<div className="max-w-xs rounded-lg overflow-hidden shadow-lg hover:shadow-xl">
					<img src="../images/computer.jpg" alt=""
						className="w-full" />
					<div className="px-4 py-4 bg-[#1E293B]">
						<div className="mb-2">
							<h2 className="text-2xl font-bold text-white">Beautiful House</h2>
							<p className="text-white mt-3 ">
								description, description,description
								description, description......
							</p>
							<div className="py-5 flex justify-between items-center">
								<div className="flex items-center gap-5">
									<p className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#CA0808]  to-[#0FC0E7]">$200,000</p>
									<Link href=''
										className="bg-yellow-400 py-2 px-4 rounded-full">
										หยิบใส่ตะกร้า
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Card5 */}
				<div className="max-w-xs rounded-lg overflow-hidden shadow-lg hover:shadow-xl">
					<img src="../images/computer.jpg" alt=""
						className="w-full" />
					<div className="px-4 py-4 bg-[#1E293B]">
						<div className="mb-2">
							<h2 className="text-2xl font-bold text-white">Beautiful House</h2>
							<p className="text-white mt-3 ">
								description, description,description
								description, description......
							</p>
							<div className="py-5 flex justify-between items-center">
								<div className="flex items-center gap-5">
									<p className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#CA0808]  to-[#0FC0E7]">$200,000</p>
									<Link href=''
										className="bg-yellow-400 py-2 px-4 rounded-full">
										หยิบใส่ตะกร้า
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
