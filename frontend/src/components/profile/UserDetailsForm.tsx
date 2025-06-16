import React from "react";
import { useForm, Controller } from "react-hook-form";
import { motion } from "motion/react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAuth } from "@/context/AuthContext";
import { useGetUserDetails, useUpdateUserInfo } from "@/services/user";
import Loader from "../shared/Loader";

interface UserDetailsFormData {
  firstName: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
  occupation: string;
  company: string;
  timeZone: string;
  language: string;
}

const UserDetailsForm: React.FC = () => {
  const { user } = useAuth();
  const { data, isLoading } = useGetUserDetails(user?._id!);
  /*   console.log(data); */
  const useUpdateUserMutation = useUpdateUserInfo();

  const { register, handleSubmit, control } = useForm<UserDetailsFormData>({
    defaultValues: {
      firstName: data?.data.name || "",
      email: data?.data.email || "",
      phone: data?.data.phone || "",
      location: data?.data.location || "",
      bio: data?.data.bio || "",
      occupation: data?.data.occupation || "",
      company: data?.data.company || "",
      timeZone: data?.data.timeZone || "",
      language: data?.data.language || "",
    },
    values: {
      firstName: data?.data.name || "",
      email: data?.data.email || "",
      phone: data?.data.phone || "",
      location: data?.data.location || "",
      bio: data?.data.bio || "",
      occupation: data?.data.occupation || "",
      company: data?.data.company || "",
      timeZone: data?.data.timeZone || "",
      language: data?.data.language || "",
    },
  });

  if (isLoading) return <Loader />;

  const onSubmit = (formData: UserDetailsFormData) => {
    if (!user) return;
    const { phone, location, bio, occupation, company, timeZone, language } =
      formData;

    useUpdateUserMutation.mutate({
      id: user._id!,
      data: {
        phone,
        location,
        bio,
        occupation,
        company,
        timeZone,
        language,
      },
    });
  };

  const isPending = useUpdateUserMutation.isPending;

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input {...register("firstName")} disabled readOnly />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input {...register("email")} type="email" disabled readOnly />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input {...register("phone")} disabled={isPending} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input {...register("location")} disabled={isPending} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="occupation">Occupation</Label>
          <Input {...register("occupation")} disabled={isPending} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input {...register("company")} disabled={isPending} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="language">Preferred Language</Label>
          <Controller
            name="language"
            control={control}
            render={({ field }) => (
              <Select
                disabled={isPending}
                onValueChange={field.onChange}
                value={field.value}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="nep">Nepali</SelectItem>
                  <SelectItem value="es">Spanish</SelectItem>
                  <SelectItem value="fr">French</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="timezone">Timezone</Label>
          <Controller
            name="timeZone"
            control={control}
            render={({ field }) => (
              <Select
                disabled={isPending}
                onValueChange={field.onChange}
                value={field.value}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select timezone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="utc">UTC</SelectItem>
                  <SelectItem value="est">EST</SelectItem>
                  <SelectItem value="pst">PST</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="bio">Bio</Label>
        <Textarea
          {...register("bio")}
          className="max-h-40"
          disabled={isPending}
        />
      </div>

      <Button type="submit" className="w-full md:w-auto" disabled={isPending}>
        {isPending ? "Saving..." : "Save Info"}
      </Button>
    </motion.form>
  );
};

export default UserDetailsForm;
