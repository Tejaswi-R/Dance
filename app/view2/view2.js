'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'SecondCtrl as second'
  });
  //$routeProvider.when('/view3', {
  //  templateUrl: 'view3/view3.html',
  //  controller: 'SecondCtrl as second'
  //});
  //$routeProvider.when('/view4', {
  //  templateUrl: 'view4/view4.html',
  //  controller: 'SecondCtrl as second'
  //});
       $routeProvider.when('/view5:param1', {
          templateUrl: 'view5/view5.html',
          controller: 'SecondCtrl as second'
        });
        $routeProvider.when('/book', {
            templateUrl: 'book/book.html',
            controller: 'SecondCtrl as second'
        });
}])

.controller('SecondCtrl', function($scope, sharedProperties, $location, $routeParams) {

    $scope.displayschool = function(studio, level){
        switch (studio){
         case "K-Systems" :
             var param1 = 1;
             $location.path('/view5' + param1);
             break;

         case "Latin Team Kiel" :
             var param1 = 2;
             $location.path('/view5' + param1);
             break;

            case "Estudio Latinoamérica" :
                var param1 = 3;
                $location.path('/view5' + param1);
                break;

            case "Salsa am Meer" :
             var param1 = 4;
             $location.path('/view5' + param1);
             break;

            case "DIE VILLA KLUB" :
                var param1 = 5;
                $location.path('/view5' + param1);
                break;

            case "Uni Tanz" :
                var param1 = 6;
                $location.path('/view5' + param1);
                break;
        }

    };

    $scope.searchKeys = sharedProperties.getObject();
    $scope.changeViewToCourse = function(courseID){
             $location.path(course-details); // path not hash
    };

    this.searchedSchool = $routeParams.param1;

        $scope.booking = function(){
            $location.path('/book');
        }

    this.data = {
            kurse: [
                {"id": 1, "time":" 20.00 - 21.00","StartingDay":"19-Feb","style":"Latin Team Kiel","level":"Anfänger 2","studio":"K-Systems","duration":"10 Wochen","Fees":"60"},
                {"id": 2, "time":"20:10 - 21:00","StartingDay":"2-Feb","style":"Latin Team Kiel","level":"Fortgeschritten","studio":"Latin Team Kiel","duration":"8 Wochen","Fees":"5 Euro pro Termin"},
                {"id": 3, "time":"21.00 - 22.00","StartingDay":"2-Mar","style":"Latin Team Kiel","level":"Einsteiger","studio":"K-Systems","duration":"8 Wochen","Fees":"5 Euro pro Termin"},
                {"id": 4, "time":"16:15 - 17:30","Starting Day":"Sonntags","style":"Salsa Cubana","level":"Anfänger 1","studio":"Estudio Latinoamérica","duration":"fortlaufend","Fees":"100/50*"},
                {"id": 5, "time":"19.00 - 20.30","StartingDay":"12-Feb","style":"Salsa Cubana","level":"Anfänger 1","studio":"Salsa am Meer","duration":"6 Wochen","Fees":"69/49*"},
                {"id": 6, "time":"21.00 - 22.15","StartingDay":"Mittwochs","style":"Salsa Cubana","level":"Anfänger 1","studio":"Estudio Latinoamérica","duration":"fortlaufend","Fees":"100/50*"},
                {"id": 7, "time":"17.45 - 19.00","StartingDay":"Sonntags","style":"Salsa Cubana","level":"Anfänger 2","studio":"Estudio Latinoamérica","duration":"fortlaufend","Fees":"135/67,50*"},
                {"id": 8, "time":"18.30 - 19.45","StartingDay":"Dienstags","style":"Salsa Cubana","level":"Anfänger 2","studio":"Estudio Latinoamérica","duration":"fortlaufend","Fees":"135/67,50*"},
                {"id": 9, "time":" 20.30 - 22.00","StartingDay":"12-Feb","style":"Salsa Cubana","level":"Anfänger 2","studio":"Salsa am Meer","duration":"6 Wochen","Fees":"69/49*"},
                {"id": 10, "time":"21.00 - 22.15","StartingDay":"Mittwochs","style":"Salsa Cubana","level":"Anfänger 2","studio":"Estudio Latinoamérica","duration":"fortlaufend","Fees":"135/67,50*"},
                {"id": 11, "time":" 20.00 - 22.00 ","StartingDay":"7-Feb","style":"Salsa Cubana","level":"Mittelstufe","studio":"Salsa am Meer","duration":"6 Wochen","Fees":"69/49*"},

                ,{"time":"18.00 - 19.15","StartingDay":"Mittwochs","style":"Salsa Cubana","level":"Oberstufe","studio":"Estudio Latinoamérica","duration":"fortlaufend","Fees":"135/67,50*"}

                ,{"time":"19.30 - 20.45","StartingDay":"Montags","style":"Salsa Cubana","level":"Oberstufe","studio":"Estudio Latinoamérica","duration":"fortlaufend","Fees":"135/67,50*"}

                ,
                {"time":"20.00 - 21.15 Uhr","StartingDay":"Montags","style":"Salsa Cubana","level":"Oberstufe","studio":"Estudio Latinoamérica","duration":"fortlaufend","Fees":"135/67,50*"}

                ,
                {"time":"19.00 - 20.00","StartingDay":"11-Feb","style":"Kizomba","level":"Anfänger 1","studio":"K-Systems","duration":"8 Wochen","Fees":"54/44*"}

                ,{"time":"20:00-21:00","StartingDay":"Donnerstags","style":"Kizomba","level":"Anfänger","studio":"DIE VILLA KLUB","duration":"fortlaufend","Fees":"20 Euro pro Monat"}

                ,{"time":"20.00 - 21.00","StartingDay":"2-March","style":"Kizomba","level":"Anfänger","studio":"Uni Tanz","duration":"Mittwochs","Fees":"25 Euro"}

                ,
                {"time":"19.30-20:45","StartingDay":"Dienstags","style":"Kizomba","level":"Mittelstufe","studio":"DIE VILLA KLUB","duration":"fortlaufend","Fees":"20 Euro pro Monat"}

                ,{"time":"20:45-22:00","StartingDay":"Dienstags","style":"Kizomba","level":"Oberstufe","studio":"DIE VILLA KLUB","duration":"fortlaufend","Fees":"20 Euro pro Monat"}



            ],
        events: [

            {"id": 1, "time":" 21.00 - 24.00","date":"5-Feb","styles":"Kizomba","location":"DIE VILLA Klub Legienstr. 40 24103 Kiel","Fee":"3"},
            {"id": 2, "time":" 21.00 - 24.00","date":"5-Feb","styles":"Latin Team Kiel","location":"DIE VILLA Klub Legienstr. 40 24103 Kiel","Fee":"3"},
            {"id": 3, "time":" 21.00 - 24.00","date":"5-Feb","styles":"Salsa Cubana","location":"DIE VILLA Klub Legienstr. 40 24103 Kiel","Fee":"3"},




        ],
 tanzpartner: [

{"id": 1, "name":"Anton Tanzgott","alter":"21","styles":["Kizomba","Salsa LA"],"bild":"a.jpg"},
{"id": 2, "name":"Manuela Schmidt","alter":"55","styles":["Kizomba","Salsa LA"],"bild":"b.jpg"},
{"id": 3, "name":"Jewgenia Delarossa","alter":"34","styles":["Kizomba","Salsa LA"],"bild":"c.jpg"},
     {"id": 4, "name":"Juli","alter":"23","styles":["Salsa Cubana","Salsa LA"],"bild":"d.jpg"},
     {"id": 5, "name":"Maria","alter":"26","styles":["Salsa Cubana","Salsa LA"],"bild":"e.jpg"}

     ],
        school:
            [{"id": 1, "studio":"K-Systems","address":"Alte Weide 3,24116  Kiel","description":"Die Hauptgruppe des Tanzensembles (Deutsche Meister und Europa Meister), das aus den besten der Gruppe besteht und regelmäßig in Kiel und ganz Deutschland auftritt, lädt Sie herzlich ein. Die Teilnehmer werden halbjährig gecastet.","rating":"5","photo":"KSystem.jpg","logo":"kslogo.jpg"},
                {"id": 2, "studio":"Latin Team Kiel","address":"Mühlenring 2 a,24144 Kiel","description":"Der größte und derzeit erfolgreichste Verein für lateinamerikanische Tänze in Schleswig-Holstein. Und wir schreiben Geschichte: Mit dem Einzug in die zweite Bundesliga ist es dem 1. Latin Team Kiel als erste Mannschaft Schleswig-Holsteins gelungen, das schönste Bundesland der Welt bundesweit auf Latein-Formationsturnieren zu vertreten.","rating":"4","photo":"Latin Team Kiel.jpg","logo":"Latin Team logo.jpg"},
                {"id": 3, "studio":"Estudio Latinoamérica","address":"Sophienblatt 88-90, 24114 Kiel","description":"1988 gründeten Axel Frauendorf und Evelyne Martin ein Tanzstudio für lateinamerikanische Tänze in Kiel. Es ist das erste Tanzstudio in Schleswig-Holstein und somit der Ursprung der gesamten Tango- und Salsa-Szene im nördlichsten Bundesland. Die ersten Tango- und Salsa-Kurse fanden anfangs in stundenweise angemieteten Räumen statt.","rating":"4","photo":"e Studio.jpg","logo":"Estudiologo.png"},
                {"id": 4, "studio":"Salsa am Meer","address":"Esmarchstr. 87, 24118 Kiel","description":"Tanzkurse, Workshops und Salsapartys in Schleswig-Holstein - kommt vorbei, macht mit und lasst euch von der kubanischen Lebensfreude anstecken!","rating":"5","photo":"Salsa am Meer.jpg","logo":"Salsa am Meer_Logo.jpg"},
                {"id": 5, "studio":"DIE VILLA KLUB","address":"Legienstraße 40, 24103 Kiel","description":"DIE VILLA KLUB ist Kiels neueste Adresse im Nachtleben der Landeshauptstadt. Auf der 2. Etage des ehemaligen Prinzenhofs prägen Design und Details das Interieur des neuen KLUBS. Das für Kiel einmalige VOID-Soundsystem sorgt für einen außergewöhnlichen Klang, der in Kombination mit der einmaligen 3D-LED-Lichtanlage jeden Gast zum Tanzen verführt.","rating":"5","photo":"Die Villa.jpg","logo":"Die Villa logo.jpg"},
                {"id": 6, "studio":"Uni Tanz","address":"Rammskrug 11,24107 Oppendorf","description":"Der UniTanzKiel e.V. wurde 1996 gegründet und ist im Dachverband des TSH organisiert. Neben der Möglichkeit zur Teilnahme am Turniertanzsport hat sich der Verein die Förderung des Gesellschaftstanzens im Sportzentrum der Christian-Albrechtsuniversität zu Kiel auf seine Fahnen geschrieben.","rating":"3","photo":"Uni Tanz.jpg","logo":"Uni Tanz_logo.jpg"}
]
};
});


