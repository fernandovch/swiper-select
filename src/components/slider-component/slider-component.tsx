import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'slider-component',
  styleUrl: 'slider-component.css',
  shadow: true,
})



export class SliderComponent {
  @Prop() runProp:boolean 
  values: number[] = [10,20,30,40,50,60]
  render() {

    if(!this.runProp)
    return <div>NO</div>

    return (
      <Host>

          <div class="slider-component"> 
              <div class="slider-header">Current choice</div>
              {this.values.map(item=>{ return <div class="slide-item active">{item}</div> })}
          </div>          
      </Host>
    );
  }

}
