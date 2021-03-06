import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowedBooksComponent } from './borrowed-books.component';

describe('BorrowedBooksComponent', () => {
  let component: BorrowedBooksComponent;
  let fixture: ComponentFixture<BorrowedBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrowedBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowedBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
