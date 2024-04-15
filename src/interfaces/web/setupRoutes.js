// src/interfaces/web/setupRoutes.js

const createQuoteRepository = require('../../infrastructure/repositories/adapters/quoteRepository');
const fetchQuotes = require('../../application/use_case/fetchQuotes');
const config = require('../../infrastructure/config');

module.exports = function(fastify) {
    const quoteRepository = createQuoteRepository(config.apiBaseUrl, config.apiKey);
    const getQuotes = fetchQuotes(quoteRepository);

    // Decorar Fastify con el caso de uso
    fastify.decorate('getQuotesUseCase', () => getQuotes);

    // Registra la ruta
    fastify.register(require('./routes/quoteRoutes'));
};
