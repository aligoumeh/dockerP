const bodyParser = require('body-parser');
const express = require('express');
const TodoList = require('./todo.js');
const cors = require('cors');
const app = express();

// Serving static files from "public" folder for apidoc to show on localhost
app.use(express.static('public'));

// Allow requests from other domains (cross-origin resource sharing)
app.use(cors());

// Setup the body parser
app.use(bodyParser.json());

// Data store (in memory)
const todoList = new TodoList();

// /**
//  * REST routings for the ToDo list
//  */

/**
 * @api {get} /api/todo Displays TODO list
 * @apiGroup Tasks
 * @apiSuccessExample {json} Success-Response
 * HTTP/1.1 200 OK
 * @apiErrorExample {json} Error-Response
 * HTTP/1.1 404 Not Found
 */
app.get('/api/todo', function(req, res) {
  res.status(200);
  res.json(todoList.getList());
});

/**
 * @api {post} /api/todo/:todoItem Add a new Item to list
 * @apiGroup Tasks
 * @apiParam {String} todoItem Item to add to TODO list
 * @apiSuccessExample {json}
 * HTTP/1.1 201 Created
 * @apiErrorExample {json}
 * HTTP/1.1 400 Bad Request
 */
app.post('/api/todo/:todoItem', function(req, res) {
  try {
    todoList.add(req.params.todoItem);
    res.status(201);
    res.end();
  } catch (err) {
    res.status(400);
    res.end();
  }
});

/**
 * @api {delete} /api/todo/:todoItem Delete an item from list
 * @apiGroup Tasks
 * @apiParam {String} todoItem Item to delete from TODO list
 * @apiSuccessExample {json}
 * HTTP/1.1 204 No content
 * @apiErrorExample {json}
 * HTTP/1.1 404 Not found
 */
app.delete('/api/todo/:todoItem', function(req, res) {
  try {
    todoList.delete(req.params.todoItem);
    res.status(204);
    res.end();
  } catch (err) {
    res.status(404);
    res.end();
  }
});

module.exports = app;
