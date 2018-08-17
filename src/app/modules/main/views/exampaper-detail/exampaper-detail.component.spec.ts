import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampaperDetailComponent } from './exampaper-detail.component';

describe('ExampaperDetailComponent', () => {
  let component: ExampaperDetailComponent;
  let fixture: ComponentFixture<ExampaperDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampaperDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampaperDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
