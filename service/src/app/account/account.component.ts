import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService],
})
export class AccountComponent implements OnInit {
  @Input() account: { name: string; status: string };
  @Input() id: number;

  constructor(
    private logService: LoggingService,
    private accountService: AccountsService
  ) {}

  ngOnInit(): void {
    // console.log(this.id);
  }
  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
    // this.logService.logStatusChanged(status);
    // console.log('status Created ' + status);
    this.accountService.statusUpdated.emit(status);
  }
}
