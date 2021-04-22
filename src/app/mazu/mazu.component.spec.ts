import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MazuComponent } from './mazu.component';

describe('MazuComponent', () => {
  let component: MazuComponent;
  let fixture: ComponentFixture<MazuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MazuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MazuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
