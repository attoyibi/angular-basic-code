import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  name:string = 'data from server component';
  serverInput:string=''
  disableButton:boolean = true;
  currentServerNames = [
    {
    name:'server1',
    status: 'online'
  },{
    name:'server2',
    status: 'offline'
  }
];

  constructor() {
  }
  onServerComponentMethod(){
    return this.name = "data from server component method";
  }
  // ***** normal/without typescript *****
  // onInputDataServer(event:any){
  //   return this.serverInput = event.target.value;
  // }
  // ***** with typescript *****
  onInputDataServer(event:Event){
    return this.serverInput = (<HTMLInputElement>event.target).value;
  }
  // method untuk form
  onChangeServerName(e){
    console.log(e.target.value);
    this.name = e.target.value;
  }
  //method untuk button ketika di klik
  onAddServer(){
    this.currentServerNames.push({name: this.name, status : Math.random() > 0.5 ? "online" : "offline"});
  }
  ngOnInit(): void {
  }

}
