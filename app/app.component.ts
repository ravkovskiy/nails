import {Component} from 'angular2/core';
import {TemplateHeader} from './template/template-header';
import {TemplateSlider} from './template/template-slider';

@Component({
    selector: 'my-app',
    directives: [TemplateHeader, TemplateSlider],
    template: `
        <template-header></template-header>
        <template-slider></template-slider>
    `
})
export class AppComponent { }
