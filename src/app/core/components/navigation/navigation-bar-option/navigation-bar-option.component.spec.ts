import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationBarOptionComponent } from './navigation-bar-option.component';

describe('NavigationBarOptionComponent', () => {
  let component: NavigationBarOptionComponent;
  let fixture: ComponentFixture<NavigationBarOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationBarOptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavigationBarOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
