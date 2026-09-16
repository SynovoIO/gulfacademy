import './Disclaimer.css';

function Disclaimer() {
  return (
    <section className="disclaimer">
      <div className="container">
        <div className="disclaimer__inner">
          <span className="disclaimer__icon">⚠️</span>
          <p className="disclaimer__text">
            <strong>تنويه:</strong> هذه الدورة مقدمة لأغراض تعليمية فقط، ولا تقدم
            استشارات أو توصيات استثمارية، ولا تضمن تحقيق أرباح أو نتائج مالية
            محددة. التداول في الأسواق المالية ينطوي على مخاطر، وقد يؤدي إلى خسارة
            جزء أو كامل رأس المال.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Disclaimer;
