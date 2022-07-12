import { Component, Host, h, Prop, State, Event,  Element, Listen } from '@stencil/core';
import { EventEmitter } from 'puppeteer';

@Component({
  tag: 'slider-component',
  styleUrl: 'slider-component.css',
  shadow: true,
})

export class SliderComponent {
  @Prop() currentChoice:number

  values: number[] = [10,20,30,40,50,60]
  
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
                  return <div class={this.currentItem == index+1 ?'slide-item active': "slide-item" } >{item}</div>
                })
              }
          </div>     
          <div class="slider-header"><span>$ / Month</span></div>
          </div>
      </Host>
    );
  }

}
