import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-white text-black antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
