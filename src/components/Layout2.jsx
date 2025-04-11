import React from 'react';
import './Layout2.css'

const Layout2 = ({ children }) => {
  return (
    <div>
      <header className="navbar"> {/* ⬅️ gunakan styles.navbar */}
        <h1>My Website</h1>
      </header>

      <div className="sidebar"></div>

      <main style={{ padding: '1rem' }}>
        {children}
      </main>

      <footer style={{ padding: '1rem', background: '#f1f1f1' }}>
        <p>© 2025 My Website</p>
      </footer>
    </div>
  );
};

export default Layout2;
