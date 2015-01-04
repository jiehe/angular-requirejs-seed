'use strict';

define(['angular', 'services'], function (angular) {

  /* Controllers */

  return angular.module('myApp.controllers', ['myApp.services'])
    // Sample controller where service is being used
    .controller('MyCtrl1', ['$scope', 'version', function ($scope, version) {
      $scope.scopedAppVersion = version;
    }])
    // More involved example where controller is required from an external file
    .controller('MyCtrl2', ['$scope', '$injector', function ($scope, $injector) {
      require(['controllers/myctrl2'], function (myctrl2) {
        $injector.invoke(myctrl2, this, {'$scope': $scope});
      });
    }])
    .controller('MyCtrl3', ['$scope', '$injector', function ($scope, $injector) {
      require(['controllers/myctrl3'], function (myctrl3) {
        $injector.invoke(myctrl3, this, {'$scope': $scope});
      });
    }])
    .controller('tagCloud', ['$scope', '$injector', function ($scope, $injector) {
      require(['controllers/tagCloud'], function (tagCloud) {
        $injector.invoke(tagCloud, this, {'$scope': $scope});
      });
    }])
    .controller('tagArticle', ['$scope', '$injector', function ($scope, $injector) {
      require(['controllers/tagArticle'], function (tagArticle) {
        $injector.invoke(tagArticle, this, {'$scope': $scope});
      });
    }])


});
