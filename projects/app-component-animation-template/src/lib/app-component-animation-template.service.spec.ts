import { TestBed } from '@angular/core/testing';

import { AppComponentAnimationTemplateService } from './app-component-animation-template.service';

describe('AppComponentAnimationTemplateService', () => {
  let service: AppComponentAnimationTemplateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppComponentAnimationTemplateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
