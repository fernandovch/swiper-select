import { Component,h, State, Event, Prop  } from '@stencil/core';
import { EventEmitter } from 'puppeteer';


@Component({
  tag: 'info-component',
  styleUrl: 'info-component.css',
  shadow: true,
})

export class InfoComponent {

  @Prop() amountValue : string 
  @Prop() footerText : string 

  @Event() editTrigger : EventEmitter

  editEvent = ()=>
  {
    this.editTrigger.emit("true")
  }

  render() {
    return (
      <host>
          <div class="info-component">
            <div class="info-amount">
              <span>{this.amountValue || 0}</span>
            </div>
            <div class="info-footer">
                <div class="text">{this.footerText}</div>
                <div class="btn"><a onClick={()=>this.editEvent()}>Edit</a></div>
            </div>
          </div>
      </host>
    );
  }

}
