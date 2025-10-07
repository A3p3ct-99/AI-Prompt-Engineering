# Modern To-Do List App

A beautiful, production-ready To-Do List application built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- ✅ **Add new tasks** with title and description
- ✏️ **Edit existing tasks** inline
- 🗑️ **Delete tasks** with smooth animations
- 👁️ **View task details** in a beautiful modal
- ✓ **Mark tasks as completed** with checkbox
- 🔍 **Filter tasks** by status (All / Active / Completed)
- 💾 **Persistent storage** using localStorage
- 📱 **Fully responsive** design (mobile + desktop)
- 🎨 **Modern UI/UX** inspired by Notion, Linear, and Apple Notes

## 🎨 Design Features

- Clean, minimal, and classic aesthetic
- Neutral color palette with soft shadows
- Glass morphism effects (backdrop blur)
- Smooth animations and transitions
- Rounded corners and hover effects
- Inter font for clean typography
- Consistent spacing and alignment
- Beautiful empty states

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (Static Export)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **State Management:** React Hooks (useState)
- **Storage:** localStorage (browser)

## 📦 Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build for Production

Generate a static export:

```bash
npm run build
```

The output will be in the `out` directory, ready to be deployed to any static hosting service.

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with Inter font
│   ├── page.tsx            # Main page with state management
│   └── globals.css         # Global styles and Tailwind
├── components/
│   ├── TaskForm.tsx        # Add/Edit task form
│   ├── TaskItem.tsx        # Individual task row
│   ├── TaskList.tsx        # List of tasks with animations
│   ├── FilterBar.tsx       # Filter buttons (All/Active/Completed)
│   └── TaskDetailModal.tsx # Task detail view modal
├── types/
│   └── index.ts            # TypeScript types
└── tailwind.config.ts      # Tailwind configuration
```

## 🎯 Component Architecture

### Reusable Components

1. **TaskForm** - Handles both adding and editing tasks with expandable UI
2. **TaskItem** - Displays individual task with actions (edit, delete, complete)
3. **TaskList** - Manages animated list of filtered tasks
4. **FilterBar** - Animated filter buttons with active state
5. **TaskDetailModal** - Full-screen modal for viewing task details

## 🎨 Color Palette

- **Background:** Gradient from gray-50 to gray-100
- **Cards:** White with 70% opacity + backdrop blur
- **Primary:** Gray-900 (buttons, text)
- **Accent:** Blue-500 (active states, links)
- **Success:** Green-500 (completed tasks)
- **Text:** Gray-900, Gray-700, Gray-500, Gray-400

## 🚀 Features in Detail

### Task Management

- Create tasks with optional descriptions
- Edit tasks inline without page reload
- Delete tasks with confirmation animation
- Toggle completion status with checkmark

### Filtering

- View all tasks
- Filter by active (incomplete) tasks
- Filter by completed tasks
- Real-time count badges

### UI/UX

- Smooth enter/exit animations
- Hover effects on all interactive elements
- Glass morphism cards
- Responsive grid layout
- Mobile-optimized touch targets
- Keyboard shortcuts (ESC to close modal)

### Data Persistence

- Automatic save to localStorage
- Data persists across browser sessions
- No backend required

## 📱 Responsive Design

- Mobile: Single column, optimized touch targets
- Tablet: Responsive grid, larger text
- Desktop: Maximum 4xl width container, hover effects

## 🎭 Animations

- **Page load:** Fade in with slide up
- **Task add:** Slide in from top
- **Task remove:** Slide out to left
- **Modal:** Scale + fade with backdrop blur
- **Filter change:** Smooth background slide
- **Checkbox:** Scale animation on check

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

Feel free to submit issues and pull requests!

---

Built with ❤️ using Next.js and Tailwind CSS
