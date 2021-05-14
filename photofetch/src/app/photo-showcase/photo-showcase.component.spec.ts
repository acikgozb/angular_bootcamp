import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoShowcaseComponent } from './photo-showcase.component';

describe('PhotoShowcaseComponent', () => {
  let component: PhotoShowcaseComponent;
  let fixture: ComponentFixture<PhotoShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoShowcaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
