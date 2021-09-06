import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { AuthService } from './Shared/Services/Authentication/auth.service';
import { Plugins } from '@capacitor/core';
// import 'myfirst-cap-plugin';
 
const { first } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    // private authService: AuthService
  ) {
    this.initializeApp();
    // this.authService.authenticate()
    this.storage.clear();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.testingPlugin();
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  async testingPlugin(){
    console.log('TEST');
    let contacts = (await first.getContacts('somefilter')).results
    console.log(contacts)
  }
}
