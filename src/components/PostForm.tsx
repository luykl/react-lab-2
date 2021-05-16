import { useState, FormEvent } from 'react';
import Post from '../model/Post';
import './PostForm.css'
import CloseIcon from '@material-ui/icons/Close';



interface Props {
    onSubmit: (post: Post) => void;
    
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
        <label>Title <br/>
          <input type="text" value={title}
                 onChange={e => setTitle(e.target.value)} />
        </label>
      </p>
      <p>
        <label>Thought <br/>
          <textarea  className="thoughtInput" value={thought}
                 onChange={e => setThought(e.target.value)} />
        </label>
      </p>
      
      <p>
        <button className="submitButton" type="submit">Submit</button>
      </p>

      
    </form>
  )
}
    


export default PostForm;