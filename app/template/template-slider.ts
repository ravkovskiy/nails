import {Component} from 'angular2/core';
@Component({
    selector: 'template-slider',
    template: `
    <div id="wowslider-container1">
	<div class="ws_images"><ul>
		<li><img src="../../wow-slider/data1/images/20141225160706_e4296.jpg" alt="20141225160706_e4296" title="20141225160706_e4296" id="wows1_0"/></li>
		<li><a href="http://wowslider.com/vi"><img src="../../wow-slider/data1/images/devushka_vzglyad_lico_makiyazh_manikyur_goluboglazaya_44388_1920x1080.jpg" alt="cssslider" title="devushka_vzglyad_lico_makiyazh_manikyur_goluboglazaya_44388_1920x1080" id="wows1_1"/></a></li>
		<li><img src="../../wow-slider/data1/images/36216810.jpg" alt="красивый-маникюр-зимы-36216810" title="красивый-маникюр-зимы-36216810" id="wows1_2"/></li>
	</ul></div>
	<div class="ws_bullets"><div>
		<a href="#" title="20141225160706_e4296"><span><img src="../../wow-slider/data1/tooltips/20141225160706_e4296.jpg" alt="20141225160706_e4296"/>1</span></a>
		<a href="#" title="devushka_vzglyad_lico_makiyazh_manikyur_goluboglazaya_44388_1920x1080"><span><img src="../../wow-slider/data1/tooltips/devushka_vzglyad_lico_makiyazh_manikyur_goluboglazaya_44388_1920x1080.jpg" alt="devushka_vzglyad_lico_makiyazh_manikyur_goluboglazaya_44388_1920x1080"/>2</span></a>
		<a href="#" title="красивый-маникюр-зимы-36216810"><span><img src="../../wow-slider/data1/tooltips/36216810.jpg" alt="красивый-маникюр-зимы-36216810"/>3</span></a>
	</div></div><div class="ws_script" style="position:absolute;left:-99%"><a href="http://wowslider.com">responsive slider</a> by WOWSlider.com v8.7</div>
	<div class="ws_shadow"></div>
	</div>	
    `
})
export class TemplateSlider { }
