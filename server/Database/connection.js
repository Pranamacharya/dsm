import { createConnection } from 'mysql';

const connection = createConnection({
  host: "117.236.190.213",
  user: "employee_115",
  password: "employee_115",
  database: "employee_115"
});

export default connection;