import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BinaryComponent } from './binary/binary.component';
// Anaular Material and other shared imports defined in shared module
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    BinaryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
