module.exports = {
  showStats: false, // Booleen | true / false
	website: {
		protocol: 'https://', // https:// or http://
		domain: 'prinzbot.glitch.me', // website link without protocol ex. bot-website.tejas1794.repl.co
		port: 3000,
    cookieSecret: '' // Cookie secret | charaters used store client data
	},
  bot: {
    name: 'Prinz', // Bot Name
    token: '', // Bot token if showing Stats
    logo: 'https://cdn.discordapp.com/attachments/747666608822026332/890186023051616256/p.jpg', //Bot Logo used in embeds and favicon
    description: 'the best bot', //description of your bot used in embed and website
    support: 'https://discord.gg/5ccRJYMz75', // support server url of your bot
    invite: 'https://discord.com/oauth2/authorize?client_id=869233057171914773&scope=bot&permissions=805576766', // invite link of your bot
    botlist: '', // Voting website Ex. top.gg
    feature1: {
      main: 'q', // Feature 1 Heading
      description: 'qq' // Feature 1 Description
    },
    feature2: {
      main: 'w', // Feature 2 Heading
      description: 'ww' // Feature 1 Description
    },
    feature3: {
      main: 'r', // Feature 3 Heading
      description: 'rr' // Feature 1 Description
    }
  },
  img: {
    img1: '', // help cmd image of your bot ex. https://cdn.discordapp.com/attachments/868823136538333184/889852973713354823/Capture.PNG
    img2: '' // most famous command image of your bot Ex. https://cdn.discordapp.com/attachments/868823136538333184/889853204697849926/Capture.PNG
  }
  
};
