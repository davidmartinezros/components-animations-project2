import { Component, Input } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-flip-animation',
  templateUrl: './flip-animation.component.html',
  styleUrls: ['./flip-animation.component.css'],
  animations: [
    trigger('flip', [
      transition('* => *', [
        animate(200, style({transform: 'perspective(400px) rotate3d(0, 1, 0, -360deg)', offset: 0})),
        animate(200, style({transform: 'perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)', offset: 0.4})),
        animate(200, style({transform: 'perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)', offset: 0.5})),
        animate(200, style({transform: 'perspective(400px) scale3d(.95, .95, .95)', offset: 0.8})),
        animate(200, style({transform: 'perspective(400px)', offset: 1}))
      ])
    ]),
    trigger('flipInX', [
      transition('* => *', [
        animate(200, style({transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)', opacity: '0', offset: 0})),
        animate(200, style({transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)', offset: 0.4})),
        animate(200, style({transform: 'perspective(400px) rotate3d(1, 0, 0, 10deg)', opacity: '1', offset: 0.6})),
        animate(200, style({transform: 'perspective(400px) rotate3d(1, 0, 0, -5deg)', opacity: '1',offset: 0.8})),
        animate(200, style({transform: 'perspective(400px)', opacity: '1', offset: 1}))
      ])
    ]),
    trigger('flipOutX', [
      transition('* => *', [
        animate(300, style({transform: 'perspective(400px)', opacity: '1', offset: 0})),
        animate(300, style({transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)', opacity: '1', offset: 0.3})),
        animate(300, style({transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)', opacity: '0', offset: 1}))
      ])
    ]),
    trigger('flipInY', [
      transition('* => *', [
        animate(200, style({transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)', opacity: '0', offset: 0})),
        animate(200, style({transform: 'perspective(400px) rotate3d(0, 1, 0, -20deg)', offset: 0.4})),
        animate(200, style({transform: 'perspective(400px) rotate3d(0, 1, 0, 10deg)', opacity: '1', offset: 0.6})),
        animate(200, style({transform: 'perspective(400px) rotate3d(0, 1, 0, -5deg)', opacity: '1',offset: 0.8})),
        animate(200, style({transform: 'perspective(400px)', opacity: '1', offset: 1}))
      ])
    ]),
    trigger('flipOutY', [
      transition('* => *', [
        animate(300, style({transform: 'perspective(400px)', opacity: '1', offset: 0})),
        animate(300, style({transform: 'perspective(400px) rotate3d(0, 1, 0, -20deg)', opacity: '1', offset: 0.3})),
        animate(300, style({transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)', opacity: '0', offset: 1}))
      ])
    ]),
  ]
})
export class FlipAnimationComponent {

  @Input() text: String;
  @Input() image: String;
  
  whichToShow: String = "";

  @Input() showFlip: boolean = false;
  @Input() showFlipInX: boolean = false;
  @Input() showFlipOutX: boolean = false;
  @Input() showFlipInY: boolean = false;
  @Input() showFlipOutY: boolean = false;

  ngOnInit() {
    if(this.showFlip) {
      this.whichToShow = "showFlip";
    }
    if(this.showFlipInX) {
      this.whichToShow = "showFlipInX";
    }
    if(this.showFlipOutX) {
      this.whichToShow = "showFlipOutX";
    }
    if(this.showFlipInY) {
      this.whichToShow = "showFlipInY";
    }
    if(this.showFlipOutY) {
      this.whichToShow = "showFlipOutY";
    }
  }

  changeShow() {
    switch(this.whichToShow) {
      case "showFlip":
        this.showFlip = !this.showFlip;
        break;
      case "showFlipInX":
        this.showFlipInX = !this.showFlipInX;
        break;
      case "showFlipOutX":
        this.showFlipOutX = !this.showFlipOutX;
        break;
      case "showFlipInY":
        this.showFlipInY = !this.showFlipInY;
        break;
      case "showFlipOutY":
        this.showFlipOutY = !this.showFlipOutY;
        break;
    }
  }
  
}
