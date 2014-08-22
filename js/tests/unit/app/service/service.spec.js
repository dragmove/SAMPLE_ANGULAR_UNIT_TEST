'use strict';
describe('service', function() {
    describe('version', function() {
        beforeEach(module('service'));
        it('should have version', inject(function(version) {
            expect(version).toEqual('0.1');
        }));
    });
    describe('asyncGreeter', function() {
        var asyncGreeter, $timeout, $log;
        beforeEach(module('service'));
        beforeEach(inject(function(_asyncGreeter_, _$timeout_, _$log_) {
            asyncGreeter = _asyncGreeter_;
            $timeout = _$timeout_;
            $log = _$log_;
        }));
        it('should greet the async world', function() {
            asyncGreeter.say('world', 9999999);
            $timeout.flush();
            expect($log.info.logs).toContain(['Hello, world!']);
        });
    });
});