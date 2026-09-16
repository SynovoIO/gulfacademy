import { useState } from 'react';
import './RegisterForm.css';

const INITIAL = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  age: '',
  work: '',
};

function RegisterForm() {
  const [form, setForm] = useState(INITIAL);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="register" className="register">
        <div className="container">
          <div className="register__success">
            <svg className="register__success-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <h3 className="register__success-title">شكرًا لتسجيلك!</h3>
            <p className="register__success-text">
              سيقوم أحد أعضاء فريقنا بالتواصل معك قريبًا لتوضيح تفاصيل الدورة.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="register" className="register">
      <div className="container">
        <div className="register__header">
          <h2 className="register__title">هل ترغب بمعرفة المزيد عن الدورة؟</h2>
          <p className="register__desc">
            سجّل بياناتك أدناه، وسيقوم أحد أعضاء فريقنا بالتواصل معك لتوضيح
            محتوى الدورة، آلية التدريب، الرسوم والتفاصيل المتعلقة بالتسجيل.
          </p>
        </div>

        <div className="register__grid">
          <div className="register__image-wrap">
            <img
              src="/contactus.png"
              alt="تواصل معنا"
              className="register__image"
              loading="lazy"
            />
          </div>

          <form className="register__form" onSubmit={handleSubmit}>
            <div className="register__form-row">
              <div className="register__field">
                <label htmlFor="firstName">الاسم الأول</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="أدخل اسمك الأول"
                />
              </div>
              <div className="register__field">
                <label htmlFor="lastName">اسم العائلة</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="أدخل اسم العائلة"
                />
              </div>
            </div>

            <div className="register__field">
              <label htmlFor="email">البريد الإلكتروني</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="example@email.com"
                dir="ltr"
                style={{ textAlign: 'right' }}
              />
            </div>

            <div className="register__field">
              <label htmlFor="phone">
                رقم الهاتف <span className="register__required">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                placeholder="مثال: 965XXXXXXXX+"
                dir="ltr"
                style={{ textAlign: 'right' }}
              />
            </div>

            <div className="register__form-row">
              <div className="register__field">
                <label htmlFor="age">العمر</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={form.age}
                  onChange={handleChange}
                  min="16"
                  max="99"
                  placeholder="العمر"
                />
              </div>
              <div className="register__field">
                <label htmlFor="work">مجال العمل</label>
                <input
                  type="text"
                  id="work"
                  name="work"
                  value={form.work}
                  onChange={handleChange}
                  placeholder="مجال عملك الحالي"
                />
              </div>
            </div>

            <button type="submit" className="btn btn-accent register__submit">
              أرغب بمعرفة تفاصيل الدورة
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default RegisterForm;
