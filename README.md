# TaskFlow - Modern Productivity Web Application

A next-generation productivity and task management web application built with React, TypeScript, and modern web technologies. Features a sleek, GenZ-inspired design with 3D elements and real-time collaboration capabilities.

## 🚀 Live Demo

**URL**: [https://lovable.dev/projects/42b9b3c0-4011-437b-aba8-3193b882d7c7](https://lovable.dev/projects/42b9b3c0-4011-437b-aba8-3193b882d7c7)

## ✨ Features

### Core Functionality
- **Task Management**: Create, edit, and organize tasks with drag-and-drop Kanban boards
- **Real-time Collaboration**: Multi-user task editing with live presence indicators
- **Project Organization**: Group tasks into projects with different views (My Tasks, Shared, All)
- **Advanced Filtering**: Filter tasks by status, assignee, priority, and custom fields
- **Task Dependencies**: Link tasks with dependencies and subtasks
- **Time Tracking**: Built-in time estimation and tracking capabilities
- **File Attachments**: Upload and manage task-related documents and images
- **Recurring Tasks**: Set up automated recurring task creation
- **Custom Fields**: Add environment, priority levels, and custom metadata

### User Experience
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Dark/Light Theme**: Automatic theme switching with system preference detection
- **Glow Effects**: Interactive hover effects on buttons and cards
- **3D Integration Ready**: Spline 3D elements integration points
- **Smooth Animations**: Tailwind CSS animations and transitions
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

### Analytics & Insights
- **Activity Dashboard**: Track user activities and project progress
- **Team Collaboration**: User presence, comments, and watchers
- **Priority Management**: Visual priority indicators and sorting
- **Status Tracking**: Comprehensive task status management

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with Hooks and Suspense
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern, accessible component library
- **Radix UI** - Unstyled, accessible UI primitives
- **React Router** - Client-side routing
- **React Query** - Server state management
- **React Hook Form** - Performant form management
- **Lucide React** - Beautiful SVG icons
- **date-fns** - Date manipulation library
- **Recharts** - Chart and data visualization

### Backend (Integration Ready)
- **Supabase** - Backend-as-a-Service platform
  - PostgreSQL database with real-time subscriptions
  - Row Level Security (RLS) policies
  - Authentication and authorization
  - File storage and CDN
  - Edge functions for serverless compute
- **RESTful APIs** - Standard HTTP API endpoints
- **Real-time WebSocket** - Live collaboration features
- **File Upload** - Document and image management

### DevOps & Deployment
- **GitHub Actions** - CI/CD pipeline automation
- **Google Cloud Platform (GCP)** - Cloud infrastructure
- **Docker** - Containerization for consistent deployments
- **Vercel** - Edge network deployment (alternative)

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm
- Git
- Docker (for containerized deployment)

### Local Development Setup

```bash
# Clone the repository
git clone <YOUR_GIT_URL>
cd taskflow

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser at http://localhost:5173
```

### Environment Variables
```bash
# Create .env.local file
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 🐳 Docker Deployment

### Build Docker Image
```bash
# Build production image
docker build -t taskflow:latest .

# Run container
docker run -p 3000:3000 taskflow:latest
```

### Docker Compose
```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f
```

## ☁️ Cloud Deployment (GCP + GitHub Actions)

### GitHub Actions Workflow
The project includes automated CI/CD pipeline that:
- Runs tests and linting on pull requests
- Builds Docker images
- Deploys to Google Cloud Run
- Manages environment variables securely
- Handles database migrations

### GCP Services Used
- **Cloud Run**: Serverless container deployment
- **Cloud SQL**: PostgreSQL database (if not using Supabase)
- **Cloud Storage**: File and asset storage
- **Cloud CDN**: Global content delivery
- **Cloud Build**: Container image building

### Deployment Commands
```bash
# Deploy to GCP via GitHub Actions
git push origin main

# Manual deployment
gcloud run deploy taskflow \
  --image gcr.io/PROJECT_ID/taskflow:latest \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Hero.tsx        # Landing page hero section
│   ├── Features.tsx    # Features showcase
│   ├── TaskInterface.tsx # Task management demo
│   └── ...
├── pages/              # Route components
│   ├── Index.tsx       # Landing page
│   ├── Login.tsx       # Authentication
│   ├── Home.tsx        # Main application
│   └── home/           # Dashboard pages
│       ├── Projects.tsx
│       ├── TaskBoard.tsx
│       ├── Activity.tsx
│       └── ...
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── types/              # TypeScript type definitions
└── assets/             # Static assets
```

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
npm test             # Run test suite
```

## 🚀 Features Roadmap

### Completed ✅
- [x] Responsive landing page with glow effects
- [x] Task board with drag-and-drop functionality
- [x] User authentication flow
- [x] Project management system
- [x] Real-time collaboration indicators

### In Progress 🚧
- [ ] Supabase backend integration
- [ ] Real-time task synchronization
- [ ] File upload and attachment system
- [ ] Advanced filtering and search
- [ ] Team management features

### Planned 📋
- [ ] Mobile application (React Native)
- [ ] Offline functionality with sync
- [ ] Advanced analytics dashboard
- [ ] API rate limiting and caching
- [ ] Third-party integrations (Slack, Discord)

## 🤝 Contributing

### Development Workflow
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Standards
- Follow TypeScript best practices
- Use Prettier for code formatting
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

## 📝 Backend Integration

### Supabase Setup
To enable backend functionality:

1. **Connect to Supabase**: Click the green Supabase button in Lovable interface
2. **Database Schema**: Automatically generated tables for tasks, projects, users
3. **Authentication**: Email/password and social login options
4. **Real-time**: WebSocket connections for live updates
5. **File Storage**: Secure file uploads with CDN delivery

### API Endpoints
```typescript
// Task Management
GET    /api/tasks              # List tasks
POST   /api/tasks              # Create task
PUT    /api/tasks/:id          # Update task
DELETE /api/tasks/:id          # Delete task

// Project Management
GET    /api/projects           # List projects
POST   /api/projects           # Create project
PUT    /api/projects/:id       # Update project

// User Management
GET    /api/users/profile      # Get user profile
PUT    /api/users/profile      # Update profile
```

## 📊 Performance & Monitoring

- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Bundle Size**: Tree-shaking and code splitting
- **Error Tracking**: Integration with Sentry (optional)
- **Analytics**: User behavior tracking (privacy-focused)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **shadcn/ui** for the beautiful component library
- **Tailwind CSS** for the utility-first CSS framework
- **Supabase** for the backend infrastructure
- **Vercel** for seamless deployment experience

## 📞 Support

For support and questions:
- Create an issue in this repository
- Contact the development team
- Check the [documentation](https://docs.lovable.dev)

---

Built with ❤️ using modern web technologies for the next generation of productivity tools.