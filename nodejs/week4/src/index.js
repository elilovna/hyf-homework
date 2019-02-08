import http from "http";
import contactList from "./contactList";
const path = require('path');
const bodyParser = require('body-parser')

// think about this like setting for you server
import express from 'express'
// const express = require("express");
const app = express();

app.use(bodyParser.json())

app.use(express.static(__dirname + '/public'))


const my_contact_list = new contactList();

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


app.get('/', (req, res) => res.send('Hello world'))

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
        res.send(all_contacts)
    }
}) // object res.(method) => responced handler, with this object you answer, it is not a the exectly object what you send..


const port = 8000 // show where is it
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/api/contacts/:id', function (req, res) {
    // need some validation
    const id = req.params.id;
    res.send(all_contacts[id])
});

app.delete("/contacts/:name", function (req, res) {
    my_contact_list.remove(req.param.id);
    res.send(my_contact_list)
})

app.post('/api/contacts', function (req, res) {
    const info = req.body
    // console.log(JSON.stringify(info))
    console.log(info)
    res.send()
    try {
        my_contact_list.isContactValid(info)
        my_contact_list.add(info)
        res.send(JSON.stringify(info))
    } catch (error) {
        console.log(error)
        res.send(JSON.stringify(error))
        res.statusCode = 500
    }
})

app.put('/api/contacts/:id', function (req, res) {
    const newCont = req.body
    const id = req.params.id;
    try {
        my_contact_list.isContactValid(newCont)
        all_contacts[id] = newCont;
        res.send(all_contacts)
    } catch (error) {
        console.log(error)
        res.send(JSON.stringify(error))
        res.statusCode = 500
    }
})



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