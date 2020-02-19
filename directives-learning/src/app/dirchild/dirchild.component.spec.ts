import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirchildComponent } from './dirchild.component';

describe('DirchildComponent', () => {
  let component: DirchildComponent;
  let fixture: ComponentFixture<DirchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
