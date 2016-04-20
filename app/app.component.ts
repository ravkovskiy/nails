import {Component} from 'angular2/core';
import {TemplateHeader} from './template/template-header';
import {TemplateSlider} from './template/template-slider';
import {TemplateCarousel} from './template/template-carousel';

@Component({
    selector: 'my-app',
    directives: [TemplateHeader, TemplateSlider,TemplateCarousel],
    template: `
        <template-header></template-header>
        <template-slider></template-slider>
        <template-carousel></template-carousel>
    `
})
export class AppComponent { }
