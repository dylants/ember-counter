CounterApp.Store = DS.Store.extend({
	revision: 12,
	adapter: 'CounterApp.LSAdapter'
});

CounterApp.LSAdapter = DS.LSAdapter.extend({
	namespace: 'counterapp-emberjs'
});
