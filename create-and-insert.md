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

## Relationships

- There are four different ways to relate together different kinds of records
- **One-to-many:**
  - E.g., a user _has many_ photos
  - Or a photo _has many_ comments
- **Many-to-one:**
  - Opposite of a oneto-many relationship
  - E.g., a photo _has one_ user
  - Or a comment _has one_ photo
- **One-to-one:** there is exactly one record that has a relationship to exactly one other record
- **Many-to-many:** ...

## Primary and Foreign Keys

- Primary Key: uniquely identifies a records in a table
- Foreign Key: identifies a record (usually in another table) that a given record is associated with
- 

## Credits

- [1] S. Grider, "SQL and PostgreSQL: The Complete Developer's Guide," Udemy. [Online]. Available: https://udemy.com/course/sql-and-postgresql/learn/lecture/22800491#overview. [Accessed: Jan. 26, 2025].
