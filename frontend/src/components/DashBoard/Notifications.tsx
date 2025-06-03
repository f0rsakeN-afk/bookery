import { getAllMessagesResponse } from "@/types/contact";
import { formatDistanceToNow } from "date-fns";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Trash } from "lucide-react";
import { Button } from "../ui/button";
import { useDeleteMessages } from "@/services/contact";

interface NotificationsProps {
  contactData?: getAllMessagesResponse;
}

const Notifications = ({ contactData }: NotificationsProps) => {
  const deleteMutation = useDeleteMessages();

  const messages = contactData?.data ?? [];

  if (messages.length === 0) {
    return (
      <section className="p-6 text-center text-sm text-muted-foreground font-inter">
        No new messages.
      </section>
    );
  }

  return (
    <section aria-label="Notifications" className="w-80">
      <ScrollArea className="h-72 p-4">
        <div className="space-y-2 font-inter">
          {messages.map((msg, i) => (
            <article
              key={msg._id}
              className="space-y-1"
              aria-label={`Message from ${msg.user.name}`}
            >
              <header className="flex justify-between gap-2">
                <section>
                  <h3 className="text-[14px] font-semibold text-primary capitalize">
                    {msg.user.name}
                  </h3>
                  <p className="text-[12px] text-muted-foreground">
                    {msg.user.email}
                  </p>
                </section>

                <div className="flex flex-col items-end gap-1">
                  <time
                    dateTime={new Date(msg.createdAt).toISOString()}
                    className="text-[11px] text-gray-400"
                  >
                    {formatDistanceToNow(new Date(msg.createdAt), {
                      addSuffix: true,
                    })}
                  </time>
                  <Button
                    variant="ghost"
                    size="icon"
                    disabled={deleteMutation.isPending}
                    className="h-4 w-4 p-0  hover:text-destructive text-red-400"
                    onClick={() => deleteMutation.mutate({ id: msg._id })}
                  >
                    <Trash className="h-3 w-3" />
                  </Button>
                </div>
              </header>

              <h4 className="text-[14px] font-medium text-foreground">
                {msg.subject}
              </h4>

              <p className="text-[10px] text-muted-foreground line-clamp-3 leading-relaxed">
                {msg.query.length > 200
                  ? `${msg.query.slice(0, 200)}...`
                  : msg.query}
              </p>

              {i !== messages.length - 1 && <Separator className="mt-3" />}
            </article>
          ))}
        </div>
      </ScrollArea>
    </section>
  );
};

export default Notifications;
