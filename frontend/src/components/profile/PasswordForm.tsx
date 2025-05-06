import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "motion/react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface PasswordFormData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const PasswordForm: React.FC = () => {
  const { register, handleSubmit, /* formState: { errors } */ watch } = useForm<PasswordFormData>();

  const onSubmit = (data: PasswordFormData) => {
    console.log(data);
    // Handle password change
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
          type="password"
          {...register("currentPassword", { required: true })}
          placeholder="Enter current password"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="newPassword">New Password</Label>
        <Input
          type="password"
          {...register("newPassword", { required: true })}
          placeholder="Enter new password"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirmPassword">Confirm New Password</Label>
        <Input
          type="password"
          {...register("confirmPassword", {
            required: true,
            validate: (value) => value === watch("newPassword") || "Passwords don't match"
          })}
          placeholder="Confirm new password"
        />
      </div>

      <Button type="submit" className="w-full md:w-auto">
        Update Password
      </Button>
    </motion.form>
  );
};

export default PasswordForm;