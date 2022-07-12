import { Component, Host, h, Listen, State } from '@stencil/core';


@Component({
  tag: 'swiper-component',
  styleUrl: 'swiper-component.css',
  shadow: true,
})
export class SwiperComponent {

  @State() showEdit : boolean = true

  @Listen('editTrigger')
  editTriggerHandler(data) {
    console.log('Received the custom todoCompleted event: ', data);
    this.showEdit=false
  }


  render() {
    return (
      <Host>
        {this.showEdit? <info-component key="info"></info-component> :  <slider-component key="slider" currentChoice={50} ></slider-component>}
      </Host>
    );
  }

}
