import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NombreComponentComponent } from './nombre-component.component';

describe('NombreComponentComponent', () => {
  let component: NombreComponentComponent;
  let fixture: ComponentFixture<NombreComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NombreComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NombreComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
