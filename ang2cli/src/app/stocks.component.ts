import {Component} from '@angular/core';
import {StockService} from './stock.service';

@Component({
        selector: 'stocks',
        template: `<h2>Stocks</h2>
        {{title}}

        <ul>
            <li *ngFor="let stock of stocks">
                {{stock}}
            </li>
        </ul>

        <hr/>

        <ul *ngIf="showStockMarket">
            <li *ngFor="let stockMarket of stockMarkets">
                {{stockMarket}}
            </li>
        </ul>

        <hr/>

        <div [ngSwitch]="'NYSE'">
            

        `
    })

export class StocksComponent{
    title = 'Stocks :: ';
    stocks;
    showStockMarket = false;
    stockMarkets = ['NYSE', 'NASDAQ', 'EURONEXT', 'HKSE', 'LSE', 'NIKKEI'];
    constructor(stockService : StockService){
        this.stocks = stockService.getStocks();
    }
}