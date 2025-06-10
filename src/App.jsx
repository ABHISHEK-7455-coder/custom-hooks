import UsersList from './UsersLists';
import PostsList from './PostsLists';
import CommentsList from './CommentsLIst';
import UseInsertionEffectExample from './useInsertionEffect';
import ParentComponent from './useImperativeHandling';


const App = () => {
  return (
    <div>
      
      <ParentComponent />
      <UseInsertionEffectExample />
      <UsersList />
      <PostsList />
      <CommentsList />
 
    </div>
  );
};

export default App;
