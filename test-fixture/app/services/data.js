/**
 * Application services.
 */
angular.module("myApp").service("DataService", [
  "$http",
  "$q",
  function ($http, $q) {
    var baseUrl = "/api";

    this.getItems = function () {
      return $http.get(baseUrl + "/items").then(function (res) {
        return res.data;
      });
    };

    this.deleteItem = function (itemId) {
      return $http.delete(baseUrl + "/items/" + itemId).then(function (res) {
        return res.data;
      });
    };

    this.getUsers = function () {
      return $http.get(baseUrl + "/users").then(function (res) {
        return res.data;
      });
    };

    this.searchUsers = function (query) {
      return $http
        .get(baseUrl + "/users", { params: { q: query } })
        .then(function (res) {
          return res.data;
        });
    };

    this.updateUser = function (user) {
      return $http.put(baseUrl + "/users/" + user.id, user).then(function (res) {
        return res.data;
      });
    };

    this.deleteUser = function (userId) {
      return $http.delete(baseUrl + "/users/" + userId).then(function (res) {
        return res.data;
      });
    };

    this.generateReport = function (type, dateRange) {
      return $http
        .post(baseUrl + "/reports", { type: type, dateRange: dateRange })
        .then(function (res) {
          return res.data;
        });
    };

    this.exportReport = function (reportId, format) {
      window.open(baseUrl + "/reports/" + reportId + "/export/" + format);
    };
  },
]);
