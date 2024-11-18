import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrasasComponent } from './brasas.component';

describe('BrasasComponent', () => {
  let component: BrasasComponent;
  let fixture: ComponentFixture<BrasasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrasasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrasasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
