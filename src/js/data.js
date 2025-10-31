// ========================================
// DATA - Base de datos de mangas
// ========================================

const mangaDatabase = {
  // CATEGORÍA: CONTROL
  control: [
    {
      id: 'death-note',
      title: 'Death Note',
      author: 'Tsugumi Ohba',
      year: 2003,
      genre: ['Thriller', 'Sobrenatural', 'Psicológico'],
      image: 'src/assets/images/death-note.jpg',
      shortDesc: '¿Hasta dónde llega el poder de decidir sobre la vida y la muerte?',
      fullDesc: 'Light Yagami encuentra un cuaderno que puede matar a cualquier persona cuyo nombre sea escrito en él, y decide crear un mundo sin criminales.',
      critique: 'Justicia vigilante, corrupción del poder, moralidad absoluta vs relativa',
      quote: '"Seré el dios del nuevo mundo."',
      relatedMangas: ['psycho-pass', 'code-geass', 'monster'],
      tags: ['Poder', 'Justicia', 'Moralidad', 'Corrupción']
    }
  ],

  // CATEGORÍA: VERDAD
  verdad: [
    {
      id: 'monster',
      title: 'Monster',
      author: 'Naoki Urasawa',
      year: 1994,
      genre: ['Thriller', 'Misterio', 'Drama psicológico'],
      image: 'src/assets/images/monster.jpg',
      shortDesc: 'La búsqueda de la verdad puede convertirte en un monstruo.',
      fullDesc: 'El Dr. Tenma salva la vida de un niño que luego se convierte en un asesino en serie. Ahora debe perseguirlo y enfrentar las consecuencias de su decisión.',
      critique: 'Naturaleza del mal, ética médica, consecuencias morales, trauma de guerra',
      quote: '"El único monstruo aquí soy yo. El único monstruo siempre ha sido... yo."',
      relatedMangas: ['psycho-pass', 'death-note', 'pluto'],
      tags: ['Moralidad', 'Culpa', 'Redención', 'Trauma']
    },
    {
      id: 'akira',
      title: 'Akira',
      author: 'Katsuhiro Otomo',
      year: 1982,
      genre: ['Ciencia ficción', 'Cyberpunk', 'Distopía'],
      image: 'src/assets/images/akira.jpg',
      shortDesc: 'El poder y la verdad se mezclan en una sociedad al borde del colapso.',
      fullDesc: 'En un Tokio post-apocalíptico, experimentos gubernamentales con poderes psíquicos desencadenan una crisis existencial y social.',
      critique: 'Experimentación humana, militarización, colapso social, abuso de poder',
      quote: '"El poder no es algo que se posee, es algo que se ejerce."',
      relatedMangas: ['psycho-pass', 'ghost-in-the-shell', 'neon-genesis-evangelion'],
      tags: ['Poder', 'Gobierno', 'Experimentos', 'Apocalipsis']
    }
  ],

  // CATEGORÍA: JUSTICIA
  justicia: [
    {
      id: 'vinland-saga',
      title: 'Vinland Saga',
      author: 'Makoto Yukimura',
      year: 2005,
      genre: ['Histórico', 'Acción', 'Drama'],
      image: 'src/assets/images/vinland-saga.jpg',
      shortDesc: 'La venganza y la justicia no siempre caminan juntas.',
      fullDesc: 'Thorfinn busca venganza contra el hombre que mató a su padre, pero descubre que la violencia solo perpetúa más violencia.',
      critique: 'Ciclo de violencia, pacifismo, redención, guerra y paz',
      quote: '"No tengo enemigos. Nadie tiene enemigos."',
      relatedMangas: ['attack-on-titan', 'berserk', 'kingdom'],
      tags: ['Venganza', 'Paz', 'Guerra', 'Redención']
    },
    {
      id: 'attack-on-titan',
      title: 'Attack on Titan (Shingeki no Kyojin)',
      author: 'Hajime Isayama',
      year: 2009,
      genre: ['Acción', 'Drama', 'Horror'],
      image: 'src/assets/images/aot.jpg',
      shortDesc: '¿Es la violencia inevitable para lograr la libertad?',
      fullDesc: 'La humanidad lucha por sobrevivir contra titanes devoradores de humanos, pero la verdadera amenaza puede venir de dentro.',
      critique: 'Nacionalismo, genocidio, ciclo de odio, libertad vs opresión',
      quote: '"Si no luchas, no puedes ganar. Si no puedes ganar, morirás."',
      relatedMangas: ['vinland-saga', 'code-geass', 'tokyo-ghoul'],
      tags: ['Libertad', 'Opresión', 'Guerra', 'Genocidio']
    },
    {
      id: 'tokyo-ghoul',
      title: 'Tokyo Ghoul',
      author: 'Sui Ishida',
      year: 2011,
      genre: ['Horror', 'Drama', 'Acción'],
      image: 'src/assets/images/tokyo-ghoul.jpg',
      shortDesc: 'Una lucha entre dos mundos que buscan justicia a su manera.',
      fullDesc: 'Kaneki se convierte en mitad ghoul y debe navegar entre dos mundos en guerra, cuestionando quién es realmente el monstruo.',
      critique: 'Discriminación, deshumanización, supervivencia, identidad',
      quote: '"No son los ghouls los que están equivocados. Es el mundo el que está mal."',
      relatedMangas: ['parasyte', 'ajin', 'attack-on-titan'],
      tags: ['Discriminación', 'Identidad', 'Supervivencia', 'Moralidad']
    }
  ],

  // CATEGORÍA: IDENTIDAD
  identidad: [
    {
      id: 'evangelion',
      title: 'Neon Genesis Evangelion',
      author: 'Yoshiyuki Sadamoto',
      year: 1994,
      genre: ['Mecha', 'Psicológico', 'Ciencia ficción'],
      image: 'src/assets/images/evangelion.jpg',
      shortDesc: 'Identidad, propósito y alienación en un mundo que se desmorona.',
      fullDesc: 'Jóvenes pilotos de mechas gigantes luchan contra seres misteriosos mientras enfrentan sus propios demonios internos y traumas.',
      critique: 'Alienación, depresión, búsqueda de identidad, presión social',
      quote: '"No huyas de ti mismo."',
      relatedMangas: ['serial-experiments-lain', 'welcome-to-the-nhk', 'punpun'],
      tags: ['Depresión', 'Identidad', 'Alienación', 'Trauma']
    },
    {
      id: 'punpun',
      title: 'Goodnight Punpun (Oyasumi Punpun)',
      author: 'Inio Asano',
      year: 2007,
      genre: ['Drama', 'Slice of Life', 'Psicológico'],
      image: 'src/assets/images/punpun.jpg',
      shortDesc: 'La sociedad moldea y destruye el alma de un joven en silencio.',
      fullDesc: 'La vida de Punpun desde la infancia hasta la adultez, explorando trauma, desilusión y la búsqueda desesperada de significado.',
      critique: 'Depresión, disfunción familiar, desilusión, búsqueda de significado',
      quote: '"La vida es como un tren. A veces se detiene, pero siempre sigue adelante."',
      relatedMangas: ['evangelion', 'welcome-to-the-nhk', 'solanin'],
      tags: ['Depresión', 'Familia', 'Vida', 'Desilusión']
    }
  ]
};

// Función para obtener manga por ID
function getMangaById(id) {
  for (const category in mangaDatabase) {
    const manga = mangaDatabase[category].find(m => m.id === id);
    if (manga) return manga;
  }
  return null;
}

// Función para obtener mangas relacionados
function getRelatedMangas(mangaId) {
  const manga = getMangaById(mangaId);
  if (!manga) return [];
  
  return manga.relatedMangas.map(id => getMangaById(id)).filter(m => m !== null);
}

// Función para buscar mangas por tag
function searchByTag(tag) {
  const results = [];
  for (const category in mangaDatabase) {
    mangaDatabase[category].forEach(manga => {
      if (manga.tags.includes(tag)) {
        results.push(manga);
      }
    });
  }
  return results;
}

// Exportar para uso global
window.mangaData = {
  database: mangaDatabase,
  getById: getMangaById,
  getRelated: getRelatedMangas,
  searchByTag: searchByTag
};
