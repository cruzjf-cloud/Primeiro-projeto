import { useState } from 'react';

export default function NewsstandFinder() {
  const [status, setStatus] = useState('idle');
  const [errMsg, setErrMsg] = useState('');

  function findNearby() {
    if (!navigator.geolocation) {
      setErrMsg('Geolocalização não disponível neste dispositivo.');
      setStatus('error');
      return;
    }
    setStatus('loading');
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude: lat, longitude: lng } }) => {
        const q = encodeURIComponent('banca jornal figurinhas copa');
        window.open(`https://www.google.com/maps/search/${q}/@${lat},${lng},15z`, '_blank');
        setStatus('found');
      },
      () => {
        setErrMsg('Não foi possível obter sua localização. Verifique as permissões do navegador.');
        setStatus('error');
      },
      { timeout: 10000 }
    );
  }

  function openMapsGeneral() {
    window.open('https://www.google.com/maps/search/banca+de+jornal+figurinhas', '_blank');
  }

  return (
    <div className="newsstand-view">
      <h2 className="section-title">📍 Encontrar Bancas e Lojas</h2>
      <p className="ns-desc">
        Ache bancas de jornal, papelarias e lojas próximas que vendem pacotinhos da Copa 2026.
      </p>

      <div className="ns-card">
        <div className="ns-icon">🗺️</div>
        <h3>Busca pelo Google Maps</h3>
        <p>Usamos sua localização para abrir o Maps com os pontos de venda mais próximos.</p>

        <button
          className="btn-locate"
          onClick={findNearby}
          disabled={status === 'loading'}
        >
          {status === 'loading' ? '⏳ Obtendo localização…' : '📍 Buscar perto de mim'}
        </button>

        {status === 'error' && (
          <div className="ns-error">
            <p>{errMsg}</p>
            <button className="btn-locate-alt" onClick={openMapsGeneral}>
              🔍 Buscar sem localização
            </button>
          </div>
        )}

        {status === 'found' && (
          <p className="ns-success">✅ Google Maps aberto! Explore as opções próximas.</p>
        )}
      </div>

      <div className="ns-tips">
        <h3>💡 Onde costuma ter</h3>
        <ul>
          <li>🗞️ Bancas de jornais e revistas</li>
          <li>📚 Papelarias e livrarias</li>
          <li>🛒 Supermercados (seção de revistas)</li>
          <li>🎮 Lojas de colecionáveis e games</li>
          <li>⛽ Postos de combustível com conveniência</li>
          <li>🏪 Lojas de R$1,99 e utilidades</li>
        </ul>
      </div>
    </div>
  );
}
