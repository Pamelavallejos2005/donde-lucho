import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarinosComponent } from './marinos.component';

describe('MarinosComponent', () => {
  let component: MarinosComponent;
  let fixture: ComponentFixture<MarinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarinosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
