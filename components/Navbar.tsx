import { Label } from "@radix-ui/react-label";
import { 
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuTrigger,
    NavigationMenuContent,
    NavigationMenuLink
} from "@radix-ui/react-navigation-menu";
import { Button } from "./ui/button";

const Navbar = () => {
    return (
        <header className="py-3 px-5 flex items-center bg-primary">
            <div className="container w-full mx-auto flex justify-between items-center">
                <Label className="text-secondary text-lg font-semibold leading-relaxed">Stream<span className="text-blue-500">line</span></Label>
                <NavigationMenu className="hidden lg:flex">
                    <NavigationMenuList className="flex gap-3">
                        <NavigationMenuItem className="bg-transparent px-5 py-2 rounded-md transition-all duration-200 hover:bg-primary-foreground/20">
                            <a href="#" className="text-secondary font-medium">Home</a>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="bg-transparent px-5 py-2 rounded-md transition-all duration-200 hover:bg-primary-foreground/20">
                            <a href="#" className="text-secondary font-medium">About</a>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="bg-transparent text-secondary font-medium px-5 py-2 rounded-md transition-all duration-200 hover:bg-primary-foreground/20">
                                fix your stuff
                            </NavigationMenuTrigger>
                            <NavigationMenuContent className="w-[500px] bg-primary absolute border rounded p-5 left-0 top-12">
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="flex flex-col gap-5">
                                        <span className="p-2 rounded transition-all duration-200 hover:bg-secondary/30">
                                            <NavigationMenuLink className="font-semibold text-secondary">
                                                <a href="/">Repair Guides</a>
                                            </NavigationMenuLink>
                                            <p className="mt-2 text-base font-medium text-secondary">Lorem ipsum dolor sit amet.</p>
                                        </span>
                                        <span className="p-2 rounded transition-all duration-200 hover:bg-secondary/30">
                                            <NavigationMenuLink className="font-semibold text-secondary">
                                                <a href="/">Answer Forum</a>
                                            </NavigationMenuLink>
                                            <p className="mt-2 text-base font-medium text-secondary">Lorem ipsum dolor sit amet.</p>
                                        </span>
                                    </div>
                                    <div className="flex flex-col gap-5">
                                        <span className="p-2 rounded transition-all duration-200 hover:bg-secondary/30">
                                            <NavigationMenuLink className="font-semibold text-secondary">
                                                <a href="/">Teardowns</a>
                                            </NavigationMenuLink>
                                            <p className="mt-2 text-base font-medium text-secondary">Lorem ipsum dolor sit amet.</p>
                                        </span>
                                        <span className="p-2 rounded transition-all duration-200 hover:bg-secondary/30">
                                            <NavigationMenuLink className="font-semibold text-secondary">
                                                <a href="/">News</a>
                                            </NavigationMenuLink>
                                            <p className="mt-2 text-base font-medium text-secondary">Lorem ipsum dolor sit amet.</p>
                                        </span>
                                    </div>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="bg-transparent text-secondary font-medium px-5 py-2 rounded-md transition-all duration-200 hover:bg-primary-foreground/20">
                                Community
                            </NavigationMenuTrigger>
                            <NavigationMenuContent className="w-[500px] bg-primary absolute border rounded p-5 left-0 top-12">
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="flex flex-col gap-5">
                                        <span className="p-2 rounded transition-all duration-200 hover:bg-secondary/30">
                                            <NavigationMenuLink className="font-semibold text-secondary">
                                                <a href="/">Get Involved</a>
                                            </NavigationMenuLink>
                                            <p className="mt-2 text-base font-medium text-secondary">Lorem ipsum dolor sit amet.</p>
                                        </span>
                                        <span className="p-2 rounded transition-all duration-200 hover:bg-secondary/30">
                                            <NavigationMenuLink className="font-semibold text-secondary">
                                                <a href="/">Right to Repair</a>
                                            </NavigationMenuLink>
                                            <p className="mt-2 text-base font-medium text-secondary">Lorem ipsum dolor sit amet.</p>
                                        </span>
                                    </div>
                                    <div className="flex flex-col gap-5">
                                        <span className="p-2 rounded transition-all duration-200 hover:bg-secondary/30">
                                            <NavigationMenuLink className="font-semibold text-secondary">
                                                <a href="/">Repairability</a>
                                            </NavigationMenuLink>
                                            <p className="mt-2 text-base font-medium text-secondary">Lorem ipsum dolor sit amet.</p>
                                        </span>
                                        <span className="p-2 rounded transition-all duration-200 hover:bg-secondary/30">
                                            <NavigationMenuLink className="font-semibold text-secondary">
                                                <a href="/">Our Manifesto</a>
                                            </NavigationMenuLink>
                                            <p className="mt-2 text-base font-medium text-secondary">Lorem ipsum dolor sit amet.</p>
                                        </span>
                                    </div>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <div className="flex gap-2 lg:hidden">
                    <Button className="transition-all duration-200 hover:bg-foreground">Login</Button>
                    <Button className="bg-secondary/30 text-secondary transition-all duration-200 hover:bg-secondary hover:text-secondary-foreground">Register</Button>
                </div>
            </div>
        </header>
    )
}

export default Navbar;