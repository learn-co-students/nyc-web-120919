# Intro to SQL

## SWBATs

*  [ ] Explain persistence and the need for using SQL
*  [ ] Define SQL
*  [ ] Explain the difference between SQLite3 and SQL
*  [ ] Explore provided data through SQLite Browser
*  [ ] Define CRUD
*  [ ] Perform CRUD actions on a single table
*  [ ] Perform CRUD actions across related tables

## What can I do with data?



## CRUD

#### Create
#### Read
#### Update
#### Delete


#### Instagram

* create 
  * posting a picture
  * making a comment
  * liking a photo

* read
  * scrolling through ya feedz
  * reading comments

* update
  * changing a description
  * tagging someone after the fact

* delete
  * trashing a photo
  * unfollowing someone you hate now

### Database

* data
* information
* container - storage place for data
* tables and spreadsheets
* indexed - everything is associated with a unique ID
* software

* relational databased - RDBMS - MySQL, Postgresql, Oracle, Maria(?), SQLite3
* NoSQL databases
  * document store - Mongo
  * graph database - Neo4j
  * cache - Redis

### SQL

* Structured Query Language
* language for managing DB data, used only to talk to database


## Set Up 

1. Install the SQLite Browser if you haven't already [here](http://sqlitebrowser.org/)
2. Open the SQLite Browser and click 'File -> Open DataBase'
3. Choose the `chinook.db` file from this repo. This database is open source and maintained by Microsoft (SQL is no fun if you don't have any data)
4. Click the tab that says 'Execute SQL'. Type SQL queries in the box above. Press the play button. See the results of that query in the box below

## Challenges

1. Write the SQL to return all of the rows in the artists table?

```sql
SELECT  *
FROM artists;
```

2. Write the SQL to select the artist with the name "Black Sabbath"

```sql
SELECT *
FROM artists
WHERE name = "Black Sabbath";
```

```sql
SELECT *
FROM artists
WHERE name LIKE "black%"
```

3. Write the SQL to create a table named 'fans' with an autoincrementing ID that's a primary key and a name field of type text

```sql
CREATE TABLE fans (
  id INTEGER PRIMARY KEY,
  name TEXT
);
```

4. Write the SQL to alter the fans table to have an artist_id column type integer?

```sql
ALTER TABLE fans
ADD COLUMN artist_id INTEGER;
```

5. Write the SQL to add yourself as a fan of the Black Eyed Peas? ArtistId **169**

```sql
INSERT INTO fans (name, artist_id)
VALUES ("Jay", 169);
```

6. How would you update your name in the fans table to be your new name?

```sql
UPDATE fans
SET name = "All caps Jay"
WHERE name = "Jay";
```

7. Write the SQL to return fans that are not fans of the black eyed peas.

```sql
SELECT *
FROM fans
WHERE artist_id IS NOT 169;
```

8. Write the SQL to change a fan's artist.


9. Write the SQL to display an artists name next to their album title

```sql
SELECT artists.name, albums.title
FROM artists
JOIN albums
ON artists.id = albums.artist_id;
```

10. Write the SQL to display artist name, album name and number of tracks on that album


11. Write the SQL to return the name of all of the artists in the 'Pop' Genre


## BONUS (very hard)

12. I want to return the names of the artists and their number of rock tracks
    who play Rock music
    and have move than 30 tracks
    in order of the number of rock tracks that they have
    from greatest to least

