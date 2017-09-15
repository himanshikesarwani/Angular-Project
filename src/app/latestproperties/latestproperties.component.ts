import { Component, OnInit } from '@angular/core';
import { PropertyModel } from '../models/propertymodel';
import { PropertyService } from '../services/property.service';

@Component({
  selector: 'app-latestproperties',
  templateUrl: './latestproperties.component.html',
  styleUrls: ['./latestproperties.component.css']
})
export class LatestpropertiesComponent implements OnInit {
  private properties;
  constructor(private httpService: PropertyService) { }

  ngOnInit(){
		this.httpService.getLatestProperties().subscribe(
                       response => this.properties = response.property,
                       error=>  { alert(`Can't get properties.`); }
                    );
	}


}
