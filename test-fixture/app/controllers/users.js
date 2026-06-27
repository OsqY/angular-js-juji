/**
 * Secondary module with additional controllers.
 */
var adminApp = angular.module("adminApp", []);

adminApp.controller("UsersController", [
  "$scope",
  "DataService",
  function ($scope, DataService) {
    $scope.users = [];
    $scope.searchQuery = "";
    $scope.selectedUser = null;

    $scope.loadUsers = function () {
      DataService.getUsers().then(function (users) {
        $scope.users = users;
      });
    };

    $scope.filterUsers = function () {
      if (!$scope.searchQuery) {
        $scope.loadUsers();
        return;
      }
      DataService.searchUsers($scope.searchQuery).then(function (results) {
        $scope.users = results;
      });
    };

    $scope.selectUser = function (user) {
      $scope.selectedUser = user;
    };

    $scope.toggleUserStatus = function (user) {
      user.active = !user.active;
      DataService.updateUser(user);
    };

    $scope.deleteUser = function (userId) {
      if (confirm("Are you sure you want to delete this user?")) {
        DataService.deleteUser(userId).then(function () {
          $scope.users = $scope.users.filter(function (u) {
            return u.id !== userId;
          });
          if ($scope.selectedUser && $scope.selectedUser.id === userId) {
            $scope.selectedUser = null;
          }
        });
      }
    };
  },
]);

adminApp.controller("ReportsController", [
  "$scope",
  "DataService",
  function ($scope, DataService) {
    $scope.reportType = "summary";
    $scope.dateRange = { start: null, end: null };

    $scope.generateReport = function () {
      DataService.generateReport($scope.reportType, $scope.dateRange).then(
        function (report) {
          $scope.report = report;
        }
      );
    };

    $scope.exportReport = function (format) {
      if (!$scope.report) return;
      DataService.exportReport($scope.report.id, format);
    };
  },
]);
