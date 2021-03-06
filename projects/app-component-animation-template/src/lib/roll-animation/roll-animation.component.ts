import { Component, Input } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-roll-animation',
  templateUrl: './roll-animation.component.html',
  styleUrls: ['./roll-animation.component.css'],
  animations: [
    trigger('rollIn', [
      transition('* => *', [
        animate(450, style({transform: 'translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)', opacity: '0', offset: 0})), 
        animate(450, style({transform: 'none', opacity: '1', offset: 1}))
      ])
    ]),
    trigger('rollOut', [
      transition('* => *', [
        animate(450, style({transform: 'none', opacity: '1', offset: 0})), 
        animate(450, style({transform: 'translate3d(100%, 0, 0) rotate3d(0, 0, 1, -120deg)', opacity: '0', offset: 1}))
      ])
    ]),
  ]
})
export class RollAnimationComponent {

  @Input() text: String;
  @Input() image: String;
  
  whichToShow: String = "";

  @Input() showRollIn: boolean = false;
  @Input() showRollOut: boolean = false;

  ngOnInit() {
    if(this.showRollIn) {
      this.whichToShow = "showRollIn";
    }
    if(this.showRollOut) {
      this.whichToShow = "showRollOut";
    }
  }

  changeShow() {
    switch(this.whichToShow) {
      case "showRollIn":
        this.showRollIn = !this.showRollIn;
        break;
      case "showRollOut":
        this.showRollOut = !this.showRollOut;
        break;
    }
  }
  
}
