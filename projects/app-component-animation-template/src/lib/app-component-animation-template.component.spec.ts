import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponentAnimationTemplateComponent } from './app-component-animation-template.component';

describe('AppComponentAnimationTemplateComponent', () => {
  let component: AppComponentAnimationTemplateComponent;
  let fixture: ComponentFixture<AppComponentAnimationTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponentAnimationTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponentAnimationTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
