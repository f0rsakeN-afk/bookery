import { NavLink } from "react-router-dom";
import { motion } from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/context/Theme-provider";
import {
  Heart,
  Search,
  ShoppingCart,
  Menu,
  Moon,
  Sun,
  LayoutDashboard,
  LogOut,
  Info,
  Contact,
  ShieldQuestion,
  Box,
  BarChart3,
  ShoppingBag,
} from "lucide-react";
import Logo from "../shared/Logo";
import { Avatar, AvatarFallback } from "../ui/avatar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { useAuth } from "@/context/AuthContext";
import { useLogout } from "@/services/auth";

interface NavbarProps {
  hasScrolled: boolean;
}

interface NavItem {
  icon: React.ReactNode;
  name: string;
  path: string;
  requiresAdmin?: boolean;
  hideForAdmin?: boolean;
}

interface headerTopProps {
  name: string;
  path: string;
  icon: React.ReactNode;
}

const headerTopData: headerTopProps[] = [
  {
    name: "About",
    path: "/about",
    icon: <Info className="h-5 w-5" />,
  },
  {
    name: "Contact",
    path: "/contact",
    icon: <Contact className="h-5 w-5" />,
  },
  {
    name: "Privacy Policy",
    path: "/privacypolicy",
    icon: <ShieldQuestion className="h-5 w-5" />,
  },
];

const navItems: NavItem[] = [
  { icon: <Search className="h-5 w-5" />, name: "Search", path: "/search" },
  {
    icon: <Box className="h-5 w-5" />,
    name: "All Products",
    path: "/allproducts",
  },
  {
    icon: <Heart className="h-5 w-5" />,
    name: "Wishlist",
    path: "/wishlist",
    hideForAdmin: true,
  },
  {
    icon: <ShoppingCart className="h-5 w-5" />,
    name: "Cart",
    path: "/cart",
    hideForAdmin: true,
  },
  {
    icon: <LayoutDashboard className="h-5 w-5" />,
    name: "Dashboard",
    path: "/dashboard",
    requiresAdmin: true,
  },
  {
    icon: <ShoppingBag className="h-5 w-5" />,
    name: "Orders",
    path: "/order",
    requiresAdmin: true,
  },
  {
    icon: <BarChart3 className="h-5 w-5" />,
    name: "Analytics",
    path: "/analytics",
    requiresAdmin: true,
  },
];

const Navbar = ({ hasScrolled }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();
  const { user: contextUser } = useAuth();
  const mutation = useLogout();

  const filteredNavItems = navItems.filter((item) => {
    if (item.requiresAdmin && contextUser?.role !== "admin") return false;
    if (item.hideForAdmin && contextUser?.role === "admin") return false;
    return true;
  });

  return (
    <nav
      className={`
        bg-background/95 backdrop-blur-sm 
        transition-all duration-200
        ${hasScrolled ? "shadow-sm border-b" : ""}
      `}
    >
      <div className="container mx-auto max-w-6xl px-4 xl:px-0 py-4">
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
                <div className="flex items-center justify-between gap-3 p-4 bg-secondary rounded-lg">
                  <div className="flex items-center gap-3 capitalize">
                    <Avatar>
                      <AvatarFallback>
                        {contextUser?.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="font-medium capitalize">
                        {contextUser?.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {contextUser?.email}
                      </span>
                      <span
                        className={cn(
                          "text-xs capitalize font-semibold",
                          contextUser?.role === "admin"
                            ? "text-red-600"
                            : "text-green-600"
                        )}
                      >
                        {contextUser?.role}
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
                    key={item.name || index}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 p-3 rounded-lg transition-all ${
                        isActive
                          ? "bg-primary/10 text-primary font-semibold"
                          : "hover:bg-secondary"
                      }`
                    }
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </NavLink>
                ))}

                {headerTopData.map((el) => (
                  <NavLink
                    key={el.name}
                    to={el.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 p-3 rounded-lg transition-all ${
                        isActive
                          ? "bg-primary/10 text-primary font-semibold"
                          : "hover:bg-secondary"
                      }`
                    }
                  >
                    {el.icon}
                    <span>{el.name}</span>
                  </NavLink>
                ))}

                <Button
                  variant="destructive"
                  disabled={mutation.isPending}
                  className="mt-4"
                  onClick={() => {
                    setIsOpen(false);
                    mutation.mutate();
                  }}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  {mutation.isPending ? "Logging out" : "Logout"}
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
                  flex items-center gap-2 p-2 rounded-lg transition-all font-inter font-extralight hover:font-semibold ease-in-out
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
                  <Avatar className="h-8 w-8 capitalize">
                    <AvatarFallback>
                      {contextUser?.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <NavLink to="/profile" className="flex items-center gap-2 p-2">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="capitalize">
                      {contextUser?.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <p className="text-sm font-medium capitalize">
                      {contextUser?.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {contextUser?.email}
                    </p>
                    <p
                      className={cn(
                        "text-xs font-semibold capitalize",
                        contextUser?.role === "admin"
                          ? "text-red-600"
                          : "text-green-600"
                      )}
                    >
                      {contextUser?.role}
                    </p>
                  </div>
                </NavLink>
                <Separator />
                <Button
                  variant="destructive"
                  className="w-full mt-2"
                  disabled={mutation.isPending}
                  onClick={() => mutation.mutate()}
                >
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
