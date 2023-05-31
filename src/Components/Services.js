import React from 'react';
export default function Services(props) {
  return (
    <section className="service bg-light py-5" id="services">
    <div className="container py-5">
        <div><h1 className="text-center">Our <span>Services</span></h1>
            <hr  className="w-25 m-auto mb-5"/>
        </div>
        <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4">
                <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Web Designing</h5>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  {/* <a className="btn btn-primary">Go somewhere</a> */}
                </div>
              </div></div>
            <div className="col-sm-12 col-md-4 col-lg-4 mb-3">
                <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Frontend Developer</h5>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  {/* <a className="btn btn-primary">Go somewhere</a> */}
                </div>
              </div></div>
            <div className="col-sm-12 col-md-4 col-lg-4 "><div className="card">
                <div className="card-body">
                  <h5 className="card-title">Bootstrap Experts</h5>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  {/* <a className="btn btn-primary">Go somewhere</a> */}
                </div>
              </div></div>
        </div>
        <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4 ">
                <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Web Designing</h5>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  {/* <a className="btn btn-primary">Go somewhere</a> */}
                </div>
              </div></div>
            <div className="col-sm-12 col-md-4 col-lg-4 ">
                <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Frontend Developer</h5>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  {/* <a className="btn btn-primary">Go somewhere</a> */}
                </div>
              </div></div>
            <div className="col-sm-12 col-md-4 col-lg-4 "><div className="card">
                <div className="card-body">
                  <h5 className="card-title">Bootstrap Experts</h5>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  {/* <a className="btn btn-primary">Go somewhere</a> */}
                </div>
              </div>
            </div>
        </div>
        <div className='container mt-5'>
          <div className='row'>
          <div className="col-md-8">
            <h2 className='text-center'>Blog</h2>
                {props.children}
            </div>
            </div>
        </div>
    </div>
</section>
  )
}
