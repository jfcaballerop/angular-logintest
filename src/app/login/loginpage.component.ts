import { Component, OnInit } from '@angular/core';
import { GENERAL_IMPLEMENTATION } from '../shared/input-text/schema/general-implementation.type';
import { types, InputActionModel } from '../shared/input-text/actions.model';
import { GENERAL_IMPLEMENTATION_USER } from '../shared/input-text/schema/variarion-user.type';
import { GENERAL_IMPLEMENTATION_PASS } from '../shared/input-text/schema/variarion-passtype';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {
  configurationUser = GENERAL_IMPLEMENTATION_USER;
  configurationPass = GENERAL_IMPLEMENTATION_PASS;

  constructor() { }

  ngOnInit(): void {

  }

  componentActionsDispatcher(action: InputActionModel) {
    switch (action.type) {
      case types.USER_ONFOCUS_OUT:
        console.log("Payload " + action.payload);
        break;
      case types.PASS_ONFOCUS_OUT:
        console.log("Payload " + action.payload);
        break;

    }
  }
}
