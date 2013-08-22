(function() {
  'use strict';
  angular.module('d3.directives').directive('d3', [
    function() {
      return {
        scope: {
          d3Data: '=',
          d3Renderer: '='
        },
        restrict: 'EAMC',
        link: function(scope, iElement, iAttrs) {
          var el = d3.select(iElement[0]);
          scope.render = function() {
            if (typeof(scope.d3Renderer) === 'function') {
              scope.d3Renderer(el, scope.d3Data);
            }
          };
          scope.$watch('d3Renderer', scope.render);
          scope.$watch('d3Data', scope.render, true);
        }
      };
    }
  ]);
}());
