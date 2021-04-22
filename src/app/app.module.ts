import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MazuComponent } from './mazu/mazu.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { DataComponent } from './data/data.component';

@NgModule({
  declarations: [
    AppComponent,
    MazuComponent,
    PortfolioComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
