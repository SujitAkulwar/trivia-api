const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./mysql');

const app = express();
app.use(bodyParser.json());
app.use(cors());
const PORT = 5001;




//////////   register   //////////////////
app.post('/register', (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: 'All fields are required' }).end();
  }

  const insertQuery = 'INSERT INTO trivia_users (name, email, password) VALUES (?, ?, ?)';

  db.query(insertQuery, [username, email, password], (err, results) => {
    if (err) {
      console.error('Error registering user:', err);
      res.status(500).json({ error: 'Error registering user' }).end();
    } else {
      res.json({ message: 'User registered successfully' }).end();
    }
  });
});

////////// login ///////////////////////////////
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'All fields are required' }).end();
  }

  const selectQuery = 'SELECT * FROM trivia_users WHERE email = ? and password = ?';

  db.query(selectQuery, [email, password], (err, results) => {
    if (err) {
      console.error('Error login user:', err);
      res.status(500).json({ error: 'Error in login' }).end();
    } else if (results.length === 0) {
      return res.status(401).json({ error: 'Username or password is incorrect' }).end();
    } else {
      res.json({ message: results });
    }
  });
});

//////////////////////// create api key /////////////////////////
app.post('/create_api_key', (req, res) => {
  const { uid } = req.body;

  if (!uid) {
    return res.status(400).json({ error: 'All fields are required' }).end();
  }

  ////////////////////////////////// generating unique key ///////////////////////////
  var unique_id = "";
  const st = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  for (let i = 0; i < 10; i++){
    unique_id += st[Math.floor(Math.random() * 62)];
  }
  ////////////////////////////////////////////////////////////////////////////////////

  const Query = 'INSERT INTO `api_keys`(`api_key`, `user_id`) VALUES (?,?)';
  db.query(Query, [unique_id, uid], (err, results) => {
    if (err) {
      console.error('Error registering user:', err);
      res.status(500).json({ error: 'Error registering user' }).end();
    } else {
      res.json({ message: "ok" }).end();
    }
  }); 
});

//////////////////////// get api key /////////////////////////
app.post('/get_api_key', (req, res) => {
  const { uid } = req.body;

  if (!uid) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const Query = 'SELECT `api_key` FROM `api_keys` WHERE `user_id` = ?';
  db.query(Query, [uid], (err, results) => {
    if (err) {
      console.error('Error registering user:', err);
      res.status(500).json({ error: 'Error registering user' });
    } else {
      res.status(200).json({ results }).end();
    }
  }); 
});

/////////////////////// get all questions //////////////////////////////////////////////
app.post('/questions', (req, res) => {
  const { api_key, category, count } = req.body;
  if (!api_key || !category || !count) {
    return res.status(400).json({ error: 'All fields are required' }).end();
  }

  ////////////////////////// checking if api key is correct or not ////////////////////
  var api_key_exist = false;
  var Q = "SELECT * FROM `api_keys` WHERE `api_key`= ?";
  db.query(Q, [api_key], (err, results) => {
    if (err) {
      console.error('Error :', err);
      res.status(500).json({ error: 'api key is wrong...' }).end();
    } else {
      api_key_exist = true;
    }
  });

  //////////////////////////// getting questions ///////////////////////////////////////
  var Query = 'SELECT * FROM `trivia_questions` where category=?';
  db.query(Query, [category], (err, results) => {
    if (err) {
      console.error('Error : ', err);
      res.status(500).json({ error: 'enter correct category...' }).end();
    } else {
      var answer = null;
      if (results.length > count) {
        answer = results.slice(0, count + 1);
      }else {
        answer = results;
      }
      res.json({ message: answer });
    }
  });
});

/////////////////////// get all users ////////////////////////////////
app.post('/all_users', (req, res) => {
  const Query = 'SELECT * FROM trivia_users';
  db.query(Query, (err, results) => {
    if (err) {
      console.error('Error registering user:', err);
      res.status(500).json({ error: 'Error registering user' }).end();
    } else {
      res.json({ message: results }).end();
    }
  });
});


////////////////// get all categories /////////////////
app.post('/get_all_categories', (req, res) => {
  const Query = 'SELECT DISTINCT category FROM trivia_questions;';
  db.query(Query, (err, results) => {
    if (err) {
      console.error('Error registering user:', err);
      res.status(500).json({ error: 'Error registering user' }).end();
    } else {
      res.json({ message: results });
    }
  });
});




// app.post('/get_all_apikeys', (req, res) => {
//   const Query = 'SELECT * FROM `api_keys`';
//   db.query(Query, (err, results) => {
//     if (err) {
//       console.error('Error registering user:', err);
//       res.status(500).json({ error: 'Error registering user' }).end();
//     } else {
//       res.json({ message: results });
//     }
//   });
// });


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
