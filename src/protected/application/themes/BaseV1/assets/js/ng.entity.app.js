(function(angular){
    "use strict";

    var app = angular.module('entity.app', MapasCulturais.angularAppDependencies);

    app.factory('UrlService', [function(){
        return function(controller){
            this.create = function(action, params){
                if(params == parseInt(params)){ // params is an integer, so it is an id
                    return MapasCulturais.createUrl(controller, action, [params]);
                }else{
                    return MapasCulturais.createUrl(controller, action, params);
                }
            };
        };
    }]);

    app.controller('EntityController',['$scope', '$timeout', function($scope, $timeout){
        $scope.data = {
            teste: 'ALALALALALALA'
        }
    }]);


    app.directive('onRepeatDone', ['$rootScope', function($rootScope) {
        return function($scope, element, attrs) {
            if ($scope.$last) {
                $rootScope.$emit('repeatDone:' + attrs.onRepeatDone);
            }
        };
    }]);


})(angular);