
//Create a function that returns an empty object.
const user = () => {
    let user = {};
    user.time = 12; 
    return user;
};
let timeObject = user(); 
console.log(timeObject); 

//EX:2

const paint = (color1, color2, color3) => {
    let bla = [{ color: color1 }, { color: color2 }, { color: color3 }];
    return bla;
}

let colorObjects = paint();
let colors = paint('red', 'blue', 'yellow')

for (let i = 0; i < colors.length; i++) {
    let obj = colors[i];
    console.log(obj.color);
}

//EX - 3

function days() {

    const weekdays = new Array(7);
    weekdays[0] = "Sunday";
    weekdays[1] = "Monday";
    weekdays[2] = "Tuesday";
    weekdays[3] = "Wednesday";
    weekdays[4] = "Thursday";
    weekdays[5] = "Friday";
    weekdays[6] = "Saturday";

    const currentDate = new Date();
    const numberOfDay = currentDate.getDay();
    const futureDate = 6;
    const newDay = (numberOfDay + futureDate) % 7;
    console.log(weekdays[newDay]);

}
days();

//NOnoN0nOYes (Note taking app)

let notes = [];

function addNote(note, noteId) {
    let obj = {
        note,
        noteId
    }
    notes.push(obj);
}

addNote("Anna", 2);
addNote("Vlad", 3);
addNote("Ug", 4);

console.log(notes);

function getNoteFromId(id) {
    if (id === undefined || typeof id !== "number") { // wrong input
        console.log("ERROR");
        return;
    }

    for (let index = 0; index < notes.length; index++) {
        if (notes[index].noteId == id) {
            return notes[index];
        }
    }

    return null; // wrong id
}

console.log(getNoteFromId(4));

function showAllNotes() {
    for (let index = 0; index < notes.length; index++) {
        console.log(`The note with id: ${notes[index].noteId}, has the following note text: "${notes[index].note}".`);
    }
}
showAllNotes();

function deleteItem(id) {
    const func = note => {
        return id != note.noteId;
    }
    const newArray = notes.filter(func);
    console.log(newArray);
}

function showAllNotes() {
    for (let index = 0; index < notes.length; index++) {
        console.log(`The note with id: ${notes[index].noteId}, has the following note text: "${notes[index].note}".`);
    }
}

//CactusIO-interactive (Smart phone usage app)

let activities = [];
function addActivity(activity, duration, date = new Date()) {
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let dateString = date.toLocaleDateString("en-US", options);
    activities.push({ date: dateString, activity, duration });
}

let human = {
    name: "Vlad",
    age: 30
}

addActivity('Youtube', 15);
addActivity('Reading', 20);
addActivity('Sport', 60);
const yesterdayDate = new Date();
yesterdayDate.setDate(yesterdayDate.getDate() - 1);
addActivity('Instagram', 60, yesterdayDate);
addActivity('Youtube', 20, yesterdayDate);

console.log(activities);

// show my status
let sumOfMinutes = 0;

function showStatus() {
    if (activities === undefined || activities.length == 0) {
        console.log("Add some activities before calling showStatus");
        return;
    }

    for (let index = 0; index < activities.length; index++) {
        sumOfMinutes += activities[index].duration;
    }
    console.log(`You have added ${activities.length} activities. They amount to ${sumOfMinutes} of usage`);

}
showStatus();

// function is  showing the number of actitivies for that specific day.

function specificDay(date) {
    return activities.filter(activity => activity.date == date);
}
let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let transformDate = yesterdayDate.toLocaleDateString("en-US", options);
console.log(specificDay(transformDate));

//limit

function userLimit(limit) {
    if (limit < sumOfMinutes) {
        console.log("You have reached your limit, no more smartphoning for you!");
    }
}
userLimit(60);