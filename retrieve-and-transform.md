## Retrieving data

- `SELECT` is used to retrieve data from one or more tables
- Basic syntax:

  ```sql
  SELECT column1, column2, ...
  FROM table_name
  WHERE condition;
  ```

- Example:

  ```sql
  SELECT first_name, last_name, hire_date
  FROM employees
  WHERE hire_date > '2022-01-01';
  ```

## Transforming data

- SQL can transform or process data before returning it
- Math Operators:
  - Addition: `+`
  - Subtraction: `-`
  - Multiplication: `*`
  - Division: `/`
  - Exponentiation: `^`
  - Square root: `|/`
  - Absolute value: `@`
  - Modulo (remainder): `%`

- Example:

  ```sql
  SELECT first_name, salary, salary * 1.1 AS increased_salary
  FROM employees;
  ```

- String Functions:
  - Concatenation: `||` or `CONCAT()`
  - Lowercase: `LOWER()`
  - Uppercase: `UPPER()`
  - String length: `LENGTH()`
 
- Example:

  ```sql
  SELECT CONCAT(first_name, ' ', last_name) AS full_name,
  LOWER(email) AS lowercase_email,
  LENGTH(first_name) AS name_length
  FROM employees;
  ```

## Credits

- [1] S. Grider, "SQL and PostgreSQL: The Complete Developer's Guide," Udemy. [Online]. Available: https://udemy.com/course/sql-and-postgresql/learn/lecture/22800491#overview. [Accessed: Jan. 26, 2025].
