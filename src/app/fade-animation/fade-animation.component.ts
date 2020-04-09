import { Component, Input } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-fade-animation',
  templateUrl: './fade-animation.component.html',
  styleUrls: ['./fade-animation.component.css'],
  animations: [
    trigger('fadeIn', [
      transition('* => *', [
        animate(450, style({opacity: '0', offset: 0})), 
        animate(450, style({opacity: '1', offset: 1}))
      ])
    ]),
    trigger('fadeOut', [
      transition('* => *', [
        animate(450, style({opacity: '1', offset: 0})), 
        animate(450, style({opacity: '0', offset: 1}))
      ])
    ]),
    trigger('fadeInDown', [
      transition('* => *', [
        animate(450, style({opacity: '0', transform: 'translate3d(0, -100%, 0)', offset: 0})), 
        animate(450, style({opacity: '1', transform: 'none', offset: 1}))
      ])
    ]),
    trigger('fadeOutDown', [
      transition('* => *', [
        animate(450, style({opacity: '1', transform: 'none', offset: 0})),
        animate(450, style({opacity: '0', transform: 'translate3d(0, 100%, 0)', offset: 1}))
      ])
    ]),
    trigger('fadeOutUp', [
      transition('* => *', [
        animate(450, style({opacity: '1', transform: 'none', offset: 0})),
        animate(450, style({opacity: '0', transform: 'translate3d(0, -100%, 0)', offset: 1}))
      ])
    ]),
    trigger('fadeOutUpBig', [
      transition('* => *', [
        animate(450, style({opacity: '1', transform: 'none', offset: 0})),
        animate(450, style({opacity: '0', transform: 'translate3d(0, -2000px, 0)', offset: 1}))
      ])
    ]),
    trigger('fadeInUp', [
      transition('* => *', [
        animate(450, style({opacity: '0', transform: 'translate3d(0, 100%, 0)', offset: 0})), 
        animate(450, style({opacity: '1', transform: 'none', offset: 1}))
      ])
    ]),
    trigger('fadeInDownBig', [
      transition('* => *', [
        animate(450, style({opacity: '0', transform: 'translate3d(0, -2000px, 0)', offset: 0})), 
        animate(450, style({opacity: '1', transform: 'none', offset: 1}))
      ])
    ]),
    trigger('fadeOutDownBig', [
      transition('* => *', [
        animate(450, style({opacity: '1', transform: 'none', offset: 0})),
        animate(450, style({opacity: '0', transform: 'translate3d(0, 2000px, 0)', offset: 1}))
      ])
    ]),
    trigger('fadeInUpBig', [
      transition('* => *', [
        animate(450, style({opacity: '0', transform: 'translate3d(0, 2000px, 0)', offset: 0})), 
        animate(450, style({opacity: '1', transform: 'none', offset: 1}))
      ])
    ]),
    trigger('fadeInRightBig', [
      transition('* => *', [
        animate(450, style({opacity: '0', transform: 'translate3d(2000px, 0, 0)', offset: 0})), 
        animate(450, style({opacity: '1', transform: 'none', offset: 1}))
      ])
    ]),
    trigger('fadeOutLeftBig', [
      transition('* => *', [
        animate(450, style({opacity: '1', transform: 'none', offset: 0})), 
        animate(450, style({opacity: '0', transform: 'translate3d(-2000px, 0, 0)', offset: 1}))
      ])
    ]),
    trigger('fadeInLeft', [
      transition('* => *', [
        animate(450, style({opacity: '0', transform: 'translate3d(-100%, 0, 0)', offset: 0})), 
        animate(450, style({opacity: '1', transform: 'none', offset: 1}))
      ])
    ]),
    trigger('fadeInLeftBig', [
      transition('* => *', [
        animate(450, style({opacity: '0', transform: 'translate3d(-2000px, 0, 0)', offset: 0})), 
        animate(450, style({opacity: '1', transform: 'none', offset: 1}))
      ])
    ]),
    trigger('fadeInRight', [
      transition('* => *', [
        animate(450, style({opacity: '0', transform: 'translate3d(100%, 0, 0)', offset: 0})), 
        animate(450, style({opacity: '1', transform: 'none', offset: 1}))
      ])
    ]),
    trigger('fadeOutLeft', [
      transition('* => *', [
        animate(450, style({opacity: '1', transform: 'none', offset: 0})), 
        animate(450, style({opacity: '0', transform: 'translate3d(-100%, 0, 0)', offset: 1}))
      ])
    ]),
    trigger('fadeOutRight', [
      transition('* => *', [
        animate(450, style({opacity: '1', transform: 'none', offset: 0})),
        animate(450, style({opacity: '0', transform: 'translate3d(100%, 0, 0)', offset: 1}))
      ])
    ]),
    trigger('fadeOutRightBig', [
      transition('* => *', [
        animate(450, style({opacity: '1', transform: 'none', offset: 0})),
        animate(450, style({opacity: '0', transform: 'translate3d(2000px, 0, 0)', offset: 1}))
      ])
    ]),
  ]
})
export class FadeAnimationComponent {

  @Input() text: String;
  @Input() image: String;
  
  whichToShow: String = "";

  @Input() showFadeIn: boolean = false;
  @Input() showFadeOut: boolean = false;
  @Input() showFadeInDown: boolean = false;
  @Input() showFadeOutDown: boolean = false;
  @Input() showFadeOutUp: boolean = false;
  @Input() showFadeOutUpBig: boolean = false;
  @Input() showFadeInUp: boolean = false;
  @Input() showFadeInDownBig: boolean = false;
  @Input() showFadeOutDownBig: boolean = false;
  @Input() showFadeInUpBig: boolean = false;
  @Input() showFadeInRightBig: boolean = false;
  @Input() showFadeOutLeftBig: boolean = false;
  @Input() showFadeInLeft: boolean = false;
  @Input() showFadeInLeftBig: boolean = false;
  @Input() showFadeInRight: boolean = false;
  @Input() showFadeOutLeft: boolean = false;
  @Input() showFadeOutRight: boolean = false;
  @Input() showFadeOutRightBig: boolean = false;

  ngOnInit() {
    if(this.showFadeIn) {
      this.whichToShow = "showFadeIn";
    }
    if(this.showFadeOut) {
      this.whichToShow = "showFadeOut";
    }
    if(this.showFadeInDown) {
      this.whichToShow = "showFadeInDown";
    }
    if(this.showFadeOutDown) {
      this.whichToShow = "showFadeOutDown";
    }
    if(this.showFadeOutUp) {
      this.whichToShow = "showFadeOutUp";
    }
    if(this.showFadeOutUpBig) {
      this.whichToShow = "showFadeOutUpBig";
    }
    if(this.showFadeInUp) {
      this.whichToShow = "showFadeInUp";
    }
    if(this.showFadeInDownBig) {
      this.whichToShow = "showFadeInDownBig";
    }
    if(this.showFadeOutDownBig) {
      this.whichToShow = "showFadeOutDownBig";
    }
    if(this.showFadeInUpBig) {
      this.whichToShow = "showFadeInUpBig";
    }
    if(this.showFadeInRightBig) {
      this.whichToShow = "showFadeInRightBig";
    }
    if(this.showFadeOutLeftBig) {
      this.whichToShow = "showFadeOutLeftBig";
    }
    if(this.showFadeInLeft) {
      this.whichToShow = "showFadeInLeft";
    }
    if(this.showFadeInLeftBig) {
      this.whichToShow = "showFadeInLeftBig";
    }
    if(this.showFadeInRight) {
      this.whichToShow = "showFadeInRight";
    }
    if(this.showFadeOutLeft) {
      this.whichToShow = "showFadeOutLeft";
    }
    if(this.showFadeOutRight) {
      this.whichToShow = "showFadeOutRight";
    }
    if(this.showFadeOutRightBig) {
      this.whichToShow = "showFadeOutRightBig";
    }
  }

  changeShow() {
    switch(this.whichToShow) {
      case "showFadeIn":
        this.showFadeIn = !this.showFadeIn;
        break;
      case "showFadeOut":
        this.showFadeOut = !this.showFadeOut;
        break;
      case "showFadeInDown":
        this.showFadeInDown = !this.showFadeInDown;
        break;
      case "showFadeOutDown":
        this.showFadeOutDown = !this.showFadeOutDown;
        break;
      case "showFadeOutUp":
        this.showFadeOutUp = !this.showFadeOutUp;
        break;
      case "showFadeOutUpBig":
        this.showFadeOutUpBig = !this.showFadeOutUpBig;
        break;
      case "showFadeInUp":
        this.showFadeInUp = !this.showFadeInUp;
        break;
      case "showFadeInDownBig":
        this.showFadeInDownBig = !this.showFadeInDownBig;
        break;
      case "showFadeOutDownBig":
        this.showFadeOutDownBig = !this.showFadeOutDownBig;
        break;
      case "showFadeInUpBig":
        this.showFadeInUpBig = !this.showFadeInUpBig;
        break;
      case "showFadeInRightBig":
        this.showFadeInRightBig = !this.showFadeInRightBig;
        break;
      case "showFadeOutLeftBig":
        this.showFadeOutLeftBig = !this.showFadeOutLeftBig;
        break;
      case "showFadeInLeft":
        this.showFadeInLeft = !this.showFadeInLeft;
        break;
      case "showFadeInLeftBig":
        this.showFadeInLeftBig = !this.showFadeInLeftBig;
        break;
      case "showFadeInRight":
        this.showFadeInRight = !this.showFadeInRight;
        break;
      case "showFadeOutLeft":
        this.showFadeOutLeft = !this.showFadeOutLeft;
        break;
      case "showFadeOutRight":
        this.showFadeOutRight = !this.showFadeOutRight;
        break;
      case "showFadeOutRightBig":
        this.showFadeOutRightBig = !this.showFadeOutRightBig;
        break;
    }
  }

}
