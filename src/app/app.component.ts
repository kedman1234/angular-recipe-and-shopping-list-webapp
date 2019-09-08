import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

	lodedFeature = 'recipe';

	onNavigate(feature: string) {
		this.lodedFeature = feature;
		console.log(this.lodedFeature);
	}
  
}
