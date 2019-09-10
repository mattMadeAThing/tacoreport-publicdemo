import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartcontainerComponent } from './smartcontainer.component';

describe('SmartcontainerComponent', () => {
  let component: SmartcontainerComponent;
  let fixture: ComponentFixture<SmartcontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartcontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
