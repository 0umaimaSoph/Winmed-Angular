import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontionnalitesComponent } from './fontionnalites.component';

describe('FontionnalitesComponent', () => {
  let component: FontionnalitesComponent;
  let fixture: ComponentFixture<FontionnalitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FontionnalitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FontionnalitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
