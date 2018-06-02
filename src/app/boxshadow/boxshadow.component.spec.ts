import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxshadowComponent } from './boxshadow.component';

describe('BoxshadowComponent', () => {
  let component: BoxshadowComponent;
  let fixture: ComponentFixture<BoxshadowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxshadowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxshadowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
