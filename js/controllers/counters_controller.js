/**
 * This controller represents an array of counters, and provides methods
 * outside of a single counter but instead for the collection
 * 
 * @type {Ember.ArrayController}
 */
CounterApp.CountersController = Ember.ArrayController.extend({
	createCounter: function() {
		// create a counter using ember data's create record
		// initially set the count to 0
		CounterApp.Counter.createRecord({
			count: 0
		});

		// any time we modify the models, we must commit the changes
		// to the backend store
		this.get("store").commit();
	}

});