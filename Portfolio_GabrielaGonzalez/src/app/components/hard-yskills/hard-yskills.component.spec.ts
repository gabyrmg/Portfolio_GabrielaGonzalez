import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardYskillsComponent } from './hard-yskills.component';

describe('HardYskillsComponent', () => {
  let component: HardYskillsComponent;
  let fixture: ComponentFixture<HardYskillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardYskillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HardYskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
