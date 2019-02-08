const ContactList = require("./contactList.js");

const my_contact_list = new ContactList()


my_contact_list.add({
    name: "Ana",
    phone: 42838328,
    country: "Italy"
})

my_contact_list.add({
    name: "Frank",
    phone: 42213328

})

my_contact_list.add({
    name: "Liza",
    phone: 42256328
})




// console.log(my_contact_list)
// my_contact_list.remove("Gino")

// my_contact_list.searchBy("phone", 42)

// console.log(my_contact_list.getList())

my_contact_list.add({
    name: "Kitty",
    phone: 24347865
})

my_contact_list.add({
    name: "Antonio",
    phone: 42838328,
    country: "Italy"
})



console.log(my_contact_list.searchBy("name", "an"))
// console.log(my_contact_list.getList())
