import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestpropertiesComponent } from './latestproperties.component';

describe('LatestpropertiesComponent', () => {
  let component: LatestpropertiesComponent;
  let fixture: ComponentFixture<LatestpropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestpropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestpropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
