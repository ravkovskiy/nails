import {Component} from "angular2/core";
import {PriceService} from "../price/price.service";
@Component({
    selector: 'price_component',
    template: `
        <div class='price'>
            <span>Price</span>
            <li *ngFor="#price of priceService.price">
                {{price}}
            </li>
        </div>
    `
})
export class PriceComponent{
    constructor(public priceService:PriceService) {
     
    }
}