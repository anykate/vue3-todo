<script setup>
import { ref } from "vue";
import TaskForm from "./components/TaskForm.vue";
import TaskList from "./components/TaskList.vue";
import { useTasks } from "./composables/useTasks.js";

const { tasks, addTask, updateTask, deleteTask, toggleComplete } = useTasks();
const editingTask = ref(null);

const setEditingTask = (task) => {
  editingTask.value = task;
};

const handleUpdate = (updatedTask) => {
  updateTask(updatedTask);
  editingTask.value = null;
};

const cancelEdit = () => {
  editingTask.value = null;
};
</script>

<template>
  <div id="app">
    <h1>Vue 3 CRUD Task Manager</h1>
    <TaskForm
      :editingTask="editingTask"
      @add="addTask"
      @update="handleUpdate"
      @cancel="cancelEdit"
    />
    <TaskList
      :tasks="tasks"
      @edit="setEditingTask"
      @delete="deleteTask"
      @toggle="toggleComplete"
    />
  </div>
</template>
