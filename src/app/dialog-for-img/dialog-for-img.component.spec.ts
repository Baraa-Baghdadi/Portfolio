import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogForImgComponent } from './dialog-for-img.component';

describe('DialogForImgComponent', () => {
  let component: DialogForImgComponent;
  let fixture: ComponentFixture<DialogForImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogForImgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogForImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
