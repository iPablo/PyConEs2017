import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KindergartensComponent } from './kindergartens.component';

describe('KindergartensComponent', () => {
  let component: KindergartensComponent;
  let fixture: ComponentFixture<KindergartensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [KindergartensComponent]
    })
           .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KindergartensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
