'use strict';
/* Services */
// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('service', []).
	constant('version', '0.1').
	factory('asyncGreeter', function($timeout, $log) {
	    return {
	        say: function(name, timeout) {
	            $timeout(function() {
	                $log.info('Hello, ' + name + '!');
	            }, timeout);
	        }
	    }
	});