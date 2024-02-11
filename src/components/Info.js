import React from 'react'
import image from '../img.jpg'

export default function Info() {
  return (
    <article className="card">
      <img src={image} alt="" className="img" />
      <h3>John Doe</h3>
      <h4>JavaScript Developer</h4>
      <div className='links'>
        <a class="btn" href="https://sentry.io/answers/">
          Email
        </a>
        <a class="btn" href="https://sentry.io/answers/">
          LinkedIn
        </a>
      </div>
    </article>
  );
}
