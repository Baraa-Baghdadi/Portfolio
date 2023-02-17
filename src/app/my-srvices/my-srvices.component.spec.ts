import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySrvicesComponent } from './my-srvices.component';

describe('MySrvicesComponent', () => {
  let component: MySrvicesComponent;
  let fixture: ComponentFixture<MySrvicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySrvicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MySrvicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
