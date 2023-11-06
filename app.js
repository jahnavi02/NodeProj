const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bookRoutes = require('./routes/bookRoutes');

const app = express();

const url = 'mongodb+srv://jan:janpassword@cluster0.tpu0wwg.mongodb.net/?retryWrites=true&w=majority';

const connectionParams={
}

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(url, connectionParams);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/api', bookRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



