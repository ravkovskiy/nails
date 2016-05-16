import {Component} from "angular2/core";
import {PortfolioService} from "../portfolio/portfolio.service";
@Component({
    selector: 'portfolio_component',
    templateUrl: "app/portfolio/portfolio.template.html",
})
export class PortfolioComponent{
    constructor(public portfolioService:PortfolioService) {
    }
    //need change start value portfolioItem!!!!!!!!!!!
    portfolioItem = this.portfolioService.portfolioList[0];
    onClickPortfolioItem(clickItem) {
        this.portfolioItem=clickItem;
    }
    onClickPrevPortfolioItem() {
        var lengthPortfolio = this.portfolioService.portfolioList.length;
        var positionPortfolioItemClick = this.portfolioService.portfolioList.indexOf(this.portfolioItem);
        switch(positionPortfolioItemClick) {
            case 0:
                this.portfolioItem = this.portfolioService.portfolioList[lengthPortfolio - 1];
                break;
            default: 
                this.portfolioItem = this.portfolioService.portfolioList[positionPortfolioItemClick - 1];
        }
    }
    onClickNextPortfolioItem() {
        var lengthPortfolio = this.portfolioService.portfolioList.length;
        var positionPortfolioItemClick = this.portfolioService.portfolioList.indexOf(this.portfolioItem);
        switch(positionPortfolioItemClick) {
            case lengthPortfolio - 1:
                this.portfolioItem = this.portfolioService.portfolioList[0];
                break;
            default: 
                this.portfolioItem = this.portfolioService.portfolioList[positionPortfolioItemClick + 1];
        }
    }
}