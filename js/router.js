CounterApp.Router.map(function() {
	this.route("counter", { path: "/" });
});

CounterApp.CounterRoute = Ember.Route.extend({
	model: function() {
		return CounterApp.Counter.find();
	}
});