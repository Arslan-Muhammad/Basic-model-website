import React from 'react'

export default function About() {
  return (
    <section className="about">
    <div className="container ">
        <div><h1 className="text-center">About <span>me</span></h1>
        <hr  className="w-25 m-auto mb-5"/>
    </div>
    <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6 col-12  mb-5">
            <div>
            <h1>What you want <span> about me?</span></h1>
            <p className="p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, tenetur maiores exercitationem modi tempora porro?</p>
            <button type="button" className="btn btn-light">read more</button>

<div className="accordion mt-5" id="accordionExample">
<div className="accordion-item">
  <h2 className="accordion-header" id="headingOne">
    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      My Hobbies
    </button>
  </h2>
  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
    <div className="accordion-body">
      <strong>This is the first item's accordion body.</strong> It is shown by default, 
    </div>
  </div>
</div>
<div className="accordion-item">
  <h2 className="accordion-header" id="headingTwo">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      My Qaulifications
    </button>
  </h2>
  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
    <div className="accordion-body">
      <strong>This is the second item's accordion body.</strong> It is hidden by default, 
    </div>
  </div>
</div>
<div className="accordion-item">
  <h2 className="accordion-header" id="headingThree">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      My Dreams
    </button>
  </h2>
  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
    <div className="accordion-body">
      <strong>This is the third item's accordion body.</strong> It is hidden by default,
    </div>
  </div>
</div>
</div>
            </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 col-12 m-auto text-end">
            <img src="img/zahid.jpg" className="img-thumbnail img-fluid" alt="me"/>
        </div>
    </div>
</div>
</section>
  )
}
