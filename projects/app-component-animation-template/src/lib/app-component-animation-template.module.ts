import { NgModule } from '@angular/core';
import { AppComponentAnimationTemplateComponent } from './app-component-animation-template.component';
import { BounceAnimationComponent } from './bounce-animation/bounce-animation.component';
import { FlipAnimationComponent } from './flip-animation/flip-animation.component';
import { FadeAnimationComponent } from './fade-animation/fade-animation.component';
import { RollAnimationComponent } from './roll-animation/roll-animation.component';
import { ZoomAnimationComponent } from './zoom-animation/zoom-animation.component';
import { RotateAnimationComponent } from './rotate-animation/rotate-animation.component';
import { OthersAnimationComponent } from './others-animation/others-animation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponentAnimationTemplateComponent,
    BounceAnimationComponent,
    FlipAnimationComponent,
    FadeAnimationComponent,
    RollAnimationComponent,
    ZoomAnimationComponent,
    RotateAnimationComponent,
    OthersAnimationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    AppComponentAnimationTemplateComponent,
    BounceAnimationComponent,
    FlipAnimationComponent,
    FadeAnimationComponent,
    RollAnimationComponent,
    ZoomAnimationComponent,
    RotateAnimationComponent,
    OthersAnimationComponent
  ]
})
export class AppComponentAnimationTemplateModule { }
