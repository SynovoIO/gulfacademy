import { useState, useEffect, useRef } from 'react';
import './About.css';

const STATS = [
  { target: 7, suffix: '+', label: 'محاور تعليمية' },
  { target: 100, suffix: '%', label: 'محتوى عملي ومتدرج' },
  { target: 0, suffix: '%', label: 'خبرة مسبقة مطلوبة' },
  { target: 15, suffix: '+', label: 'ساعة تدريبية' },
];

function useCountUp(target, duration = 2000, started = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    if (target === 0) {
      setCount(0);
      return;
    }

    let startTime = null;
    let rafId;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [target, duration, started]);

  return count;
}

function StatItem({ target, suffix, label }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const count = useCountUp(target, 2000, visible);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="about__stat">
      <span className="about__stat-number">
        {count}
        <span className="about__stat-suffix">{suffix}</span>
      </span>
      <span className="about__stat-label">{label}</span>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about__header">
          <h2 className="about__title">عن الدورة</h2>
          <p className="about__desc">
            إذا كنت ترغب في فهم الأسواق المالية والتعرّف على أساسيات التداول
            بطريقة واضحة ومنظمة، تم إعداد هذه الدورة التعليمية لتساعدك على بناء
            معرفتك تدريجيًا. تبدأ بالمفاهيم الأساسية، ثم تنتقل معك خطوة بخطوة
            إلى موضوعات أكثر تقدمًا.
          </p>
        </div>

        <div className="about__stats">
          {STATS.map((stat, i) => (
            <StatItem key={i} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
