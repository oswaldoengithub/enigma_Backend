module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'gjxopendoors.postgres.database.azure.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'Enigma'),
      user: env('DATABASE_USERNAME', 'gjxadminpg@gjxopendoors.postgres.database.azure.com'),
      password: env('DATABASE_PASSWORD', 'Gjx##2021'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
