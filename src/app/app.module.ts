import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MenuComponent } from './components/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { GetRevueNameByIdPipe } from './services/pipe/get-revue-name-by-id.pipe';
import { RankingsComponent } from './components/rankings/rankings.component';
import { GetWidgetSjrPipe } from './services/pipe/get-widget-sjr.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    GetRevueNameByIdPipe,
    RankingsComponent,
    GetWidgetSjrPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
