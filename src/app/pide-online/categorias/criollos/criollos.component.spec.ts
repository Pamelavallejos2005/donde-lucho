import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriollosComponent } from './criollos.component';

describe('CriollosComponent', () => {
  let component: CriollosComponent;
  let fixture: ComponentFixture<CriollosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriollosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriollosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
