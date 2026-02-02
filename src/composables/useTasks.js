import { ref } from "vue";

export function useTasks() {
  const tasks = ref([
    { id: 1, title: "Learn Vue 3", completed: false },
    { id: 2, title: "Build CRUD app", completed: true },
  ]);

  const addTask = (title) => {
    const newTask = { id: Date.now(), title, completed: false };
    tasks.value.push(newTask);
  };

  const updateTask = (updatedTask) => {
    const { id, ...updates } = updatedTask;
    const index = tasks.value.findIndex((task) => task.id === id);
    if (index !== -1) {
      tasks.value[index] = { ...tasks.value[index], ...updates };
    }
  };

  const deleteTask = (id) => {
    tasks.value = tasks.value.filter((task) => task.id !== id);
  };

  const toggleComplete = (id) => {
    const task = tasks.value.find((task) => task.id === id);
    if (task) task.completed = !task.completed;
  };

  return { tasks, addTask, updateTask, deleteTask, toggleComplete };
}
