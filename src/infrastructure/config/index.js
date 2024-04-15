const dotenv = require('dotenv');
dotenv.config();  // Cargar variables desde el archivo .env

module.exports = {
    apiBaseUrl: process.env.API_BASE_URL || 'https://api.example.com/quotes',
    apiKey: process.env.API_KEY || 'your_api_key_here',
    port: process.env.PORT || 3000
};
