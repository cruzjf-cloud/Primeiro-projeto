export default function Dashboard({ total, collected }) {
  const missing = total - collected;
  const pct = total > 0 ? Math.round((collected / total) * 100) : 0;

  return (
    <div className="dashboard">
      <div className="dash-stats">
        <div className="dash-stat have">
          <span className="stat-num">{collected}</span>
          <span className="stat-label">Tenho</span>
        </div>
        <div className="dash-stat miss">
          <span className="stat-num">{missing}</span>
          <span className="stat-label">Faltam</span>
        </div>
        <div className="dash-stat total">
          <span className="stat-num">{total}</span>
          <span className="stat-label">Total</span>
        </div>
      </div>
      <div className="dash-bar-wrap">
        <div className="dash-bar-fill" style={{ width: `${pct}%` }} />
        <span className="dash-pct">{pct}%</span>
      </div>
    </div>
  );
}
