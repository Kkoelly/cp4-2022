const express = require('express');
const bodyParser = require("body-parser");
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

const myUrl = "mongodb+srv://" + process.env.MONGO_USER + ":" + process.env.MONGO_PASS + "@cluster0.ui9jzhd.mongodb.net/?retryWrites=true&w=majority";
// connect to the database
mongoose.connect(myUrl, {
  useNewUrlParser: true
});

  const completedBookSchema = new mongoose.Schema({
    title: String,
    author: Array,
    description: String,
    coverImage: String, //holds the api string to image
    dateCompleted: String,
    rating: Number,
    ranking: Number,
    inFavorites: Boolean,
    inReadingList: Boolean,
    inCompletedList: Boolean,
    jsonID: String,
  });

  const Book = mongoose.model('completedBook', completedBookSchema);


  app.put('/api/books/:id', async (req, res) => {
    try {
      
      let book = await Book.findOne({
        _id: req.params.id
      });
      if (req.body.whichList == 'completed'){
          book.inCompletedList = true;
      } else if (req.body.whichList == 'favorites'){
          book.inFavorites = true;
      } else if (req.body.whichList == 'booksToRead'){
          book.inReadingList = true;
      } 
      
      await book.save();
      res.sendStatus(200);
      
    } catch (error){
      console.log(error);
      res.sendStatus(500);    
    }
  });

  app.put('/api/books/edit/:id', async (req, res) => {
    try {
      let book = await Book.findOne({
        _id: req.params.id
      });
      console.log()
      if (req.body.rating !== 0) {
        book.rating = req.body.rating;
      }
      if (req.body.dateCompleted) {
        book.dateCompleted = req.body.dateCompleted;
      }
      await book.save();
      res.sendStatus(200);
    } catch(error) {
      console.log(error);
      res.sendStatus(500);
    }
  });
    
  app.put('/api/books/remove/:id', async (req, res) => {
    try {
      
      let book = await Book.findOne({
        _id: req.params.id
      });
      if (req.body.whichList == 'completed'){
          book.inCompletedList = false;
      } else if (req.body.whichList == 'favorites'){
          book.inFavorites = false;
      } else if (req.body.whichList == 'booksToRead'){
          book.inReadingList = false;
      } 
      
      await book.save();

    
      if (book.inCompletedList == false && book.inFavorites == false && book.inReadingList == false ){
        //delete the book if it's not in any lists
        await Book.deleteOne({
          _id: req.params.id,
        });
      }

      res.send(book._id);
      
    } catch (error){
      console.log(error);
      res.sendStatus(500);    
    }
  });

  app.post('/api/books', async (req, res) => {
    const book = new Book({
      title: req.body.result.title,
      author: req.body.result.author,
      description: req.body.result.description,
      coverImage: req.body.result.image, //holds the api string to image
      dateCompleted: "",
      notes: [],
      rating: 0,
      ranking: 0,
      inFavorites: false,
      inReadingList: false,
      inCompletedList: false,
      jsonID: req.body.result.id
    });

    try {
      book.save();
      res.send(book);
      
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });
  
  app.get('/api/books/:jsonID', async (req, res) =>{
    try {
      
      let myBook = await Book.findOne({
        jsonID: req.params.jsonID,
      });
      if (myBook == null){
        res.send(false);
      } else {
        res.send(myBook._id);
      }

    } catch {
      console.log(error);
      res.sendStatus(500);
    }


  });

  app.get('/api/allbooks', async (req, res) =>{
    try {
      
      let books = await Book.find();
      res.send(books);

    } catch {
      console.log(error);
      res.sendStatus(500);
    }


  });

  app.get('/api/books/date/:id', async (req, res) =>{
    try {
      let book = await Book.find({
        dateCompleted: req.body.dateCompleted,
      });
      if (book === null) {
        res.send(false);
      } else {
        res.send(book.dateCompleted);
      }
    } catch {
      console.log(error);
      res.sendStatus(500);
    }


  });

  app.delete('/api/books/:id', async (req, res) => {
    try {
      
      await Book.deleteOne({
        _id: req.params.id,
      });
  
      res.sendStatus(200);
  
    } catch (error){
      console.log(error);
      res.sendStatus(500);    
    };
  
  });

  app.listen(3003, () => console.log('Server listening on port 3003!'));
