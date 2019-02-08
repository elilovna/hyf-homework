'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('http');
var express = _interopDefault(require('express'));

class ContactList {
  /**
   * Simple Contact List class
   */
  constructor() {
    this._list = [];
  }

  /**
   * Check if the new_contact object is a valid new contact
   * Validates, if has the name and phone keys, check if the name is a string
   * and the phone is a number and it has at least 5 digits
   * @param {name:string phone:nubmer} new_contact
   */
  isContactValid(new_contact) {
    if (
      new_contact.hasOwnProperty("name") &&
      new_contact.hasOwnProperty("phone")
    ) {
      if (
        typeof new_contact.name !== "string" ||
        new_contact.name.trim().length === 0
      ) {
        throw new Error(`The contact name ${new_contact.name} is not valid`)
      }
      if (
        typeof new_contact.phone !== "number" ||
        new_contact.phone.toString().length < 5
      ) {
        throw new Error(`The contact phone ${new_contact.phone} is not valid`)
      }
    } else {
      throw new Error("the contact needs to have a name and a phone")
    }
  }

  /**
   * Method for add a contact to the list
   * @param { name: String, phone: number} contact
   */
  add(new_contact) {
    try {
      this.isContactValid(new_contact);
      if (this._list.length === 0) {
        this._list.push(new_contact);
      } else {
        const contact = this._list.some(obj => {
          return obj.name === new_contact.name
        });
        if (contact) {
          console.log(
            "A contact with the name " + new_contact.name + " already exists"
          );
        } else {
          this._list.push(new_contact);
          return;
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  remove(name) {
    if (this._list.length === 0) {
      console.log("The list is empty");
    } else {
      const newContactsArray = this._list.filter(contact => {
        return contact.name !== name
      });
      this._list = newContactsArray;
    }
  }

  searchBy(key, value) {
    return this._list.filter(e => {
      if (e.hasOwnProperty(key)) {
        if (e[key].toString().toLowerCase().startsWith(value.toString().toLowerCase())) {
          return e;
        }
      } else {
        throw new Error(`the key: ${key} does not exists`)
      }
    })
  }

  getList() {
    return this._list;
  }
}

// module.exports = ContactList

const path = require('path');
const bodyParser = require('body-parser');
// const express = require("express");
const app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));


const my_contact_list = new ContactList();

my_contact_list.add({
    name: "marco",
    phone: 42838188
});

my_contact_list.add({
    name: "frank",
    phone: 42838177
});

my_contact_list.add({
    name: "Lena",
    phone: 42845177
});


const all_contacts = my_contact_list.getList();


app.get('/', (req, res) => res.send('Hello world'));

// app.get('/about', function (req, res) {
//     res.sendFile(path.join(__dirname + '/about.html'));
//     //__dirname: it is a string; show path to dist
// });

app.get('/api/contacts', function (req, res) {
    if (req.query.name && req.query.name.length > 0) {
        const search_result = my_contact_list.searchBy("name", req.query.name);
        res.send(search_result);
    } else if (req.query.phone && req.query.phone.length > 0) {
        const search_result = my_contact_list.searchBy("phone", req.query.phone);
        res.send(search_result);
    } else {
        res.send(all_contacts);
    }
}); // object res.(method) => responced handler, with this object you answer, it is not a the exectly object what you send..


const port = 8000; // show where is it
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.get('/api/contacts/:id', function (req, res) {
    // need some validation
    const id = req.params.id;
    res.send(all_contacts[id]);
});

app.delete("/contacts/:name", function (req, res) {
    my_contact_list.remove(req.param.id);
    res.send(my_contact_list);
});

app.post('/api/contacts', function (req, res) {
    const info = req.body;
    // console.log(JSON.stringify(info))
    console.log(info);
    res.send();
    try {
        my_contact_list.isContactValid(info);
        my_contact_list.add(info);
        res.send(JSON.stringify(info));
    } catch (error) {
        console.log(error);
        res.send(JSON.stringify(error));
        res.statusCode = 500;
    }
});

app.put('/api/contacts/:id', function (req, res) {
    const newCont = req.body;
    const id = req.params.id;
    try {
        my_contact_list.isContactValid(newCont);
        all_contacts[id] = newCont;
        res.send(all_contacts);
    } catch (error) {
        console.log(error);
        res.send(JSON.stringify(error));
        res.statusCode = 500;
    }
});



// you should change index file.. remove with name, but you have only id..body..

// app.delete('/api/contacts/delete/:id', function (req, res) {
//     const id = req.params.id;
//     try {
//        my_contact_list[id] == 
//     } catch (error) {
//         console.log(error)
//         res.send(JSON.stringify(error))
//         res.statusCode = 500
//     }
// })






// http
//     .createServer(function (req, res) {
//         const route = req.method + " " + req.url;
//         // code to get an id from url
//         const id = 4

//         var url = require('url');
//         var url_parts = url.parse(req.url, true);
//         var query = url_parts;
//         console.log(query)
//         console.log("route", route);

//         switch (route) {
//             case "GET /":
//                 res.writeHead(200, { "Content-Type": "text/html" });
//                 res.end(index_page);
//                 break;
//             case "GET /about":
//                 res.writeHead(200, { "Content-Type": "text/html" });
//                 res.end(about_page);
//                 break;

//             case "GET /api/contacts":
//                 const all_contacts = my_contact_list.getList();
//                 res.writeHead(200, { "Content-Type": "application/json" });
//                 res.end(JSON.stringify(all_contacts));
//                 break;

//             case "GET /api/contacts/":
//                 const contacts = my_contact_list.getList();
//                 res.writeHead(200, { "Content-Type": "application/json" });
//                 // res.end(JSON.stringify(contacts[]));
//                 break;

//             case "POST /api/contacts":
//                 my_contact_list.add()
//                 req.on("data", chunk => {
//                     console.log(`Data chunk available: ${chunk}`);
//                 });
//                 req.on("end", () => {
//                     //   end of data;
//                 });
//                 console.log("contact added");
//                 res.writeHead(200, { "Content-Type": "text" });
//                 res.end("test");
//                 break;



//             default:
//                 res.writeHead(404, { "Content-Type": "text/html" });
//                 // res.end(error_page);
//                 break;
//         }
//     })
//     .listen(8080);
