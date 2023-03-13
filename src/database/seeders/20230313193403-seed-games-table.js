'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('games', [{
      name: 'The Witcher® 3: Wild Hunt',
      grid: 'https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/2f87d717bf556321774d1b4975d2e1c1.png',
      wallpaper: 'https://cdn2.steamgriddb.com/file/sgdb-cdn/hero/4d19b37a2c399deace9082d464930022.png',
      bio: 'És Geralt of Rivia, um mercenário caçador de monstros. Perante ti, encontras um continente destruído e infestado por monstros, que podes explorar como quiseres. O teu contrato: encontrar Ciri, a Criança da Profecia, uma arma viva capaz de alterar a forma do mundo.',
      tags: ['RPG', 'Ação', 'Aventura', 'Fantasia', 'Mundo Aberto'],
      year: '2015',
      developer: 'CD PROJEKT RED',
      publisher: 'CD PROJEKT RED',
      metacritic_score: '93',
      gamelog_score: '9.5',
      primary_genre: 'RPG',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Assassin\'s Creed Odyssey',
      grid: 'https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/5c7f7cad63487e6d1edd8dcf48d233c9.png',
      wallpaper: 'https://cdn2.steamgriddb.com/file/sgdb-cdn/hero/cc40d06ff0a16a793d066dbfa2917bab.jpg',
      bio: 'Decida o seu destino em Assassin\'s Creed® Odyssey. De exilado à lenda viva, embarque em uma odisseia para descobrir os segredos do seu passado e mudar o destino da Grécia Antiga.',
      tags: ['Ação', 'Aventura', 'Histórico', 'Mundo Aberto'],
      year: '2018',
      developer: 'Ubisoft Quebec',
      publisher: 'Ubisoft',
      metacritic_score: '83',
      gamelog_score: '8.5',
      primary_genre: 'Ação',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Stardew Valley',
      grid: 'https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/996e24639b91722571c81723760023e0.png',
      wallpaper: 'https://cdn2.steamgriddb.com/file/sgdb-cdn/hero/6415c4907fe74dcdef94b0982a2e41fe.jpg',
      bio: 'Você herdou a antiga fazenda do seu avô, em Stardew Valley. Com ferramentas de segunda-mão e algumas moedas, você parte para dar início a sua nova vida. Será que você vai aprender a viver da terra, a transformar esse matagal em um próspero lar?',
      tags: ['Simulação', 'RPG', 'Mundo Aberto'],
      year: '2016',
      developer: 'ConcernedApe',
      publisher: 'Chucklefish',
      metacritic_score: '89',
      gamelog_score: '9.0',
      primary_genre: 'Simulação',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Resident Evil Village',
      grid: 'https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/ca3b0b104307cd7feeff77664808a605.png',
      wallpaper: 'https://cdn2.steamgriddb.com/file/sgdb-cdn/hero/200b82cedecce3347016d71ecc2bb2b6.jpg',
      bio: 'Vivencie o horror de sobrevivência como nunca na 8ª sequência parte da franquia Resident Evil - Resident Evil Village. Com gráficos detalhados, ação intensa em primeira pessoa e uma narrativa primorosa, o terror nunca foi tão realista.',
      tags: ['Ação', 'Terror', 'Survival Horror'],
      year: '2021',
      developer: 'Capcom',
      publisher: 'Capcom',
      metacritic_score: '86',
      gamelog_score: '8.5',
      primary_genre: 'Ação',
      created_at: new Date(),
      updated_at: new Date()
    }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('games', null, {});
  }
};