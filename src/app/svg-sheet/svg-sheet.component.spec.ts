import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgSheetComponent } from './svg-sheet.component';

describe('SvgSheetComponent', () => {
  let component: SvgSheetComponent;
  let fixture: ComponentFixture<SvgSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
