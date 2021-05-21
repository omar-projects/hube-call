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
import { GetWidgetSjrPipe } from './services/pipe/get-widget-sjr.pipe';
import { ModalInfoJournalComponent } from './components/home/modal-info-journal/modal-info-journal.component';
import { RechercheAvanceeComponent } from './components/recherche-avancee/recherche-avancee.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { NgxMasonryModule } from 'ngx-masonry';
import { NgxChartsModule }from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    StatisticsComponent,
    ModalInfoJournalComponent,
    RechercheAvanceeComponent,
    GetRevueNameByIdPipe,
    GetWidgetSjrPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMasonryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
