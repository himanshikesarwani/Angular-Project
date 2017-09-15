import { Injectable, OnInit } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { PropertyModel } from '../models/propertyModel';

import { Observable } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PropertyService implements OnInit {
    private BASE_URL:string = 'http://localhost:81/blog/public/api/';
    private type;
    private id;
   
    constructor(private http:Http,private route: ActivatedRoute){

    }
    ngOnInit(){
          this.route.params.subscribe(params => {
                    this.type = params["type"]; 
          });
          
    }
    public getLatestProperties(){     
        return this.http.get(this.BASE_URL + "latestproperties")
			.map((res:Response) => res.json())
			.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    public searchPropertiesBytype(type){
        return this.http.get('http://localhost:81/blog/public/api/property')
            .map((res:Response) => res.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    public showProperty(id){
        return this.http.get('http://localhost:81/blog/public/api/property/4')
            .map((res:Response) => res.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    } 
    
}
