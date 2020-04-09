## DESCRIPTION
The component is an easy representation of an animation of a component.

It could be useful for intros or presentations with animations of texts or whatever you want.

## load animations into components in an easy way with app-component-animation-template
This project was generated with Angular CLI and is designed as a basic template combined with Angular.

You can find me at https://davidmartinezros.com or contact in the email davidnezan@gmail.com

## youtube video
https://www.youtube.com/watch?v=hI7a4HskMIw

## demo using the component
https://davidmartinezros.com/Angular9/components-animations-project/

## how to use this component

You can use differents animation between:

```
<app-bounce-animation></app-bounce-animation>
<app-fade-animation></app-fade-animation>
<app-flip-animation></app-flip-animation>
<app-others-animation></app-others-animation>
<app-roll-animation></app-roll-animation>
<app-rotate-animation></app-rotate-animation>
<app-zoom-animation></app-zoom-animation>
```

You have to import the animation module into your app.module.ts file like this:

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppComponentAnimationTemplateModule } from 'app-component-animation-template';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppComponentAnimationTemplateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

And then, you can use the animations into the html of the component like this:

```
<app-bounce-animation showBounceIn="true" text="https://davidmartinezros.com"></app-bounce-animation>
or
<app-bounce-animation showBounceOutUp="true" text="https://davidmartinezros.com"></app-bounce-animation>
or
<app-fade-animation showFadeIn="true" image="assets/image.jpg"></app-fade-animation>
or
<app-fade-animation showFadeInRight="true" image="assets/image.jpg"></app-fade-animation>
or
<app-flip-animation text="davidnezan@gmail.com" image="assets/image.jpg"></app-flip-animation>
```

## Demo Example
You can find the demo here: https://davidmartinezros.com/portfolio-full-stack-developer-software-engineer/project/en/component-html-text-animations-angular