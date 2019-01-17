import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  enableDarkTheme: boolean;

  ngOnInit() {
    this.enableDarkTheme = false;
  }

  onThemeChangeEvent(enableDark: boolean) {
    this.enableDarkTheme = enableDark;
  }
}
