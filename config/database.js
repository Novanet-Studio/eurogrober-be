module.exports = ({ env }) => {
  const client = env('DATABASE_CLIENT', 'postgres');

  const connectionConfig = env('DATABASE_URL')
    ? {
      connectionString: env('DATABASE_URL'),
    }
    : {
      host: env('DATABASE_HOST'),
      port: env.int('DATABASE_PORT'),
      database: env('DATABASE_NAME'),
      user: env('DATABASE_USERNAME'),
      password: env('DATABASE_PASSWORD'),
    };

  const connections = {
    postgres: {
      connection: {
        ...connectionConfig,
        ssl: env.bool('DATABASE_SSL', false)
          ? { rejectUnauthorized: false }
          : false,
      },
      pool: {
        min: env.int('DATABASE_POOL_MIN', 2),
        max: env.int('DATABASE_POOL_MAX', 10),
      },
    },
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    },
  };
};
