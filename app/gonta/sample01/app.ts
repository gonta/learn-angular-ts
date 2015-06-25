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

  constructor($scope) {
    //$scope.xxx
    this.first = 'Ryuta';
    this.last = 'Sakamoto';
  }

  public alertFirstName() {
    console.log('aiueo');
  }

  public alertLastName = () => {
    console.log('aiueo');
  }

}

angular.module('sample',['ng'])
 .controller('SampleController',SampleController);