import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

import { Http, Headers, RequestOptions } from "@angular/http";
import { LoadingController } from 'ionic-angular';

import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {
  @ViewChild("negara") negara;
  @ViewChild("ibukota") ibukota;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private http: Http,
    public loading: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostPage');
  }

  Post() {
    //// check to confirm the negara and capital fields are filled
    if (this.negara.value == "") {
      let alert = this.alertCtrl.create({
        title: "ATTENTION",
        subTitle: "Field negara tidak boleh kosong",
        buttons: ['OK']
      });
      alert.present();
    } else if (this.ibukota.value == "") {
      let alert = this.alertCtrl.create({
        title: "ATTENTION",
        subTitle: "Field ibukota tidak boleh kosong",
        buttons: ['OK']
      });
      alert.present();
    }
    else {
      var headers = new Headers();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/json');
      let options = new RequestOptions({ headers: headers });
      let data = {
        negara: this.negara.value,
        ibukota: this.ibukota.value
      };

      let loader = this.loading.create({
        content: 'Processing please wait...',
      });

      loader.present().then(() => {
        this.http.post('http://localhost/ionic-php/post_data.php', data, options)
          .map(res => res.json())
          .subscribe(res => {
            loader.dismiss()
            if (res == "post successfull") {
              let alert = this.alertCtrl.create({
                title: "CONGRATS",
                subTitle: (res),
                buttons: ['OK']
              });
              alert.present();
              this.navCtrl.push(HomePage);
            }
            else {
              let alert = this.alertCtrl.create({
                title: "ERROR",
                subTitle: (res),
                buttons: ['OK']
              });
              alert.present();
            }
          });
      });
    }
  }
}
