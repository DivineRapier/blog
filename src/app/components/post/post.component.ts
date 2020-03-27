import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';

import { BasicelementsComponent } from '../basicelements/basicelements.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { TypographyComponent } from '../typography/typography.component';
import { NucleoiconsComponent } from '../nucleoicons/nucleoicons.component';
import { ComponentsComponent } from '../components.component';
import { NotificationComponent } from '../notification/notification.component';
import { NgbdModalComponent } from '../modal/modal.component';
import { NgbdModalContent } from '../modal/modal.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
