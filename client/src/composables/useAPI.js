import axios from 'axios';

const apiClient = axios.create({
	baseURL: import.meta.env.VITE_SERVER_URL,
});

export function useAPI() {
	return {
		QUERY_TODOS() {
			return apiClient.get('/todos');
		},
		GET_TODO(id) {
			return apiClient.get(`/todo/${id}`);
		},
		ADD_TODO(todo) {
			const addedTodo = apiClient.post('/todo', todo);
			return addedTodo;
		},
		UPDATE_TODO_STATUS(todoID) {
			const updatedTodo = apiClient.put(`/todo/${todoID}/status`);

			return updatedTodo;
		},
		DELETE_TODO(todoID) {
			const message = apiClient.delete(`/todo/${todoID}`);

			return message;
		},
	};
}
