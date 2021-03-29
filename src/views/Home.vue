<template>
  <div class="home">
    <h1>Todoリスト</h1>
    <div class="select">
      <input
        type="radio"
        name="todo"
        v-model="selectStatus"
        value="all"
      />すべて
      <input
        type="radio"
        name="todo"
        v-model="selectStatus"
        value="working"
      />作業中
      <input type="radio" name="todo" v-model="selectStatus" value="done" />完了
    </div>
    <div class="list-contents">
      <table class="list">
        <tr>
          <th>ID</th>
          <th>コメント</th>
          <th>状態</th>
        </tr>
        <tr v-for="(todo, index) in todoList" :key="index">
          <td>{{ todo.id }}</td>
          <td>{{ todo.task }}</td>
          <td>
            <button @click="changeStatus(todo)">{{ todo.status }}</button>
          </td>
          <td><button @click="deleteTodoList(todo.id)">削除</button></td>
        </tr>
      </table>
    </div>
    <h2>新規タスクの追加</h2>
    <input type="text" v-model="inputContents" />
    <button @click="addTodo()">追加</button>
  </div>
</template>

<script>
import {
  createTodo,
  updateStatus,
  deleteTodo,
  switchStatus,
} from '../components/helpers/difinition';

export default {
  data() {
    return {
      todos: [],
      inputContents: '',
      selectStatus: 'all',
    };
  },
  methods: {
    addTodo: function() {
      createTodo(this.inputContents, this.todos);
      this.inputContents = '';
    },
    changeStatus: function(todo) {
      updateStatus(todo);
    },
    deleteTodoList: function(id) {
      deleteTodo(id, this.todos);
    },
  },
  computed: {
    createTodo,
    updateStatus,
    deleteTodo,
    switchStatus,
    todoList: function() {
      return switchStatus(this.selectStatus, this.todos);
    },
  },
};
</script>

<style>
.list th {
  margin: 0px, 10px;
}
</style>
