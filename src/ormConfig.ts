import { ConnectionOptions } from "typeorm";

const ConnectionOptions: ConnectionOptions = {
  type: "postgres",
  database: "clone-uber",
  synchronize: true,
  entities: ["entities/**/*.*"],
  host: process.env.DB_ENDPOINT || "localhost",
  port: 5432,
  username: process.env.DB_USERNAME || "postgres",
  password: process.env.DB_PASSWORD || "P@ssw0rd"
};

export default ConnectionOptions;
