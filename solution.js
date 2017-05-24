var bcrypt = require('bcrypt')

function hash(plaintext) {
   return bcrypt.hashSync(plaintext, 8)
    // Store hash in your password DB.

  };



    function compare(plaintext, hash) {
      return bcrypt.compareSync(plaintext, hash)

    }



    module.exports = {
        hash,
        compare
    };
