import { getAllMessagesResponse } from "@/types/contact";
import { formatDistanceToNow } from "date-fns";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

interface NotificationsProps {
  contactData?: getAllMessagesResponse;
}

const Notifications = ({ contactData }: NotificationsProps) => {
  const messages = contactData?.data ?? [];

  if (messages.length === 0) {
    return (
      <div className="p-4 text-sm text-muted-foreground font-inter">
        No new messages.
      </div>
    );
  }

  return (
    <ScrollArea className="h-64 w-80 p-4 ">
      <div className="space-y-4 font-inter">
        {messages.map((msg, i) => (
          <div key={msg._id} className="space-y-1 ">
            <div className="text-sm font-medium">{msg.subject}</div>
            <div className="text-xs text-muted-foreground">
              {msg.query.length > 100
                ? msg.query.slice(0, 200) + "..."
                : msg.query}
            </div>
            <div className="text-[10px] text-gray-400">
              {formatDistanceToNow(new Date(msg.createdAt), {
                addSuffix: true,
              })}
            </div>
            {i !== messages.length - 1 && <Separator />}
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};

export default Notifications;
