import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__disclaimer">
          <svg className="site-footer__disclaimer-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
          <p className="site-footer__disclaimer-text">
            <strong>تنويه:</strong> هذه الدورة مقدمة لأغراض تعليمية فقط، ولا تقدم
            استشارات أو توصيات استثمارية، ولا تضمن تحقيق أرباح أو نتائج مالية
            محددة. التداول في الأسواق المالية ينطوي على مخاطر، وقد يؤدي إلى خسارة
            جزء أو كامل رأس المال.
          </p>
        </div>

        <div className="site-footer__divider" />

        <div className="site-footer__bottom">
          <div className="site-footer__brand">
            <span className="site-footer__logo">Gulf Academy</span>
            <span className="site-footer__tagline">طريقك لفهم الأسواق المالية</span>
          </div>
          <nav className="site-footer__links">
            <a href="#home">الرئيسية</a>
            <a href="#programs">البرامج</a>
            <a href="#register">التسجيل</a>
          </nav>
          <span className="site-footer__copy">
            © {new Date().getFullYear()} جميع الحقوق محفوظة
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
