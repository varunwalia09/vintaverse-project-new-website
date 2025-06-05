import './globals.css';
import Navbar from '../components/Navbar/Navbar'; // Thanks to index.js

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
      </body>
    </html>
  );
}
