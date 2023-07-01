import logo from './loto.svg'
import './App.css';

import Testimonial from './components/Testimonial'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          A Testimonial Site
        </h1>
        <a
          className="App-link"
          href='#Testimonial'
        >
          Testimonials
        </a>
      </header>

      <div className='main'id='Testimonial' >
        
          <h1>
            This is what our <span>HAPPY</span> clients think about our services
          </h1>
        
        {/* this is a component */}
        <Testimonial 
          name='Jason Burns'
          country='Finland'
          image='jason'
          position='Backend Engineer'
          company='Google'
          testimonial='I was looking for a software development company to help me build a new website
          for my business. I was hesitant at first, because I had heard some horror stories about companies that promised 
          the world and then delivered a subpar product. But after reading some positive testimonials about MERAKI, 
          I decided to give them a try.'
        />
        <Testimonial 
          name='Joe Mama'
          country='Scotland'
          image='joe'
          position='Frontend Engineer'
          company='Amazon'
          testimonial="I'm a frontend engineer at Amazon, and I've been using [software developer website] for the past few months. I'm really impressed with the quality of the content, the helpfulness of the community, and the overall user experience.

          The tutorials on [software developer website] are very well-written and easy to follow. They cover a wide range of topics, from basic HTML and CSS to more advanced JavaScript and React. I've learned a lot from the tutorials, and I've been able to apply what I've learned to my own projects."
        />
      </div>
        <Testimonial 
          name='Peter Handsome'
          country='Norway'
          image='peter'
          position='DB Engineer'
          company='Oracle'
          testimonial="One of the things I like most about [software developer website] is that the content is always up-to-date. The authors are constantly updating the tutorials and articles with new information, so I can be sure that I'm learning the latest best practices.

          I also appreciate the fact that [software developer website] offers a variety of learning formats. I can choose to watch videos, read articles, or take courses, depending on my learning style. This makes it easy for me to find the format that works best for me."
        />

    </div>
    
  );
}

export default App
