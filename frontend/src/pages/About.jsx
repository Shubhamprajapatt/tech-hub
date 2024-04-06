import React from 'react'
import "../style/About.css";
export default function About() {
  return (
    < div style={{marginTop:"100px"}} >

    <div classNameName='content'>
    <div className="heading">
	<h1>About Us</h1>
	<p>Hello Welcome to our Digital Library</p>
</div>
<div className="container">
	<section className="about">
		<div className="about-image">
			<img src="img.jpg"/>
		</div>
		<div className="about-content text-white">
			<h2>Digital Library</h2>
			<p className="text-white">A digital library (also called an online library, an internet library, a digital repository, a library without walls, or a digital collection) is an online database of digital objects that can include text, still images, audio, video, digital documents, or other digital media formats or a library accessible through the internet.</p>
			<a href="" className="read-more">Read more</a>
		</div>
	</section>
</div>
    </div>
    </div>
  )
}
