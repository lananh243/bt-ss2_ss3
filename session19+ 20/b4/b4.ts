class User1 {
    id: number;
    posts: Post[];
    followers: User1[];
    
    constructor(id: number) {
      this.id = id;
      this.posts = [];
      this.followers = [];
    }
    
    createPost(content: string): Post {
      const post = new Post(this.id, content);
      this.posts.push(post);
      return post;
    }
    
    comment(post: Post, content: string): Comment1 {
      const comment = new Comment1(this.id, content);
      post.addComment(comment);
      return comment;
    }
    
    follow(user: User1): void {
      this.followers.push(user);
    }
    
    likePost(post: Post): void {
      post.addLike(this.id);
    }
    
    viewFeed(): Post[] {
      const feed: Post[] = [];
      this.followers.forEach((user) => {
        feed.push(...user.posts);
      });
      return feed;
    }
  }
  
  class Post {
    id: number;
    likes: number[];
    comments: Comment1[];
    userId: number;
    content: string;
    
    constructor(userId: number, content: string) {
      this.id = Date.now();
      this.likes = [];
      this.comments = [];
      this.userId = userId;
      this.content = content;
    }
    
    addLike(userId: number): void {
      if (!this.likes.includes(userId)) {
        this.likes.push(userId);
      }
    }
    
    addComment(comment: Comment1): void {
      this.comments.push(comment);
    }
  }
  
  class Comment1 {
    id: number;
    userId: number;
    content: string;
    replies: Comment1[];
    
    constructor(userId: number, content: string) {
      this.id = Date.now();
      this.userId = userId;
      this.content = content;
      this.replies = [];
    }
    
    addReply(reply: Comment1): void {
      this.replies.push(reply);
    }
  }
// Tạo các đối tượng User
const user1 = new User1(1);
const user2 = new User1(2);

const post1 = user1.createPost("Hi");
user2.likePost(post1);

const comment1 = user1.comment(post1, "Tuyệt vời");
console.log("Post:", post1.content);
console.log("Likes:", post1.likes);
console.log("Comments:");
post1.comments.forEach((comment) => {
  console.log("- Comment:", comment.content);
  console.log("  Replies:");
  comment.replies.forEach((reply) => {
    console.log("  - Reply:", reply.content);
  });
});