import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMinimalInfosComponent } from './user-minimal-infos.component';

describe('UserMinimalInfosComponent', () => {
  let component: UserMinimalInfosComponent;
  let fixture: ComponentFixture<UserMinimalInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMinimalInfosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMinimalInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
