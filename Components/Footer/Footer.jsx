'use client'; 

import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import Image from 'next/image';
import './Footer.css'; 

const Section = ({ title, items }) => (
  <div className="footer-section">
    <h3 className="footer-heading">
      {title}
      <AnimatedLine />
    </h3>
    <ul>
      {items.map((item) => (
        <li key={item.label}>
          {item.path ? (
            <Link href={item.path}>{item.label}</Link>
          ) : (
            item.label
          )}
        </li>
      ))}
    </ul>
  </div>
);

const AnimatedLine = () => (
  <span className="animated-line"></span>
);

const Footer = () => {
  return (
    <footer className="footer-fixed">
      <div className="footer-left">
        <Image 
          src="/assets/logo-light.svg" // Make sure this image is in the public folder
          alt="Logo"
          width={120}
          height={40}
          className="footer-logo"
        />
        <div className="vintaverse">
          <h1>All Right Reserved</h1>
          <p>© copyright 2025</p>
        </div>
      </div>

      <div className="footer-right">
        <div className="footer-sections">
          <Section 
            title="Navbar" 
            items={[
              { label: 'Project', path: '/project' },
              { label: 'Team', path: '/team' },
              { label: 'Contact', path: '/contact' }
            ]}
          />
          <Section 
            title="Services" 
            items={[
              { label: 'Design' },
              { label: 'Development' },
              { label: 'Marketing' }
            ]}
          />
          <Section 
            title="Resources" 
            items={[
              { label: 'Blog' },
              { label: 'Docs' },
              { label: 'FAQs' }
            ]}
          />
        </div>

        <div className="footer-newsletter">
          <h3 className="footer-heading">
            Newsletter
            <AnimatedLine />
          </h3>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
