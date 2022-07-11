import { Component, Host, h, Listen, State } from '@stencil/core';


@Component({
  tag: 'swiper-component',
  styleUrl: 'swiper-component.css',
  shadow: true,
})
export class SwiperComponent {

  @State() showEdit : boolean = true
  @State() runSlider : boolean = false

  @Listen('editTrigger')
  editTriggerHandler(data) {
    console.log('Received the custom todoCompleted event: ', data);
    this.showEdit=false;
    this.runSlider=true;
  }

  render() {
    return (
      <Host>
        {this.showEdit? <info-component key="info"></info-component> :  <slider-component key="slider" runProp={this.runSlider} ></slider-component>}
      </Host>
    );
  }

}
