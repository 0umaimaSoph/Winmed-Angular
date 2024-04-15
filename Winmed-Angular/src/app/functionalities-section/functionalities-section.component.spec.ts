import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalitiesSectionComponent } from './functionalities-section.component';

describe('FunctionalitiesSectionComponent', () => {
  let component: FunctionalitiesSectionComponent;
  let fixture: ComponentFixture<FunctionalitiesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctionalitiesSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionalitiesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
