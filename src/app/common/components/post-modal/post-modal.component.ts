import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post-modal',
  templateUrl: './post-modal.component.html',
  styleUrls: ['./post-modal.component.scss']
})
export class PostModalComponent {

  description = '';
  @Output() modalEvent = new EventEmitter();

  onCloseModal(): void{
    this.modalEvent.emit(false);
  }
  onKeyUp(description: any): void{
    this.description = description;
    console.log('this.description: ', description);
  }
  onPost(): void{
    if (this.description!==''){
      const data = {
        user: {
          name: 'Monkey D Luffy',
          bio: 'Software Engineer',
          profilePic: '/assets/images/luffy.png'
        },
        post: {
          duration: '0m',
          description: this.description,
          image: '/assets/images/post3.png',
          comments: 0,
          repost: 0,
          likes: 0
        }
      };
      this.modalEvent.emit(data);
    }
  }
}
