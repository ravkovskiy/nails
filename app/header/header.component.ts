import {Component} from 'angular2/core';
import {CarouselComponent} from './../carousel/carousel.component';
import {PriceComponent} from './../price/price.component';
    

@Component({
    selector: 'header_component',
    directives: [HeaderComponent, CarouselComponent],
    templateUrl:"app/header/header.template.html"
})
export class HeaderComponent { }



