/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PictureChooserComponent } from './picture-chooser.component';

describe('PictureChooserComponent', () => {
  let component: PictureChooserComponent;
  let fixture: ComponentFixture<PictureChooserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PictureChooserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
