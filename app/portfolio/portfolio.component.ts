import {Component} from "angular2/core";
import {PortfolioService} from "../portfolio/portfolio.service";
@Component({
    selector: 'portfolio_component',
    templateUrl: "app/portfolio/portfolio.template.html",
})
export class PortfolioComponent{
    constructor(public portfolioService:PortfolioService) {
    }
    //need change start value portfolioItemImage!!!!!!!!!!!
    portfolioItemImage:string = "kot1.jpeg";
    onClick(item) {
        this.portfolioItemImage=item.image;
    }
}