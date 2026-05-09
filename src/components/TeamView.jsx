const POS_COLORS = {
  GOL: '#f59e0b',
  ZAG: '#3b82f6',
  LAT: '#06b6d4',
  MEI: '#8b5cf6',
  ATA: '#ef4444',
};

const TYPE_ICONS = {
  badge: '🛡️',
  squad: '📸',
  player: '',
  star: '⭐',
};

export default function TeamView({ team, collected, onToggle, onToggleAll, onBack }) {
  const teamCollected = team.stickers.filter(s => collected[`${team.id}-${s.n}`]).length;
  const total = team.stickers.length;
  const allHave = teamCollected === total;
  const pct = Math.round((teamCollected / total) * 100);

  return (
    <div className="team-view">
      <div className="team-view-header">
        <button className="back-btn" onClick={onBack}>← Voltar</button>
        <div className="team-title">
          <span className="team-flag-big">{team.flag}</span>
          <div>
            <h2>{team.name}</h2>
            <span className="team-conf">{team.confederation} · Grupo {team.group}</span>
          </div>
        </div>
        <div className="team-view-progress">
          <span>{teamCollected}/{total} figurinhas ({pct}%)</span>
          <div className="progress-bar-wrap wide">
            <div className="progress-bar-fill" style={{ width: `${pct}%` }} />
          </div>
        </div>
        <div className="team-actions">
          <button
            className="btn-action btn-all"
            onClick={() => onToggleAll(team.id, team.stickers, true)}
            disabled={allHave}
          >
            ✅ Marcar todas
          </button>
          <button
            className="btn-action btn-none"
            onClick={() => onToggleAll(team.id, team.stickers, false)}
            disabled={teamCollected === 0}
          >
            ✖ Desmarcar todas
          </button>
        </div>
      </div>

      <div className="stickers-grid">
        {team.stickers.map(s => {
          const key = `${team.id}-${s.n}`;
          const have = !!collected[key];
          return (
            <button
              key={s.n}
              className={`sticker-card ${have ? 'have' : 'missing'} type-${s.type}`}
              onClick={() => onToggle(key)}
            >
              <span className="sticker-num">#{s.n}</span>
              {s.type === 'player' && s.pos && (
                <span
                  className="sticker-pos"
                  style={{ background: POS_COLORS[s.pos] || '#6b7280' }}
                >
                  {s.pos}
                </span>
              )}
              <span className="sticker-icon">
                {s.type !== 'player' ? TYPE_ICONS[s.type] : ''}
              </span>
              <span className="sticker-label">{s.label}</span>
              {have && <span className="sticker-check">✓</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}
