import React from 'react'
import Title from './Title';
const About = () => {
  return (
    <section className="section" id="about">
      <Title title='about' subTitle='us' />
      

      <div className="section-center about-center">
        <div className="about-img">
          <img
            src="https://www.nichepursuits.com/wp-content/uploads/2023/04/bakery-name-ideas-1200x900.png"
            className="about-photo"
            alt="awesome bake"
          />
        </div>
        <article className="about-info">
          <h3>explore the bakry items</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <a href="#" className="btn">read more</a>
        </article>
      </div>
    </section>

  )
}

export default About
