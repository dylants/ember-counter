/**
 * Defines a model which holds data for the counter, backed by the store
 * 
 * @type {DS.Model}
 */
CounterApp.Counter = DS.Model.extend({
	// our count attribute is a number
	count: DS.attr("number")
});