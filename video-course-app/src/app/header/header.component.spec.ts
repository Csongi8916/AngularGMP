import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { LogoComponent } from './logo/logo.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent, LogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have auth buttons', () => {
    const courseElement: HTMLElement = fixture.nativeElement;
    const authBtnElements = courseElement.querySelectorAll('.auth .log-btn');
    expect(authBtnElements[0].textContent).toContain('login');
    expect(authBtnElements[1].textContent).toContain('Log off');
  });
});
