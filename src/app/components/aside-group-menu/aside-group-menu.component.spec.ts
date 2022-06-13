import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideGroupMenuComponent } from './aside-group-menu.component';

describe('AsideGroupMenuComponent', () => {
  let component: AsideGroupMenuComponent;
  let fixture: ComponentFixture<AsideGroupMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideGroupMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideGroupMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
