import { NavLink } from "react-router-dom";
import {
  Heart,
  Search,
  ShoppingCart,
  Menu,
  Moon,
  Sun,
  LayoutDashboard,
  LogOut,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { motion } from "motion/react";
import Logo from "../shared/Logo";
import { useState } from "react";
import { useTheme } from "@/context/Theme-provider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";

interface NavbarProps {
  hasScrolled: boolean;
}

interface NavItem {
  icon: React.ReactNode;
  name: string;
  path: string;
  requiresAdmin?: boolean;
}

interface User {
  name: string;
  email: string;
  avatar: string;
  role: "user" | "admin";
}

const navItems: NavItem[] = [
  { icon: <Search className="h-5 w-5" />, name: "Search", path: "/search" },
  { icon: <Heart className="h-5 w-5" />, name: "Wishlist", path: "/wishlist" },
  { icon: <ShoppingCart className="h-5 w-5" />, name: "Cart", path: "/cart" },
  {
    icon: <LayoutDashboard className="h-5 w-5" />,
    name: "Dashboard",
    path: "/dashboard",
    requiresAdmin: true,
  },
];

/* const animations = {
  menuItem: {
    hidden: { opacity: 0, x: 20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
  },
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  },
}; */

const Navbar = ({ hasScrolled }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  const user: User = {
    name: "John Doe",
    email: "john@example.com",
    avatar: "https://github.com/shadcn.png",
    role: "admin",
  };

  const filteredNavItems = navItems.filter(
    (item) =>
      !item.requiresAdmin || (item.requiresAdmin && user.role === "admin")
  );

  return (
    <nav
      className={`
      bg-background/95 backdrop-blur-sm 
      transition-all duration-200
      ${hasScrolled ? "shadow-sm border-b" : ""}
    `}
    >
      <div className="container mx-auto max-w-6xl px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo />

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 p-0">
              <SheetHeader className="p-4 border-b">
                <SheetTitle>
                  <Logo />
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2 p-4">
                <div className="flex  items-center justify-between  gap-3 p-4 bg-secondary rounded-lg">
                  <div className="flex items-center justify-between gap-3 ">
                    <Avatar>
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="font-medium">{user.name}</span>
                      <span className="text-xs text-muted-foreground">
                        {user.email}
                      </span>
                      <span
                        className={cn(
                          "text-xs  capitalize  font-semibold",
                          user.role === "admin"
                            ? "text-red-600"
                            : "text-green-600"
                        )}
                      >
                        {user.role}
                      </span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                    className="rounded-full"
                  >
                    {theme === "dark" ? (
                      <Sun className="h-5 w-5" />
                    ) : (
                      <Moon className="h-5 w-5" />
                    )}
                  </Button>
                </div>

                <Separator className="my-2" />

                {filteredNavItems.map((item, index) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) => `
                      flex items-center gap-3 p-3 rounded-lg transition-all
                      ${
                        isActive
                          ? "bg-primary/10 text-primary font-semibold"
                          : "hover:bg-secondary"
                      }
                    `}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </NavLink>
                ))}

                <Button
                  variant="destructive"
                  className="mt-4"
                  onClick={() => setIsOpen(false)}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Button>
              </div>
            </SheetContent>
          </Sheet>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            {filteredNavItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => `
                  flex items-center gap-2 p-2 rounded-lg transition-all font-inter font-extralight hover:font-semibold
                  ${
                    isActive
                      ? "text-primary font-medium underline underline-offset-4 decoration-2"
                      : "hover:text-primary"
                  }
                `}
              >
                <motion.div
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </motion.div>
              </NavLink>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-8 w-8 rounded-full"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <NavLink to='/profile' className="flex items-center gap-2 p-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <p className="text-sm font-medium">{user.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {user.email}
                    </p>
                    <p
                      className={cn(
                        "text-xs font-semibold capitalize",
                        user.role === "admin"
                          ? "text-red-600"
                          : "text-green-600"
                      )}
                    >
                      {user.role}
                    </p>
                  </div>
                </NavLink>
                <Separator />
                <Button variant="destructive" className="w-full mt-2">
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Button>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
