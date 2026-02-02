<script setup>
import { ref, watch } from "vue";

const props = defineProps(["editingTask"]);
const emit = defineEmits(["add", "update", "cancel"]);

const title = ref("");

watch(
  () => props.editingTask,
  (newTask) => {
    title.value = newTask ? newTask.title : "";
  },
  { immediate: true }
);

const handleSubmit = () => {
  if (props.editingTask) {
    emit("update", { id: props.editingTask.id, title: title.value });
  } else {
    emit("add", title.value);
  }
  title.value = "";
};

const cancelEdit = () => {
  emit("cancel");
  title.value = "";
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="title" placeholder="Task title" required autofocus="true" />
    <button type="submit">{{ editingTask ? "Update" : "Add" }} Task</button>
    <button v-if="editingTask" @click="cancelEdit" type="button">Cancel</button>
  </form>
</template>
