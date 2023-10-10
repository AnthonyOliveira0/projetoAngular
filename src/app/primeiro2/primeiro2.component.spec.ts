import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Primeiro2Component } from './primeiro2.component';

describe('Primeiro2Component', () => {
  let component: Primeiro2Component;
  let fixture: ComponentFixture<Primeiro2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Primeiro2Component]
    });
    fixture = TestBed.createComponent(Primeiro2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
