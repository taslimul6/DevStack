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




### Answar to the ques:

1. Jsx: Jsx is javascript xml, which is similar to html but not accual html. This is used by react. On react we write codes on JSX file. react convert the jsx into javascript element and manupulate the dom and show the result on accual UI. 

Jsx used on React to similify the coding experiance. where a developer can write html , js code inside a single file. this help to manage the codebase.

2. The differance betten Props and State: props carries data from parents to clild but child can not change the data. on the other hand state can carries data from parents to child and clild can change the data useing Set function and state will rerender the ui.

3. useState is a react hook that used to manage state and rerander the ui .. I have used useState in multiple places. fristly on Promise to avoit rerendering fetching data, then I used it on technology card section. Where useState used to render the ui after adding or removing any cards.

4. useEffect is a hook of react similar to the use() hook , this is useful when we need to load or fatch data from a promise. using Promise we fetch data to a promise function then when we need to use the data we have to put it as argument of useEffect(). then the json data is useble in react.

5. In react, each map item need an unique Key , so react can tract which item changes or added or updated efficiently. 

6. Conditional randering is render specific html element to ui depends on conditions. like: in our project when a card button clicked we rander the button to blocked. 

7. We can pass data from parent to child using Props.... as react is unidirectional : to send data from child to parent we ned to declare a state on a commmon component that share both by child and parent... using state prop child can manipulate the data and send it from common to the parent. 


