import React, { ReactNode } from 'react';
import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <html lang="en">
    <body>
      <Header />
      <main className="min-h-screen p-4">
        {children}
      </main>
      <Footer />
    </body>
  </html>
);

export default Layout;
