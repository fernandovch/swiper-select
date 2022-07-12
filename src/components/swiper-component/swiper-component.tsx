import { Component, Host, h, Listen, State, Element} from '@stencil/core';


@Component({
  tag: 'swiper-component',
  styleUrl: 'swiper-component.css',
  shadow: true,
})
export class SwiperComponent {

  // use for hiding and showing the components
  @State() showEdit : boolean = true

  // element helps bind the root component of the html, use for getting the props values set on the html
  @Element() el: HTMLElement;

  // trigger when click on the Edit link button
  @Listen('editTrigger')
  editTriggerHandler() {
    this.showEdit=false
  }

  render() {
    this.el.getAttribute("amountValue")
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
