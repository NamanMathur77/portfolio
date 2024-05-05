import { TestBed } from '@angular/core/testing';

import { FileReadServiceService } from './file-read-service.service';

describe('FileReadServiceService', () => {
  let service: FileReadServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileReadServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
