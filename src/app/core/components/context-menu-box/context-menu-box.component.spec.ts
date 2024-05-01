import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextMenuBoxComponent } from './context-menu-box.component';

describe('ContextMenuBoxComponent', () => {
  let component: ContextMenuBoxComponent;
  let fixture: ComponentFixture<ContextMenuBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContextMenuBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContextMenuBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
