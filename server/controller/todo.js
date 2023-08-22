const todoModel = require("../models/todo");

class TodoApp {
  async todoListAll(req, res) {
    try {
      // Find all the documents
      let Todo = await todoModel.find({});
      if (Todo) {
        return res.json({ Todo });
      }
    } catch (err) {
      console.log(err);
    }
  }

  async todoPost(req, res) {
    try {
      // These are the fields with schema{required: true}
      const { taskName } = req.body;

      // If not the vals are found warn user
      if (!taskName) {
        return res.json({
          message: "all the required fields are not provided",
        });
      } else {
        // Finally if the values are provided attempt to populate it to the DB
        let newTodo = new todoModel({
          taskName,
          taskDate: new Date(),
        });

        const todoSave = await newTodo.save();
        if (todoSave) {
          return res.json({ success: "Todo created successfully" });
        }
      }
    } catch (err) {
      console.error(err);
    }
  }
}

const todoController = new TodoApp();
module.exports = todoController;
