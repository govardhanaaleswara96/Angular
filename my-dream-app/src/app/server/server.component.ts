import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styles: [
    `
      .online {
        color: white;
      }
    `
  ]
})
export class ServerComponent implements OnInit {
  serverId: number = 10;
  serverStatus: string = "Offline";
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? "Online" : "Offline";
  }
  getStatus() {
    return this.serverStatus;
  }
  getColor() {
    return this.serverStatus === "Online" ? "green" : "red";
  }

  ngOnInit(): void {}
}
