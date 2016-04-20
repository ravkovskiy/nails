import {Component} from 'angular2/core';
import {HeaderComponent} from './header/header.component';
import {CarouselComponent} from './carousel/carousel.component';


@Component({
    selector: 'my-app',
    directives: [HeaderComponent, CarouselComponent],
    template: `
        <header_component></header_component>
        <carousel_component></carousel_component>
    `
})
export class AppComponent { }
