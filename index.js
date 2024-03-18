




const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000; 
// MongoDB Atlas connection string
const mongoURI = "mongodb+srv://jiyad8201:240RsuscM9RncOsV@cluster0.1lpvklt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Connect to MongoDB Atlas
mongoose.connect(mongoURI, {
  //useNewUrlParser: true,
  //useUnifiedTopology: true
})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello MERN Stack!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



















//240RsuscM9RncOsV  jiyad8201