  var routes = {
  all: 'all',
  active: 'active',
  completed: 'completed'};

module.exports = {  onHashChange: function () {
    var route = window.location.hash.replace(/#\/?/, '');
    if (routes[route]) {
      return route;
    } else {
      window.location.hash = '';
      return'all';
    }
  }
};
