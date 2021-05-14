import Post from '../model/Post';
import './PostInList.css';
import DeleteIcon from '@material-ui/icons/Delete';


interface Props {
  post: Post;
  onDelete?: () => void;
}

function PostInList({post, onDelete}: Props) {
  const title: string = post.title;
  const thought:string = post.thought;
 
  

  return (
    <div className="PostInList">
        <p>{title}</p>
        <p>{thought}</p>
        <DeleteIcon onClick={onDelete}/>
    </div>
  )
}

export default PostInList;