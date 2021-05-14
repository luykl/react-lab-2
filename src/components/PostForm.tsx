import { useState, FormEvent } from 'react';
import Post from '../model/Post';
import './PostForm.css'
import CloseIcon from '@material-ui/icons/Close';

interface Props {
    onSubmit: (shape: Post) => void;
  }


function PostForm ({ onSubmit }:Props) {
    const [ title, setTitle ] = useState("");
    const [ thought, setThought ] = useState("");
    
    function handleSubmit(e:FormEvent) {
        e.preventDefault();
        // on form submit get the data from the state
        // build our model object from the state
        const post: Post = {
          title: title,
          thought: thought,
         
        };
        // send the model object to the parent via the callback prop
        onSubmit(post);

        // reset form
        setTitle("");
        setThought("");
    }

    return (
    <form className="PostForm" onSubmit={handleSubmit}>
      <CloseIcon />
      <p>
        <label>Title
          <input type="text" value={title}
                 onChange={e => setTitle(e.target.value)} />
        </label>
      </p>
      <p>
        <label>Thought
          <input type="text" value={thought}
                 onChange={e => setThought(e.target.value)} />
        </label>
      </p>
      
      <p>
        <button type="submit">Submit</button>
      </p>

      
    </form>
  )
}
    


export default PostForm;