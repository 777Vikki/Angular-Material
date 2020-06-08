import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboard1FooterComponent } from './dashboard1-footer.component';

describe('Dashboard1FooterComponent', () => {
  let component: Dashboard1FooterComponent;
  let fixture: ComponentFixture<Dashboard1FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dashboard1FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dashboard1FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
