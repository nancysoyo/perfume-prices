app.controller('MainController', ['$scope', function($scope) { 
    $scope.title = 'Top parfumes seller'; 
    $scope.promo = 'The most popular parfumes this month';
    $scope.product=  { 
        name: 'The Book of Trees',
        price: 500, 
        pubdate: new Date('2014', '03', '08'),
        cover: 'aroma.jpg',
        likes:0, 
        dislikes:0
    } ;
    $scope.products= [ { 
        name: 'channel',
        price: 120, 
        pubdate: new Date('2014', '03', '08'),
        cover: 'aroma1.jpg',
        likes:0,
        dislikes:0
    },
         { 
        name: 'Marc jacob',
        price: 50, 
        pubdate: new Date('2013', '08', '01'),
        cover: 'aroma2.jpg',
        likes:0,
        dislikes:0
     } ] ;

     $scope.plusOne = function(index) { 
        $scope.products[index].likes += 1; 
        $scope.product[index].likes += 1;
      };

      $scope.minusOne = function(index) { 
        $scope.products[index].dislikes += 1; 
      };

      $scope.plusOne = function(index) { 
        $scope.product[index].likes += 1;
      };
  }]);
  
