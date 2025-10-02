📚 PLP Bookstore (MongoDB Assignment)

📌 Overview
This project is a MongoDB database implementation for a simple bookstore system.  
It demonstrates skills in:
- Database creation and collection setup
- CRUD operations
- Advanced queries with filtering, projection, sorting, and pagination
- Aggregation pipelines for data analysis
- Indexing for performance optimization

⚙️ Setup Instructions
1. Install MongoDB
- Download and install MongoDB Community Edition:  
  [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)
- Install MongoDB Compass(GUI) for easier database management.

2. Start MongoDB
- Start MongoDB service (runs at `mongodb://127.0.0.1:27017` by default).
- Open **MongoDB Compass** or **mongosh**.

3. Create Database & Collection
In `mongosh`:
```js
use plp_bookstore
db.createCollection("books")

4. Insert Sample Data
Run script:
mongosh < insert_books.js
This inserts at least 10 books into the books collection.

5. Run Queries
Execute queries using:
mongosh < queries.js

📂 Project Structure
plp_bookstore/
│── insert_books.js   # Inserts book documents into the collection
│── queries.js        # Contains all MongoDB queries
│── README.md         # Documentation and setup guide
│── screenshot.png    # MongoDB Compass screenshot showing data

📝 Tasks Implemented
✅ Task 1: MongoDB Setup
Database: plp_bookstore
Collection: books

✅ Task 2: Basic CRUD
Insert multiple books
Find by genre, year, and author
Update book price
Delete book by title

✅ Task 3: Advanced Queries
Find in-stock books published after 2010
Projection (title, author, price)
Sorting (ascending/descending by price)
Pagination (5 books per page)

✅ Task 4: Aggregation Pipelines
Average price of books by genre
Author with most books
Books grouped by publication decade

✅ Task 5: Indexing
Index on title
Compound index on author + published_year
Used explain() to compare performance

📸 Screenshot
screeshot.png

🚀 Expected Outcome
Working plp_bookstore database with structured data
Queries demonstrating CRUD, advanced filtering, sorting, and pagination
Aggregation pipelines that provide insights
Indexing implemented with performance improvements