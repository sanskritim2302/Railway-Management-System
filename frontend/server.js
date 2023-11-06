const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Connect to MongoDB (replace 'your_database' with your actual database name)
mongoose.connect('mongodb://localhost:27017/train', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define the Train schema
const trainSchema = new mongoose.Schema({
  train_name: String,
  source: String,
  destination: String,
  availability: Boolean,
  date: String,
  seats_available: Number,
});

const Train = mongoose.model('Train', trainSchema);

// API endpoint to get all trains
app.get('/api/trains', async (req, res) => {
  try {
    const trains = await Train.find();
    res.json(trains);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// API endpoint to check seat availability for a specific train on a given date
app.get('/api/availability', async (req, res) => {
  const { train_name, date } = req.query;

  try {
    const train = await Train.findOne({ train_name, date });

    if (!train) {
      return res.status(404).json({ message: 'Train not found' });
    }

    res.json({ seats_available: train.seats_available });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
