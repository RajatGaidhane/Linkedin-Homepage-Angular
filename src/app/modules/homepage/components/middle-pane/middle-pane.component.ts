import { Component } from '@angular/core';

@Component({
  selector: 'app-middle-pane',
  templateUrl: './middle-pane.component.html',
  styleUrls: ['./middle-pane.component.scss']
})
export class MiddlePaneComponent {

  posts = [
    {
      user: {
        name: 'Rajat Gaidhane',
        bio: 'Software Engineer @TIBCO',
        profilePic: '/assets/images/luffy.png'
      },
      post: {
        duration: '1d',
        description: '//10 VISUALS THAT WILL CHANGE THE WAY YOU THINK',
        image: '/assets/images/post1.png',
        comments: 10,
        repost: 16,
        likes: 200
      }
    },
    {
      user: {
        name: 'Jack Sparrow',
        bio: 'Senior Pirate @Carribean',
        profilePic: '/assets/images/jack.png'
      },
      post: {
        duration: '1d',
        description: 'It’s funny that pirates were always going around searching for treasure, and they never realized that the real treasure was the fond memories they were creating.',
        image: '/assets/images/post2.png',
        comments: 1000,
        repost: 500,
        likes: 4000
      }
    }
  ];
  hoveredAction = '';
  postModal = false;

  onLike(index: any): void{
    this.posts[index].post.likes += 1;
  }
  onPostModalEvent(event: any): void{
    this.postModal = false;
    if (event){
      this.posts.push(event);
    }
  }
}
