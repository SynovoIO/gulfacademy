import './Curriculum.css';

const TOPICS = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
    title: 'مقدمة عن الأسواق المالية',
    desc: 'تعرّف على آلية عمل الأسواق المالية وأنواعها وكيفية التعامل معها',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="M7 16l4-8 4 4 5-9" />
      </svg>
    ),
    title: 'قراءة الرسوم البيانية',
    desc: 'أساسيات قراءة وتحليل الرسوم البيانية وفهم أنماط حركة الأسعار',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
        <path d="M11 8v6" />
        <path d="M8 11h6" />
      </svg>
    ),
    title: 'التحليل الفني والأساسي',
    desc: 'مقدمة في أدوات ومنهجيات التحليل المختلفة لاتخاذ قرارات مدروسة',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    title: 'حركة الأسعار واتجاهات السوق',
    desc: 'فهم ديناميكيات حركة الأسعار وتحديد الاتجاهات الصاعدة والهابطة',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'إدارة المخاطر',
    desc: 'مبادئ حماية رأس المال وأساليب التعامل مع المخاطر بشكل فعّال',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1.08-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1.08 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001.08 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9c.26.604.852.997 1.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1.08z" />
      </svg>
    ),
    title: 'أدوات تحليل السوق',
    desc: 'التعرف على الأدوات والأساليب المستخدمة في تحليل الأسواق المالية',
  },
];

function Curriculum() {
  return (
    <section id="programs" className="curriculum">
      <div className="container">
        <div className="curriculum__header">
          <h2 className="curriculum__heading">ماذا ستتعلم خلال الدورة؟</h2>
          <p className="curriculum__desc">
            محتوى تعليمي متدرج يأخذك من الأساسيات إلى المفاهيم المتقدمة،
            بأسلوب واضح ومنظم يساعدك على فهم المصطلحات والأدوات المستخدمة
            في الأسواق المالية.
          </p>
        </div>

        <div className="curriculum__grid">
          {TOPICS.map((topic, i) => (
            <div key={i} className="curriculum__card">
              <div className="curriculum__card-icon">{topic.icon}</div>
              <h3 className="curriculum__card-title">{topic.title}</h3>
              <p className="curriculum__card-desc">{topic.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Curriculum;
