import RootLayout from "../../components/layout";
// import { newsTest } from '../../../data/News';
// import Link from "next/link";
// import SlideNews from "../../container/News/Slidenews";
// import NewsCard from "../../container/News/NewsCard";
// import NewsCardsm from "../../container/News/NewsCardsm";
// import CardNews from "../../container/Home/Cardnews";
import SlideBoxNews from "../../container/news/SlideBoxNews";

interface NewsData {
    id: string;
    image: string;
    title: string;
    description: string;
    credit: string;
    date: string;
}

export default function NewsPage() {

    return (
        <RootLayout>
            <div className="">
             <SlideBoxNews/>
            </div>


            <div>
               
            </div>
        </RootLayout>
    )
}