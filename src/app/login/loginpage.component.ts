import { Component, OnInit } from '@angular/core';
import { GENERAL_IMPLEMENTATION } from '../shared/input-text/schema/general-implementation.type';
import { types, InputActionModel } from '../shared/input-text/actions.model';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {
  configuration = GENERAL_IMPLEMENTATION;

  constructor() { }

  ngOnInit(): void {
  }

  componentActionsDispatcher(action: InputActionModel) {
    switch (action.type) {
      case types.USER_ONFOCUS_OUT: {
        window.alert(types.USER_ONFOCUS_OUT + " " + action.payload);
        break;
      }
    }
  }
}
