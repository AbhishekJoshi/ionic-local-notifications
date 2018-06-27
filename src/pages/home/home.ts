import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var cordova: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  constructor(public navCtrl: NavController) {


  }

  public createSingleNotification(){
    cordova.plugins.notification.local.schedule({
      title: 'A single notification',
      text: 'Thats pretty easy...',
      foreground: true,
    });
  }

  public doRepeatSchedule() {
    cordova.plugins.notification.local.schedule({
      title: 'I see this...',
      text: 'every minute ',
      trigger: { every: 'minute' },
      foreground: true,
    });
  }



  public createInTwoMinutes() {
    cordova.plugins.notification.local.schedule({
      title: 'Three minute meeting',
      trigger: { in: 3, unit: 'minute' }
    });
  }

  public clearSchedule300(){
    cordova.plugins.notification.local.clear(300);
  }

  public createID400(){
    cordova.plugins.notification.local.schedule({
      id: 400,
      title: 'ID 400',
      text: 'ID 400',
      trigger: { in: 3, unit: 'minute' }
    });
  }

  public createID300(){
    cordova.plugins.notification.local.schedule({
      id: 300,
      title: 'ID 300',
      text: 'ID 300',
      trigger: { in: 3, unit: 'minute' }
    });
  }

  public getSchedule(){

    console.log('----------');
    console.log('----------');
    console.log('----------');
    cordova.plugins.notification.local.getScheduledIds(function (ids) {
      console.log('getScheduledIds ', ids);
    });
    cordova.plugins.notification.local.getScheduled(function (ids) {
      console.log('getScheduled ', ids);
    });

    cordova.plugins.notification.local.getTriggered(function (ids) {
      console.log('getTriggered ', ids);
    });


    cordova.plugins.notification.local.getTriggeredIds(function (ids) {
      console.log('getTriggeredIds ', ids);
    });

    cordova.plugins.notification.local.getAll(function (nots) {
      console.log('getAll ', nots);
    });
  }
}


