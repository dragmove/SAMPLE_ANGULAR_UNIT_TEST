'use strict';
describe('NaviController', function() {
    var scope,
        controller;
    beforeEach(module('controllers'));
    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        $controller('NaviController', {
            $scope: scope
        });
    }));
    it('should scope.index is 0', inject(function($controller) {
        expect(scope.index).toEqual(0);
    }));
    it('should scope.index can change', inject(function($controller) {
        scope.index = 99;
        expect(scope.index).toEqual(99);
    }));
    it('tracks that the spy was called', inject(function($controller) {
        spyOn(scope, 'notifyClickMenu');
        scope.notifyClickMenu(null, 1, null);
        expect(scope.notifyClickMenu).toHaveBeenCalled();
    }));
    it('notifyClickMenu function can replace fake function', inject(function($controller) {
        function notifyClickMenu(event, index, menu) {
            console.log('NaviController spy - notifyClickMenu');
        };
        spyOn(scope, 'notifyClickMenu').andCallFake(notifyClickMenu);
        scope.notifyClickMenu(null, 1, null);
        expect(scope.notifyClickMenu).toHaveBeenCalled();
    }));
});