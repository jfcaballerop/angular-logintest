import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InputActionModel, types } from './actions.model';
import { ConfigurationModel } from './configuration.model';
import { GENERAL_IMPLEMENTATION } from './schema/general-implementation.type';
import { GENERAL_IMPLEMENTATION_PASS } from './schema/variarion-passtype';
import { GENERAL_IMPLEMENTATION_USER } from './schema/variarion-user.type';

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
    console.log("Focus out ", this.config.label, this.config.type);
    let em: InputActionModel = {};
    switch (this.config.type) {
      case GENERAL_IMPLEMENTATION_USER.type:
        em = { ...em, type: types.USER_ONFOCUS_OUT };
        break;
      case GENERAL_IMPLEMENTATION_PASS.type:
        em = { ...em, type: types.PASS_ONFOCUS_OUT };
        break;

      default:
        em = { ...em, type: types.GENERIC };
        break;
    }
    em = { ...em, payload: event.target.value }

    this.actions.emit(em);
  }

}
