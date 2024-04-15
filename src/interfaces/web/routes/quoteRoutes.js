module.exports = function(fastify, options, done) {
    // Asociamos el caso de uso con la ruta
    fastify.get('/quotes', async (request, reply) => {
        try {
            const getQuotes = fastify.getQuotesUseCase();
            const quotes = await getQuotes();
            reply.send(quotes);
        } catch (error) {
            reply.status(500).send({ error: error.message });
        }
    });

    done();
}
