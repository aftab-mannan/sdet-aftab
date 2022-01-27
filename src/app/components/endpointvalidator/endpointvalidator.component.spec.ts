import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndpointvalidatorComponent } from './endpointvalidator.component';

describe('EndpointvalidatorComponent', () => {
  let component: EndpointvalidatorComponent;
  let fixture: ComponentFixture<EndpointvalidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndpointvalidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndpointvalidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
