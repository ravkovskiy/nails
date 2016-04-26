import {Component} from 'angular2/core';
import {CarouselComponent} from './../carousel/carousel.component';
import {PriceComponent} from './../price/price.component';
import {ROUTER_DIRECTIVES} from "angular2/router";
import {Router, ROUTER_BINDINGS, RouterOutlet, RouteConfig, RouterLink, ROUTER_PROVIDERS, APP_BASE_HREF} from "angular2/router";
    

@Component({
    selector: 'header_component',
    directives: [HeaderComponent, CarouselComponent, ROUTER_DIRECTIVES, RouterLink],
    templateUrl:"app/header/header.template.html"
})
@RouteConfig([
    {path: '/carousel', name: 'Carousel', component: CarouselComponent, useAsDefault: true},
    {path: '/price', name: 'Price', component: PriceComponent},
])
export class HeaderComponent { }



