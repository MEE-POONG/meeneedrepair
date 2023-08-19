import Link from "next/link";
import RootLayout from "../../components/layout";
import ProductCategory from "../../container/Product/ProductCategory";
import CustomerProfile from "./custom_profile";
import EditProfile from "./EditProfile";
import TabMenu from "../../container/Profile/TabMenu";

export default function ProfilePage() {
    return (
        <RootLayout>
            <ProductCategory />
            <div className="container mx-auto">
                <div className="grid grid-cols-12 gap-10">
                    <div className="col-span-2">
                        <h3 className="text-3xl text-secondary2 mb-8">จัดการบัญชีผู้ใช้</h3>

                        <TabMenu/>
                    </div>
                    <div className="col-span-10">
                        <CustomerProfile />
                        {/* <EditProfile /> */}
                    </div>
                </div>

            </div>
        </RootLayout>
    )
}