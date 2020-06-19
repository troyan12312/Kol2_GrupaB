import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { DTForumComponent } from './components/dt-forum/dt-forum.component';
import { DTForumItemComponent } from './components/dt-forum-item/dt-forum-item.component';

@NgModule({
  declarations: [
    AppComponent,
    DTForumComponent,
    DTForumItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
