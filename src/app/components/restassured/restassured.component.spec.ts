import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestassuredComponent } from './restassured.component';

describe('RestassuredComponent', () => {
  let component: RestassuredComponent;
  let fixture: ComponentFixture<RestassuredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestassuredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestassuredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
