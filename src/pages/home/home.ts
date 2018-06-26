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

  public doRepeatSchedule() {

    cordova.plugins.notification.local.schedule({
      title: 'I see this...',
      text: '5 times ',
      trigger: { every: 'minute', count: 5 },
      foreground: true,
    }).then(res => {
      console.log('Scheduled! ', res);
    }).catch(err => {
      console.error('Error scheduling', err);
    });

  }
}


