import { Injectable } from '@angular/core';
import { Message } from '../models/message';

const messagesPromise: Promise<Message[]> = Promise.resolve([
  {
    id: 1,
    sender: 'Chris',
    subject: 'Hello, good day.',
    message: 'Nihil molestias quibusdam autem consequatur eos et recusandae. Aut quo ut maiores accusamus omnis necessitatibus. Autem incidunt velit ut enim. Pariatur corporis veniam aut vel ea excepturi est.',
    date: '4/16/2017 1:17pm',
    read: true
  },
  {
    id: 2,
    sender: 'John',
    subject: 'Please read.',
    message: 'Et quas omnis ea iste. Aut vel rem et nemo dolorum laudantium. Id eveniet et omnis. Ea possimus temporibus omnis impedit doloremque. Soluta soluta et in sint quia fuga sed. Quis sint sit quam consequuntur doloremque repudiandae.',
    date: '4/16/2017 1:37pm',
    read: true
  },
  {
    id: 3,
    sender: 'Tom',
    subject: 'This is my subject.',
    message: 'Nisi voluptas beatae quidem modi voluptates repellat. Inventore voluptatem non suscipit velit. Repellendus sunt fuga et voluptatem et. Et error qui est et pariatur pariatur aliquid. In sunt et vitae id voluptatum nihil at quia.',
    date: '4/16/2017 1:43pm',
    read: false
  },
  {
    id: 4,
    sender: 'Stella',
    subject: 'I have to tell you things.',
    message: 'Nisi voluptas beatae quidem modi voluptates repellat. Inventore voluptatem non suscipit velit. Repellendus sunt fuga et voluptatem et. Et error qui est et pariatur pariatur aliquid. In sunt et vitae id voluptatum nihil at quia.',
    date: '4/16/2017 1:56pm',
    read: false
  }
]);

@Injectable()
export class MessageService {

  // get all users
  getMessages() {
    return messagesPromise;
  }
}
