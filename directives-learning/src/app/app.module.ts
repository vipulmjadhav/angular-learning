import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { DirchildComponent } from './dirchild/dirchild.component';


@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    UserComponent,
    DirchildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
