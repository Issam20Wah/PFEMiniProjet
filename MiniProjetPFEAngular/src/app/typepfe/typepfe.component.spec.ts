import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypepfeComponent } from './typepfe.component';

describe('TypepfeComponent', () => {
  let component: TypepfeComponent;
  let fixture: ComponentFixture<TypepfeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypepfeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypepfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
