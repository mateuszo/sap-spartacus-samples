import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigDisplayComponent } from './config-display.component';

describe('ConfigDisplayComponent', () => {
  let component: ConfigDisplayComponent;
  let fixture: ComponentFixture<ConfigDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
