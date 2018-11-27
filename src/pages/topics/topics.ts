import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the TopicsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  segment: 'topics/:name',
  defaultHistory: ['HomePage']
})
@Component({
  selector: 'page-topics',
  templateUrl: 'topics.html',
})
export class TopicsPage {

  topics: {
    title: string,
    id: string,
  }[] = [];

  jsonData: {
    name: string,
    topics: {
      title: string, id: string
    }[]
  }[]=[];

  category: string;
  index: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
  }

  ionViewDidLoad() {
    const name = this.navParams.get("name");
    const index = parseInt(this.navParams.get("index"));
    this.category = name;
    this.http.get<{
      name: string,
      topics: { title: string, id: string }[],
    }[]>("assets/data/routing.json")
      .subscribe(data => {
        this.topics = data[index].topics;
      });
  }

}
