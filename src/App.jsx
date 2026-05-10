import { useState, useEffect, useMemo } from 'react';
import { TEAMS, SPECIAL_STICKERS, TOTAL_STICKERS } from './data/albumData';
import TeamView from './components/TeamView';
import Dashboard from './components/Dashboard';
import MissingList from './components/MissingList';
import ScheduleView from './components/ScheduleView';
import NewsstandFinder from './components/NewsstandFinder';
import './App.css';

const STORAGE_KEY = 'album-copa-2026';

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
}

export default function App() {
  const [collected, setCollected] = useState(loadState);
  const [view, setView] = useState('album'); // 'album' | 'missing' | 'team' | 'schedule' | 'newsstand'
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [search, setSearch] = useState('');
  const [filterGroup, setFilterGroup] = useState('');
  const [filterConf, setFilterConf] = useState('');

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(collected));
  }, [collected]);

  function toggleSticker(key) {
    setCollected(prev => {
      const next = { ...prev };
      if (next[key]) delete next[key];
      else next[key] = true;
      return next;
    });
  }

  function toggleAll(teamId, stickers, forceOn) {
    setCollected(prev => {
      const next = { ...prev };
      stickers.forEach(s => {
        const key = `${teamId}-${s.n}`;
        if (forceOn) next[key] = true;
        else delete next[key];
      });
      return next;
    });
  }

  const totalCollected = useMemo(() => Object.keys(collected).length, [collected]);

  const filteredTeams = useMemo(() => {
    return TEAMS.filter(t => {
      const matchSearch = t.name.toLowerCase().includes(search.toLowerCase());
      const matchGroup = !filterGroup || t.group === filterGroup;
      const matchConf = !filterConf || t.confederation === filterConf;
      return matchSearch && matchGroup && matchConf;
    });
  }, [search, filterGroup, filterConf]);

  const groups = [...new Set(TEAMS.map(t => t.group))].sort();
  const confs = [...new Set(TEAMS.map(t => t.confederation))].sort();

  if (view === 'team' && selectedTeam) {
    return (
      <TeamView
        team={selectedTeam}
        collected={collected}
        onToggle={toggleSticker}
        onToggleAll={toggleAll}
        onBack={() => { setView('album'); setSelectedTeam(null); }}
      />
    );
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-title">
          <span className="trophy">🏆</span>
          <h1>Álbum Copa do Mundo 2026</h1>
          <span className="trophy">⚽</span>
        </div>
        <Dashboard total={TOTAL_STICKERS} collected={totalCollected} />
        <nav className="app-nav">
          <button className={view === 'album' ? 'active' : ''} onClick={() => setView('album')}>
            📋 Álbum
          </button>
          <button className={view === 'missing' ? 'active' : ''} onClick={() => setView('missing')}>
            🔍 Faltam
          </button>
          <button className={view === 'schedule' ? 'active' : ''} onClick={() => setView('schedule')}>
            📅 Jogos
          </button>
          <button className={view === 'newsstand' ? 'active' : ''} onClick={() => setView('newsstand')}>
            📍 Bancas
          </button>
        </nav>
      </header>

      <main className="app-main">
        {view === 'album' && (
          <>
            <div className="filters">
              <input
                type="text"
                placeholder="🔎 Buscar seleção..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="search-input"
              />
              <select value={filterGroup} onChange={e => setFilterGroup(e.target.value)}>
                <option value="">Todos os grupos</option>
                {groups.map(g => <option key={g} value={g}>Grupo {g}</option>)}
              </select>
              <select value={filterConf} onChange={e => setFilterConf(e.target.value)}>
                <option value="">Todas as confederações</option>
                {confs.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            <div className="teams-grid">
              {filteredTeams.map(team => {
                const teamCollected = team.stickers.filter(
                  s => collected[`${team.id}-${s.n}`]
                ).length;
                const pct = Math.round((teamCollected / team.stickers.length) * 100);
                const complete = teamCollected === team.stickers.length;
                return (
                  <button
                    key={team.id}
                    className={`team-card ${complete ? 'complete' : ''}`}
                    onClick={() => { setSelectedTeam(team); setView('team'); }}
                  >
                    <span className="team-flag">{team.flag}</span>
                    <div className="team-info">
                      <span className="team-name">{team.name}</span>
                      <span className="team-group">Grupo {team.group}</span>
                    </div>
                    <div className="team-progress">
                      <div className="progress-bar-wrap">
                        <div
                          className="progress-bar-fill"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                      <span className="progress-text">
                        {complete ? '✅' : `${teamCollected}/${team.stickers.length}`}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            <SpecialStickersSection
              stickers={SPECIAL_STICKERS}
              collected={collected}
              onToggle={toggleSticker}
            />
          </>
        )}

        {view === 'missing' && (
          <MissingList
            teams={TEAMS}
            specialStickers={SPECIAL_STICKERS}
            collected={collected}
          />
        )}

        {view === 'schedule' && <ScheduleView />}

        {view === 'newsstand' && <NewsstandFinder />}
      </main>
    </div>
  );
}

function SpecialStickersSection({ stickers, collected, onToggle }) {
  const count = stickers.filter(s => collected[s.id]).length;
  return (
    <div className="special-section">
      <h2>⭐ Figurinhas Especiais ({count}/{stickers.length})</h2>
      <div className="special-grid">
        {stickers.map(s => (
          <button
            key={s.id}
            className={`special-card ${collected[s.id] ? 'have' : ''}`}
            onClick={() => onToggle(s.id)}
          >
            <span className="special-num">{s.number}</span>
            <span className="special-desc">{s.description}</span>
            {collected[s.id] && <span className="check-mark">✓</span>}
          </button>
        ))}
      </div>
    </div>
  );
}
