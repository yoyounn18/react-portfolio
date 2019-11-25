import React from 'react';
import './Blog.css';

const Blog = () => {
    const btnClick = () => {
        window.open("https://blex.kr/@yoyounn18");
    }
     
    return (<button className="blog-btn" onClick={btnClick}>
    Blog
</button>
);
}

export default Blog;