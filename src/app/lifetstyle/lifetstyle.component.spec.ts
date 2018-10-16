import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifetstyleComponent } from './lifetstyle.component';

describe('LifetstyleComponent', () => {
  let component: LifetstyleComponent;
  let fixture: ComponentFixture<LifetstyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifetstyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifetstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
