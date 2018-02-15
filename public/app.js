var myApp = angular.module('myApp', [
    'ui.bootstrap'
]);

myApp.controller('AppCtrl', ['$scope', function($scope){
  $scope.stuff = 'stuff';
  $scope.isNavCollapsed = true;
  $scope.isCollapsed = false;

  $scope.helpTiles = [
    {
      title: 'Set It & Forget It',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
      icon: './assets/icons/icon-calendar.svg'
    },
    {
      title: 'Get 20% Off',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
      icon: './assets/icons/icon-wheat.svg'
    },
    {
      title: 'No Commitment',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
      icon: './assets/icons/icon-unlocked.svg'
    },
 ];

  $scope.productTiles = [
    {
      title: 'Product 1',
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      img: './assets/img/Can1love_Cold-crush_7.jpg'
    },
    {
      title: 'Product 2',
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      img: './assets/img/photos_influencers_Summer-Lewis_beingsummerlewis_2.jpg'
    },
    {
      title: 'Product 3',
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      img: './assets/img/A98A8699.jpg'
    }
  ];

}]);
