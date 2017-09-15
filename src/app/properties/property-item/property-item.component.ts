import { Component, Input, OnInit, AfterViewInit ,OnDestroy, ElementRef, HostBinding} from '@angular/core';
import { PropertyModel } from '../../models/propertymodel';
import { PropertyService } from '../../services/property.service';
import { ActivatedRoute } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-property-item',
  templateUrl: './property-item.component.html',
  styleUrls: ['./property-item.component.css']
})

export class PropertyItemComponent implements OnInit, AfterViewInit ,OnDestroy {
  private property: {address1: string}; private id;
  public data_render = false;
   @HostBinding('class') defaultClass = 'owl-carousel';
   @Input() options: object;
  
  $owlElement: any;

  defaultOptions: any = {};

  constructor(private httpService: PropertyService,private route: ActivatedRoute, private el: ElementRef) { 
     this.route.params.subscribe(params => {
                 this.id = params["id"];
          });

  }
  images = ['http://images.portalimages.com/24614/27037556/image/s2/636335961231325484/7ce6a5d6a752f342a0145966332bcc787100b3ab.jpg',
            'http://images.portalimages.com/24614/27037556/image/s2/636335961231325484/e00579ee4af9aff25acf10ee16151f7af55b99e8.jpg',
            'http://images.portalimages.com/24614/27037556/image/s2/636335961231325484/21e02e9242803a8d725db6b6818f5866232f318c.jpg',
            'http://images.portalimages.com/24614/27037556/image/s2/636335961231325484/e00579ee4af9aff25acf10ee16151f7af55b99e8.jpg'
            ];
  ngOnInit() {
    
  }
 
  ngAfterViewInit() {
      this.httpService.showProperty(this.id).subscribe(
            response => this.property = response.property,
            error => { alert("No property found") }
      );
      this.$owlElement = $(this.el.nativeElement).owlCarousel(this.defaultOptions);
  }
 ngOnDestroy() { 
  //  $('#sync1').data('owlCarousel').destroy();
  // $('#sync1').owlCarousel('destroy');
   //   this.$owlElement.data('owlCarousel').destroy();
   // this.$owlElement = null;
  }
}