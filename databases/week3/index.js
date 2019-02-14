var fs = require('fs');
var mysql = require('mysql');

var config = JSON.parse(fs.readFileSync("config-secret.json"))

var connection = mysql.createConnection({
   host: config.host,
   user: config.user,
   password: config.password,
   port: config.port,
   database: config.database
});

connection.connect(err => { if (err) throw err; });

const findDatabaseTasks = function (searchText) {
   connection.query(`SELECT * 
   FROM user JOIN user_task ON user_task.user_id = user.id JOIN task ON user_task.task_id = task.id
   WHERE task.title LIKE ?;`, [searchText], (error, result) => {
         if (error) {
            throw error
         }
         console.log(`results: ${JSON.stringify(result)}`)
      })
}

findDatabaseTasks("%database%")

const findUserTasks = function (userName) {
   connection.query(`SELECT *
   FROM user JOIN user_task ON user_task.user_id = user.id
   WHERE user.name LIKE ?`, [userName], (error, result) => {
         if (error) {
            throw "doesn't work"
         }
         console.log(`results: ${JSON.stringify(result)}`)
      })
}

findUserTasks("Donald Duck")

const findUserTasksStatus = function (userName) {
   connection.query(`
   SELECT status.name, user.name, task.title 
   FROM user
   JOIN user_task ON user.id = user_task.user_id 
   JOIN task ON user_task.task_id = task.id 
   JOIN status ON task.status_id = status.id 
   WHERE user.name LIKE ?
   `, [userName], (error, results, fields) => {
         if (error) {
            throw "doesn't work"
         }
         console.log(`results: ${JSON.stringify(results)}`)
      }
   );
}

findUserTasksStatus("Pren Goldsworthy")

const addNewTask = function (taskId, title, description, created, updated, dueDate, statusID, userID) {
   connection.beginTransaction((err) => {
      if (err) { throw err; }
      connection.query('insert into task(id, title, description, created, updated, due_date, status_id) values(?,?,?,?,?,?,?)',
         [taskId, title, description, created, updated, dueDate, statusID], function (err, result) {
            if (err) {
               connection.rollback(function () {
                  throw err;
               });
            }
            connection.query('INSERT INTO user_task(user_id, task_id) values(?,?)', [userID, taskId], function (err, result) {
               if (err) {
                  connection.rollback(function () {
                     throw err;
                  })
               }
               connection.commit(function (err) {
                  if (err) {
                     return connection.rollback(function () {
                        throw err;
                     });
                  }
                  console.log('success!');
               });
            })
         })
   })
};

const currentDate = new Date()
addNewTask(100, "Pet my rabbit", "Rabbit", currentDate, currentDate, currentDate, 1, 11)

const changeTaskTitle = function (newTitle, taskID) {
   connection.query('UPDATE `task` SET `title` = ? WHERE `id` = ?', [newTitle, taskID,], (error, results, fields) => {
      if (error) {
         throw "It doesn't work"
      }
      console.log(results)
   })
};

changeTaskTitle("task done", 2)

const changeTaskDueDate = function (taskID, newDueDate) {
   connection.query('UPDATE `task` SET `due_date` = ? WHERE `id` = ?', [newDueDate, taskID], (error, results, fields) => {
      if (error) {
         throw "It doesn't work"
      }
      console.log(results)
   })
};

const date = new Date();
changeTaskDueDate(35, date);

const changeTaskStatus = function (newStatus, taskID) {
   connection.query('UPDATE `task` SET `status_id` =  WHERE `id` = ?', [newStatus, taskID], (error, results, fields) => {
      if (error) {
         throw "It doesn't work"
      }
      console.log(results)
   })
};

changeTaskStatus(2, 1)

const markTaskAsCompleted = function (taskID) {
   connection.query('UPDATE `task` SET `status_id` = 3 WHERE `id` = ?', [taskID], function (error, results, fields) {
      console.log(results)
   })
};

markTaskAsCompleted(35)

const showALLTask = () => {
   connection.query('SELECT * FROM `task`', function (error, results, fields) {
      console.log(results);
   })
}

const deleteTask = function (taskID) {
   connection.query(' DELETE FROM `task` WHERE `id` = ?', [taskID], (error, results, fields) => {
      if (error) {
         throw "It doesn't work"
      }
      console.log(results);
   })
};

const deleteUser = function (userID) {
   connection.query('DELETE FROM user WHERE id = ?', [userID], (error, results, fields) => {
      if (error) {
         throw "It doesn't work"
      }
      console.log(results)
   })
};


connection.query('INSERT INTO user (name, email, phone) VALUES(?, ?, ?) ', ['Stripes3', 'stripes@gmail.com', '111-222-333'], function (error, results, fields) {
   console.log(results);
});

connection.query('SELECT * FROM user', function (error, results, fields) {
   console.log(results);
});

connection.end();