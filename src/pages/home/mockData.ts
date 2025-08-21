export type TaskStatus = "todo" | "inprogress" | "done";

export interface Subtask {
  id: number;
  title: string;
  done: boolean;
}

export interface Task {
  id: number;
  type: string;
  title: string;
  description: string;
  due: string;
  status: TaskStatus;
  assignees: string[];
  watchers: string[];
  priority: string;
  priorityLevel: string;
  shared: boolean;
  comments: number;
  labels: string[];
  customFields: { estimate: string; environment: string };
  subtasks: Subtask[];
  dependencies: number[];
  attachments: string[];
  recurring: boolean;
}

export interface CommentItem {
  id: number;
  user: string;
  text: string;
  time: string;
}

export const mockUsers = [
  { name: "Alice", color: "bg-primary" },
  { name: "Bob", color: "bg-accent" },
  { name: "You", color: "bg-secondary" },
  { name: "Eve", color: "bg-pink-500" },
];

export const mockTasks: Task[] = [
  {
    id: 1,
    type: "Feature",
    title: "Design login page",
    description: "Create a modern login UI with OAuth. @Bob please review the Figma.",
    due: "2024-08-25",
    status: "todo",
    assignees: ["Alice"],
    watchers: ["Bob", "You"],
    priority: "High",
    priorityLevel: "Critical",
    shared: true,
    comments: 2,
    labels: ["UI", "Frontend"],
    customFields: { estimate: "3h", environment: "Web" },
    subtasks: [
      { id: 11, title: "Wireframe", done: true },
      { id: 12, title: "Implement form", done: false },
    ],
    dependencies: [],
    attachments: ["login-mockup.png"],
    recurring: false,
  },
  {
    id: 2,
    type: "Bug",
    title: "Fix real-time sync issue",
    description: "Socket disconnects randomly. @Alice can you check logs?",
    due: "2024-08-27",
    status: "inprogress",
    assignees: ["You", "Bob"],
    watchers: ["Eve"],
    priority: "Blocker",
    priorityLevel: "Blocker",
    shared: true,
    comments: 5,
    labels: ["Backend", "Critical"],
    customFields: { estimate: "2h", environment: "API" },
    subtasks: [
      { id: 21, title: "Reproduce bug", done: true },
      { id: 22, title: "Add reconnect logic", done: false },
    ],
    dependencies: [1],
    attachments: [],
    recurring: false,
  },
  {
    id: 3,
    type: "Epic",
    title: "Onboarding flow",
    description: "Document how to use the app. @Eve add video guide.",
    due: "2024-08-30",
    status: "done",
    assignees: ["You"],
    watchers: ["Alice", "Bob"],
    priority: "Medium",
    priorityLevel: "Major",
    shared: false,
    comments: 0,
    labels: ["Docs"],
    customFields: { estimate: "5h", environment: "Docs" },
    subtasks: [
      { id: 31, title: "Write docs", done: true },
      { id: 32, title: "Record video", done: true },
    ],
    dependencies: [],
    attachments: ["onboarding.pdf"],
    recurring: true,
  },
];

export const mockComments: Record<number, CommentItem[]> = {
  1: [
    { id: 1, user: "Bob", text: "Looks good! @Alice can you add tests?", time: "2m ago" },
    { id: 2, user: "Alice", text: "Sure! Also, let's use the new API.", time: "1m ago" },
  ],
  2: [
    { id: 1, user: "Eve", text: "This bug is critical!", time: "3m ago" },
    { id: 2, user: "You", text: "Working on it now.", time: "2m ago" },
  ],
  3: [
    { id: 1, user: "Bob", text: "Docs are clear!", time: "1m ago" },
  ],
};

export const mockActivity = [
  { id: 1, action: "created task", user: "You", time: "5m ago" },
  { id: 2, action: "commented on task", user: "Bob", time: "2m ago" },
  { id: 3, action: "completed subtask", user: "Alice", time: "1m ago" },
];

export const sections = [
  { key: "todo", label: "To Do" },
  { key: "inprogress", label: "In Progress" },
  { key: "done", label: "Done" },
];

export interface Project {
  id: string;
  name: string;
  description: string;
  color: string;
  taskCount: number;
  completedCount: number;
  members: string[];
  lastUpdated: string;
}

export const mockProjects: Project[] = [
  {
    id: "zenith-app",
    name: "ZENITH App",
    description: "Main application development",
    color: "bg-primary",
    taskCount: 24,
    completedCount: 18,
    members: ["You", "Alice", "Bob"],
    lastUpdated: "2 hours ago"
  },
  {
    id: "marketing-site",
    name: "Marketing Website",
    description: "Company website redesign",
    color: "bg-accent",
    taskCount: 12,
    completedCount: 8,
    members: ["You", "Eve"],
    lastUpdated: "1 day ago"
  },
  {
    id: "mobile-app",
    name: "Mobile App",
    description: "iOS and Android development",
    color: "bg-secondary",
    taskCount: 31,
    completedCount: 15,
    members: ["You", "Bob", "Alice"],
    lastUpdated: "3 hours ago"
  }
];
