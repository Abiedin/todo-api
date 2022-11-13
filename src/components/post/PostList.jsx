import './post.scss';
import { useSelector } from 'react-redux';
import PostItem from './PostItem';
import TextField from './TextField';
import Buttons from '../../modal/buttons/Buttons';
import { allRemove, getAll } from '../../slices/postSlice';

export const PostList = () => {
  const arrpo = useSelector((state) => state.postStore.postsArr);

  return (
    <div className="post-conteiner">
      <h1 className="post-title">PostList</h1>
      <TextField />
      <Buttons getAll={getAll} allRemove={allRemove} />

      <div className="post-Items">
        {arrpo?.map((post) => <PostItem key={post.id} post={post} />).reverse()}
      </div>
    </div>
  );
};
