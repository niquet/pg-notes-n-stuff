## Database design process

1. Identify the entities (things) you need to store data about
2. Determine the properties (attributes) of each entity
3. Decide on the data type for each property
4. Establish relationships between entities

Example:
- Entity: Book
- Properties:
  - id (INTEGER)
  - title (VARCHAR)
  - author (VARCHAR)
  - publication_date (DATE)
  - isbn (VARCHAR)
 
## Database structure

- Table: Collection of related records
- Column: Represents a specific attribute of the entity
- Row: Represents a single instance of the entity

- Example:

  ```sql
  CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    author VARCHAR(100) NOT NULL,
    publication_date DATE,
    isbn VARCHAR(13) UNIQUE
  );
  ```

## Credits

- [1] S. Grider, "SQL and PostgreSQL: The Complete Developer's Guide," Udemy. [Online]. Available: https://udemy.com/course/sql-and-postgresql/learn/lecture/22800491#overview. [Accessed: Jan. 26, 2025].
