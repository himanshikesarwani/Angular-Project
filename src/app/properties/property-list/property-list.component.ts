import { Component, OnInit } from '@angular/core';
import { PropertyModel } from '../../models/propertymodel';
import { PropertyService } from '../../services/property.service';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  private properties;
  p: number = 1;

  constructor(private httpService: PropertyService) {
   
   }
  
  ngOnInit() { 
    this.httpService.searchPropertiesBytype('forsale').subscribe( 
          response => this.properties = response.properties,
          error => { alert("No properties found") }
    );
      
  }

}
