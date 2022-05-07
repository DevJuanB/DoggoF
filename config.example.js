const config = {
	ownerID: ['601865428117094401'], //your discord account ID
	prefix: "DGM", //no necesary
	token: 'your amazing bot token',
	// For looking up Twitch, Fortnite, Steam accounts
	api_keys: {
		// https://dev.twitch.tv/console/apps
		twitch: {
			clientID: 'HERE',
			clientSecret: 'HERE',
		},
		// https://fortnitetracker.com/site-api
		fortnite: 'HERE',
		// https://steamcommunity.com/dev
		steam: 'HERE',
		// https://developer.spotify.com/documentation/web-api/
		spotify: {
			iD: 'HERE',
			secret: 'HERE',
		},
		// Your Ubisoft email and password (You don't need to enable anything)
		rainbow: {
			email: 'email',
			password: 'password',
		},
		// https://genius.com/developers
		genuis: 'HERE',
		// https://api.amethyste.moe/
		amethyste: 'HERE',
	},
	// add plugins/commands here if you don't want them loaded in the bot.
	disabledCommands: [],
	disabledPlugins: [],
	websiteURL: 'HERE',
	// your support server
	SupportServer: {
		// Link to your support server
		link: 'https://discord.gg/Ahk7Fm9Hbk',
		// Your support's server ID
		GuildID: '750822670505082971',
		// This for using the suggestion command on your server
		ModRole: '775061717205516308',
		// What channel to post the suggestions
		SuggestionChannel: '775061429685846078',
		// Where the bot will send Guild join/leave messages to
		GuildChannel: '775061429685846078',
		// Where rate limits will be sent to, for investigation
		rateLimitChannelID: '775061429685846078',
	},
	API: {
		port: 3000,
		secure: true,
		token: '123456789',
	},
	// URL to mongodb
	MongoDBURl: 'MongoDBurl HERE',
	// embed colour
	embedColor: 'RANDOM',
	// This will spam your console if you enable this but will help with bug fixing
	debug: false,
};

module.exports = config;
