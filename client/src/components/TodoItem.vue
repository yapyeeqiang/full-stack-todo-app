<template>
	<span :class="{ completed: todoCompleted }">{{ todoItem }}</span>

	<button @click.prevent="emit('updateTodoStatus')">{{ buttonText }}</button>
	<button @click.prevent="emit('deleteTodo')">Delete</button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps(['todoItem', 'todoCompleted']);
const emit = defineEmits(['deleteTodo', 'updateTodoStatus']);

const buttonText = computed(() => (props.todoCompleted ? 'Undo' : 'Complete'));
</script>

<style scoped>
.completed {
	color: green;
	text-decoration: line-through;
}
</style>
