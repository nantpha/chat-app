import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Message {
  text: string;
  sender: 'AI' | 'User';
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ChatComponent {
  aiRobotImage: string = 'assets/ai-robot.png'; // Use a simpler test image
  userImage: string = 'assets/user.png'; // Use a simpler test image
  messages: Message[] = [
    { text: 'Hello! How can I assist you today?', sender: 'AI' },
    { text: 'Hi! I need some help with my project.', sender: 'User' }
  ];
  newMessage: string = '';

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({ text: this.newMessage, sender: 'User' });
      this.newMessage = '';
      this.autoReply();
    }
  }

  autoReply() {
    setTimeout(() => {
      this.messages.push({ text: 'This is an automated reply from the AI.', sender: 'AI' });
    }, 1000);
  }
}
