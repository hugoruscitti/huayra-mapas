var app = angular.module('app', ["leaflet-directive"]);


app.controller("MainCtrl", function MainCtrl($scope) {
  $scope.data = {};
  $scope.data.markers = {
            osloMarker: {
                lat: 59.91,
                lng: 10.75,
                message: "I want to travel here!",
                focus: true,
                draggable: false
            }
          };

      angular.extend($scope, {
        center: {
            lat: -10.036,
            lng: -70,
            zoom: 2
        },

        defaults: {
            tileLayer: "tiles2/{z}/{x}/{y}.png",
            tileLayerOptions: {
                opacity: 0.9,
                detectRetina: true,
                reuseTiles: true,
            },
            scrollWheelZoom: false,
            maxZoom: 3,
        }
    });

  $scope.crear_marcador = function() {
    $scope.data.markers['asdasd'] = {
      lat: 29.91,
      lng: 0.75,
      message: "I want to travel here!",
      focus: true,
      draggable: true
    }

    console.log($scope.data);
  }
});
