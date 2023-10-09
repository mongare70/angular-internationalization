import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('languages') languages!: ElementRef;
  user!: { firstName: string; lastName: string };
  // welcome!: string;
  // usernameLabel!: string;
  // passwordLabel!: string;

  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'fr', 'sw', 'es', 'pt', "am"]);
    translate.setDefaultLang('en');
  }

  ngOnInit() {
    // hardcoded example
    this.user = { firstName: 'Sammy', lastName: 'Shark' };

    // // synchronous. Also interpolate the 'firstName' parameter with a value.
    // this.welcome = this.translate.instant('welcomeMessage', {
    //   firstName: this.user.firstName,
    // });

    // // asynchronous - gets translations then completes.
    // this.translate
    //   .get(['login.username', 'login.password'])
    //   .subscribe((translations) => {
    //     this.usernameLabel = translations['login.username'];
    //     this.passwordLabel = translations['login.password'];
    //   });
  }

  changeLanguage(): void {
    this.translate.use(this.languages.nativeElement.value);
  }
}
