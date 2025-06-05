import './globals.css';
import Navbar from '@/components/Navbar/Navbar'; // Thanks to index.js

import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: 'My Next App',
  description: 'A simple Next.js site',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
