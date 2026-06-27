/**
 * Main application module.
 * Registers all controllers, services, and directives.
 */
var app = angular.module("myApp", []);

// Controllers
app.controller("MainController", [
  "$scope",
  "$http",
  "DataService",
  function ($scope, $http, DataService) {
    $scope.pageTitle = "Dashboard";
    $scope.loading = false;

    $scope.init = function () {
      $scope.loading = true;
      DataService.getItems().then(function (items) {
        $scope.items = items;
        $scope.loading = false;
      });
    };

    $scope.selectItem = function (item) {
      $scope.selectedItem = item;
      $scope.showDetails = true;
    };

    $scope.deleteItem = function (itemId) {
      DataService.deleteItem(itemId).then(function () {
        $scope.items = $scope.items.filter(function (i) {
          return i.id !== itemId;
        });
      });
    };

    $scope.getStatusClass = function (status) {
      switch (status) {
        case "active":
          return "badge-success";
        case "pending":
          return "badge-warning";
        case "inactive":
          return "badge-danger";
        default:
          return "badge-secondary";
      }
    };
  },
]);

// Run
app.run([
  "$rootScope",
  function ($rootScope) {
    $rootScope.appVersion = "1.0.0";
    $rootScope.appName = "My AngularJS App";
  },
]);

// Config
app.config([
  "$httpProvider",
  function ($httpProvider) {
    $httpProvider.interceptors.push(function () {
      return {
        request: function (config) {
          config.headers["X-Requested-With"] = "XMLHttpRequest";
          return config;
        },
      };
    });
  },
]);
