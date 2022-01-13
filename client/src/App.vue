<template>
	<h1>Todo App</h1>

	<TodoForm
		@addTodo="addTodo"
		v-model:todoInput="todoInput"
		v-model:todoFilterStatus="todoFilterStatus"
	/>

	<ul>
		<li v-for="todo in getTodosByStatus" :key="todo.id" :id="todo.id">
			<TodoItem
				@updateTodoStatus="updateTodoStatus(todo.id)"
				@deleteTodo="deleteTodo(todo.id)"
				:todo-item="todo.item"
				:todo-completed="todo.completed"
			/>
		</li>
	</ul>
</template>

<script setup>
import { ref, inject, watchEffect, computed } from 'vue';
import TodoForm from './components/TodoForm.vue';
import TodoItem from './components/TodoItem.vue';
import { useAPI } from './composables/useAPI';

const id = inject('id');
const todoInput = ref('');
const todoFilterStatus = ref('ALL');
const todos = ref([]);

const completedTodos = computed(() =>
	todos.value.filter((todo) => todo.completed)
);
const incompleteTodos = computed(() =>
	todos.value.filter((todo) => !todo.completed)
);
const getTodosByStatus = computed(() => {
	if (todoFilterStatus.value === 'COMPLETED') return completedTodos.value;
	if (todoFilterStatus.value === 'INCOMPLETE') return incompleteTodos.value;

	return todos.value;
});

const { QUERY_TODOS, ADD_TODO, DELETE_TODO, UPDATE_TODO_STATUS } = useAPI();

async function addTodo() {
	const newTodo = {
		id: id.next().value,
		item: todoInput.value,
		completed: false,
	};

	todos.value.push(newTodo);
	todoInput.value = '';

	const addedTodo = await ADD_TODO(newTodo);

	return addedTodo;
}

async function deleteTodo(todoID) {
	const { todoIndex } = findTodo(todoID);
	todos.value.splice(todoIndex, 1);

	const message = await DELETE_TODO(todoID);

	return message;
}

async function updateTodoStatus(todoID) {
	const { todo } = findTodo(todoID);

	todo.completed = !todo.completed;

	const updatedTodo = await UPDATE_TODO_STATUS(todoID);

	return updatedTodo;
}

function findTodo(todoID) {
	const todo = todos.value.find((todo) => todo.id === todoID);
	const todoIndex = todos.value.findIndex((todo) => todo.id === todoID);

	return { todo, todoIndex };
}

watchEffect(async () => {
	const { data: todosData } = await QUERY_TODOS();

	if (todosData.length > 0) {
		todos.value = todosData;
	}
});
</script>
