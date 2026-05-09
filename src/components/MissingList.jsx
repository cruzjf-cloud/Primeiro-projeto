import { useMemo } from 'react';

export default function MissingList({ teams, specialStickers, collected }) {
  const missingByTeam = useMemo(() => {
    return teams
      .map(team => ({
        team,
        missing: team.stickers.filter(s => !collected[`${team.id}-${s.n}`]),
      }))
      .filter(x => x.missing.length > 0);
  }, [teams, collected]);

  const missingSpecial = specialStickers.filter(s => !collected[s.id]);

  const totalMissing = missingByTeam.reduce((sum, x) => sum + x.missing.length, 0)
    + missingSpecial.length;

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
      <h2>Figurinhas que faltam — {totalMissing} no total</h2>

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
