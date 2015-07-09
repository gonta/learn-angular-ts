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
        var _this = this;
        this.change = function (name) {
            console.log('aiueo');
        };
        this.hide = function () {
            _this.aaa = !_this.aaa;
        };
        //$scope.xxx
        this.first = 'Ryuta';
        this.last = 'Sakamoto';
        this.aaa = true;
    }
    SampleController.prototype.setName = function (first, last) {
        this.first = first;
        this.last = last;
    };
    return SampleController;
})();
angular.module('sample', ['ng']).controller('SampleController', SampleController);
