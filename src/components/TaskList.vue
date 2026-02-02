<script setup>
const props = defineProps(["tasks"]);
const emit = defineEmits(["edit", "delete", "toggle"]);

const editTask = (task) => emit("edit", task);
const deleteTask = (id) => emit("delete", id);
const toggleComplete = (id) => emit("toggle", id);
</script>

<template>
  <ul>
    <li
      v-for="task in tasks"
      :key="task.id"
      :class="{ completed: task.completed }"
    >
      <span @click="toggleComplete(task.id)">{{ task.title }}</span>
      <button @click="editTask(task)">Edit</button>
      <button @click="deleteTask(task.id)">Delete</button>
    </li>
  </ul>
</template>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
