'use strict';
describe('drtvDepth1Navi', function() {
    var $compile,
        $scope;
    beforeEach(module('directive.drtvDepth1Navi'));
    beforeEach(inject(function(_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $scope = _$rootScope_;
    }));
    it('should replace element', function() {
        $scope.menus = [{
            title: 'tit_1',
            href: '#',
            target: ''
        }, {
            title: 'tit_2',
            href: '#',
            target: ''
        }, {
            title: 'tit_99',
            href: '#',
            target: ''
        }];
        var element = $compile('<div class="drtvDepth1Navi" menu-index="index" menu-datas="menus" menu-click="notifyClickMenu(event, index, menu)" ></div>')($scope);
        $scope.$digest();
        expect(element.html()).toContain('tit_99');
    });
});