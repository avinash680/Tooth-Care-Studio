# 🎨 Tooth Care Studio - Frontend Client

> The premium, fully responsive React client application for Tooth Care Studio.

This directory houses the React user interface, built with **Vite** for rapid hot-module reloading and optimized production bundles, and **Tailwind CSS** for a clean, cohesive, custom design.

---

## ✨ Features

- **Dynamic Homepage**: High-impact landing page featuring patient-first navigation, doctor highlight reels, testimonials, and detailed visual elements.
- **Service Directory**: Comprehensive listings for specialty care including Dental Implants, Root Canals, Smile Makeovers, Orthodontics, and more.
- **Interactive Booking Form**: Complete client-side validation for booking appointments at Chandigarh and Panchkula clinics. Uses `Lucide-React` visual indicators to report booking confirmation states.
- **Blog Interface**: Native components hosting educational oral care guides (e.g. "5 Daily Habits for Healthy Teeth") with micro-animations.
- **Fully Responsive Layout**: Built with a mobile-first philosophy to ensure the UI scales smoothly across all modern viewports (phones, tablets, and desktops).
- **Navigation Layouts**: Custom persistent header/footer layouts linking essential resources, clinics, social profiles, and privacy legal forms.

---

## 🛠️ Technology & Libraries

*   **Framework**: [React 19](https://react.dev/)
*   **Build Tool**: [Vite 8](https://vite.dev/)
*   **Routing**: [React Router DOM v7](https://reactrouter.com/)
*   **Styling**: [Tailwind CSS v3](https://tailwindcss.com/)
*   **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
*   **Sliders**: [Swiper v12](https://swiperjs.com/) for interactive touch-swipe carousel slideshows

---

## 📂 Source Code Structure

```text
frontend/
├── public/                 # Static assets (images, logos, favicon)
├── src/
│   ├── components/         # Global reusable UI blocks
│   │   └── Layout/         # Header (Navbar) and Footer components
│   ├── config/             # Environment configurations
│   ├── features/           # Feature folders
│   │   └── appointments/   # Appointment-booking forms and assets
│   ├── pages/              # Routed pages
│   │   ├── Home/           # Hero, ChooseUs, and main layout
│   │   ├── About/          # Clinic mission and doctor section
│   │   ├── Services/       # Dentistry services lists
│   │   ├── Contact/        # Location details & clinic hours
│   │   ├── PrivacyPolicy/  # Privacy legal form
│   │   └── TermsAndCondition/ # Terms and conditions legal form
│   ├── App.jsx             # Route dispatcher
│   └── main.jsx            # Entry point loading global styles
├── tailwind.config.js      # Tailwind style tokens and extensions
└── vite.config.js          # Vite optimization & compiler configurations
```

---

## 💻 Local Development Setup

### Installation

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install npm packages:
   ```bash
   npm install
   ```

### Start Development Server

Run the development command:
```bash
npm run dev
```

*   By default, the server will launch on `http://localhost:5173`.
*   Any edits made to code components will render instantly in the browser.

### Production Build

To compile high-performance build assets ready for deployment:
```bash
npm run build
```
The production bundle will be generated inside the `dist/` folder.

---

## ⚙️ Configuration

The application communicates with the backend server via `src/config/api.js`. It points to the local node server at `http://localhost:8080` by default.

To customize the backend URL in production, set the environment variable:
```bash
VITE_API_URL=https://your-backend-api.com
```
