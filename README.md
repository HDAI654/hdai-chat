# 💬 HDAI Chat App

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Next.js](https://img.shields.io/badge/Next.js-20232A?style=for-the-badge&logo=next.js&logoColor=61DAFB)
![Bootstrap](https://img.shields.io/badge/Bootstrap-20232A?style=for-the-badge&logo=bootstrap&logoColor=61DAFB)

---

**HDAI Chat** is a modern real-time chat application built using **Next.js**, **React**, and **Bootstrap 5**. It provides a clean, responsive UI for sending and receiving messages in real-time, with authentication.

---

## ⚙️ Tech Stack

- **Framework:** Next.js (App Router)
- **Library:** React
- **Styling:** Bootstrap 5, CSS Modules
- **API:** MockAPI for message storage
- **Authentication:** Cookie-based client check

---

## 📁 Project Structure

```
hdai-chat-app/
├── app/
│ └── page.js # Main app entry page
├── components/
│ ├── ChatBox.js # Message display component
│ ├── HomePage.js # Main chat page container
│ ├── MessageInput.js # Input for sending messages
│ └── login.js # Login page component
├── public/
│ ├── css/chat.module.css # CSS Modules for chat styling
│ └── css/login.module.css # CSS Modules for login styling
│ └── js/auth.js # Utility functions for auth
└── README.md
```


---

## ✨ Features

- 💬 Real-time chat interface (polling every second)
- 🔐 User session validation using cookies
- 📨 Sending and receiving messages via MockAPI
- 🔁 Automatic scroll to the latest message
- 🧍 User messages highlighted differently from others
- 📱 Responsive design using Bootstrap 5

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/HDAI654/hdai-chat.git
cd hdai-chat
```

### 2. Install dependencies
```bash
npm install
# or
yarn install
```

### 3. Run the development server
```bash
npm run dev
# or
yarn dev
```

### 4. Open the app in your browser
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## LICENSE
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.