## Updating records

- Basic syntax:

  ```sql
  UPDATE table_name
  SET column1 = value1, column2 = value2, ...
  WHERE condition;
  ```

## Safe update practices

- Always use a `WHERE` clause
- Verify the condition before updating
- Test updates on a small subset first
- Use transactions for complex updates
- Backup data before major updates
- Check affected row count
- Log significant updates

## Credits

- [1] S. Grider, "SQL and PostgreSQL: The Complete Developer's Guide," Udemy. [Online]. Available: https://udemy.com/course/sql-and-postgresql/learn/lecture/22800491#overview. [Accessed: Jan. 26, 2025].
