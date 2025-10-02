use plp_bookstore

// FIND ALL BOOKS IN A SPECIFIC GENRE
db.books.find({ genre: "Romance" })

// FIND BOOKS PUBLISHED AFTER A CERTAIN YEAR
db.books.find({ published_year: { $gt: 2010 } })

// FIND BOOKS BY A SPECIFIC AUTHOR
db.books.find({ author: "George Orwell" })

// UPDATE PRICE OF A SPECIFIC BOOK
db.books.updateOne(
    { title: "Pride and Prejudice" },
    { $set: { price: 15.50 }}
)

// DELETE BOOK BY ITS TITLE
db.books.deleteOne({ title: "Wuthering Heights "})

// BOOKS IN STOCK AND PUBLISHED AFTER 2010
db.books.find({ in_stock: true, published_year: { $gt: 2010 } })

// PROJECTION - ONLY RETURN TITLE, AUTHOR AND PRICE
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 })

// SORTING BY PRICE - ASCENDING
db.books.find().sort({ price: 1 })

// SORTING BY PRICE - DESCENDING
db.books.find().sort({ price: -1 })

// PAGINATION(limit & skip) - 5 BOOKS PER PAGE
db.books.find().limit(5)
db.books.find().skip(5).limit(5)

// AVERAGE PRICE OF BOOKS BY GENRE
db.books.aggregate([
    { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }
])

// AUTHOR WITH MOST BOOKS
db.books.aggregate([
    { $group: {_id: "$author", count: { $sum: 1 } } },
    { $sort: { count: -1 } },
    { $limit: 1 }
])

// GROUP BOOKS BY PUBLICATION DECADE AND COUNT THEM
db.books.aggregate([
    {
        $group: {
            _id: { $subtract: [ { $divide: ["$published_year", 10] }, { $mod: [ { $divide: ["$published_year", 10] }, 1]}]},
            count: { $sum: 1 }
        }
    },
    { $sort: { _id: 1 } }
])

// CREATE TITLE INDEX
db.books.createIndex({ title: 1 })

// COMPOUND INDEX ON AUTHOR & PUBLISHED_YEAR
db.books.createIndex({ author: 1, published_year: -1 })

// PERFOMANCE IMPROVEMENT - explain()
db.books,find({ title: "Animal Farm" }).explain("executionStats")
