import RootLayout from "../../components/layout";
import { newsTest } from '../../../data/News';
import Link from "next/link";
import SlideNews from "../../container/News/Slidenews";
import NewsCard from "../../container/News/NewsCard";
import NewsCardsm from "../../container/News/NewsCardsm";
import CardNews from "../../container/Home/Cardnews";

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
        <>
            <div className="mb-24">
                <SlideNews />
            </div>
            <div className="container mx-auto px-6 md:px-24">
                <div className="flex items-center justify-center">
                    <div className="h-0.5 w-full bg-white"></div>
                    <h2 className="w-full text-lg md:text-4xl text-center p-3 font-semibold text-white">
                        News
                    </h2>
                    <div className="h-0.5 w-full bg-white"></div>
                </div>
            </div>

            <div>
                <NewsCard />
            </div>
        </>
    )
}