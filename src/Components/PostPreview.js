import React from 'react'

export default function PostPreview(props) {
  return (
    <>
    <div className="post-preview">
      <a href="post.html">
        <h2 className="post-title">
            {props.title}
            </h2>
            <h3 className='post-subtitle'>
                {props.body}
            </h3>
            </a>
            <p className='post-meta'>
                Posted by
                <>Start Bosststrap</>
                on sep 25, 2019
            </p>
            <button className='btn btn-danger'type='button' onClick={props.delete}>Delete</button> 
    </div>
    </>
  )
}
