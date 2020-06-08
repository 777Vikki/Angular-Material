import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboard1SidebarComponent } from './dashboard1-sidebar.component';

describe('Dashboard1SidebarComponent', () => {
  let component: Dashboard1SidebarComponent;
  let fixture: ComponentFixture<Dashboard1SidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dashboard1SidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dashboard1SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
