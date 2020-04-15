import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'component1';
  //serverElements = [];
  serverElements = [
    { type: 'Blueprint', name: 'Node Js', content: 'Server Side Language' },
  ];
  // newServerName = '';
  // newServerContent = '';
  createServer(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'Server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }
  createBlueprint(bluePrintData: {
    serverName: string;
    serverContent: string;
  }) {
    this.serverElements.push({
      type: 'Blueprint',
      name: bluePrintData.serverName,
      content: bluePrintData.serverContent,
    });
  }
  // createServer() {
  //   this.serverElements.push({
  //     type: 'Server',
  //     name: this.newServerName,
  //     content: this.newServerContent,
  //   });
  // }
  // createBlueprint() {
  //   this.serverElements.push({
  //     type: 'Blueprint',
  //     name: this.newServerName,
  //     content: this.newServerContent,
  //   });
  // }
  onChangeFirst() {
    this.serverElements[0].name = 'Changed';
  }
  OnDestroy() {
    this.serverElements.splice(0, 1);
  }
}
