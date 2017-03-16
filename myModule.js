/// <reference path="angular.min.js" />

/*/// La forma no recomendable para hacer un controlador
angular
    .module("myAppBad",[])
    .controller("myControllerBad", ['$scope', function($scope){
        $scope.myVariableBad = "Mal";
    }]);
/**/

/*/// La forma recomendable para hacer un controlador
angular
    .module("myAppGood", [])
    .controller("myControllerGood", function(){
        var mCG = this;
        mCG.myVariableGood = "Bien";
    });
/**/

/**///

/*/
function human(age, gender, name){
    this.age = age;
    this.gender = gender;
    this.name = name;

    this.toString = function(){
        return "Edad: " + this.age + " - Genero: " + this.gender + " - Nombre: " + this.name;
    };
};
/**/

/**///
angular
    .module("myDivFilter", [])
    .controller("myControllerDivFilter", function(){
        var CDF = this;
        CDF.myData = [  
            {age: 26, gender: "M", name: "Amadeo"},
            {age: 34, gender: "M", name: "Mateo"},
            {age: 17, gender: "A", name: "Helicptero Apache de guerra"},
            {age: 57, gender: "F", name: "Natalya"},
            {age: 22, gender: "M", name: "Ernesto"},
            {age: 32, gender: "F", name: "Josefina"},
            {age: 22, gender: "M", name: "Luciano"},
            {age: 73, gender: "F", name: "Francesca"},
            {age: 20, gender: "A", name: "ROFLCOPTER"}
        ];
        CDF.age = 0;
        CDF.gender = "";
        CDF.name = "";
        CDF.myOrder = false;

        CDF.addHuman = function(){
            CDF.myData.push({age: CDF.age, gender: CDF.gender, name: CDF.name});
        }
    });
/**/

/*/// Usando services con $http
angular
    .module("myServiceApp", [])
    .service("serviceApp", function ($http, $p){
        var deferrer = $q.defer();
        $http
            .get('videodata2.json')
            .then(function(data){
                deferrer.resolve(data);
            });
        this.getData = function(){
            return deferrer.promise;
        }
    })
    .controller("myController", function($scope, serviceApp){
        var promise = serviceApp.getData();
        promise.then(function(data){
            $scope.categoryName = data;
            console.log($scope.categoryName);
        });
    })
/**/

