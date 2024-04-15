const fastify = require('fastify')({ logger: true });

fastify.register(require('../interfaces/web/routes/sampleRouter'));
const setupRoutes = require('../interfaces/web/setupRoutes');

setupRoutes(fastify)

const start = async () => {
  try {
    await fastify.listen(3000);
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
