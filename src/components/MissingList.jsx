import { useMemo, useState } from 'react';

function buildShareText(missingByTeam, missingSpecial) {
  const lines = ['📋 *Figurinhas que faltam – Copa 2026*\n'];

  if (missingSpecial.length > 0) {
    lines.push('⭐ *Especiais:*');
    lines.push(missingSpecial.map(s => s.number).join(', '));
    lines.push('');
  }

  missingByTeam.forEach(({ team, missing }) => {
    lines.push(`${team.flag} *${team.name}* (${missing.length}):`);
    lines.push(missing.map(s => `#${s.n} ${s.label}`).join(' · '));
    lines.push('');
  });

  const total =
    missingByTeam.reduce((sum, x) => sum + x.missing.length, 0) + missingSpecial.length;
  lines.push(`_Total: ${total} figurinhas_`);
  return lines.join('\n');
}

export default function MissingList({ teams, specialStickers, collected }) {
  const [copied, setCopied] = useState(false);

  const missingByTeam = useMemo(() => {
    return teams
      .map(team => ({
        team,
        missing: team.stickers.filter(s => !collected[`${team.id}-${s.n}`]),
      }))
      .filter(x => x.missing.length > 0);
  }, [teams, collected]);

  const missingSpecial = specialStickers.filter(s => !collected[s.id]);
  const totalMissing =
    missingByTeam.reduce((sum, x) => sum + x.missing.length, 0) + missingSpecial.length;

  function copyToClipboard() {
    const text = buildShareText(missingByTeam, missingSpecial);
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      });
    } else {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  }

  function shareWhatsApp() {
    const text = buildShareText(missingByTeam, missingSpecial);
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  }

  if (totalMissing === 0) {
    return (
      <div className="missing-empty">
        <div className="congrats">🎉</div>
        <h2>Álbum completo!</h2>
        <p>Parabéns! Você colou todas as figurinhas!</p>
      </div>
    );
  }

  return (
    <div className="missing-list">
      <div className="missing-header">
        <h2>Faltam {totalMissing} figurinhas</h2>
        <div className="share-buttons">
          <button className="btn-share btn-copy" onClick={copyToClipboard}>
            {copied ? '✅ Copiado!' : '📋 Copiar lista'}
          </button>
          <button className="btn-share btn-whatsapp" onClick={shareWhatsApp}>
            💬 WhatsApp
          </button>
        </div>
      </div>

      {missingSpecial.length > 0 && (
        <div className="missing-team-block">
          <h3>⭐ Especiais ({missingSpecial.length})</h3>
          <div className="missing-stickers">
            {missingSpecial.map(s => (
              <span key={s.id} className="missing-chip special">
                {s.number} – {s.description}
              </span>
            ))}
          </div>
        </div>
      )}

      {missingByTeam.map(({ team, missing }) => (
        <div key={team.id} className="missing-team-block">
          <h3>
            {team.flag} {team.name}
            <span className="missing-count">{missing.length} faltam</span>
          </h3>
          <div className="missing-stickers">
            {missing.map(s => (
              <span key={s.n} className={`missing-chip type-${s.type}`}>
                #{s.n} {s.label}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
