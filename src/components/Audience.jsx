import './Audience.css';

function Audience() {
  return (
    <section id="audience" className="audience">
      <div className="container">
        <div className="audience__header">
          <h2 className="audience__title">
            مناسبة للمبتدئين وأصحاب المعرفة السابقة
          </h2>
          <p className="audience__desc">
            لا تحتاج إلى خبرة سابقة للبدء. الدورة تبدأ معك من الأساس، وإذا
            كانت لديك معرفة سابقة، ستتمكن من تطوير فهمك من خلال المحتوى
            المتدرج.
          </p>
        </div>

        <div className="audience__cards">
          <div className="audience__card">
            <div className="audience__card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22c4-4 8-7.5 8-12a8 8 0 10-16 0c0 4.5 4 8 8 12z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div className="audience__card-body">
              <h3 className="audience__card-title">مبتدئ تمامًا</h3>
              <p className="audience__card-desc">
                لا خبرة سابقة؟ الدورة تبدأ من الصفر وتبني معرفتك خطوة بخطوة
              </p>
            </div>
          </div>

          <div className="audience__card">
            <div className="audience__card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
                <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
              </svg>
            </div>
            <div className="audience__card-body">
              <h3 className="audience__card-title">لديك معرفة سابقة</h3>
              <p className="audience__card-desc">
                طوّر فهمك وعمّق معرفتك من خلال المحتوى المتدرج والمتقدم
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Audience;
