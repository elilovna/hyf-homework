const watchFirstEpisode = function () {
    // draw call stack:anonymous, finishMondayEvening(), watchBreakingBad(), watchFirstEpisode();
    console.log('Watch first episode');
};

const watchBreakingBad = function () {
    console.log('Watching Breaking bad');
    // draw call stack: anonymous, finishMondayEvening(), watchBreakingBad();
    watchFirstEpisode();
    console.log('No more for today');
};

const goForARun = function () {
    console.log('Im running! look at me!');
}

const helpStudentsWithHomework = function () {
    console.log('Help help help');
}

function finishMondayEvening(functionThatIsParameter) {
    functionThatIsParameter();
    // draw call stack: anonymous, finishMondayEvening();
    goForARun();
    // draw call stack: anonymous, finishMondayEvening();
    helpStudentsWithHomework();
    // draw call stack: anonymous, finishMondayEvening();
    console.log('done for today')
}

// draw call stack: anonymous;
finishMondayEvening(watchBreakingBad); 
// draw call stack: anonymous;


/*
1. finishMondayEvening(watchBreakingBad);
2. watchBreakingBad();
3. watchFirstEpisode();
4. goForARun();
5. helpStudentsWithHomework();

console
Watching Breaking bad
Watch first episode
No more for today
Im running! look at me!
Help help help
done for today
*/
  