const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const todos = [
	{ id: 1, item: 'Learn Vue', completed: true },
	{ id: 2, item: 'Learn Express', completed: false },
];

app.get('/todos', (req, res) => {
	res.json(todos);
});

app.post('/todo', (req, res) => {
	const newTodo = req.body;
	todos.push(newTodo);

	res.json(newTodo);
});

app.put('/todo/:id/status', (req, res) => {
	const todoID = Number(req.params.id);

	const foundTodo = todos.find((todo) => todo.id === todoID);

	foundTodo.completed = !foundTodo.completed;

	res.json(foundTodo);
});

app.delete('/todo/:id', (req, res) => {
	const todoID = Number(req.params.id);
	const foundTodoIndex = todos.findIndex((todo) => todo.id === todoID);

	todos.splice(foundTodoIndex, 1);

	res.json({ message: 'Deleted' });
});

app.listen(4000);
