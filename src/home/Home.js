import React from 'react';
import './Home.css';
import axios from 'axios';

class Home extends React.Component {
  constructor() {
    super()
        this.state = {
            name: '',
            phone: '',
            email: '',
            comments: ''
  }
  this.handleSubmit = this.handleSubmit.bind(this); 
}

handleChange = (e) => {
  let {name, value} = e.target
  this.setState({
      [name]: value
  })
}

async handleSubmit(e) {
  e.preventDefault()
  const {name, phone, email, comments} = this.state
  this.reset()
  // toast.success('Email has been successfully sent!');    
  await axios.post('/v1/api/form', {
      name, 
      phone,
      email,
      comments
      })
}

reset() {
  this.setState({
  name: '',
  phone: '',
  email: '',
  comments: ''
  })
};

    render() {
      const {name, email, phone, comments} = this.state;
        return (
            <div className='home-container'>
                <div className='main-image-container'>
                    <img className='main-image' src='https://images.unsplash.com/photo-1472162314594-eca3c3d90df1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' alt='Family holding hands'/>
                    {/* <button className='contact-us-button'>Contact Us</button> */}
                </div>
                
                <div className='home-information-container'>
                    <p className='home-title'>We're there for you</p>
                    <main className='description'> 
                    At David Friel Law, we understand that legal matters are never easy to deal with.
                    We promise to take the time to understand your individual circumstance and guide
                    you through the legal process to make the best decisions for you and your future. 
                    </main>
                </div>            
     
                <p className='services-title'>Services</p>                
                <div className='services-container'>
                    <div className='service-container'>
                        <div className='icon-container'><i className="fas fa-heart-broken" id='broken-heart'></i></div>
                        <p className='service-name-container'>Divorce</p>
                        <p className='service-info-container'>Ne congue audiam has, quo ea paulo accusam tacimates, legimus mediocrem definitiones ei eum.</p>
                    </div>

                    <div className='service-container'>
                        <div className='icon-container'><i id='child' className="fas fa-child"></i></div>
                        <p className='service-name-container'>Child Custody & Visitation</p>
                        <p className='service-info-container'>Ne congue audiam has, quo ea paulo accusam tacimates, legimus mediocrem definitiones ei eum.</p>
                    </div>

                    <div className='service-container'>
                        <div className='icon-container'><i className="fas fa-wallet" id='wallet'></i></div>
                        <p className='service-name-container'>Alimony & Child Support</p>
                        <p className='service-info-container'>Ne congue audiam has, quo ea paulo accusam tacimates, legimus mediocrem definitiones ei eum.</p>
                    </div>
                </div>

                <div className='form-container'>
                    <form className='small-form-container'>
                        <p className='consultation-title'>Request a FREE Consultation</p>
                        <input className='form-input' name='name' value={name} onChange={this.handleChange} placeholder='Full Name'/>
                        <input className='form-input' name='email' value={email} onChange={this.handleChange} placeholder='Email' />
                        <input className='form-input' name='phone' value={phone} onChange={this.handleChange} placeholder='Phone'/>
                        <textarea placeholder='Comments' name='comments' value={comments} onChange={this.handleChange} rows='6' cols='23'></textarea>
                        <button className='submit-button' onClick={this.handleSubmit}>Submit</button>
                    </form>
                    <img className='consultation-image' src='https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'/>
                </div>

                <div className='contact-information-container'>
                    <p className='contact-title'>Contact us</p>
                    <p className='contact-information'>David Friel Law Firm <br/>
                    10808 S. River Front Pkwy <br/> 
                    Salt Lake City, UT 84095 <br />
                    (801) 801-815-5500
                    </p>
                </div>

                <footer><i id='scale2' className="fas fa-balance-scale"></i></footer> 
            </div>
        )
    }
}

export default Home;