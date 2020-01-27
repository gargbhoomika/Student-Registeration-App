/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RaddstudentComponent } from './raddstudent.component';

describe('RaddstudentComponent', () => {
  let component: RaddstudentComponent;
  let fixture: ComponentFixture<RaddstudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaddstudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaddstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
