/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "0.0.0.0", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: [], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 12,
	units: "imperial",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left",
			config: {
			displayType: "analog",
			analogSize: "300px",
			displaySeconds: false,
			analogFace: "face-001",
			}
		},
		{
			module: 'MMM-DarkSkyForecast',
			position: 'top_right',
			classes: "default everyone",
			disabled: false,
			config: {
			apikey: "1234592ea6ac2a8f9dabd63f70712345", 
			latitude: "42.399987", //MUST HAVE BOTH
			longitude: "-71.437195",  //MUST HAVE BOTH
			iconset: "3c",
			concise: true,
			units: "us",
			showSummary: true,
			showHourlyForecast: false,
			showDailyForecast: true,
			maxDailiesToShow: 3,
			forecastLayout: "tiled"
			}
 		},	
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
