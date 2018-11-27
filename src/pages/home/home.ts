import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  categories: {
    title: string, name: string, index: number;
  }[] = []

  constructor(public navCtrl: NavController, public http: HttpClient) {

  }

  ionViewDidLoad() {
    this.http.get<{
      title: string, name: string, index: number
    }[]>("assets/data/routing.json")
      .subscribe(data => {
        this.categories = data;
      });
  }
}
