import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipicosComponent } from './tipicos.component';

describe('TipicosComponent', () => {
  let component: TipicosComponent;
  let fixture: ComponentFixture<TipicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipicosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
