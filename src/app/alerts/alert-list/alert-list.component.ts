import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlertModel } from '../models/alert.model';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-alert-list',
  templateUrl: './alert-list.component.html',
  styleUrls: ['./alert-list.component.scss']
})
export class AlertListComponent implements OnInit, OnDestroy {
  public alerts: AlertModel[] = [];
  public cols =  [
    {field: 'alertType', header: 'Alert Type'},
    {field: 'dateCreated', header: 'Date Created'},
    {field: 'properties', header: 'Properties'}
  ];


  constructor(private alertService: AlertService) { }

  ngOnInit(): void {
    this.getData();
  }

  private getData() {
    this.alertService.getAlerts().subscribe(resp => {
      this.alerts = resp;
    });
  }

  ngOnDestroy(): void {
  }
}
