import React from "react";
import { MessageSquare, Smartphone } from "lucide-react";
import { Separator } from "../ui/separator";
import { qrcode } from "@/utils/ImageExports";

const Placeholder: React.FC = () => {
  return (
    <div className="bg-gray-100 rounded dark:bg-neutral-900 p-4 font-inter flex flex-col space-y-2">
      <section className="flex items-center justify-between">
        <section>
          <h3 className="text-xs pb-1 text-muted-foreground">Sold by</h3>
          <h2 className="text-sm text-yellow-500 font-semibold tracking-wider">
            SnapKart
          </h2>
        </section>
        <h3 className="flex items-center gap-0.5 text-blue-500 font-semibold text-sm cursor-pointer">
          <MessageSquare className="h-5 w-5" /> Chat
        </h3>
      </section>
      <Separator />

      <section className="grid grid-cols-3 text-center gap-1">
        <div className="space-y-2">
          <h3 className="text-xs text-muted-foreground">
            Positive Seller Ratings
          </h3>
          <span className="text-primary/80">88%</span>
        </div>

        <div className="space-y-2 flex justify-between flex-col">
          <h3 className="text-xs text-muted-foreground">Ship on Time</h3>
          <span className="text-primary/80">100%</span>
        </div>
        <div className="space-y-2 flex justify-between flex-col">
          <h3 className="text-xs text-muted-foreground">Chat Response Rate</h3>
          <span className="text-muted-foreground text-xs">NAN</span>
        </div>
      </section>

      <Separator />
      <section className="text-center flex flex-col items-center">
        <img
          src={qrcode}
          alt="qr image"
          className="rounded-md h-44 w-full"
          loading="lazy"
        />
        <h4 className="flex items-center gap-1 text-center pt-1 text-xs text-muted-foreground">
          <Smartphone className="h-5 w-5" /> Scan with Mobile
        </h4>
      </section>
      <Separator />
      <h2 className="uppercase text-blue-500 font-semibold hover:underline tracking-wide text-center cursor-pointer">
        Go to store
      </h2>
    </div>
  );
};

export default Placeholder;
