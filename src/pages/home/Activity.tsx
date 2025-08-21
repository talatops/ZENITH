import { Avatar } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { mockActivity } from "./mockData";

const Activity = () => {
  const grouped = {
    Today: mockActivity,
  };

  return (
    <div className="w-full">
      <div className="mb-6 flex items-center gap-3">
        <Input placeholder="Search activity..." className="max-w-sm bg-card border-border" />
        <Button variant="outline" size="sm">All</Button>
        <Button variant="outline" size="sm">Comments</Button>
        <Button variant="outline" size="sm">Updates</Button>
      </div>

      <Card className="bg-card-gradient border border-border rounded-2xl">
        <CardHeader>
          <CardTitle className="text-lg">Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[60vh] pr-4">
            <div className="space-y-8">
              {Object.entries(grouped).map(([day, items]) => (
                <div key={day}>
                  <div className="text-xs uppercase tracking-wide text-muted-foreground mb-3">{day}</div>
                  <ul className="relative pl-6">
                    <div className="absolute left-3 top-0 bottom-0 w-px bg-border" />
                    {items.map((a) => (
                      <li key={a.id} className="flex items-start gap-3 mb-4">
                        <div className="relative z-10">
                          <Avatar className="w-6 h-6 bg-muted text-xs font-bold" aria-label={a.user}>{a.user[0]}</Avatar>
                        </div>
                        <div className="flex-1">
                          <div className="text-sm"><span className="font-semibold">{a.user}</span> {a.action}</div>
                          <div className="text-xs text-muted-foreground">{a.time}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};

export default Activity;
