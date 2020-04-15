import { Injectable, EventEmitter } from '@angular/core';
import { LoggingService } from './logging.service';
@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  constructor(private logService: LoggingService) {}

  accounts = [
    {
      name: 'A master Account',
      status: 'active',
    },
    {
      name: 'A master Account 1',
      status: 'inactive',
    },
    {
      name: 'A master Account 2',
      status: 'unknown',
    },
  ];
  statusUpdated = new EventEmitter<string>();
  accountAdded(name: string, status: string) {
    this.accounts.push({ name: name, status: status });
    this.logService.logStatusChanged(status);
  }
  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.logService.logStatusChanged(status);
  }
}
