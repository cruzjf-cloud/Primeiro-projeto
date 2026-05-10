import { useState } from 'react';
import { TEAMS } from '../data/albumData';

const KNOCKOUT_PHASES = [
  { name: 'Fase de Grupos',   dates: '11 Jun – 2 Jul', note: '72 jogos · 12 grupos', icon: '⚽' },
  { name: 'Oitavas de Final', dates: '4 – 7 Jul',      note: '16 jogos',              icon: '🔵' },
  { name: 'Quartas de Final', dates: '9 – 12 Jul',     note: '8 jogos',               icon: '🟡' },
  { name: 'Semifinais',       dates: '14 – 15 Jul',    note: '2 jogos',               icon: '🟠' },
  { name: '3º Lugar',         dates: '18 Jul',         note: 'Estádio a confirmar',   icon: '🥉' },
  { name: 'Final',            dates: '19 Jul',         note: 'MetLife Stadium · Nova York', icon: '🏆' },
];

function getPairs(teams) {
  const pairs = [];
  for (let i = 0; i < teams.length; i++)
    for (let j = i + 1; j < teams.length; j++)
      pairs.push([teams[i], teams[j]]);
  return pairs;
}

export default function ScheduleView() {
  const [tab, setTab] = useState('grupos');
  const [activeGroup, setActiveGroup] = useState('A');

  const groups = {};
  TEAMS.forEach(t => {
    if (!groups[t.group]) groups[t.group] = [];
    groups[t.group].push(t);
  });
  const groupLetters = Object.keys(groups).sort();
  const groupTeams = groups[activeGroup] || [];
  const fixtures = getPairs(groupTeams);

  return (
    <div className="schedule-view">
      <h2 className="section-title">📅 Calendário Copa 2026</h2>

      <div className="sched-tabs">
        <button className={tab === 'grupos' ? 'active' : ''} onClick={() => setTab('grupos')}>
          Fase de Grupos
        </button>
        <button className={tab === 'mata' ? 'active' : ''} onClick={() => setTab('mata')}>
          Mata-Mata
        </button>
      </div>

      {tab === 'grupos' && (
        <>
          <div className="group-selector">
            {groupLetters.map(g => (
              <button
                key={g}
                className={`gsel-btn ${activeGroup === g ? 'active' : ''}`}
                onClick={() => setActiveGroup(g)}
              >
                {g}
              </button>
            ))}
          </div>

          <div className="group-detail">
            <div className="group-teams-list">
              {groupTeams.map(t => (
                <div key={t.id} className="group-team-row">
                  <span className="gt-flag">{t.flag}</span>
                  <span className="gt-name">{t.name}</span>
                  <span className="gt-conf">{t.confederation}</span>
                </div>
              ))}
            </div>

            <h4 className="fixtures-title">Confrontos do Grupo {activeGroup}</h4>
            <div className="fixtures-list">
              {fixtures.map(([a, b], i) => (
                <div key={i} className="fixture-row">
                  <span className="fix-team">{a.flag} {a.name}</span>
                  <span className="fix-vs">VS</span>
                  <span className="fix-team right">{b.name} {b.flag}</span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {tab === 'mata' && (
        <div className="bracket-list">
          {KNOCKOUT_PHASES.map((p, i) => (
            <div key={i} className={`bracket-phase ${p.name === 'Final' ? 'final' : ''}`}>
              <span className="bp-icon">{p.icon}</span>
              <div className="bp-info">
                <span className="bp-name">{p.name}</span>
                <span className="bp-note">{p.note}</span>
              </div>
              <span className="bp-dates">{p.dates} · 2026</span>
            </div>
          ))}
        </div>
      )}

      <p className="sched-disclaimer">
        * Datas aproximadas · Horários e locais sujeitos à confirmação da FIFA
      </p>
    </div>
  );
}
