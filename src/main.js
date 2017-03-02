/*jshint esversion:6*/     //tells linter to be quiet about node syntax
import Vue from 'vue';
require('../index.html');
//require('../index.css');

Vue.component('my-component', {
  template: `
  <section>
    <header>
      <h1>todos<h1>
        <input>
        <br/>
    </header>
    <section>
      <input type="checkbox">
      <ul>
        <li>
          <div>
          <input type="checkbox">
          <label>Label</label>
          <button>X</button>
          </div>
          <input>
        </li>
      </ul>
    </section>
    <footer>
      <span>Count</span>
      <nav>
        <ul>
        <li><a href="#all">All</a></li>
        <li><a href="#active">Active</a></li>
        <li><a href="#completed">Completed</a></li>
        </ul>
      </nav>
      <button>Clear Completed</button>
    </footer>
  </section>
`

});

new Vue({
  el: '#example'
});
