import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { PostPage } from '../post/post';

import { LoadingController } from 'ionic-angular';

import { Http, Headers, RequestOptions } from "@angular/http";

import 'rxjs/add/operator/map';
import { EditPage } from '../edit/edit';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //ac: AppComponent = new AppComponent();
  items: any;
  negara: any;
  ibukota: any;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,
    private http: Http, public loading: LoadingController) {
  }

  Post() {
    this.navCtrl.push(PostPage);
  }

  editPost(item) {
    this.navCtrl.push(EditPage, item);
  }

  deletePost(item) {
    let alert = this.alertCtrl.create({
      title: 'Confirm delete',
      message: 'Apakah yakin menghapus field ini?',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Delete',
        handler: () => {
          //this.navCtrl.push(DeletePage, item)
          var headers = new Headers();
          headers.append("Accept", 'application/json');
          headers.append('Content-Type', 'application/json');
          let options = new RequestOptions({ headers: headers });
          let loader = this.loading.create({
            content: 'Processing please wait...',
          });

          loader.present().then(() => {
            this.http.post('http://localhost/ionic-php/delete_data.php', item, options)
              .map(res => res.json())
              .subscribe(res => {
                loader.dismiss()
                if (res == "data deleted successfully") {
                  let alert = this.alertCtrl.create({
                    title: "CONGRATS",
                    subTitle: (res),
                    buttons: ['OK']
                  });
                  alert.present()
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
      }]
    });
    alert.present();
  }

  ngOnInit() {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    let loader = this.loading.create({
      content: 'Processing please wait...',
    });

    loader.present().then(() => {
      this.http.post('http://localhost/ionic-php/fetch_data.php', options)
        .map(res => res.json())
        .subscribe(res => {
          loader.dismiss()
          this.items = res.server_response;
        });
    });
  }
}