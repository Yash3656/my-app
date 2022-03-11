import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveExercise2Component } from './directive-exercise2.component';

describe('DirectiveExercise2Component', () => {
  let component: DirectiveExercise2Component;
  let fixture: ComponentFixture<DirectiveExercise2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectiveExercise2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveExercise2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
