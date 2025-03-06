import { 
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { ShopToolsType } from "@/types/type";

interface ShopCardProps {
    data: ShopToolsType;
}

export default function CardShop({ data } : ShopCardProps) {
    return(
        <Card className="flex flex-col justify-between">
            <CardHeader className="w-full">
                <img src={data.image} alt="photo-1" className="w-[300px] h-full object-cover"/>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-2">
                    <CardTitle className="w-fit text-xl text-blue-500">{data.name}</CardTitle>
                    <CardDescription className="w-fit text-base">{data.description}</CardDescription>
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full bg-blue-500 transition-all duration-300 ease-out hover:bg-blue-600">Read More</Button>
            </CardFooter>
        </Card>
    );
}