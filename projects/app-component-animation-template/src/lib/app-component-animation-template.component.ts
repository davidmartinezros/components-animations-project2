import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-AppComponentAnimationTemplate',
  template: `
    <h1>Animate Components by David Martínez Ros! (Repository: <a href="https://github.com/davidmartinezros" target="_blank">davidmartinezros</a>)</h1>
    <h1>My Portfolio <a href="https://davidmartinezros.com" target="_blank">davidmartinezros.com</a></h1>
    <div>
        <app-bounce-animation></app-bounce-animation>
        <app-fade-animation></app-fade-animation>
        <app-flip-animation></app-flip-animation>
        <app-others-animation></app-others-animation>
        <app-roll-animation></app-roll-animation>
        <app-rotate-animation></app-rotate-animation>
        <app-zoom-animation></app-zoom-animation>
    </div>
  `,
  styles: []
})
export class AppComponentAnimationTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
