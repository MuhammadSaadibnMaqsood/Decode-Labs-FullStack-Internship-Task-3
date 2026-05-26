import Todo from "../model/todoModel.js";

export const createTodo = async (req, res) => {
  try {
    const { title, description, completed } = req.body;

    if (!title || typeof title !== "string" || !title.trim()) {
      return res.status(400).json({ message: "Title is required" });
    }

    const todo = await Todo.create({
      title: title.trim(),
      description: description?.trim() || "",
      completed: Boolean(completed),
    });

    return res.status(201).json({
      message: "Todo created successfully",
      todo,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });

    return res.status(200).json({
      message: "Todos fetched successfully",
      todos,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const todo = await Todo.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    return res.status(200).json({
      message: "Todo updated successfully",
      todo,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await Todo.findByIdAndDelete(id);

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    return res.status(200).json({
      message: "Todo deleted successfully",
      todo,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
