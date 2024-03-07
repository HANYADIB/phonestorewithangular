import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TproductlistComponent } from './tproductlist.component';

describe('TproductlistComponent', () => {
  let component: TproductlistComponent;
  let fixture: ComponentFixture<TproductlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TproductlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TproductlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
