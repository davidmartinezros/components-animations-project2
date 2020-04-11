import { Component, Input } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-rotate-animation',
  templateUrl: './rotate-animation.component.html',
  styleUrls: ['./rotate-animation.component.css'],
  animations: [
    trigger('rotateIn', [
      transition('* => *', [
        animate(450, style({transform: 'rotate3d(0, 0, 1, -200deg)', opacity: '0', transformOrigin: 'center', offset: 0})), 
        animate(450, style({transform: 'none', opacity: '1', transformOrigin: 'center', offset: 1}))
      ])
    ]),
    trigger('rotateInDownLeft', [
      transition('* => *', [
        animate(450, style({transform: 'rotate3d(0, 0, 1, -45deg)', opacity: '0', transformOrigin: 'left bottom', offset: 0})), 
        animate(450, style({transform: 'none', opacity: '1', transformOrigin: 'left bottom', offset: 1}))
      ])
    ]),
    trigger('rotateInDownRight', [
      transition('* => *', [
        animate(450, style({transform: 'rotate3d(0, 0, 1, 45deg)', opacity: '0', transformOrigin: 'right bottom', offset: 0})), 
        animate(450, style({transform: 'none', opacity: '1', transformOrigin: 'right bottom', offset: 1}))
      ])
    ]),
    trigger('rotateInUpLeft', [
      transition('* => *', [
        animate(450, style({transform: 'rotate3d(0, 0, 1, 45deg)', opacity: '0', transformOrigin: 'left bottom', offset: 0})), 
        animate(450, style({transform: 'none', opacity: '1', transformOrigin: 'left bottom', offset: 1}))
      ])
    ]),
    trigger('rotateInUpRight', [
      transition('* => *', [
        animate(450, style({transform: 'rotate3d(0, 0, 1, -45deg)', opacity: '0', transformOrigin: 'right bottom', offset: 0})), 
        animate(450, style({transform: 'none', opacity: '1', transformOrigin: 'right bottom', offset: 1}))
      ])
    ]),
    trigger('rotateOutDownLeft', [
      transition('* => *', [
        animate(450, style({transform: 'none', opacity: '1', transformOrigin: 'left bottom', offset: 0})),
        animate(450, style({transform: 'rotate3d(0, 0, 1, 45deg)', opacity: '0', transformOrigin: 'left bottom', offset: 1}))
      ])
    ]),
    trigger('rotateOutDownRight', [
      transition('* => *', [
        animate(450, style({transform: 'none', opacity: '1', transformOrigin: 'right bottom', offset: 0})),
        animate(450, style({transform: 'rotate3d(0, 0, 1, -45deg)', opacity: '0', transformOrigin: 'right bottom', offset: 1}))
      ])
    ]),
    trigger('rotateOutUpLeft', [
      transition('* => *', [
        animate(450, style({transform: 'none', opacity: '1', transformOrigin: 'left bottom', offset: 0})),
        animate(450, style({transform: 'rotate3d(0, 0, 1, -45deg)', opacity: '0', transformOrigin: 'left bottom', offset: 1}))
      ])
    ]),
    trigger('rotateOutUpRight', [
      transition('* => *', [
        animate(450, style({transform: 'none', opacity: '1', transformOrigin: 'right bottom', offset: 0})),
        animate(450, style({transform: 'rotate3d(0, 0, 1, 45deg)', opacity: '0', transformOrigin: 'right bottom', offset: 1}))
      ])
    ]),
    trigger('rotateOut', [
      transition('* => *', [
        animate(450, style({transform: 'none', opacity: '1', transformOrigin: 'center', offset: 0})), 
        animate(450, style({transform: 'rotate3d(0, 0, 1, 200deg)', opacity: '0', transformOrigin: 'center', offset: 1}))
      ])
    ]),
  ]
})
export class RotateAnimationComponent {

  @Input() text: String;
  @Input() image: String;
  
  whichToShow: String = "";

  @Input() showRotateIn: boolean = false;
  @Input() showRotateInDownLeft: boolean = false;
  @Input() showRotateInDownRight: boolean = false;
  @Input() showRotateInUpLeft: boolean = false;
  @Input() showRotateInUpRight: boolean = false;
  @Input() showRotateOutDownLeft: boolean = false;
  @Input() showRotateOutDownRight: boolean = false;
  @Input() showRotateOutUpLeft: boolean = false;
  @Input() showRotateOutUpRight: boolean = false;
  @Input() showRotateOut: boolean = false;

  ngOnInit() {
    if(this.showRotateIn) {
      this.whichToShow = "showRotateIn";
    }
    if(this.showRotateInDownLeft) {
      this.whichToShow = "showRotateInDownLeft";
    }
    if(this.showRotateInDownRight) {
      this.whichToShow = "showRotateInDownRight";
    }
    if(this.showRotateInUpLeft) {
      this.whichToShow = "showRotateInUpLeft";
    }
    if(this.showRotateInUpRight) {
      this.whichToShow = "showRotateInUpRight";
    }
    if(this.showRotateOutDownLeft) {
      this.whichToShow = "showRotateOutDownLeft";
    }
    if(this.showRotateOutDownRight) {
      this.whichToShow = "showRotateOutDownRight";
    }
    if(this.showRotateOutUpRight) {
      this.whichToShow = "showRotateOutUpRight";
    }
    if(this.showRotateOut) {
      this.whichToShow = "showRotateOut";
    }
  }

  changeShow() {
    switch(this.whichToShow) {
      case "showRotateIn":
        this.showRotateIn = !this.showRotateIn;
        break;
      case "showRotateInDownLeft":
        this.showRotateInDownLeft = !this.showRotateInDownLeft;
        break;
      case "showRotateInDownRight":
        this.showRotateInDownRight = !this.showRotateInDownRight;
        break;
      case "showRotateInUpLeft":
        this.showRotateInUpLeft = !this.showRotateInUpLeft;
        break;
      case "showRotateInUpRight":
        this.showRotateInUpRight = !this.showRotateInUpRight;
        break;
      case "showRotateOutDownLeft":
        this.showRotateOutDownLeft = !this.showRotateOutDownLeft;
        break;
      case "showRotateOutDownRight":
        this.showRotateOutDownRight = !this.showRotateOutDownRight;
        break;
      case "showRotateOutUpRight":
        this.showRotateOutUpRight = !this.showRotateOutUpRight;
        break;
      case "showRotateOut":
        this.showRotateOut = !this.showRotateOut;
        break;
    }
  }

}
