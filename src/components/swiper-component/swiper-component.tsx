import { Component, Host, h, Listen, State, Prop , Element} from '@stencil/core';


@Component({
  tag: 'swiper-component',
  styleUrl: 'swiper-component.css',
  shadow: true,
})
export class SwiperComponent {

  @State() showEdit : boolean = true

  @Element() el: HTMLElement;


  @Prop() amountValue : number 

  @Listen('editTrigger')
  editTriggerHandler(data) {
    console.log('Received the custom todoCompleted event: ', data);
    this.showEdit=false
  }


  render() {
    this.el.getAttribute("amountValue")
    console.log(this.amountValue)
    return (
      <Host>
        {this.showEdit ? 
        <info-component 
          amountValue={this.el.getAttribute("amountValue")}
          footerText={this.el.getAttribute("footerText")}  key="info"></info-component> :  
        <slider-component key="slider" 
          currentChoice={this.el.getAttribute("amountValue")} 
          footerText={this.el.getAttribute("footerText")} ></slider-component>}
      </Host>
    );
  }

}
