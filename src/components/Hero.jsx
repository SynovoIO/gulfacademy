import { useState, useEffect } from 'react';
import heroBg from '../assets/hero-bg.jpg';
import './Hero.css';

const COUNTDOWN_KEY = 'gulfacademy_offer_end';
const DURATION_MS = 60 * 60 * 1000;

function getEndTime() {
  try {
    const stored = localStorage.getItem(COUNTDOWN_KEY);
    if (stored) {
      const end = Number(stored);
      if (end > Date.now()) return end;
    }
  } catch {}
  const end = Date.now() + DURATION_MS;
  try { localStorage.setItem(COUNTDOWN_KEY, String(end)); } catch {}
  return end;
}

function formatTime(ms) {
  if (ms <= 0) return { h: '00', m: '00', s: '00' };
  const totalSec = Math.floor(ms / 1000);
  const h = String(Math.floor(totalSec / 3600)).padStart(2, '0');
  const m = String(Math.floor((totalSec % 3600) / 60)).padStart(2, '0');
  const s = String(totalSec % 60).padStart(2, '0');
  return { h, m, s };
}

function Countdown() {
  const [endTime] = useState(getEndTime);
  const [remaining, setRemaining] = useState(endTime - Date.now());

  useEffect(() => {
    const tick = () => setRemaining(endTime - Date.now());
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [endTime]);

  const { h, m, s } = formatTime(remaining);

  return (
    <div className="hero__offer">
      <span className="hero__offer-label">عرض حصري للمسجلين الجدد — ينتهي خلال</span>
      <div className="hero__timer">
        <div className="hero__timer-block">
          <span className="hero__timer-num">{h}</span>
          <span className="hero__timer-unit">ساعة</span>
        </div>
        <span className="hero__timer-sep">:</span>
        <div className="hero__timer-block">
          <span className="hero__timer-num">{m}</span>
          <span className="hero__timer-unit">دقيقة</span>
        </div>
        <span className="hero__timer-sep">:</span>
        <div className="hero__timer-block">
          <span className="hero__timer-num">{s}</span>
          <span className="hero__timer-unit">ثانية</span>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__bg">
        <img
          src={heroBg}
          alt=""
          className="hero__bg-img"
          loading="eager"
          fetchPriority="high"
          width={1920}
          height={600}
        />
        <div className="hero__overlay" />
      </div>

      <div className="container hero__content">
        <h1 className="hero__title">
          ابدأ رحلتك في تعلّم
          <br />
          <span className="hero__title-accent">أساسيات الأسواق المالية</span>
        </h1>
        <p className="hero__subtitle">
          من الأساسيات إلى المفاهيم المتقدمة، خطوة بخطوة
        </p>
        <div className="hero__actions">
          <a href="#register" className="btn btn-accent btn-lg">
            سجّل اهتمامك الآن
          </a>
          <a href="#programs" className="btn btn-outline-light btn-lg">
            اكتشف المحتوى
          </a>
        </div>
        <Countdown />
      </div>

      <div className="hero__scroll-hint">
        <span className="hero__scroll-line" />
      </div>
    </section>
  );
}

export default Hero;
