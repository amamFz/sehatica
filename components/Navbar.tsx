import { Label } from "@radix-ui/react-label";
import { 
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem 
} from "@radix-ui/react-navigation-menu";

const Navbar = () => {
    return (
        <header className="py-3 px-5 flex items-center bg-primary">
            <div className="container w-full mx-auto flex justify-between items-center">
                <Label className="text-secondary text-lg font-semibold leading-relaxed">Stream<span className="text-blue-500">line</span></Label>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <a href="#">Home</a>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <a href="#">About</a>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <a href="#">Contact</a>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </header>
    )
}

export default Navbar;