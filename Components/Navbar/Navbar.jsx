'use client';
import Link from "next/link";
import "./Navbar.css"; // Optional: agar CSS file use karein

export default function Navbar() {
  return (
   <nav className="navbar">
  <div className="nav-links">
    <Link href="/" className="nav-link">Home</Link>
    <Link href="/project" className="nav-link">Project</Link>
    <Link href="/contact" className="nav-link">Contact</Link>
  </div>
</nav>

  );
}
