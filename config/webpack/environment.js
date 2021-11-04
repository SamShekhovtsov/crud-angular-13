const { environment } = require("@rails/webpacker");
const typescript = require("./loaders/typescript");

environment.loaders.prepend("typescript", typescript);
environment.loaders.append("html", {
	test: /\.html$/,
	use: [
		{
			loader: "html-loader",
			options: {
				minimize: true,
			},
		},
	],
});
module.exports = environment;
