import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BinaryComponent } from './binary.component';
import { SharedModule } from '../shared/shared.module';
import { By } from '@angular/platform-browser';

describe('BinaryComponent', () => {
  let component: BinaryComponent;
  let fixture: ComponentFixture<BinaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BinaryComponent],
      imports: [SharedModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BinaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should update binary value to 1010 when number is 10', () => {
    const input = fixture.debugElement.query(By.css('#numInput'));
    const numInput = input.nativeElement as HTMLInputElement;
    numInput.value = '10';
    numInput.dispatchEvent(new Event('input'));
    expect(+component.binaryInput.value).toEqual(1010);
  });

  it('should update number to 128 when binary string is 10000000', () => {
    const input = fixture.debugElement.query(By.css('#binInput'));
    const binInput = input.nativeElement as HTMLInputElement;
    binInput.value = '10000000';
    binInput.dispatchEvent(new Event('input'));
    expect(+component.numberInput.value).toEqual(128);
  });

  it('should ensure negative number input is invalid', () => {
    component.numberInput.setValue(-4);
    expect(component.numberInput.valid).toBeFalsy();
  });

  it('should ensure binary number input only accepts 0s and 1s', () => {
    component.binaryInput.setValue('1024gjfj');
    expect(component.binaryInput.valid).toBeFalsy();
  });
});
