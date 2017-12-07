
import { Injectable, Renderer, ElementRef, NgZone } from '@angular/core';

export class TypingCompleteHelper {
              // timer identifier
  public doneTypingInterval = 3000;  // time in ms, 5 second for example
  constructor(input: ElementRef, renderer: Renderer, ngZone: NgZone, callback: () => void) {


  }
}
