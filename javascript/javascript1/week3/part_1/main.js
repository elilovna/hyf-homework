//Step 1: Custom DOM manipulation challenge 
const booksIds = ["harry_potter_chamber_secrets",
    "a_smarter_way_to_learn_javascript",
    "the_idiot",
    "faust",
    "the_picture_of_dorian_grey",
    "lord_of_the_flies",
    "the_grapes_of_wrath",
    "three_comrades",
    "love_lasts_three_years",
    "healthy_brain_and_happy_life"];

const book = {
    [booksIds[0]]: {
        title: "Harry Potter chamber secrets",
        language: "English",
        author: "J. K. Rowling",
        data_published: "2 July 1998",
    },
    [booksIds[1]]: {
        title: "A smarter way to learn javascript",
        language: "English",
        author: "Mark Myers",
        data_published:"1st 2013"
    },
    [booksIds[2]]: {
        title: "The Idiot",
        language: "English",
        author: "Fyodor Mikhailovich Dostoevsky",
        data_published:"1868/1869"
    },
    [booksIds[3]]: {
        title: "Faust",
        language: "English",
        author: "Johann Wolfgang von Goethe",
        data_published:"1720 "
    },
    [booksIds[4]]: {
        title: "The picture of Dorian Grey",
        language: "English",
        author: "Oscar Wilde",
        data_published:"July 1890"
    },
    [booksIds[5]]: {
        title: "Lord of the flies",
        language: "English",
        author: "William Golding",
        data_published:"1954"
    },
    [booksIds[6]]: {
        title: "The grapes of wrath",
        language: "English",
        author: "John Steinbeck",
        data_published:"1939"
    },
    [booksIds[7]]: {
        title: "Three comrades",
        language: "English",
        author: "Erich Maria Remarque",
        data_published:"1936"
    },
    [booksIds[8]]: {
        title: "Love lasts three years",
        language: "English",
        author: "Frédéric Beigbeder",
        data_published:"2011"
    },
    [booksIds[9]]: {
        title: "Healthy brain and happy life",
        language: "English",
        author: "Wendy Suzuki,",
        data_published: "May 19, 2015"
    }
}

console.log(book);

const booksImages = {
    [booksIds[0]]: "images/Harry_Potter_and_the_Chamber_of_Secrets.jpg",
    [booksIds[1]]: "images/SmarterWayToLearnJS.jpg",
    [booksIds[2]]: "images/theIdiot.jpeg",
    [booksIds[3]]: "images/faust.jpg",
    [booksIds[4]]: "images/dorianGrey.jpg",
    [booksIds[5]]: "images/lordOfTheFlies.jpg",
    [booksIds[6]]: "images/grapes.jpg",
    [booksIds[7]]: "images/3_comrades.jpg",
    [booksIds[8]]: "images/love3years.jpg",
    [booksIds[9]]: "images/suzuki.jpg"
};


const some = () => {
    for (let index = 0; index < booksIds.length; index++) {
        const id = booksIds[index];
        const container = document.getElementById(id);
        const bookInfo = book[id];
        container.getElementsByClassName("book-image")[0].src = booksImages[id];
        container.getElementsByClassName("language")[0].innerHTML = bookInfo.language;
        container.getElementsByClassName("author")[0].innerHTML= bookInfo.author;
        container.getElementsByClassName("title")[0].innerHTML= bookInfo.title;
        container.getElementsByClassName("data")[0].innerHTML= bookInfo.data_published;
    }
}

const func1 = () => {
    some()
}

func1()
