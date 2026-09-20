# DevStack 

DevStack is a modern web application that allows developers to **build and manage their own custom technology stack**.

Explore different technologies, select the ones you work with, and create your own personalized stack list based on your skills, preferences, and expertise.

## ✨ Features

* **Add Technologies** — Add any technology to your personal stack list.
* **Remove Technologies** — Remove individual technologies from your stack.
* **Responsive Design** — Works smoothly across desktop, tablet, and mobile devices.
* **Fast & Modern UI** — Built with React and Vite for a fast development experience.
* **Modern Components** — Styled using Tailwind CSS and DaisyUI.

## 🛠️ Technologies Used

* **React** — Frontend UI development
* **TypeScript** — Type-safe development
* **Vite** — Fast build tool and development environment
* **Tailwind CSS** — Utility-first CSS framework
* **DaisyUI** — Tailwind CSS component library
* **React Icons** — Icons used throughout the interface
* **React Toastify** — Toast notifications
* **React Suspense / use()** — Handling asynchronous technology data
* **JavaScript Fetch API** — Fetching technology data from `data.json`

## 📂 Project Structure

```text
src/
├── components/
│   ├── Technologies/
│   │   ├── AvailableTech/
│   │   │   └── TechCard.tsx
│   │   ├── AvailableTech.tsx
│   │   ├── SelectedCard.tsx
│   │   └── EmptyCard.tsx
│   └── ...
├── type.ts
├── App.tsx
└── main.tsx

public/
└── data.json
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Navigate to the project

```bash
cd devstack
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available on the local development server provided by Vite.







