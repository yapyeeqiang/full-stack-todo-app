<template>
	<form @submit.prevent="emit('addTodo')">
		<label>Enter your todo: </label>
		<input
			:value="todoInput"
			@input="emit('update:todoInput', $event.target.value)"
			type="text"
			placeholder="Enter here..."
		/>

		<button>Add Todo</button>

		<select
			:value="todoFilterStatus"
			@change="emit('update:todoFilterStatus', $event.target.value)"
		>
			<option value="ALL">All</option>
			<option value="COMPLETED">Completed</option>
			<option value="INCOMPLETE">Incomplete</option>
		</select>
	</form>
</template>

<script setup>
const props = defineProps(['todoInput', 'todoFilterStatus']);
const emit = defineEmits([
	'addTodo',
	'update:todoInput',
	'update:todoFilterStatus',
]);
</script>
