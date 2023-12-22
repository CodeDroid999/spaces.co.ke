// components/Navbar.tsx

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [stickyMenu, setStickyMenu] = useState(false);
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedDarkMode = localStorage.getItem('darkMode');
      return storedDarkMode ? JSON.parse(storedDarkMode) : false;
    }
    return false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const handleScroll = () => {
    setStickyMenu(window.pageYOffset > 20);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`g s r vd ya cj ${stickyMenu ? 'hh sm _k dj bl ll' : ''}`}>
      <div className="bb ze ki xn 2xl:ud-px-0 oo wf yf i">
        <div className="vd to/4 tc wf yf">
          <Link href="/">
            <a>
              <img className="om" src="/images/logo-light.svg" alt="Logo Light" />
              <img className="xc nm" src="/images/logo-dark.svg" alt="Logo Dark" />
            </a>
          </Link>

          <button className="po rc" onClick={() => setNavigationOpen(!navigationOpen)}>
            <span className="rc i pf re pd">
              Button contenyt
              {/* Your toggle button content */}
            </span>
          </button>
        </div>

        <div className={`vd wo/4 sd qo f ho oo wf yf ${navigationOpen ? 'd hh rm sr td ud qg ug jc yh' : ''}`}>
          <nav>
            <ul className="tc _o sf yo cg ep">
              {/* Your navigation links */}
              <li><Link href="/">Home</Link></li>
              <li><a href="#features">Features</a></li>
              {/* Add other navigation links */}
            </ul>
          </nav>
          <div className="tc wf ig pb no">
            <div className={`pc h io pa ra ${navigationOpen ? '!-ud-visible' : 'd'}`}>
              {/* Your dark mode toggle checkbox */}
            </div>
            <Link href="/signin">
              <a className={`ek pk xl ${page === 'home' ? 'nk yl' : ''}`}>Sign In</a>
            </Link>
            <Link href="/signup">
              <a className={`lk gh dk rg tc wf xf _l gi hi ${page === 'home' ? 'hh/[0.15]' : ''}`}>Sign Up</a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
