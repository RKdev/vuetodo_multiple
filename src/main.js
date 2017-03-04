/*jshint esversion:6*/     //tells linter to be quiet about node syntax
require('../index.html');
//require('../index.css');

import Vue from 'vue';
import todo from './components/todo.vue';

window.myVue = new Vue({
  el: '#app',
//  render: callback => callback(todo)
  render: function(callback){
    return callback(todo);
  }
});
