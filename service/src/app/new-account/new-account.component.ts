import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService],
})
export class NewAccountComponent implements OnInit {
  constructor(
    private logService: LoggingService,
    private accountService: AccountsService
  ) {
    this.accountService.statusUpdated.subscribe((status: string) =>
      alert('New Status Updated ! ' + status)
    );
  }

  ngOnInit(): void {}
  accountAdded(accountName: string, accountStatus: string) {
    this.accountService.accountAdded(accountName, accountStatus);
    // this.logService.logStatusChanged(accountStatus);
    //console.log('status Created ' + accountStatus);
  }
}
