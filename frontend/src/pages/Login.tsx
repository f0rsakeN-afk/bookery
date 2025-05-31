import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { ShoppingBag } from "lucide-react";
import { LoginProps } from "@/types/auth";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LogoImage, carttransparent } from "@/utils/ImageExports";
import { useLogin } from "@/services/auth";

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    /*   formState: { errors }, */
  } = useForm<LoginProps>();

  const mutation = useLogin();

  const onSubmit = (data: LoginProps) => {
    /*     console.log(data); */
    /*     toast("Login successful!"); */
    mutation.mutate(data, { onSuccess: () => reset() });
  };

  const validateForm = (data: LoginProps) => {
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
    onSubmit(data);
  };

  return (
    <div className="bg-gradient-to-br from-figmaPrimary/20 to-figmaPrimary/40 dark:from-gray-900 dark:to-gray-800 min-h-dvh flex items-center justify-center px-2 xl:px-0 ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto max-w-6xl h-[70vh] rounded-4xl grid grid-cols-1 md:grid-cols-2 overflow-hidden bg-white dark:bg-gray-900 shadow-xl font-inter"
      >
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-gradient-to-br from-figmaPrimary to-figmaPrimary/80 dark:from-gray-800 dark:to-gray-700 md:rounded-r-4xl p-8 flex flex-col justify-between overflow-hidden"
        >
          <div className="">
            <img
              loading="lazy"
              src={LogoImage}
              alt="Snapkart logo"
              className="w-44 mb-4 contrast-200  dark:invert-0"
            />

            <div className="md:space-y-6">
              <h2 className="text-3xl font-bold text-white">
                Welcome to Snapkart
              </h2>
              <p className="text-white/90 text-lg hidden md:block">
                Your one-stop destination for all your shopping needs. Discover
                amazing deals on trending products across multiple categories.
              </p>
            </div>
            <img
              src={carttransparent}
              alt="carttransparent image"
              loading="lazy"
              className="md:h-96 xl:h-80 w-full p-4 hidden md:block"
            />
          </div>

          <div className="relative mt-8">
            <p className="text-white/80 text-sm ">
              Join millions of satisfied customers shopping with confidence
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="p-8 flex flex-col justify-center"
        >
          <div className="max-w-md mx-auto w-full">
            <h1 className="text-2xl font-bold mb-2 dark:text-white">Sign In</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Access your Snapkart account
            </p>

            <form onSubmit={handleSubmit(validateForm)} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium dark:text-white">
                  Email
                </label>
                <Input
                  type="email"
                  disabled={mutation.isPending}
                  {...register("email")}
                  className="w-full dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                  placeholder="Enter your email"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium dark:text-white">
                  Password
                </label>
                <Input
                  type="password"
                  disabled={mutation.isPending}
                  {...register("password")}
                  className="w-full dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                  placeholder="Enter your password"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className=""></div>
                <Link
                  to="/forgotpassword"
                  className="text-sm text-figmaPrimary hover:underline dark:text-primary"
                >
                  Forgot password?
                </Link>
              </div>

              <Button
                type="submit"
                disabled={mutation.isPending}
                className="w-full bg-figmaPrimary hover:bg-figmaPrimary/90 transition-all dark:bg-figmaPrimary/80 dark:hover:bg-figmaPrimary/70 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4 mr-2" />
                {mutation.isPending ? "Signing in..." : "Sign In"}
              </Button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400">
                    or
                  </span>
                </div>
              </div>

              <p className="text-center text-sm dark:text-gray-400">
                New to Snapkart?{" "}
                <Link
                  to="/register"
                  className="text-figmaPrimary hover:underline font-medium dark:text-primary"
                >
                  Create an account
                </Link>
              </p>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;
