const { ActivityType } = require('discord.js');

module.exports = {
  ownerId: '1186506712040099850',
  status: {
    rotateDefault: [
      { name: 'TFARC_ENIM', type: ActivityType.Watching },
      { name: 'TFARC_ENIM', type: ActivityType.Playing },
      { name: 'TFARC_ENIM', type: ActivityType.Streaming, url: 'https://youtube.com/@TFARC_ENIM' },
      { name: 'TFARC_ENIM', type: ActivityType.Listening },
    ],
    songStatus: false
  },
  spotifyClientId: "f71a3da30e254962965ca2a89d6f74b9",
  spotifyClientSecret: "199a619d22dd4e55a4a2c1a7a3d70e63",
}
