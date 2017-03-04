<template>
  <section id="todoapp" class="todoapp">
    <header>
      <h1>todos</h1>
        <input class="new-todo" placeholder="What needs to be done?" v-model.trim="newTodo" autofocus @keyup.enter="addTodo" @keydown.esc="clearTodo">
        <br/>
    </header>
    <section class="main">
      <input class="toggle-all" type="checkbox">
      <ul class="todo-list">
        <li class="todo" v-for="todo in todos" :class="{ completed: todo.completed, editing: todo == editedTodo }">
          <div class="view">
           <input class="toggle" type="checkbox" v-model="todo.completed">
           <label @dblclick="editTodo(todo)">{{todo.title}}</label>
           <button class="destroy" @click="removeTodo(todo)"></button>
         </div>
         <input class="edit" type="text" v-show="editedTodo" v-model="todo.title" v-todo-focus="todo == editedTodo" @blur="doneEdit(todo)" @keyup.enter="doneEdit(todo)" @keyup.esc="cancelEdit(todo)">
        </li>
      </ul>
    </section>
    <footer class="footer">
      <span class="todo-count" v-show="todos.length">Todo Count: {{todos.length}}</span>
      <nav>
        <ul class="filters">
          <li><a href="#/all" :class="{ selected: currentRoute == 'all' }">All</a></li>
          <li><a href="#/active" :class="{ selected: currentRoute == 'active' }">Active</a></li>
          <li><a href="#/completed" :class="{ selected: currentRoute == 'completed' }">Completed</a></li>
        </ul>
      </nav>
      <button class="clear-completed" @click="removeCompleted" v-show="todos.length > 0">Clear completed</button>
    </footer>
    </section>
</template>

<script>
export default {
  data: function () {
    return {
      greeting: 'Hello',
      todos: [],
      newTodo: '',
      currentRoute: 'all',
      editedTodo: false,
      beforeEditCache: ''
    }
  },
  watch:{
    todos: {
      handler: function (todos) {
        //todoStorage.save(todos);
        console.log(this.todos);
      }
    }
  },
  computed:{
/*    filteredTodos: function () {
      return filters[this.currentRoute](this.todos);
    },
    allDone: {
      get: function(){
          return this.remaining === 0;
        },
      set: function (value) {
        this.todos.forEach(function (todo) {
          todo.completed = value;
        });
      }
    },
    remaining: function () {
      return filters.active(this.todos).length;
    }*/
  },
  filters:{},
  methods:{
    addTodo: function() {
      var value = this.newTodo;
      if (value === '') {
        return('newTodo: empty');
      }
      this.todos.push({
        title: value,
        completed: false
      });
      this.newTodo = '';
    },
    removeTodo: function (todo) {
        this.todos.splice(this.todos.indexOf(todo),1);
    },
    clearTodo: function(){
      this.newTodo = '';
    },
    removeCompleted: function () {
      this.todos = filters.active(this.todos);
    },
    editTodo: function (todo) {
      this.beforeEditCache = todo.title;
      this.editedTodo = todo;
    },
    cancelEdit: function (todo) {
      this.editedTodo = false;
      todo.title = this.beforeEditCache;
    },
    doneEdit: function (todo) {
      if (!this.editedTodo) {
        return;
      }
      this.editedTodo = false;
      todo.title = todo.title.trim();
      if (!todo.title) {
        this.removeTodo(todo);
      }
    }
  },
  directives:{
    'todo-focus': function (el, expression){
      if (expression.value === true) {
        el.focus();
      }
    }
  }
}
</script>

<style scoped>
  p {
    font-size: 2em;
    text-align: center;
  }
</style>
