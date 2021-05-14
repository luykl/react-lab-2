import { useState } from 'react';
import Post from '../model/Post';
import PostInList from './PostInList';
import PostForm from './PostForm';
import './SocialPosts.css';


function SocialPosts() {
  const [ posts, setPosts] = useState<Post[]>([]);
  

  function handleDeletePost(index: number): void {
    // immutable delete
    setPosts(prevPosts => [
      ...prevPosts.slice(0, index),
      ...prevPosts.slice(index + 1)
    ]);
  }

  function handleAddPost(post: Post): void {
    // immutable add
    setPosts(prevPosts => [ ...prevPosts, post ]);
  }

  return (
    <div className="SocialPosts">
        
        <button className="newThought">New Thought</button>
        <section>
            {posts.map((post, i) => <PostInList key={i} post={post} onDelete={() => handleDeletePost(i)} />)}
        </section>
        <section className="formSection">
        <PostForm onSubmit={handleAddPost} />
        </section>
    </div>
      )
}


export default SocialPosts;