import { useForm } from "react-hook-form";
import { motion } from "motion/react";
import { Loader2 } from "lucide-react";
import { ContactProps } from "@/types/contact";
import IconTile from "@/components/Footer/IconTile";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting },
  } = useForm<ContactProps>();

  const onSubmit = (data: ContactProps) => {
    console.log(data);
    reset();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="container mx-auto max-w-6xl px-2 xl:px-0 md:py-10"
    >
      <motion.h2
        variants={itemVariants}
        className="font-playfair text-2xl font-semibold text-primary"
      >
        Contact Us
      </motion.h2>

      <motion.section
        variants={containerVariants}
        className="grid md:grid-cols-8 xl:grid-cols-12 gap-2 py-3 w-full"
      >
        <motion.div
          variants={itemVariants}
          className="hidden md:block col-span-2"
        >
          <IconTile />
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="hidden md:col-span-1 xl:flex justify-center items-center"
        >
          <Separator orientation="vertical" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="md:col-span-6 xl:col-span-9"
        >
          <motion.h2
            variants={itemVariants}
            className="font-playfair text-xl font-semibold text-primary"
          >
            Any Query!
          </motion.h2>

          <motion.form
            variants={containerVariants}
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5 pt-3"
          >
            <motion.div variants={itemVariants}>
              <Wrapper>
                <Label className="font-inter">Email</Label>
                <Input
                  type="email"
                  {...register("email", { required: "This field is required" })}
                />
              </Wrapper>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Wrapper>
                <Label className="font-inter">Subject</Label>
                <Input
                  type="text"
                  {...register("subject", {
                    required: "This field is required",
                  })}
                />
              </Wrapper>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Wrapper>
                <Label className="font-inter">Query</Label>
                <Textarea
                  {...register("query")}
                  className="max-h-[200px] min-h-[150px]"
                />
              </Wrapper>
            </motion.div>

            <motion.section
              variants={itemVariants}
              className="flex justify-end"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="min-w-[100px]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Submit"
                  )}
                </Button>
              </motion.div>
            </motion.section>
          </motion.form>
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

type WrapperProps = {
  children: React.ReactNode;
};

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <motion.div whileHover={{ scale: 1.01 }} className="flex flex-col gap-1.5">
      {children}
    </motion.div>
  );
};

export default Contact;
