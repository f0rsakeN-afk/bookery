import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "motion/react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { useUpdatePassword } from "@/services/user";
import { toast } from "sonner";
import { useLogout } from "@/services/auth";

interface PasswordFormData {
  currentPassword: string;
  password: string;
  passwordConfirm: string;
}

const PasswordForm: React.FC = () => {
  const { register, handleSubmit, /* formState: { errors } */ watch, reset } =
    useForm<PasswordFormData>();

  const { user } = useAuth();

  /*   console.log(user) */
  const updatePasswordMutation = useUpdatePassword();
  const logoutMutation = useLogout();

  const onSubmit = (data: PasswordFormData) => {
    if (!user?._id) {
      toast.error("User ID is missing. Cannot update password.");
      return;
    } /* 
    console.log(data); */

    updatePasswordMutation.mutate(
      {
        id: user._id!,
        currentPassword: data.currentPassword,
        password: data.password,
        passwordConfirm: data.passwordConfirm,
      },
      {
        onSuccess: () => {
          reset();
          logoutMutation.mutate();
        },
      }
    );
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="space-y-2">
        <Label htmlFor="currentPassword">Current Password</Label>
        <Input
          disabled={updatePasswordMutation.isPending}
          type="password"
          {...register("currentPassword", { required: true })}
          placeholder="Enter current password"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="newPassword">New Password</Label>
        <Input
          disabled={updatePasswordMutation.isPending}
          type="password"
          {...register("password", { required: true })}
          placeholder="Enter new password"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirmPassword">Confirm New Password</Label>
        <Input
          disabled={updatePasswordMutation.isPending}
          type="password"
          {...register("passwordConfirm", {
            required: true,
            validate: (value) =>
              value === watch("password") || "Passwords don't match",
          })}
          placeholder="Confirm new password"
        />
      </div>

      <Button
        type="submit"
        className="w-full md:w-auto"
        disabled={updatePasswordMutation.isPending}
      >
        Update Password
      </Button>
    </motion.form>
  );
};

export default PasswordForm;
