import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.css"]
})
export class ServerComponent {
  name: string = "Govardhan";
  email: string = "goabala88@gmail.com";
  phoneNumber: number = 6382276063;
  age: number = 22;
  allowButton: boolean = false;
  serverName: string = "";
  creationServer: string = "No Server Was Created !";
  constructor() {
    setTimeout(() => {
      this.allowButton = true;
    }, 3000);
  }
  createServerMethod() {
    this.creationServer = `Server Was Created ! name of server" ${this.serverName} `;
  }
  serverNameMethod(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
