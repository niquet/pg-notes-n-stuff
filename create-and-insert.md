## Creating tables 

- `CREATE TABLE` is used to create a new table in a database
- Syntax:

  ```sql
  CREATE TABLE table_name (
    column1 datatype constraints,
    column2 datatype constraints,
    ...
  );
  ```

- Example:

  ```sql
  CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE,
    hire_date DATE
  );
  ```

## Inserting data

- `INSERT INTO` is used to add new records to a table
- Syntax:

  ```sql
  INSERT INTO table_name (column1, column2, ...)
  VALUES (value1, value2, ...);
  ```

- Example:

  ```sql
  INSERT INTO employees (first_name, last_name, email, hire_date)
  VALUES ('John', 'Doe', 'john.doe@example.com', '2023-01-15');
  ```

## Credits

- [1] S. Grider, "SQL and PostgreSQL: The Complete Developer's Guide," Udemy. [Online]. Available: https://udemy.com/course/sql-and-postgresql/learn/lecture/22800491#overview. [Accessed: Jan. 26, 2025].
