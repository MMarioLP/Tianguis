import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateprodComponent } from './createprod.component';

describe('CreateprodComponent', () => {
  let component: CreateprodComponent;
  let fixture: ComponentFixture<CreateprodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateprodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
