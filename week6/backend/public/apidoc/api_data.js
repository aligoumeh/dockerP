define({ "api": [
  {
    "type": "delete",
    "url": "/api/todo/:todoItem",
    "title": "Delete an item from list",
    "group": "Tasks",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "todoItem",
            "description": "<p>Item to delete from TODO list</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "HTTP/1.1 204 No content",
          "content": "HTTP/1.1 204 No content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 404 Not found",
          "content": "HTTP/1.1 404 Not found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/server.js",
    "groupTitle": "Tasks",
    "name": "DeleteApiTodoTodoitem"
  },
  {
    "type": "get",
    "url": "/api/todo",
    "title": "Displays TODO list",
    "group": "Tasks",
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/server.js",
    "groupTitle": "Tasks",
    "name": "GetApiTodo"
  },
  {
    "type": "post",
    "url": "/api/todo/:todoItem",
    "title": "Add a new Item to list",
    "group": "Tasks",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "todoItem",
            "description": "<p>Item to add to TODO list</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "HTTP/1.1 201 Created",
          "content": "HTTP/1.1 201 Created",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 400 Bad Request",
          "content": "HTTP/1.1 400 Bad Request",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/server.js",
    "groupTitle": "Tasks",
    "name": "PostApiTodoTodoitem"
  }
] });
