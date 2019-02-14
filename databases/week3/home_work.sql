SHOW tables;

SELECT * 
FROM user ;

SELECT * 
FROM user_task;

SELECT * 
FROM task
WHERE task.title LIKE "%database%";

SELECT * 
FROM user JOIN user_task ON user_task.user_id = user.id JOIN task ON user_task.task_id = task.id
WHERE task.description LIKE "%database%" or task.title LIKE "%database%";

SELECT *
FROM user JOIN user_task ON user_task.user_id = user.id
WHERE user.name LIKE "%Donald%Duck%";

SELECT status.name, user.name, task.title
FROM user JOIN user_task ON user.id = user_task.user_id JOIN task ON user_task.task_id = task.id 
JOIN status ON task.status_id = status.id
WHERE user.name LIKE "%Pavel%";

insert into task (id, title, description, created, updated, due_date, status_id) values (40, "test", "added new task", NOW(), NOW(), NULL, 2);

SELECT *
from task;

insert into user_task (user_id, task_id)values (10, 35);

select task.title
FROM user JOIN user_task ON user.id = user_task.user_id JOIN task ON user_task.task_id = task.id 
JOIN status ON task.status_id = status.id
where user.id = 11;

UPDATE task
SET title = 'done'
WHERE id = 2;

SELECT task.title
FROM task
WHERE task.id = 2; 

UPDATE task 
SET status_id = 2
WHERE id = 17;

UPDATE task 
SET status_id = 3
WHERE id = 36;

DELETE 
FROM task 
WHERE id = 1;

DELETE 
FROM user 
WHERE id = 11;

SELECT *
FROM task
WHERE task.id = 10;


SELECT * 
FROM user JOIN user_task ON user_task.user_id = user.id JOIN task ON user_task.task_id = task.id
where user.id=11;


