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

class SampleController {
    public first:string;
    last;
    public aaa:boolean;

    constructor($scope) {
        //$scope.xxx
        this.first = 'Ryuta';
        this.last = 'Sakamoto';
        this.aaa = true;
    }

    public change = (name) => {

        console.log('aiueo');
    }

    public hide = () => {
        this.aaa = !this.aaa;
    }

    public setName(first, last) {
        this.first = first;
        this.last = last;
    }
}

angular.module('sample', ['ng'])
    .controller('SampleController', SampleController);