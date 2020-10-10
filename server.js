const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const port = process.env.PORT || 8080;

const app = express();

app.use(cors());

mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  },
  err => {
    if (err) {
      console.log('err:', err);
    } else {
      console.log('Connected to database');
    }
  }
);

app.use('/', require('./routes/root_router'));
app.use('/calc-history', require('./routes/calc_history_router'));

app.listen(port, () => console.log('Fun Calculater server is running on port ' + port));