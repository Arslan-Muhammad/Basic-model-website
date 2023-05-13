import React, { useState } from 'react'

export default function OurTeam() {
  const [demo, setdemo] = useState(0);
  return (
    <section className="team mb-5 px-5 py-5" id="team">
      <div className="container mb-4 py-5">
        <div><h1 className="text-center">Our <span>Team</span></h1>
          <hr className="w-25 m-auto mb-5" />
        </div>
        <div className="row py-5">
          <div className="col-sm-12 col-md-6 col-lg-6 col-12"><div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src="img/zahid.jpg" className="img-fluid rounded-start" alt="zahid" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Muhammad Zahid Faiz</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus tempora ipsa illo, quo voluptas amet?</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div></div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-12"><div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src="img/arslan.jpg" className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Muhammad Arslan</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non est odio voluptatum ducimus sapiente magni.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div>
        <button className="btn" onClick={() => setdemo(!demo)}>Old post</button>
        {demo ? (
          <div className="col-sm-12 col-md-6 col-lg-6 col-12"><div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src="img/arslan.jpg" className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Muhammad Arslan</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non est odio voluptatum ducimus sapiente magni.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
          </div>
        )
          :
          ("")}
      </div>
    </section>
  )
}
