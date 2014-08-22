'use strict';
angular.module('directive.drtvDepth1Navi', []).
directive('drtvDepth1Navi', function() {
    return {
        restrict: 'C',
        scope: {
            index: '=menuIndex',
            menus: '=menuDatas',
            notifyClickMenu: '&menuClick'
        },
        replace: true,
        template: '<ul class="navi">' + '<li ng-repeat="menu in menus">' + '<a href="{{menu.href}}" target="{{menu.target}}" title="{{menu.title}}" ng-click="clickNavi($event, $index+1, menu)">{{menu.title}}</a>' + '</li>' + '</ul>',
        link: function(scope, element, attrs) {
            scope.$watch('index', function(newValue, oldValue) {
                var btns = element.find('li'),
                    tmpBtn;
                for (var i = 0, max = btns.length; i < max; i++) {
                    tmpBtn = btns[i];
                    (i != newValue - 1) ? angular.element(tmpBtn).removeClass('on') : angular.element(tmpBtn).addClass('on');
                }
            });
            scope.clickNavi = function(event, index, menu) {
                event.preventDefault();
                scope.index = index;
                if (scope.notifyClickMenu) scope.notifyClickMenu({
                    event: event,
                    index: index,
                    menu: menu
                });
            };
        }
    }
});