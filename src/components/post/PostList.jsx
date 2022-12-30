import './post.scss';
import { useSelector } from 'react-redux';
import PostItem from './PostItem';
import TextField from './TextField';
import Buttons from '../../modal/buttons/Buttons';
import { allRemove, getAll } from '../../slices/postSlice';
import React, { useEffect, useState } from 'react';
import { LinearProgress, Pagination } from '@mui/material';

export const PostList = () => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const arrpo = useSelector((state) => state.postStore.postsArr);

  useEffect(() => {
        arrpo ? setLoading(false) : setLoading(true)
  }, [arrpo]);

  return (
    <div className="post-conteiner">
      <h1 className="post-title">PostList</h1>
      <TextField />
      <Buttons getAll={getAll} removeAll={allRemove} setLoading={setLoading}/>

      <div className="post-Items">
        {loading ? (
          <LinearProgress style={{ backgroundColor: 'gold' }} />
        ) : (
          arrpo
            .slice((page - 1) * 10, (page - 1) * 10 + 10)
            .map((post) => <PostItem key={post.id} post={post} />)
        )}
      </div>
      <div className={arrpo.length / 10 >= 1 ? 'coins-pagination' : 'coins-pagination-non'}>
        <Pagination
            count={Math.ceil(arrpo?.length / 10)}
            onChange={(_, value) => {
              setPage(value);
              window.scroll(0, 120);
            }}
          >
            {' '}
        </Pagination>
      </div>
    </div>
  );
};
