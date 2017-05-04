import { Component, OnInit } from '@angular/core';
import { Message } from '../shared/models/message';
import { MessageService } from '../shared/services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages: Message[];
  constructor(private service: MessageService) {}
  messageModalShow = false;
  modalMessage = {};
  ngOnInit() {
      this.service.getMessages().then(messages => this.messages = messages);
  }
  messageClick(message) {
      this.messageModalShow = true;
      this.modalMessage = message;
      message.read = false;
  }
  closeModalClick() {
      this.messageModalShow = false;
  }
}
