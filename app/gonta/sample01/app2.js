/// <reference path="../../../typings/tsd.d.ts" />
//module kitaly.sample01.app {
//  angular.module('hoge');
//}
//angular.module('sample',['ng'])
//    .controller('SampleController',function($scope){
//      this.first ='gonta';
//      this.last ='sakamoto';
//
//      var self = this;
//      this.alertFirstName = function(){
//        console.log('FirstName:' + self.first);
//      }
//    });
var SampleController = (function () {
    function SampleController($scope) {
        this.alertLastName = function () {
            console.log('aiueo');
        };
        //$scope.xxx
        this.first = 'Ryuta';
        this.last = 'Sakamoto';
    }
    SampleController.prototype.alertFirstName = function () {
        console.log('aiueo');
    };
    return SampleController;
})();
angular.module('sample', ['ng']).controller('SampleController', SampleController);
//# sourceMappingURL=app2.js.map