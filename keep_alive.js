const express = require('express');

const app = express();

module.exports = {
  
  keep_alive: function() {
    app.get('/', (req, res) => {
      res.send('Hello Express app!')
    });

    app.listen(8080, () => {
      console.log('server started');
    });
  }
}