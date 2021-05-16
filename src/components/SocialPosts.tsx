import { useState } from 'react';
import Post from '../model/Post';
import PostInList from './PostInList';
import PostForm from './PostForm';
import './SocialPosts.css';


function SocialPosts() {
  const [ posts, setPosts] = useState<Post[]>([{title:"Lorem Ipsum", thought:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel leo odio. Nunc at vehicula urna. "}]);
  const [ form, setForm ] = useState(false);
  

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
    setForm(false);
  }

  

  

  return (
    <div className="SocialPosts">
        
        <button className="newThought" onClick={() => setForm(true)}>New Thought</button>
        <section className="postSection">
            {posts.map((post, i) => <PostInList key={i} post={post} onDelete={() => handleDeletePost(i)} />)}
        </section>
        <section className="formSection">
        {form && <PostForm onSubmit={handleAddPost} />}
        </section>
    </div>
      )
}


export default SocialPosts;