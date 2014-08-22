'use strict';
describe('filters', function() {
    var $filter;
    beforeEach(module('filters'));
    beforeEach(inject(function(_$filter_) {
        $filter = _$filter_;
    }));
    it('should return (input + 1).toString()', function() {
        var input = 0;
        var result = $filter('filterSwitchToOverDoubleFigure')(input);
        expect(result).toEqual('01');
    });
    it('should return empty string, if input no value', function() {
        var input = '',
            result = $filter('filterSwitchToOverDoubleFigure')(input);
        expect(result).toEqual('');
    });
});