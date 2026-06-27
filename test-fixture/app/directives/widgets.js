/**
 * Custom directives.
 */
angular.module("myApp").directive("notificationPanel", function () {
  return {
    restrict: "E",
    templateUrl: "app/views/widgets/notification-panel.html",
    scope: {
      items: "=",
      maxItems: "@",
    },
    link: function (scope, element, attrs) {
      scope.$watch("items", function (newVal) {
        if (newVal && newVal.length > (parseInt(scope.maxItems) || 5)) {
          scope.hasMore = true;
        }
      });
    },
  };
});

angular.module("myApp").directive("loadingSpinner", function () {
  return {
    restrict: "E",
    template:
      '<div class="spinner" ng-show="visible"><div class="spinner-icon"></div><p>{{ message || "Loading..." }}</p></div>',
    scope: {
      visible: "=",
      message: "@?",
    },
  };
});
