/**
 * This provides functions for an individual counter (or object)
 * 
 * @type {Ember.ObjectController}
 */
CounterApp.CounterController = Ember.ObjectController.extend({
	increment: function() {
		// the model here is our counter
		var counter = this.get("model");
		// increment the count value by 1
		counter.set("count", counter.get("count") + 1);
		// any time we modify a model, we must commit the changes
		// to the backend store
		counter.get("store").commit();
	},

	decrement: function() {
		// the model here is our counter
		var counter = this.get("model");
		// decrement the count by 1
		counter.set("count", counter.get("count") - 1);
		// any time we modify a model, we must commit the changes
		// to the backend store
		counter.get("store").commit();
	},

	removeCounter: function() {
		// the model here is our counter
		var counter = this.get("model");

		// deleting the record will cause ember-data to remove this counter
		counter.deleteRecord();

		// any time we modify a model, we must commit the changes
		// to the backend store
		counter.get("store").commit();
	}
});