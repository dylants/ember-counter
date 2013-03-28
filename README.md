# ember-counter #

A very (very) simple counter app using Ember.js

## Overview ##

The purpose of this application was to model something very simple in Ember.js, to get a better understanding
of how it works.  The app displays a list of counters, allowing you to add a new counter to the page, or remove
and existing counter.  Each counter keeps track of it's count, and the user can increment and decrement the count.
That's pretty much it :)

## Technical Implementation Details ##

This application was built using Ember.js, and therefore Handlebars.js as the templating technology.  At the time
of creating this application, ember-data was still pre-1.0, but was used just for local storage.  A local storage
adapter was pulled out of the TodoMVC demo Ember.js application.

An app.js file creates the Ember application (no application template was created because of the use of index.html).
The router is defined in the router.js file, and defines a single route for "counters" on "/".  The counters route
loads all the counters and supplies them as the model.  The counters view is loaded from the handlebar template,
and uses the CountersController to process all counters, and the CounterController for each individual counter.  The
Counter model represents a single counter, and is backed by the ember-data store.

More information on the details of the application can be found here:  
http://blog.dylants.com/2013/03/27/ember-counter/

## Getting Started ##

A running version of this application is hosted on GitHub here:  
http://dylants.github.com/ember-counter/

You can also clone the project, and host the index.html file locally.  All JavaScript files are included and loaded
within the index file.
