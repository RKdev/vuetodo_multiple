/*jshint esversion:6*/     //tells linter to be quiet about node syntax
require('../index.html');
//require('../index.css');

var myMixin = {
    data: {
      routes: {
        all: 'all',
        active: 'active',
        completed: 'completed'
        },
        onHashChange: function(){
          var route = window.location.hash.replace(/#\/?/, '');
          if (this.routes[route]) {
            app.currentRoute = route;
          } else {
            window.location.hash = '';
            app.currentRoute = 'all';
            console.log('hello');
          }
        }
      },
      created: function() {
        this.onHashChange();
      }
    };

var storage = {
    data:{
      STORAGE_KEY: 'todos-vuejs-2.2',
      todoStorage: {
        fetch: function () {
          var todos = JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
          return todos;
        },
        save: function (todos) {
          localStorage.setItem(this.STORAGE_KEY, JSON.stringify(todos));
        }
      }
    },
    created:function(){
      console.log(this.todoStorage.fetch());
    }
};

import Vue from 'vue';
import todo from './components/todo.vue';

window.myVue = new Vue({
  mixins: [myMixin, storage],
  el: '#app',
//  render: callback => callback(todo)
  render: function(callback){
    return callback(todo);
  },
  created: function() {
    console.log(this.mixins);
  }
}

);
