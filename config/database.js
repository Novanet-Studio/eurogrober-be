/**
 * Function that returns the necessary ssl configuration depending on the environment
 * @param {*} env
 * @returns {object}
 */
const ssl = (env) => {
  if (process.env.NODE_ENV === 'production') {
    return {
      ssl: {
        rejectUnauthorized: env.bool('POSTGRES_SSL_SELF', false),
      },
    };
  }

  return { ssl: false };
};

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('PGHOST'),
      port: env.int('PGPORT'),
      database: env('POSTGRES_DB'),
      user: env('POSTGRES_USER'),
      password: env('POSTGRES_PASSWORD'),
      ...ssl(env),
    },
  },
});
