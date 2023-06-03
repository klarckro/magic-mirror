/* MagicMirror² Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
	address: "localhost",	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/",			// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
					  		// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",

	modules: [
		// {
		// 	module: "alert",
		// },
		// {
		// 	module: "updatenotification",
		// 	position: "top_bar"
		// },
		// {
		// 	module: "clock",
		// 	position: "top_left"
		// },
		// {
		// 	module: "calendar",
		// 	header: "US Holidays",
		// 	position: "bottom_left",
		// 	config: {
		// 		calendars: [
		// 			{
		// 				symbol: "calendar-check",
		// 				url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"
		// 			}
		// 		]
		// 	}
		// },
		// {
		// 	module: "compliments",
		// 	position: "lower_third"
		// },
		// {
		// 	module: "weather",
		// 	position: "top_right",
		// 	config: {
		// 		weatherProvider: "openweathermap",
		// 		type: "current",
		// 		location: "New York",
		// 		locationID: "5128581", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
		// 		apiKey: "INSERT_KEY_HERE"
		// 	}
		// },
		// {
		// 	module: "weather",
		// 	position: "top_right",
		// 	header: "Weather Forecast",
		// 	config: {
		// 		weatherProvider: "openweathermap",
		// 		type: "forecast",
		// 		location: "Zürich",
		// 		locationID: "2657895", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
		// 		apiKey: "INSERT_KEY_HERE"
		// 	}
		// },
        // {
        //     module: 'MMM-OnThisDay',
        //     position: "top_right", // All available positions
        //     config: {
        //         // See below for configurable options, this is optional
        //     }
        // },
		// {
		// 	module: 'worldclock',
		// 	position: 'top_left', // This can be any of the regions, best results in top_left or top_right regions
		// 	config: {
		// 		// See 'Configuration options' for more information.
		// 		timeFormat: 'HH:MM', //defined in moment.js format()
		// 		style: 'top', //predefined 4 styles; 'top', 'left','right','bottom'
		// 		offsetTimezone: `Europe/Zurich`, // Or you can set `Europe/Berlin` to get timegap difference from this timezone. `null` will be UTC timegap.
		// 		clocks: [
		// 		{
		// 			title: "Home",
		// 		},
		// 		{
		// 			title: "Vancouver", // Too long title could cause ugly text align.
		// 			timezone: "America/Vancouver", //When omitted, Localtime will be displayed. It might be not your purporse, I bet.
		// 			flag: "ca",
		// 		},
		// 		{
		// 			title: "New York", // Too long title could cause ugly text align.
		// 			timezone: "America/New_York", //When omitted, Localtime will be displayed. It might be not your purporse, I bet.
		// 			flag: "us",
		// 		},
		// 		{
		// 			title: "London", // Too long title could cause ugly text align.
		// 			timezone: "Europe/London", //When omitted, Localtime will be displayed. It might be not your purporse, I bet.
		// 			flag: "gb",
		// 		},
		// 		{
		// 			title: "Helsinki", // Too long title could cause ugly text align.
		// 			timezone: "Europe/Helsinki", //When omitted, Localtime will be displayed. It might be not your purporse, I bet.
		// 			flag: "fi",
		// 		},
		// 		{
		// 			title: "Tokyo", // Too long title could cause ugly text align.
		// 			timezone: "Asia/Tokyo", //When omitted, Localtime will be displayed. It might be not your purporse, I bet.
		// 			flag: "jp",
		// 		}
		// 		]
		// 	}
		// },
		// {
		// 	module: 'MMM-SwissStationboard',
		// 	position: 'top_right',
		// 	header: 'Bus Connections, Fachschule',
		// 	config: {
		// 		stop: 'Winterthur,Fachschule', // Start train station
		// 		maximumEntries: 8, // Max departures displayed
		// 		minWalkingTime: 10, // Minimum time to get to the station
		// 		hideNotReachable: 0, //Will hide all the not reachable connections
		// 	}
		// },
		// {
		// 	module: "MMM-Bob-Ross",
		// 	position: "bottom_left",
		// 	config: {
		// 	  imgHeight: "30vh", //Or any valid css height measure. Defines the height of the painting.
		// 	  videoHeight: "30vh", //Same as above. Defines the height of the video
		// 	  updateInterval: 1*60*60*1000, //How often does the painting change?
		// 	  autoPlay: true //Should the video start as soon as it switches or does it need the play command?
		// 	}
		// },
		// {
		// 	module: 'facts',
		// 	position: 'bottom_bar',
		// 	config: {
		// 			updateInterval: 10,	
		// 			fadeSpeed: 3,			
		// 			category: 'random',	
		// 	}
		// },
		{
			module: "newsfeed",
			position: "lower_third",
			config: {
				feeds: [
					{
						title: "BBC World",
						url: "http://feeds.bbci.co.uk/news/world/rss.xml",
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		// {
		// 	module: 'MagicMirror-FootballLeagues',
		// 	position: 'top_right',
		// 	header: 'Live-Scores',	
		// 	config: {
		// 		leagues: [2021, 2016, 2001, 2018, 2002, 2019, 2017],
		// 			showNames: true,
		// 			displayTime: 60 * 10000,
		// 			showTables: true,
		// 		showLogos: true,
		// 		apiKey: 'INSERT_KEY_HERE'
		// 	}
		// },
		  // Base WallberryTheme adds new font, styles, and a rotating background image pulled from Unsplash.com
		{
		module: "WallberryTheme",
		position: "fullscreen_below", // Required Position
		config: {
			unsplashAccessKey: "INSERT_KEY_HERE", // REQUIRED
			collections: "2589108", // optional - leave empty for a random photo
			backgroundOpacity: 0.5,
			brightImageOpacity: 0.5
		}
		},
		// WB-clock adds local time (Optional Module)
		{
		module: "WallberryTheme/WB-clock",
		position: "top_bar", // highly suggest using top_bar position
		config: {
			localCityName: "Zurich",
			otherCities: [
					{
						name: "Vancouver",
						timezone: "America/Vancouver"
					},
					{
						name: "New York",
						timezone: "America/New_York"
					},
					{
						name: "London",
						timezone: "Europe/London"
					},
					{
						name: "Helsinki",
						timezone: "Europe/Helsinki"
					}
				]
			}
		},
		// WB-weather adds weather (Optional Module)
		{
			module: "WallberryTheme/WB-weather",
			position: "bottom_bar",  // Highly suggested location
			config: {
				apiKey: "INSERT_KEY_HERE",
				latitude: 47.3769,
				longitude: 8.5417,
				units: "metric",
				updateInterval: 60000
			}
		}
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
