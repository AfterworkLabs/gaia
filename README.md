# gaia

## Server
1. At root directory, run `npm install` or `yarn install` to install all of the dependencies
2. Run `npm start` to spin up the server

## Database
(Reference: https://sequelize.org/master/manual/migrations.html)

1. Install postgres client on your local computer https://www.postgresql.org/download/
2. Start the postgres service `service postgresql start`
3. Get a `config.json` file from project admin, put it under `/gaia/db/config/` and modify the metadata accordingly
4. For first time set up, install `sequalize-cli`, and run `npx sequelize-cli init`
5. Once the sequelize client is up, create table schema by running `npx sequelize-cli db:migrate`
6. Lastly, for local env, you can optionally seed the table by running `npx sequelize-cli db:seed:all`