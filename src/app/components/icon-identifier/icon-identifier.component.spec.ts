import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconIdentifierComponent } from './icon-identifier.component';

describe('IconIdentifierComponent', () => {
  let component: IconIdentifierComponent;
  let fixture: ComponentFixture<IconIdentifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconIdentifierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconIdentifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
