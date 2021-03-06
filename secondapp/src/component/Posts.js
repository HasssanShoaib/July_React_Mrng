import React from 'react';
import {Link} from 'react-router-dom';

const Post = () => {
    return (
        <div className="panel panel-success">
            <div className="panel-heading">
                <h2>Post</h2>
            </div>
            <div className="panel-body">
                <p>
                What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?
                </p>
                <h3>JavaScript</h3>
                <Link to="/post/JavaScript">Details</Link>
                <h3>Bootstrap</h3>
                <Link to="/post/BootStrap">Details</Link>
                <h3>React</h3>
                <Link to="/post/React">Details</Link>
                <h3>Node</h3>
                <Link to="/post/Node">Details</Link>
            </div>
        </div>
    )
}

export default Post;