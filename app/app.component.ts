import {Component} from 'angular2/core';
import {CarouselComponent} from './carousel/carousel.component';
import {PriceComponent} from './price/price.component';
import {ActionComponent} from './action/action.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {ReviewsComponent} from './reviews/reviews.component';
import {ContactsComponent} from './contacts/contacts.component';
import {ROUTER_DIRECTIVES} from "angular2/router";
import {RouteConfig} from "angular2/router";
    

@Component({
    selector: 'my-app',
    directives: [CarouselComponent, PriceComponent, ActionComponent, PortfolioComponent, ReviewsComponent, ContactsComponent, ROUTER_DIRECTIVES],
    templateUrl:"./app/header/header.template.html", 
})
@RouteConfig([
    {path: '/carousel', name: 'Carousel', component: CarouselComponent, useAsDefault: true},
    {path: '/price', name: 'Price', component: PriceComponent},
    {path: '/action', name: 'Action', component: ActionComponent},
    {path: '/portfolio', name: 'Portfolio', component: PortfolioComponent},
    {path: '/reviews', name: 'Reviews', component: ReviewsComponent},
    {path: '/contacts', name: 'Contacts', component: ContactsComponent},
])
export class AppComponent { }
