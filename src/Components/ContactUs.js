import React from 'react'
import axios from 'axios';
export default function ContactUs(props) {
  const submitHandler = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const address = event.target.address.value;
    axios.post('/posts', {
      email,
      password,
      address,
    })
      .then((response) => {
        console.log(response);
        event.target.reset()
      })
      .catch((error) => { console.log(error); });
  }
  return (
    <section className="contact bg-light " id="contact">
      <div className="container mb-5 py-5">
        <div><h1 className="text-center">Contact <span>Us</span></h1>
          <hr className="w-25 m-auto mb-2" />
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 col-12">
            <form className="row g-3" onSubmit={submitHandler}>
              <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">Email</label>
                <input type="email" name='email' className="form-control" id="inputEmail4" />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputPassword4" className="form-label">{props.password}</label>
                <input type="password" name='password' className="form-control" id="inputPassword4" />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">Address</label>
                <input type="text" className="form-control" name='address' id="inputAddress" placeholder="1234 Main St" />
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-12 m-auto text-end">
            <img src="img/zahid.jpg" className="img-thumbnail img-fluid" alt="me" />
          </div>
        </div>
      </div>
    </section>
  )
}
