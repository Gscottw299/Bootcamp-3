//This file holds any configuration variables we may need
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
    db: {
        uri: 'mongodb+srv://user:bootcamp3@cluster0-lcxkb.mongodb.net/test?retryWrites=true&w=majority'//place the URI of your mongo database here.
    },
    openCage: {
        key: 'c5c7ccfe0091422d9870b48c3125b22a' //place your openCage public key here - Sign-up for a free key https://opencagedata.com/
    },
    port: 8080
};