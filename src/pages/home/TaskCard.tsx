import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import type { Task, CommentItem } from "./mockData";
import { useState } from "react";

type Props = {
  task: Task;
  comments: CommentItem[];
};

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="text-base md:text-lg font-extrabold uppercase tracking-wide text-foreground">{children}</div>
);

const Chip = ({ children }: { children: React.ReactNode }) => (
  <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">{children}</span>
);

const DetailRow = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="flex items-center justify-between py-2">
    <div className="text-xs text-muted-foreground">{label}</div>
    <div className="text-xs">{children}</div>
  </div>
);

const TaskCard = ({ task, comments }: Props) => {
  const [status, setStatus] = useState(task.status);

  return (
    <Dialog>
      {/* Compact summary card shown on the board */}
      <DialogTrigger asChild>
        <div
          className="card-glow p-4 rounded-xl bg-card-gradient border border-border cursor-pointer hover:border-primary/50 transition-colors"
          aria-label={`Open task: ${task.title}`}
        >
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground border border-border uppercase tracking-wide">{task.type}</span>
                <span className="truncate font-semibold">{task.title}</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {task.labels.map(label => (
                  <span key={label} className="text-[10px] px-2 py-0.5 rounded-full bg-accent/20 text-accent">{label}</span>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-end gap-1 shrink-0">
              <span className="text-[10px] bg-muted text-muted-foreground px-2 py-0.5 rounded-full">{task.priorityLevel}</span>
              {task.due && <span className="text-[10px] text-muted-foreground">Due {task.due}</span>}
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-1">
              {task.assignees.map(a => (
                <Avatar key={a} className="w-6 h-6 bg-accent text-white text-xs font-bold" aria-label={a}>{a[0]}</Avatar>
              ))}
            </div>
            <div className="text-[10px] text-muted-foreground">{comments?.length ?? 0} comments</div>
          </div>
        </div>
      </DialogTrigger>

      {/* Centered modal with details */}
      <DialogContent className="w-[95vw] sm:max-w-5xl px-8 py-6 max-h-[90vh] overflow-y-auto">
        {/* Header row: title and status */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <DialogHeader className="text-left">
            <DialogTitle className="flex items-center gap-2">
              <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground border border-border">{task.type}</span>
              {task.title}
            </DialogTitle>
          </DialogHeader>
          <div className="flex items-center gap-2 min-w-[220px]">
            <Select value={status} onValueChange={(v: any) => setStatus(v)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todo">To Do</SelectItem>
                <SelectItem value="inprogress">In Progress</SelectItem>
                <SelectItem value="done">Done</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">Improve work item</Button>
          </div>
        </div>

        <Separator className="my-4" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Details */}
          <div className="space-y-8 lg:col-span-2">
            {/* Description */}
            <div>
              <SectionTitle>Description</SectionTitle>
              <div className="mt-2">
                {task.description ? (
                  <div className="text-sm text-muted-foreground leading-relaxed">{task.description}</div>
                ) : (
                  <Textarea placeholder="Add a description..." className="bg-card border-border" />
                )}
              </div>
            </div>

            {/* Subtasks */}
            <div>
              <SectionTitle>Subtasks</SectionTitle>
              {task.subtasks && task.subtasks.length > 0 ? (
                <ul className="mt-2 list-disc ml-4 space-y-1">
                  {task.subtasks.map(st => (
                    <li key={st.id} className={st.done ? "line-through text-muted-foreground" : ""}>{st.title}</li>
                  ))}
                </ul>
              ) : (
                <div className="mt-2 text-sm text-muted-foreground">Add subtask</div>
              )}
            </div>

            {/* Related work items */}
            <div>
              <SectionTitle>Related work items</SectionTitle>
              <div className="mt-2 text-sm text-muted-foreground">Add related work item</div>
            </div>

            {/* Activity */}
            <div>
              <SectionTitle>Activity</SectionTitle>
              <Tabs defaultValue="comments" className="mt-2">
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="comments">Comments</TabsTrigger>
                  <TabsTrigger value="history">History</TabsTrigger>
                  <TabsTrigger value="worklog">Work log</TabsTrigger>
                </TabsList>
                <TabsContent value="comments" className="mt-3">
                  <div className="bg-card-gradient border border-border rounded-xl p-4">
                    <ScrollArea className="h-72 pr-2">
                      <div className="space-y-2">
                        {(comments || []).map(c => (
                          <div key={c.id} className="flex items-start gap-2">
                            <Avatar className="w-7 h-7 bg-muted text-xs font-bold" aria-label={c.user}>{c.user[0]}</Avatar>
                            <div>
                              <span className="font-semibold text-xs mr-1">{c.user}</span>
                              <span className="text-xs text-muted-foreground">{c.time}</span>
                              <div className="text-sm mt-1"><span className="text-primary">{c.text}</span></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                    <div className="mt-3">
                      <Input placeholder="Add a comment... (try @mention)" aria-label="Add comment" />
                      <div className="flex gap-2 mt-2">
                        <Button variant="outline" size="sm">Who is working on this...?</Button>
                        <Button variant="outline" size="sm">Can I get more info...?</Button>
                        <Button variant="outline" size="sm">Status update...</Button>
                      </div>
                      <Button className="mt-2 w-full">Comment</Button>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="history" className="mt-3 text-sm text-muted-foreground">History is coming soon.</TabsContent>
                <TabsContent value="worklog" className="mt-3 text-sm text-muted-foreground">Work log is coming soon.</TabsContent>
                <TabsContent value="all" className="mt-3 text-sm text-muted-foreground">All activity is coming soon.</TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Right: Details Sidebar */}
          <div className="bg-card-gradient border border-border rounded-2xl p-5 h-max">
            <div className="font-semibold mb-2">Details</div>
            <Separator className="mb-2" />
            <DetailRow label="Assignee">
              {task.assignees.length ? (
                <div className="flex items-center gap-1">
                  {task.assignees.map(a => (
                    <Avatar key={a} className="w-5 h-5 bg-accent text-white text-[10px] font-bold" aria-label={a}>{a[0]}</Avatar>
                  ))}
                </div>
              ) : (
                <>Unassigned</>
              )}
            </DetailRow>
            <DetailRow label="Labels">
              {task.labels.length ? task.labels.join(", ") : "None"}
            </DetailRow>
            <DetailRow label="Parent">None</DetailRow>
            <DetailRow label="Due date">{task.due || "None"}</DetailRow>
            <DetailRow label="Team">None</DetailRow>
            <DetailRow label="Start date">None</DetailRow>
            <DetailRow label="Sprint">UC Sprint 1</DetailRow>
            <DetailRow label="Story point estimate">None</DetailRow>
            <Separator className="my-2" />
            <div className="space-y-2">
              <div className="text-xs font-semibold">Development</div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Create branch</Button>
                <Button variant="outline" size="sm">Create commit</Button>
              </div>
            </div>
            <Separator className="my-2" />
            <DetailRow label="Reporter">You</DetailRow>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TaskCard;
