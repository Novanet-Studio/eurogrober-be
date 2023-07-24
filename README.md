# 🚀 Eurogrober

Strapi backend implementation for Eurogrober

> This app uses `docker` to pull up the PostgreSQL database, you first need to have it installed [docker](https://docs.docker.com/engine/install/).

> In addition, it is necessary to have installed [docker compose](https://docs.docker.com/compose/install/)

> After installing Docker and docker-compose, you need to make sure you have the necessaries env keys in your `.env` file.

### Getting started

Clone the repository:

```bash
git clone https://github.com/Novanet-Studio/eurogrober-be.git
```

Install dependencies

```bash
yarn install
```

Create `.env`

```bash
cp .env.example .env
```

Finally, you can run the following command to bring up the database:

```bash
docker compose up
```

### Database

We use docker to handle the database connection, to have it sincronized and avoid problems with the implementation.

#### Create backup
The command to create a backup:

```bash
docker exec -t your-db-container pg_dumpall -c -U postgres > dump_`date +%d-%m-%Y"_"%H_%M_%S`.sql
```

> To found the container id/name, just run `docker ps`

Command to restore the database from backup:

```bash
cat your_dumped.sql | docker exec -i your-db-container psql -U postgres
```

After create the backup, we export `.json` backup from Strapi itself, just go to the part when changes are made, click on the `export` button and save the file.
