import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ArticlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  segment: 'topics/:id',
  defaultHistory: ['TopicsPage']
})
@Component({
  selector: 'page-article',
  templateUrl: 'article.html',
})
export class ArticlePage {

  post: {
    ID: number,
    title: {
      rendered: string
    },
    content: {
      rendered: string
    },
    date: string
  } = {
    ID: null, title: { rendered: null }, content: {rendered: null}, date: null
  }

  title: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
  }

  ionViewDidLoad() {
    this.title = this.navParams.get("name");
    const id = this.navParams.get("id");
    this.http.get<{
      ID: number,
      title: {
        rendered: string
      },
      content: {
        rendered: string
      },
      date: string
    }>('http://uosansatox.wp.xdomain.jp/index.php?rest_route=/wp/v2/posts/' + id)
      .subscribe(data => {
        this.post = data;
      });
  }

}
