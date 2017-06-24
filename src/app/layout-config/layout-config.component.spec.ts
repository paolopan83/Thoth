import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutConfigComponent } from './layout-config.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('LayoutConfigComponent', () => {
  let component: LayoutConfigComponent;
  let fixture: ComponentFixture<LayoutConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutConfigComponent ],
      //imports: [LayoutConfigComponent]
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
