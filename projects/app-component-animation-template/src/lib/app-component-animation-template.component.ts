import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-AppComponentAnimationTemplate',
  template: `
    <h1>Animate Components by David Martínez Ros! (Repository: <a href="https://github.com/davidmartinezros" target="_blank">davidmartinezros</a>)</h1>
    <h1>My Portfolio <a href="https://davidmartinezros.com" target="_blank">davidmartinezros.com</a></h1>
    <div>
      <app-bounce-animation showBounceIn="true" text="hola" image="assets/image.jpg"></app-bounce-animation>
      <app-fade-animation text="hola" image="assets/image.jpg"></app-fade-animation>
      <app-flip-animation text="hola" image="assets/image.jpg"></app-flip-animation>
      <app-others-animation text="hola" image="assets/image.jpg"></app-others-animation>
      <app-roll-animation text="hola" image="assets/image.jpg"></app-roll-animation>
      <app-rotate-animation text="hola" image="assets/image.jpg"></app-rotate-animation>
      <app-zoom-animation text="hola" image="assets/image.jpg"></app-zoom-animation>
    </div>
  `,
  styles: []
})
export class AppComponentAnimationTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
