'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'SecondCtrl as second'
  });
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'SecondCtrl as second'
  });
  $routeProvider.when('/view4', {
    templateUrl: 'view4/view4.html',
    controller: 'SecondCtrl as second'
  });
}])

.controller('SecondCtrl', function($scope, sharedProperties, $location) {
    $scope.searchKeys = sharedProperties.getObject();
    $scope.changeViewToCourse = function(courseID){
             $location.path(course-details); // path not hash
    };
    this.data = {
        kurse: [

{"id": 1, "time":" 20.00 - 21.00","Starting Day":"19-Jan","style":"Salsa LA","level":"Anfänger 2","studio":"K-Systems","duration":"10 Wochen","Fees":"60"},
{"id": 2, "time":"20:10 - 21:00","Starting Day":"2-Jan","style":"Salsa LA","level":"Fortgeschritten","studio":"Salsa LA","duration":"8 Wochen","Fees":"5 Euro pro Termin"},
{"id": 3, "time":"21.00 - 22.00","Starting Day":"2-Dec","style":"Salsa LA","level":"Einsteiger","studio":"K-Systems","duration":"8 Wochen","Fees":"5 Euro pro Termin"},
{"id": 4, "time":"16:15 - 17:30","Starting Day":"Sonntags","style":"Salsa Cubana","level":"Anfänger 1","studio":"Estudio Latinoamérica","duration":"fortlaufend","Fees":"100/50*"},
{"id": 5, "time":"19.00 - 20.30","Starting Day":"12-Jan","style":"Salsa Cubana","level":"Anfänger 1","studio":"Salsa am Meer","duration":"6 Wochen","Fees":"69/49*"},
{"id": 6, "time":"21.00 - 22.15","Starting Day":"Mittwochs","style":"Salsa Cubana","level":"Anfänger 1","studio":"Estudio Latinoamérica","duration":"fortlaufend","Fees":"100/50*"},
{"id": 7, "time":"17.45 - 19.00","Starting Day":"Sonntags","style":"Salsa Cubana","level":"Anfänger 2","studio":"Estudio Latinoamérica","duration":"fortlaufend","Fees":"135/67,50*"},
{"id": 8, "time":"18.30 - 19.45","Starting Day":"Dienstags","style":"Salsa Cubana","level":"Anfänger 2","studio":"Estudio Latinoamérica","duration":"fortlaufend","Fees":"135/67,50*"},
{"id": 9, "time":" 20.30 - 22.00","Starting Day":"12-Jan","style":"Salsa Cubana","level":"Anfänger 2","studio":"Salsa am Meer","duration":"6 Wochen","Fees":"69/49*"},
{"id": 10, "time":"21.00 - 22.15","Starting Day":"Mittwochs","style":"Salsa Cubana","level":"Anfänger 2","studio":"Estudio Latinoamérica","duration":"fortlaufend","Fees":"135/67,50*"},
{"id": 11, "time":" 20.00 - 22.00 ","Starting Day":"7-Jan","style":"Salsa Cubana","level":"Mittelstufe","studio":"Salsa am Meer","duration":"6 Wochen","Fees":"69/49*"},

             ,{"time":"18.00 - 19.15","Starting Day":"Mittwochs","style":"Salsa Cubana","level":"Oberstufe","studio":"Estudio Latinoamérica","duration":"fortlaufend","Fees":"135/67,50*"}

             ,{"time":"19.30 - 20.45","Starting Day":"Montags","style":"Salsa Cubana","level":"Oberstufe","studio":"Estudio Latinoamérica","duration":"fortlaufend","Fees":"135/67,50*"}

             ,
              {"time":"20.00 - 21.15 Uhr","Starting Day":"Montags","style":"Salsa Cubana","level":"Oberstufe","studio":"Estudio Latinoamérica","duration":"fortlaufend","Fees":"135/67,50*"}

             ,
              {"time":"19.00 - 20.00","Starting Day":"11-Jan","style":"Kizomba","level":"Anfänger 1","studio":"K-Systems","duration":"8 Wochen","Fees":"54/44*"}

             ,{"time":"20:00-21:00","Starting Day":"Donnerstags","style":"Kizomba","level":"Anfänger","studio":"DIE VILLA KLUB","duration":"fortlaufend","Fees":"20 Euro pro Monat"}

             ,{"time":"20.00 - 21.00","Starting Day":"2-March","style":"Kizomba","level":"Anfänger","studio":"CAU Uni Sport","duration":"Mittwochs","Fees":"25 Euro"}

             ,
              {"time":"19.30-20:45","Starting Day":"Dienstags","style":"Kizomba","level":"Mittelstufe","studio":"DIE VILLA KLUB","duration":"fortlaufend","Fees":"20 Euro pro Monat"}

             ,{"time":"20:45-22:00","Starting Day":"Dienstags","style":"Kizomba","level":"Oberstufe","studio":"DIE VILLA KLUB","duration":"fortlaufend","Fees":"20 Euro pro Monat"}



           ],
           events: [

   {"id": 1, "time":" 21.00 - 24.00","date":"5-Jan","styles":"Kizomba","location":"DIE VILLA Klub Legienstr. 40 24103 Kiel","Fee":"3"},
   {"id": 2, "time":" 21.00 - 24.00","date":"5-Jan","styles":"Salsa LA","location":"DIE VILLA Klub Legienstr. 40 24103 Kiel","Fee":"3"},
   {"id": 3, "time":" 21.00 - 24.00","date":"5-Jan","styles":"Salsa Cubana","location":"DIE VILLA Klub Legienstr. 40 24103 Kiel","Fee":"3"},




 ],
 tanzpartner: [

{"id": 1, "name":"Anton Tanzgott","alter":"21","styles":["Kizomba","Salsa LA"],"bild":"a.jpg"},
{"id": 2, "name":"Manuela Schmidt","alter":"55","styles":["Kizomba","Salsa LA"],"bild":"b.jpg"},
{"id": 3, "name":"Jewgenia Delarossa","alter":"34","styles":["Kizomba","Salsa LA"],"bild":"c.jpg"},




     ]
    };
});
