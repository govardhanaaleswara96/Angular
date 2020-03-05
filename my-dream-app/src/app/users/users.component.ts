import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent {
  userid: number = 1;
  username: string = "Govardhan";
  serverCreationStatus: string = `No Server Created !`;
  serverName = "Node Js";
  serverCreated = false;
  summary() {
    return this.userid + " and " + this.username;
  }
  allowNewServer: boolean = false;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }
  ngOnInit() {}
  createServer() {
    this.serverCreated = true;
    this.serverCreationStatus = `Server Created  ${this.serverName}`;
  }
  onUpdateServer(event: Event) {
    console.log((<HTMLInputElement>event.target).value);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
