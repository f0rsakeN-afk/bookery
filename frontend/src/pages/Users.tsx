import React from "react";
import { motion } from "motion/react";
import { CiWarning } from "react-icons/ci";
import { useGetAllUsers } from "@/services/dashboard";
import { user } from "@/types/dashboard";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import UsersSkeleton from "@/components/users/Loader";

const rowVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const Users: React.FC = () => {
  const { data: userData, isLoading, isError } = useGetAllUsers();

  if (isLoading) return <UsersSkeleton />;

  if (isError) {
    return (
      <div className="container mx-auto max-w-6xl px-2 xl:px-0 my-10">
        <Alert variant="destructive">
          <CiWarning className="h-5 w-5" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Failed to load users. Please try again later.
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  if (!userData || userData.results === 0) {
    return (
      <div className="container mx-auto max-w-6xl px-2 xl:px-0 my-10">
        <Alert>
          <AlertTitle>No Users Found</AlertTitle>
          <AlertDescription>
            There are currently no users to display.
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-6xl px-2 xl:px-0 xl:my-10">
      <h1 className="text-2xl sm:text-3xl font-bold font-playfair text-primary/90 mb-6">
        All Users
      </h1>

      <div className="overflow-x-auto rounded-xl border">
        <Table>
          <TableCaption>
            A list of all products listed on{" "}
            <span className="font-semibold text-yellow-500">SnapKart</span>
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Location</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {userData.data &&
              userData.data.map((user: user) => (
                <motion.tr
                  key={user._id}
                  initial="hidden"
                  animate="visible"
                  variants={rowVariant}
                  transition={{ duration: 0.2 }}
                >
                  <TableCell className="font-medium capitalize">
                    {user.name}
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone || "N/A"}</TableCell>
                  <TableCell>{user.location || "N/A"}</TableCell>
                </motion.tr>
              ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Users;
