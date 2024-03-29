import { Dialect } from "sequelize";

interface IDataBase<TDialect extends Dialect> {
  dialect: TDialect;
  username: string;
  password: string;
  database: string;
  host: string;
  port: string;
}

const configDB: IDataBase<"postgres"> = {
  dialect: "postgres",
  username: process.env.DB_USERNAME || "postgres",
  password: process.env.DB_PASSWORD || "root",
  database: process.env.DB_NAME || "postgres",
  host: process.env.DB_HOSTNAME || "127.0.0.1",
  port: process.env.DB_PORT || "5432",
};

export default configDB;
