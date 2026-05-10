// Calendário oficial da Copa do Mundo 2026
// Fonte: FIFA.com / NBC Sports / Al Jazeera (dez 2025)

export const GROUP_MATCHES = [

  // ── GRUPO A: México · África do Sul · Coreia do Sul · Rep. Tcheca ──
  { group: 'A', md: 1, date: '11/Jun', home: 'México',        away: 'África do Sul',   city: 'Cidade do México' },
  { group: 'A', md: 1, date: '11/Jun', home: 'Coreia do Sul', away: 'Rep. Tcheca',      city: 'Guadalajara'      },
  { group: 'A', md: 2, date: '18/Jun', home: 'África do Sul', away: 'Rep. Tcheca',      city: 'Atlanta'          },
  { group: 'A', md: 2, date: '18/Jun', home: 'México',        away: 'Coreia do Sul',    city: 'Guadalajara'      },
  { group: 'A', md: 3, date: '24/Jun', home: 'Rep. Tcheca',   away: 'México',           city: 'Cidade do México' },
  { group: 'A', md: 3, date: '24/Jun', home: 'África do Sul', away: 'Coreia do Sul',    city: 'Kansas City'      },

  // ── GRUPO B: Canadá · Bósnia · Catar · Suíça ──
  { group: 'B', md: 1, date: '12/Jun', home: 'Canadá',        away: 'Bósnia e Herzegovina', city: 'Toronto'    },
  { group: 'B', md: 1, date: '13/Jun', home: 'Catar',         away: 'Suíça',                city: 'Santa Clara' },
  { group: 'B', md: 2, date: '18/Jun', home: 'Suíça',         away: 'Bósnia e Herzegovina', city: 'Los Angeles' },
  { group: 'B', md: 2, date: '18/Jun', home: 'Canadá',        away: 'Catar',                city: 'Vancouver'   },
  { group: 'B', md: 3, date: '24/Jun', home: 'Suíça',         away: 'Canadá',               city: 'Vancouver'   },
  { group: 'B', md: 3, date: '24/Jun', home: 'Bósnia e Herzegovina', away: 'Catar',         city: 'Seattle'     },

  // ── GRUPO C: Brasil · Marrocos · Haiti · Escócia ──
  { group: 'C', md: 1, date: '13/Jun', home: 'Brasil',   away: 'Marrocos', city: 'Nova York / NJ'  },
  { group: 'C', md: 1, date: '13/Jun', home: 'Haiti',    away: 'Escócia',  city: 'Boston'          },
  { group: 'C', md: 2, date: '19/Jun', home: 'Marrocos', away: 'Escócia',  city: 'Boston'          },
  { group: 'C', md: 2, date: '19/Jun', home: 'Brasil',   away: 'Haiti',    city: 'Filadélfia'      },
  { group: 'C', md: 3, date: '24/Jun', home: 'Marrocos', away: 'Haiti',    city: 'Nova York / NJ'  },
  { group: 'C', md: 3, date: '24/Jun', home: 'Brasil',   away: 'Escócia',  city: 'Filadélfia'      },

  // ── GRUPO D: EUA · Paraguai · Austrália · Turquia ──
  { group: 'D', md: 1, date: '12/Jun', home: 'Estados Unidos', away: 'Paraguai',  city: 'Los Angeles' },
  { group: 'D', md: 1, date: '13/Jun', home: 'Austrália',      away: 'Turquia',   city: 'Vancouver'   },
  { group: 'D', md: 2, date: '19/Jun', home: 'Estados Unidos', away: 'Austrália', city: 'Seattle'     },
  { group: 'D', md: 2, date: '19/Jun', home: 'Turquia',        away: 'Paraguai',  city: 'Santa Clara' },
  { group: 'D', md: 3, date: '25/Jun', home: 'Turquia',        away: 'Estados Unidos', city: 'Los Angeles' },
  { group: 'D', md: 3, date: '25/Jun', home: 'Paraguai',       away: 'Austrália',      city: 'Santa Clara' },

  // ── GRUPO E: Alemanha · Curaçao · Costa do Marfim · Equador ──
  { group: 'E', md: 1, date: '14/Jun', home: 'Alemanha',       away: 'Curaçao',       city: 'Houston'    },
  { group: 'E', md: 1, date: '14/Jun', home: 'Costa do Marfim',away: 'Equador',       city: 'Filadélfia' },
  { group: 'E', md: 2, date: '20/Jun', home: 'Alemanha',       away: 'Costa do Marfim',city: 'Toronto'   },
  { group: 'E', md: 2, date: '20/Jun', home: 'Equador',        away: 'Curaçao',       city: 'Kansas City' },
  { group: 'E', md: 3, date: '25/Jun', home: 'Equador',        away: 'Alemanha',      city: 'Nova York / NJ' },
  { group: 'E', md: 3, date: '25/Jun', home: 'Curaçao',        away: 'Costa do Marfim',city: 'Filadélfia' },

  // ── GRUPO F: Holanda · Japão · Suécia · Tunísia ──
  { group: 'F', md: 1, date: '14/Jun', home: 'Holanda', away: 'Japão',   city: 'Arlington, TX'  },
  { group: 'F', md: 1, date: '14/Jun', home: 'Suécia',  away: 'Tunísia', city: 'Monterrey'      },
  { group: 'F', md: 2, date: '20/Jun', home: 'Holanda', away: 'Suécia',  city: 'Houston'        },
  { group: 'F', md: 2, date: '20/Jun', home: 'Japão',   away: 'Tunísia', city: 'Kansas City'    },
  { group: 'F', md: 3, date: '25/Jun', home: 'Japão',   away: 'Suécia',  city: 'Arlington, TX'  },
  { group: 'F', md: 3, date: '25/Jun', home: 'Tunísia', away: 'Holanda', city: 'Kansas City'    },

  // ── GRUPO G: Bélgica · Egito · Irã · Nova Zelândia ──
  { group: 'G', md: 1, date: '15/Jun', home: 'Bélgica',       away: 'Egito',         city: 'Seattle'    },
  { group: 'G', md: 1, date: '15/Jun', home: 'Irã',           away: 'Nova Zelândia', city: 'Los Angeles' },
  { group: 'G', md: 2, date: '21/Jun', home: 'Bélgica',       away: 'Irã',           city: 'Los Angeles' },
  { group: 'G', md: 2, date: '21/Jun', home: 'Nova Zelândia', away: 'Egito',         city: 'Vancouver'  },
  { group: 'G', md: 3, date: '26/Jun', home: 'Nova Zelândia', away: 'Bélgica',       city: 'Vancouver'  },
  { group: 'G', md: 3, date: '26/Jun', home: 'Egito',         away: 'Irã',           city: 'Seattle'    },

  // ── GRUPO H: Espanha · Cabo Verde · Arábia Saudita · Uruguai ──
  { group: 'H', md: 1, date: '16/Jun', home: 'Espanha',       away: 'Cabo Verde',     city: 'Atlanta'    },
  { group: 'H', md: 1, date: '16/Jun', home: 'Arábia Saudita',away: 'Uruguai',        city: 'Miami'      },
  { group: 'H', md: 2, date: '21/Jun', home: 'Espanha',       away: 'Arábia Saudita', city: 'Atlanta'    },
  { group: 'H', md: 2, date: '21/Jun', home: 'Uruguai',       away: 'Cabo Verde',     city: 'Miami'      },
  { group: 'H', md: 3, date: '26/Jun', home: 'Uruguai',       away: 'Espanha',        city: 'Guadalajara' },
  { group: 'H', md: 3, date: '26/Jun', home: 'Cabo Verde',    away: 'Arábia Saudita', city: 'Houston'    },

  // ── GRUPO I: França · Senegal · Iraque · Noruega ──
  { group: 'I', md: 1, date: '16/Jun', home: 'França',   away: 'Senegal', city: 'Filadélfia' },
  { group: 'I', md: 1, date: '16/Jun', home: 'Iraque',   away: 'Noruega', city: 'Seattle'    },
  { group: 'I', md: 2, date: '22/Jun', home: 'França',   away: 'Iraque',  city: 'Filadélfia' },
  { group: 'I', md: 2, date: '22/Jun', home: 'Noruega',  away: 'Senegal', city: 'Boston'     },
  { group: 'I', md: 3, date: '26/Jun', home: 'Noruega',  away: 'França',  city: 'Boston'     },
  { group: 'I', md: 3, date: '26/Jun', home: 'Senegal',  away: 'Iraque',  city: 'Toronto'    },

  // ── GRUPO J: Argentina · Argélia · Áustria · Jordânia ──
  { group: 'J', md: 1, date: '16/Jun', home: 'Argentina', away: 'Argélia', city: 'Kansas City' },
  { group: 'J', md: 1, date: '16/Jun', home: 'Jordânia',  away: 'Áustria', city: 'Santa Clara' },
  { group: 'J', md: 2, date: '22/Jun', home: 'Argentina', away: 'Áustria', city: 'Atlanta'     },
  { group: 'J', md: 2, date: '22/Jun', home: 'Argélia',   away: 'Jordânia',city: 'Kansas City' },
  { group: 'J', md: 3, date: '27/Jun', home: 'Jordânia',  away: 'Argentina',city: 'Arlington, TX' },
  { group: 'J', md: 3, date: '27/Jun', home: 'Argélia',   away: 'Áustria', city: 'Kansas City' },

  // ── GRUPO K: Portugal · RD Congo · Uzbequistão · Colômbia ──
  { group: 'K', md: 1, date: '17/Jun', home: 'Portugal',     away: 'RD Congo',     city: 'Houston'         },
  { group: 'K', md: 1, date: '17/Jun', home: 'Uzbequistão',  away: 'Colômbia',     city: 'Cidade do México' },
  { group: 'K', md: 2, date: '23/Jun', home: 'Portugal',     away: 'Uzbequistão',  city: 'Kansas City'     },
  { group: 'K', md: 2, date: '23/Jun', home: 'Colômbia',     away: 'RD Congo',     city: 'Miami'           },
  { group: 'K', md: 3, date: '27/Jun', home: 'Colômbia',     away: 'Portugal',     city: 'Miami'           },
  { group: 'K', md: 3, date: '27/Jun', home: 'RD Congo',     away: 'Uzbequistão',  city: 'Atlanta'         },

  // ── GRUPO L: Inglaterra · Croácia · Gana · Panamá ──
  { group: 'L', md: 1, date: '17/Jun', home: 'Inglaterra', away: 'Croácia', city: 'Arlington, TX' },
  { group: 'L', md: 1, date: '17/Jun', home: 'Gana',       away: 'Panamá',  city: 'Toronto'       },
  { group: 'L', md: 2, date: '23/Jun', home: 'Inglaterra', away: 'Gana',    city: 'Nova York / NJ' },
  { group: 'L', md: 2, date: '23/Jun', home: 'Panamá',     away: 'Croácia', city: 'Filadélfia'    },
  { group: 'L', md: 3, date: '27/Jun', home: 'Panamá',     away: 'Inglaterra', city: 'Nova York / NJ' },
  { group: 'L', md: 3, date: '27/Jun', home: 'Croácia',    away: 'Gana',    city: 'Filadélfia'    },
];

export const KNOCKOUT_PHASES = [
  { name: 'Rodada de 32',     dates: '28 Jun – 3 Jul', note: '16 jogos',                    icon: '🔵' },
  { name: 'Oitavas de Final', dates: '4 – 7 Jul',     note: '8 jogos',                     icon: '🟡' },
  { name: 'Quartas de Final', dates: '9 – 11 Jul',    note: '4 jogos',                     icon: '🟠' },
  { name: 'Semifinais',       dates: '14 – 15 Jul',   note: '2 jogos',                     icon: '🔴' },
  { name: '3º Lugar',         dates: '18 Jul',        note: 'Estádio a confirmar',         icon: '🥉' },
  { name: 'Final',            dates: '19 Jul',        note: 'MetLife Stadium · Nova York', icon: '🏆' },
];
