import React, { useEffect, useState } from 'react'
import {Row, Col, Button, Table, Card} from 'react-bootstrap'
import { app } from '../../firebaseInit'
import {getFirestore, collection, query, orderBy, onSnapshot} from 'firebase/firestore'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const PostsPage = ({history}) => {
  const db = getFirestore(app);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const onClickWrite = () => {
    // login 했을 때만 write page로 이동
        if (sessionStorage.getItem('email')) {
            history.push("/posts/write");
        } else {
            // login 안했을 때 login page로 이동 후 target 에 넣어준 페이지로 이동
            sessionStorage.setItem('target', '/posts/write');
            history.push('/login');
        }
        
  }

  const getPosts = () => {
      setLoading(true);
      const q = query(collection(db, 'posts'), orderBy('date', 'desc'));
      onSnapshot(q, snapshot=>{
            let rows = [];
            snapshot.forEach(row=>{
                rows.push({id:row.id, ...row.data()});
            });

            //console.log(rows);
            setPosts(rows);
            setLoading(false);
      });
      
  }

  useEffect(()=> {
    getPosts();
  }, []);

  if (loading) return <h1 className = 'my-5 text-center'>로딩중</h1>

  return (
    <Row className = 'my-5'>
        <Col>
            <h1 className='text-center mb-5'>게시글</h1>
            <div className = 'text-end'>
                <Button onClick={onClickWrite}>글쓰기</Button>
            </div>

            {posts.map(post=>
                <Card key={post.id} className = 'my-3'>
                    <Card.Header>
                        <Link to = {`/posts/${post.id}`}>
                            <h5>{post.title}</h5>
                        </Link>
                    </Card.Header>
                    <Card.Body>
                        {post.body}
                    </Card.Body>
                    <Card.Footer>
                        <span>Posted on {post.date} </span>
                        <span className='ms-2'>by {post.email}</span>
                    </Card.Footer>
                </Card>    
            )}
        </Col>
    </Row>
  )
}

export default PostsPage