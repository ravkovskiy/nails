import {Component} from 'angular2/core';
import {HeaderComponent} from './header/header.component';
import {CarouselComponent} from './carousel/carousel.component';
import {PriceComponent} from './price/price.component';
import {ROUTER_DIRECTIVES} from "angular2/router";
import {RouteConfig} from "angular2/router";
    

@Component({
    selector: 'my-app',
    directives: [HeaderComponent, CarouselComponent, ROUTER_DIRECTIVES],
    templateUrl:"app/header/header.template.html", 
})
@RouteConfig([
    {path: '/carousel', name: 'Carousel', component: CarouselComponent, useAsDefault: true},
    {path: '/price', name: 'Price', component: PriceComponent},
])
export class AppComponent { }
