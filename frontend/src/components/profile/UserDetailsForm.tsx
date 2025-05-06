import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "motion/react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface UserDetailsFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
  occupation: string;
  company: string;
  timezone: string;
  language: string;
  role: string;
}

const UserDetailsForm: React.FC = () => {
  const { register, handleSubmit, /* formState: { errors } */ } = useForm<UserDetailsFormData>();

  const onSubmit = (data: UserDetailsFormData) => {
    console.log(data);
    // Handle form submission
  };

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
          <Input {...register("firstName")} placeholder="Enter first name" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input {...register("lastName")} placeholder="Enter last name" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input {...register("email")} type="email" placeholder="Enter email" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input {...register("phone")} placeholder="Enter phone number" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input {...register("location")} placeholder="Enter location" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="occupation">Occupation</Label>
          <Input {...register("occupation")} placeholder="Enter occupation" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input {...register("company")} placeholder="Enter company name" />
        </div>

      

        <div className="space-y-2">
          <Label htmlFor="language">Preferred Language</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="es">Spanish</SelectItem>
              <SelectItem value="fr">French</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="timezone">Timezone</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select timezone" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="utc">UTC</SelectItem>
              <SelectItem value="est">EST</SelectItem>
              <SelectItem value="pst">PST</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="bio">Bio</Label>
        <Textarea {...register("bio")} placeholder="Tell us about yourself" />
      </div>

     

      <Button type="submit" className="w-full md:w-auto">
        Save Changes
      </Button>
    </motion.form>
  );
};

export default UserDetailsForm;