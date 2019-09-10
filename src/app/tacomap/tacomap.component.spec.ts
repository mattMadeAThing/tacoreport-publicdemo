import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TacomapComponent } from './tacomap.component';

describe('TacomapComponent', () => {
  let component: TacomapComponent;
  let fixture: ComponentFixture<TacomapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TacomapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TacomapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
