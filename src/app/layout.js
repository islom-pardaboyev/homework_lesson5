import "./globals.css";
import 'react-medium-image-zoom/dist/styles.css'
import MainContext from './context/MainContext'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-white text-black antialiased`}
      >
        <MainContext>
        <ToastContainer/>
        {children}
        </MainContext>
      </body>
    </html>
  );
}
