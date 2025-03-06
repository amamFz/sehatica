import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button";
import { ArticleType } from "@/types/type";
import CardArticles from "@/components/CardArticles/CardArticles";

const data: ArticleType[] = [
    {
        title: 'tes',
        description: 'tes',
        image: 'tes',
    }
]

export default function Shopsection() {
    return (
        <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-10">Parts & Tools</h2>
        <div className="flex justify-center">
        <Carousel className="w-[30%]">
            <CarouselContent>
                
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
        </div>
        <div className="mt-10 text-center">
          <Button className="bg-blue-600 hover:bg-blue-700 rounded-full px-8 py-6 h-auto text-lg">
            Shop All Parts & Tools
          </Button>
        </div>
      </div>
    </div>
    );
}