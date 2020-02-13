import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnChangComponent } from './on-chang.component';

describe('OnChangComponent', () => {
  let component: OnChangComponent;
  let fixture: ComponentFixture<OnChangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnChangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnChangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
