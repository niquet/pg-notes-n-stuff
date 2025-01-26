## Filtering records

- The `WHERE` clause is used to filter records based on specified conditions
- Comparison operators:
  - Equal to: `=`
  - Greater than: `>`
  - Less than: `<`
  - Greater than or equal to: `>=`
  - Less than or equal to: `<=`
  - Not equal to: `<>` or `!=`
  - Between a range: `BETWEEN`
  - In a list of values: `IN`
  - Not in a list of values: `NOT IN`
 
- Example:

  ```sql
  -- Select employees hired after 2022
  SELECT * FROM employees WHERE hire_date > '2022-01-01';

  -- Select employees with salary between 50000 and 75000
  SELECT * FROM employees WHERE salary BETWEEN 50000 AND 75000;

  -- Select employees in specific departments
  SELECT * FROM employees WHERE department IN ('Sales', 'Marketing', 'IT');
  ```

- Compound conditions: use `AND` and `OR` to combine multiple conditions

- Example:

  ```sql
  SELECT * FROM employees
  WHERE (department = 'Sales' OR department = 'Marketing')
    AND hire_date >= '2022-01-01';
  ```

## Credits

- [1] S. Grider, "SQL and PostgreSQL: The Complete Developer's Guide," Udemy. [Online]. Available: https://udemy.com/course/sql-and-postgresql/learn/lecture/22800491#overview. [Accessed: Jan. 26, 2025].
