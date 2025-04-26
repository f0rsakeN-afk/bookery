import { Button } from "@/components/ui/button";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto max-w-6xl px-2 xl:px-0 flex items-center justify-center flex-col h-dvh">
     <div className="flex flex-col space-y-3 items-center">
     <DotLottieReact
        src="https://lottie.host/f3c401d9-1080-4913-8452-cffdd23bfa8f/d3C9UUItWH.lottie"
        loop
        autoplay
        className=" w-[400px] md:w-[700px] h-[400px]"
      />
      <h2 className="font-medium font-inter text-xl text-center text-primary/80">
        The Route you're trying to access could not be found.
      </h2>
      <Button className="flex items-center gap-1 w-[150px]" onClick={() => navigate("/")}>
        Go Back <ChevronLeft />
      </Button>
     </div>
    </div>
  );
};

export default PageNotFound;
