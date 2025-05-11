import React from "react";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { LogoImage } from "@/utils/ImageExports";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  UserPlus,
  ShoppingCart,
  Package,
  Gift,
  CreditCard,
  Heart,
  Star,
  Truck,
  Tags,
  Smartphone,
} from "lucide-react";
import { RegisterProps } from "@/types/auth";

const Register: React.FC = () => {
  const { register, handleSubmit } = useForm<RegisterProps>();

  const validateForm = (data: RegisterProps) => {
    if (!data.name) {
      toast.warning("Username is required");
      return;
    }
    if (!data.email) {
      toast.warning("Email is required");
      return;
    }
    if (!data.password) {
      toast.warning("Password is required");
      return;
    }
    if (data.password.length < 6) {
      toast.warning("Password must be at least 6 characters");
      return;
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email)) {
      toast.warning("Invalid email address");
      return;
    }
    if (data.password !== data.passwordConfirm) {
      toast.warning("Passwords don't match");
      return;
    }
    console.log(data);
    toast("Registration successful!");
  };

  return (
    <div className="bg-gradient-to-br from-figmaPrimary/20 to-figmaPrimary/40 dark:from-gray-900 dark:to-gray-800 min-h-dvh flex items-center justify-center px-2 xl:px-0 font-inter">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto max-w-6xl h-[70vh] rounded-4xl grid grid-cols-1 md:grid-cols-2 overflow-hidden bg-white dark:bg-gray-900 shadow-xl"
      >
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="order-2 md:order-1 p-8 flex flex-col justify-center"
        >
          <div className="max-w-md mx-auto w-full">
            <h1 className="text-2xl font-bold mb-2 dark:text-white">
              Create Your Account
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Join the Snapkart community today
            </p>

            <form onSubmit={handleSubmit(validateForm)} className="space-y-4">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="space-y-2"
              >
                <label className="text-sm font-medium dark:text-white">
                  Username
                </label>
                <Input
                  type="text"
                  {...register("name")}
                  className="w-full dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                  placeholder="Choose a username"
                />
              </motion.div>

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="space-y-2"
              >
                <label className="text-sm font-medium dark:text-white">
                  Email
                </label>
                <Input
                  type="email"
                  {...register("email")}
                  className="w-full dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                  placeholder="Enter your email"
                />
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="space-y-2"
                >
                  <label className="text-sm font-medium dark:text-white">
                    Password
                  </label>
                  <Input
                    type="password"
                    {...register("password")}
                    className="w-full dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                    placeholder="Create password"
                  />
                </motion.div>

                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="space-y-2"
                >
                  <label className="text-sm font-medium dark:text-white">
                    Confirm Password
                  </label>
                  <Input
                    type="password"
                    {...register("passwordConfirm")}
                    className="w-full dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                    placeholder="Confirm password"
                  />
                </motion.div>
              </div>

              <Button
                type="submit"
                className="w-full bg-figmaPrimary hover:bg-figmaPrimary/90 dark:bg-figmaPrimary/80 dark:hover:bg-figmaPrimary/70 transition-all"
              >
                <UserPlus className="w-4 h-4 mr-2" />
                Join Snapkart
              </Button>

              <p className="text-center text-sm dark:text-gray-400">
                Already a member?{" "}
                <Link
                  to="/login"
                  className="text-figmaPrimary hover:underline font-medium dark:text-primary"
                >
                  Sign in here
                </Link>
              </p>
            </form>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="order-1 md:order-2 bg-gradient-to-br from-figmaPrimary to-figmaPrimary/80 dark:from-gray-800 dark:to-gray-700 md:rounded-l-4xl p-8 flex flex-col justify-between overflow-hidden relative"
        >
          {/* Background Elements */}
          <div className="absolute inset-0">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/4 right-1/4 w-32 h-32 bg-white/10 rounded-full blur-xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-white/10 rounded-full blur-xl"
            />
          </div>

          <div className="relative z-10">
            <img
              src={LogoImage}
              alt="Snapkart logo"
              className="w-44 mb-3 md:mb-8 contrast-200"
            />

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-white space-y-4"
            >
              <h2 className="text-3xl md:text-4xl font-bold leading-tight hidden md:block">
                Start Your Shopping <br />
                <span className="">Journey With Us</span>
              </h2>
              <p className="text-white/80 text-lg max-w-md hidden md:block">
                Join our community of smart shoppers and unlock a world of
                amazing deals
              </p>
            </motion.div>

            {/* Floating Icons */}
            <div className="relative h-60 mt-8 hidden md:block">
              {[
                { Icon: ShoppingCart, position: "top-0 left-10", delay: 0 },
                { Icon: Package, position: "top-10 right-20", delay: 0.2 },
                { Icon: Gift, position: "bottom-0 left-20", delay: 0.4 },
                {
                  Icon: CreditCard,
                  position: "bottom-20 right-10",
                  delay: 0.6,
                },
                { Icon: Heart, position: "top-20 left-1/2", delay: 0.8 },
                { Icon: Star, position: "bottom-10 left-1/3", delay: 1 },
                { Icon: Truck, position: "top-1/2 right-0", delay: 1.2 },
                { Icon: Tags, position: "bottom-1/3 right-1/4", delay: 1.4 },
                { Icon: Smartphone, position: "top-1/3 left-0", delay: 1.6 },
              ].map(({ Icon, position, delay }, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${position} bg-white/20 p-2 rounded-lg backdrop-blur-sm`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: [0, -10, 0],
                  }}
                  transition={{
                    delay,
                    duration: 0.5,
                    y: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                >
                  <Icon className="w-5 h-5 text-white" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Footer Stats */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="hidden md:grid grid-cols-3 gap-4 relative z-10 mt-8 "
          >
            {[
              { number: "10K+", label: "Products" },
              { number: "2M+", label: "Customers" },
              { number: "150+", label: "Brands" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl font-bold text-white">
                  {stat.number}
                </div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Register;
