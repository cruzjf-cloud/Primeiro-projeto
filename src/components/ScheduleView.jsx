import { useState } from 'react';
import { TEAMS } from '../data/albumData';
import { GROUP_MATCHES, KNOCKOUT_PHASES } from '../data/scheduleData';

const MD_LABEL = { 1: 'Rodada 1', 2: 'Rodada 2', 3: 'Rodada 3' };

function getFlag(name) {
  const t = TEAMS.find(t => t.name === name);
  return t ? t.flag : '🏳️';
}

export default function ScheduleView() {
  const [tab, setTab] = useState('grupos');
  const [activeGroup, setActiveGroup] = useState('A');

  const groupLetters = [...new Set(GROUP_MATCHES.map(m => m.group))].sort();
  const groupMatches = GROUP_MATCHES.filter(m => m.group === activeGroup);
  const matchdays = [1, 2, 3];

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
            {matchdays.map(md => {
              const mdMatches = groupMatches.filter(m => m.md === md);
              if (!mdMatches.length) return null;
              return (
                <div key={md} className="matchday-block">
                  <div className="matchday-label">{MD_LABEL[md]}</div>
                  {mdMatches.map((m, i) => (
                    <div key={i} className="fixture-row">
                      <span className="fix-date">{m.date}</span>
                      <span className="fix-team">
                        {getFlag(m.home)} {m.home}
                      </span>
                      <span className="fix-vs">VS</span>
                      <span className="fix-team right">
                        {m.away} {getFlag(m.away)}
                      </span>
                      <span className="fix-city">{m.city}</span>
                    </div>
                  ))}
                </div>
              );
            })}
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
        * Horários em horário local · Sujeito a confirmação da FIFA
      </p>
    </div>
  );
}
