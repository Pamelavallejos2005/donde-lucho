import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PideOnlineComponent } from './pide-online.component';

describe('PideOnlineComponent', () => {
  let component: PideOnlineComponent;
  let fixture: ComponentFixture<PideOnlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PideOnlineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PideOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
