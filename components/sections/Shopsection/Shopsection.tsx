import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button";
import { ShopToolsType } from "@/types/type";
import CardShop from "@/components/CardShop/CardShop";

const products: ShopToolsType[] = [
  {
    name: 'tools',
    description: 'description of the tools card shop',
    image: '/og-fb-logo-en.webp'
  },
  {
    name: 'tools',
    description: 'description of the tools card shop',
    image: '/og-fb-logo-en.webp'
  },
  {
    name: 'tools',
    description: 'description of the tools card shop',
    image: '/og-fb-logo-en.webp'
  },
  {
    name: 'tools',
    description: 'description of the tools card shop',
    image: '/og-fb-logo-en.webp'
  },
  {
    name: 'tools',
    description: 'description of the tools card shop',
    image: '/og-fb-logo-en.webp'
  },
]

export default function Shopsection() {
    return (
        <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-10">Parts & Tools</h2>
        <div className="flex justify-center">
        <Carousel className="w-[30%]">
            <CarouselContent>
                {products.map((data, key) => (
                  <CarouselItem key={key}>
                    <CardShop data={data}/>
                  </CarouselItem>
                ))}
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