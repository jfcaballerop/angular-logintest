import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InputActionModel, types } from './actions.model';
import { ConfigurationModel } from './configuration.model';
import { GENERAL_IMPLEMENTATION } from './schema/general-implementation.type';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit {
  @Output() actions: EventEmitter<InputActionModel> = new EventEmitter();
  @Input() config: ConfigurationModel;

  constructor() {
    this.config = GENERAL_IMPLEMENTATION;
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  public onFocusOutEvent(event: any) {
    console.log("Focus out ", event.target.value);

    this.actions.emit({ type: types.USER_ONFOCUS_OUT, payload: event.target.value });
  }

}
