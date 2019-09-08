import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	@Output() featureSelected = new EventEmitter<string>();

	onSelect(feature: string) {
		console.log('feature fom hedar: ' + feature);
		this.featureSelected.emit(feature);
	}
  ngOnInit() {
  	// $('.collapse').collapse();
  }
}
