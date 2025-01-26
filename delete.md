## Deleting records

- Basic Syntax:

  ```sql
  DELETE FROM table_name
  WHERE condition;
  ```

## Cascading deletes

```sql
-- Example with foreign key cascade
  CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);
```

## Soft delete

```sql
-- Instead of hard delete, use a status column
UPDATE users
SET status = 'DELETED',
deleted_at = CURRENT_TIMESTAMP
WHERE user_id = 789;
```

## Safe deletion practices 

- Always have a backup
- Verify deletion criteria
- Always use a `WHERE` clause
- Never delete without a condition
- Consider soft delete for critical data
- Verify records before deletion
- Use transactions for complex deletions
- Log deletion activities

## Credits

- [1] S. Grider, "SQL and PostgreSQL: The Complete Developer's Guide," Udemy. [Online]. Available: https://udemy.com/course/sql-and-postgresql/learn/lecture/22800491#overview. [Accessed: Jan. 26, 2025].
