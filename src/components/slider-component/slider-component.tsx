import { Component, Host, h, Prop, State, Event,  Element, Listen } from '@stencil/core';
import { EventEmitter } from 'puppeteer';

@Component({
  tag: 'slider-component',
  styleUrl: 'slider-component.css',
  shadow: true,
})

export class SliderComponent {

  @Prop() currentChoice:any
  @Prop() footerText:string

  values: number[] = [36,40,45,50,55,60,70,75,80]
  
  @State() currentItem: number = 1
  
  @Event() keyDownEvent : EventEmitter

  @Element() el: HTMLElement;
  
  @Listen("keydown",{ target: 'window' })
  handleKeys(ev: KeyboardEvent){
     
    if (['ArrowDown','ArrowLeft'].includes(ev.key)){
      this.currentItem = this.currentItem -1 <= 0 ? this.values.length : this.currentItem-1;
    }
    if (['ArrowUp','ArrowRight'].includes(ev.key)){
      this.currentItem = this.currentItem +1 >this.values.length ? 1 : this.currentItem+1;
    }
  }


  render() {
    return (
      <Host>
         <div class="slider-container">
          <div class={this.currentChoice == this.values[this.currentItem-1] ? "slider-header" : "notShow"}>
            <span >Current choice</span>
          </div>
          <div class="slider-component"> 
          
              {this.values.map((item, index)=>{
                let printDiv = index >= this.currentItem - 2 
                if(printDiv)  
                  return <div class={this.currentItem == index+1 ?'slide-item active': "slide-item" } 
                    id={index.toString()} >
                    <i id={index.toString()}> {item}</i>  
                  </div>
                })
              }
          </div>     
          <div class="slider-header"><span>{this.footerText}</span></div>
          </div>
      </Host>
    );
  }

}
