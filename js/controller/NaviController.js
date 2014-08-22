'use strict';
angular.module('controllers', []).
controller('NaviController', ['$scope',
    function($scope) {
        $scope.menus = [{
            title: 'tit_1',
            href: '#',
            target: ''
        }, {
            title: 'tit_2',
            href: '#',
            target: ''
        }, {
            title: 'tit_3',
            href: '#',
            target: ''
        }];
        $scope.clickButton = function(index) {
            $scope.$broadcast('ACTIVATE-NAVI', {
                index: index
            }); // -> NaviController $on('ACTIVATE-NAVI')
        };
    }
]).
controller('NaviController', ['$scope',
    function($scope) {
        //connected drtvDepth1Navi
        $scope.index = 0; // externalIndex;
        //connected drtvDepth1Navi
        $scope.notifyClickMenu = function(event, index, menu) { // <- drtvNavi clickNavi
            console.log('notifyClickMenu :', event, index, menu);
        };
        //connected parent controller
        $scope.$on('ACTIVATE-NAVI', function(event, data) {
            $scope.index = parseInt(data.index); // -> drtvNavi $watch
        });
    }
]);