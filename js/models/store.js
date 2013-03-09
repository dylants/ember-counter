/**
 * This is our hook required to store data within the models
 * 
 * @type {DS.Store}
 */
CounterApp.Store = DS.Store.extend({
	// this sets the revision of the DS.Store (which allows notifications on changes)
	revision: 12,
	// we're using a Local Storage rather than the default REST adapter
	adapter: 'CounterApp.LSAdapter'
});

/**
 * Defines the Local Storage adapter for our counter app
 * 
 * @type {DS.LSAdapter}
 */
CounterApp.LSAdapter = DS.LSAdapter.extend({
	// namespace for the counter app within the local storage
	namespace: 'counterapp-emberjs'
});
