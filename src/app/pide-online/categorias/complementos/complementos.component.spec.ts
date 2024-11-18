import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplementosComponent } from './complementos.component';

describe('ComplementosComponent', () => {
  let component: ComplementosComponent;
  let fixture: ComponentFixture<ComplementosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplementosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplementosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
