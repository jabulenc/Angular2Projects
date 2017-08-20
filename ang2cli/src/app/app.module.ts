import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MutualfundsComponent } from './mutualfunds/mutualfunds.component';
import { StocksComponent } from './stocks.component';
import { StockDirectiveDirective } from './stock-directive.directive';
import {HighlightDirective} from './highlight.directive';
import {StockService} from './stock.service'
import {routing} from './app.routing';
import { DashboardComponent } from './dashboard/dashboard.component'
import {CurrencyService} from './currency.service';
import { BondsDirective } from './bonds.directive'
import { AlertModule } from 'ng2-bootstrap';

@NgModule({
  // Any new component is declared here
  declarations: [
    AppComponent,
    MutualfundsComponent,
    StocksComponent,
    StockDirectiveDirective,
    HighlightDirective,
    DashboardComponent,
    BondsDirective
  ],
  // Imported modules
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  // Providers must be added before they can be used
  providers: [
    StockService,
    CurrencyService
    ],
  // Bootstrap hosts all other app views
  bootstrap: [AppComponent]
})
export class AppModule { }
