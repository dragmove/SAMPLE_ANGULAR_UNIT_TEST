angular.module('filters', []).
filter('filterSwitchToOverDoubleFigure', function() {
    return function(input) {
        if (input.length <= 0) return '';
        input = (input + 1).toString();
        if (input.length <= 1) return '0' + input;
        return input;
    };
});