import { useState, useEffect } from 'react';
import './Header.css';

const NAV_ITEMS = [
  { label: 'الرئيسية', href: '#home' },
  { label: 'عن الدورة', href: '#about' },
  { label: 'المحاور', href: '#programs' },
  { label: 'الفئة المستهدفة', href: '#audience' },
  { label: 'تواصل معنا', href: '#register' },
];

function handleSmoothScroll(e, href, closeFn) {
  e.preventDefault();
  closeFn();
  const target = document.querySelector(href);
  if (target) {
    const headerH = document.querySelector('.site-header')?.offsetHeight || 0;
    const top = target.getBoundingClientRect().top + window.scrollY - headerH;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <header className={`site-header${scrolled ? ' site-header--scrolled' : ''}`}>
      <div className="container">
        <nav className="site-nav">
          <a
            href="#home"
            className="site-logo"
            onClick={(e) => handleSmoothScroll(e, '#home', close)}
          >
            <div className="site-logo__text">
              <span className="site-logo__name">Gulf Academy</span>
              <span className="site-logo__tagline">طريقك لفهم الأسواق المالية</span>
            </div>
          </a>

          <ul className={`site-nav__links${menuOpen ? ' site-nav__links--open' : ''}`}>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="site-nav__link"
                  onClick={(e) => handleSmoothScroll(e, item.href, close)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="site-nav__cta-mobile">
              <a
                href="#register"
                className="btn btn-accent"
                onClick={(e) => handleSmoothScroll(e, '#register', close)}
              >
                سجّل الآن
              </a>
            </li>
          </ul>

          <div className="site-nav__actions">
            <a
              href="#register"
              className="btn btn-accent site-nav__cta-desktop"
              onClick={(e) => handleSmoothScroll(e, '#register', close)}
            >
              سجّل الآن
            </a>
            <button
              className={`site-nav__burger${menuOpen ? ' site-nav__burger--open' : ''}`}
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="القائمة"
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
