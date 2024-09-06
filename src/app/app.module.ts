import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudRegistrationComponent } from './stud-registration/stud-registration.component';
import { FormsModule } from '@angular/forms';
import { StudListComponent } from './stud-list/stud-list.component';
import { StudViewComponent } from './stud-view/stud-view.component';
import { LandingpgComponent } from './landingpg/landingpg.component';

@NgModule({
  declarations: [
    AppComponent,
    StudRegistrationComponent,
    StudListComponent,
    StudViewComponent,
    LandingpgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
