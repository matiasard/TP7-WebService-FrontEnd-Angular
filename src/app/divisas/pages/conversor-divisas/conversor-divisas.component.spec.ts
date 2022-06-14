import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversorDivisasComponent } from './conversor-divisas.component';

describe('ConversorDivisasComponent', () => {
  let component: ConversorDivisasComponent;
  let fixture: ComponentFixture<ConversorDivisasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversorDivisasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversorDivisasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
