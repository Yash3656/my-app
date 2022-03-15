import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCompServiceComponent } from './new-comp-service.component';

describe('NewCompServiceComponent', () => {
  let component: NewCompServiceComponent;
  let fixture: ComponentFixture<NewCompServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCompServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCompServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
