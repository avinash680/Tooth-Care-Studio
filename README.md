# 🦷 Tooth Care Studio

> A premium, full-stack dental clinic management and appointment booking platform.

Tooth Care Studio is a state-of-the-art web application designed to connect patients with top-tier dental clinics in Chandigarh and Panchkula. It offers detailed clinical information, service catalogs, patient testimonials, blogs, and a seamless, hassle-free booking platform.

---

## 🚀 Key Features

*   **Premium Visuals & UX**: Custom-designed responsive layouts utilizing modern styling, smooth micro-interactions, and beautiful typography.
*   **Direct Bookings**: A simplified booking system allowing patients to secure appointments directly.
*   **Automatic Email Confirmations**: Utilizes Nodemailer on the backend to immediately send confirmation emails to the patient and alert notifications to the clinic administration.
*   **Dual Clinic Operations**: Configured for multiple clinic branches, allowing patients to select their preferred location (Chandigarh or Panchkula).
*   **Informative Blog & Guides**: Built-in oral care tips and guides to help patients maintain healthy smiles.
*   **Legal Compliance**: Fully designed and integrated pages for Privacy Policy and Terms & Conditions.

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend** | React (v19) + Vite | High-performance, fast-loading user interface |
| **Styling** | Tailwind CSS | Utility-first responsive design framework |
| **Icons** | Lucide React + React Icons | Clean and modern vector icon packs |
| **Routing** | React Router DOM (v7) | Declarative client-side routing |
| **Backend** | Node.js + Express.js | Robust REST API for booking management |
| **Notifications** | Nodemailer | Transactional email dispatch (Gmail SMTP) |

---

## 📂 Project Structure

```text
Tooth Care Studio/
├── backend/                   # Node.js + Express Server
│   ├── controllers/           # Request handlers (booking logic)
│   ├── routes/                # API routes
│   ├── package.json           # Backend dependencies & scripts
│   └── server.js              # Server entry point
├── frontend/                  # React client application (Vite-powered)
│   ├── src/
│   │   ├── components/        # Reusable UI & Layout components
│   │   ├── features/          # Feature-based code (e.g., appointments)
│   │   ├── pages/             # Page components (Home, About, Services, Contact, etc.)
│   │   └── App.jsx            # Main app router
│   ├── index.html             # Client HTML template
│   └── package.json           # Frontend dependencies & scripts
└── README.md                  # Master documentation
```

---

## ⚙️ Environment Configuration

### Backend Setup (`backend/.env`)

Create a `.env` file in the `backend/` directory with the following variables:

```ini
EMAIL_USER=your-email@gmail.com        # Gmail address used to send notifications
EMAIL_PASS=your-app-password           # App Password generated from Google Account
ADMIN_EMAIL=admin-email@gmail.com      # Email receiving appointment requests
PORT=8080                              # Server listening port (Defaults to 8080)
```

> [!IMPORTANT]
> For email dispatching to work, ensure you generate a Google App Password rather than using your raw account password.

### Frontend Setup

The frontend uses `import.meta.env.VITE_API_URL` to point to the backend. By default, if the variable is not set, it falls back to `http://localhost:8080`.

---

## 💻 Getting Started

### Prerequisites

*   [Node.js](https://nodejs.org/) (v16.0.0 or higher recommended)
*   npm (installed automatically with Node.js)

### Step 1: Run the Backend Server

1. Open your terminal and navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Express server:
   ```bash
   npm start
   ```
   The backend will start running at `http://localhost:8080`.

### Step 2: Run the Frontend App

1. Open a new terminal window and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   The application will be accessible locally, typically at `http://localhost:5173`.

---

## 🛡️ License

This project is licensed under the ISC License. © 2026 Tooth Care Studio. All rights reserved.
