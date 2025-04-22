import IconTile from "@/components/Footer/IconTile";
import { useForm } from "react-hook-form";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const { handleSubmit, register, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="container mx-auto max-w-6xl px-2 xl:px-0  md:py-10 ">
      <h2 className="font-playfair text-2xl font-semibold text-primary">
        Contact Us
      </h2>
      <section className="grid md:grid-cols-8 xl:grid-cols-12 gap-2 py-3 w-full ">
        <div className="hidden md:block col-span-2">
          <IconTile />
        </div>

        <div className="hidden  md:col-span-1 xl:flex justify-center items-center">
          <Separator orientation="vertical" />
        </div>

        <div className="md:col-span-6 xl:col-span-9 ">
          <h2 className="font-playfair text-xl font-semibold text-primary">
            Any Query!
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5 pt-3"
          >
            <Wrapper>
              <Label className="font-inter">Email</Label>
              <Input
                type="email"
                {...register("email", { required: "This field is required" })}
              />
            </Wrapper>

            <Wrapper>
              <Label className="font-inter">Subject</Label>
              <Input
                type="text"
                {...register("subject", { required: "This field is required" })}
              />
            </Wrapper>

            <Wrapper>
              <Label className="font-inter">Query</Label>
              <Textarea {...register("query")} className="max-h-[200px] min-h-[150px]" />
            </Wrapper>
            <section className="flex justify-end">
              <Button type="submit">Submit</Button>
            </section>
          </form>
        </div>
      </section>
    </div>
  );
};

type WrapperProps = {
  children: React.ReactNode;
};

const Wrapper = ({ children }: WrapperProps) => {
  return <div className="flex flex-col gap-1.5">{children}</div>;
};

export default Contact;
