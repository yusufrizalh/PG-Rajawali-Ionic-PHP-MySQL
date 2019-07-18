import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';
import 'rxjs/add/operator/map';

/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {
  negara: any;
  ibukota: any;
  oldNegaraValue: any;
  oldIbukotaValue: any;
  items: any;
  @ViewChild("newNegara") newNegara;
  @ViewChild("newIbukota") newIbukota;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private http: Http,
    public loading: LoadingController) {
  }

  ngOnInit() {
    this.negara = this.navParams.get('negara');
    this.ibukota = this.navParams.get('ibukota');
    this.oldNegaraValue = this.navParams.get('negara');
    this.oldIbukotaValue = this.navParams.get('ibukota');
  }

  Edit() {
    if (this.newNegara.value == "") {
      let alert = this.alertCtrl.create({
        title: "ATTENTION",
        subTitle: "Field negara tidak boleh kosong",
        buttons: ['OK']
      });
      alert.present();
    }
    else if (this.newIbukota.value == "") {
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
        negara: this.oldNegaraValue,
        ibukota: this.oldIbukotaValue,
        newNegara: this.newNegara.value,
        newIbukota: this.newIbukota.value,
      };

      let loader = this.loading.create({
        content: 'Processing please wait...',
      });

      loader.present().then(() => {
        this.http.post('http://localhost/ionic-php/edit_data.php', data, options)
          .map(res => res.json())
          .subscribe(res => {
            loader.dismiss()
            if (res == "data update successfull") {
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPage');
  }

}
