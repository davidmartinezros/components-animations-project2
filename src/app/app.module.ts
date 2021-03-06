import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BounceAnimationComponent } from './bounce-animation/bounce-animation.component';
import { FlipAnimationComponent } from './flip-animation/flip-animation.component';
import { FadeAnimationComponent } from './fade-animation/fade-animation.component';
import { RollAnimationComponent } from './roll-animation/roll-animation.component';
import { ZoomAnimationComponent } from './zoom-animation/zoom-animation.component';
import { RotateAnimationComponent } from './rotate-animation/rotate-animation.component';
import { OthersAnimationComponent } from './others-animation/others-animation.component';

@NgModule({
  declarations: [
    AppComponent,
    BounceAnimationComponent,
    FlipAnimationComponent,
    FadeAnimationComponent,
    RollAnimationComponent,
    ZoomAnimationComponent,
    RotateAnimationComponent,
    OthersAnimationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
