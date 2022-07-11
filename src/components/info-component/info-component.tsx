import { Component,h, State, Event  } from '@stencil/core';
import { EventEmitter } from 'puppeteer';


@Component({
  tag: 'info-component',
  styleUrl: 'info-component.css',
  shadow: true,
})



export class InfoComponent {

  amount:number = 55

  @State() count  = 0

  @Event() editTrigger : EventEmitter

  editEvent = ()=>
  {
    this.count ++     
    this.editTrigger.emit("true")
  }

  render() {
    return (
      <host>
          <div class="info-component">
            <div class="info-amount">
              <span>{this.amount}</span>
            </div>
            <div class="info-footer">
                <div class="text">$ / Month {this.count}</div>
                <div class="btn"><a onClick={()=>this.editEvent()}>Edit</a></div>
            </div>
          </div>
      </host>
    );
  }

}
