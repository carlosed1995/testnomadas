import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadshoesComponent } from './readshoes.component';

describe('ReadshoesComponent', () => {
  let component: ReadshoesComponent;
  let fixture: ComponentFixture<ReadshoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadshoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadshoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
