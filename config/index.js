require('dotenv').config();
module.exports = {
	db_credentials: {},
	helpers: {
		swagger_BaseURL: process.env.DOC_BASEURL || '/api-docs'
	},
	hashSlatSecret: process.env.REACT_APP_CRYPTO_HASH || 'h237dsh82h3j',

	env_variables: {
		PORT: process.env.PORT || 5000,
		NODE_ENV: process.env.NODE_ENV || 'development',
		DB_HOST: process.env.DB_HOST || 'localhost',
		DB_USER: process.env.DB_USER || 'root',
		DB_PASSWORD: process.env.DB_PASSWORD || '',
		DB_DATABASE: process.env.DB_DATABASE || 'pdss',
		DB_PORT: process.env.DB_PORT || 3306,
		DB_DEBUG: process.env.DB_DEBUG || false,
		FRONT_END_BASE_URL: process.env.FRONT_END_BASE_URL || 'http://localhost:3000'
	},
	SQL: require('./query.js')
};
