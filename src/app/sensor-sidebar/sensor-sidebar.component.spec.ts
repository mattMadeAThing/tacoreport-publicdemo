import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorSidebarComponent } from './sensor-sidebar.component';

describe('SensorSidebarComponent', () => {
  let component: SensorSidebarComponent;
  let fixture: ComponentFixture<SensorSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensorSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
