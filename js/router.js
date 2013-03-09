/**
 * Defines the router for our application, mapping paths to resources and/or routes
 */
CounterApp.Router.map(function() {
	// by stating this, ember will point to our CountersRoute below when a
	// request is sent to "/", and use the CountersController and counters template
	this.route("counters", { path: "/" });
});

/**
 * Used when a request is sent to the route matched by any counter path
 * 
 * @type {Ember.Route}
 */
CounterApp.CountersRoute = Ember.Route.extend({
	// Define the model which is the collection of counters found through
	// the CounterApp.Counter model object
	model: function() {
		return CounterApp.Counter.find();
	}
});