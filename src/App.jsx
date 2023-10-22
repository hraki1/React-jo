import 'bootstrap/dist/css/bootstrap.css'

function App() {

  return (
    <>
         <div className="d-flex  flex-row align-items-center p-3 
    px-4 mb-3 bg-white border-bottom border-primary">
  <h5 className="my-0 mr-auto font-weight-normal">Company name</h5>
  <nav className="my-2  mr-3">
    <a className="p-2 text-dark" href="#">Features</a>
    <a className="p-2 text-dark" href="#">Enterprise</a>
    <a className="p-2 text-dark" href="#">Support</a>
    <a className="p-2 text-dark" href="#">Pricing</a>
  </nav>
  <a className="btn btn-outline-primary" href="#">Sign up</a>
</div>

<div className="w-50 px-3 py-3 pt-5 
pb-4 mx-auto text-center">
  <h1 className="display-4">Pricing</h1>
  <p className="lead">Quickly build an effective pricing table 
    for your potential customers with this Bootstrap example. 
    Its built with default Bootstrap components and utilities 
    with little customization.</p>
</div>

<div className="container">
  <div className="card-deck mb-3 text-center">
    <div className="card mb-4 shadow-sm border-primary">
      <div className="card-header border-primary">
        <h4 className="my-0 font-weight-normal">Free</h4>
      </div>
      <div className="card-body ">
        <h1 className="card-title ">$0 
          <small className="text-muted">/ mo</small></h1>
        <ul className="list-unstyled mt-3 mb-4">
          <li>10 users included</li>
          <li>2 GB of storage</li>
          <li>Email support</li>
          <li>Help center access</li>
        </ul>
        <button type="button" className="btn btn-lg btn-block 
        btn-outline-primary">Sign up for free</button>
      </div>



      
    </div>
    <div className="card mb-4 shadow-sm border-primary">
      <div className="card-header border-primary">
        <h4 className="my-0 font-weight-normal">Pro</h4>
      </div>
      <div className="card-body">
<h1 className="card-title pricing-card-title">$15 
  <small className="text-muted">/ mo</small></h1>
        <ul className="list-unstyled mt-3 mb-4">
          <li>20 users included</li>
          <li>10 GB of storage</li>
          <li>Priority email support</li>
          <li>Help center access</li>
        </ul>
        <button type="button" className="btn btn-lg btn-block btn-primary">Get started</button>
      </div>
    </div>
    <div className="card mb-4 shadow-sm border-primary">
      <div className="card-header border-primary">
        <h4 className="my-0 font-weight-normal">Enterprise</h4>
      </div>
      <div className="card-body">
        <h1 className="card-title pricing-card-title">$29 <small className="text-muted">/ mo</small></h1>
        <ul className="list-unstyled mt-3 mb-4">
          <li>30 users included</li>
          <li>15 GB of storage</li>
          <li>Phone and email support</li>
          <li>Help center access</li>
        </ul>
        <button type="button" className="btn btn-lg btn-block btn-primary">Contact us</button>
      </div>
    </div>
  </div>

  <footer className="pt-4 my-md-5 pt-md-5 border-top">
    <div className="row">
      <div className="col col-md">
     
        <small className="d-block mb-3 text-muted">&copy; 2017-2020</small>
      </div>
      <div className="col col-md">
        <h5>Features</h5>
        <ul className="list-unstyled text-small">
          <li><a className="" href="#">Cool stuff</a></li>
          <li><a className="text-muted" href="#">Random feature</a></li>
          <li><a className="text-muted" href="#">Team feature</a></li>
          <li><a className="text-muted" href="#">Stuff for developers</a></li>
          <li><a className="text-muted" href="#">Another one</a></li>
          <li><a className="text-muted" href="#">Last time</a></li>
        </ul>
      </div>
      <div className="col col-md">
        <h5>Resources</h5>
        <ul className="list-unstyled text-small">
          <li><a className="text-muted" href="#">Resource</a></li>
          <li><a className="text-muted" href="#">Resource name</a></li>
          <li><a className="text-muted" href="#">Another resource</a></li>
          <li><a className="text-muted" href="#">Final resource</a></li>
        </ul>
      </div>
      <div className="col col-md">
        <h5>About</h5>
        <ul className="list-unstyled text-small">
          <li><a className="text-muted" href="#">Team</a></li>
          <li><a className="text-muted" href="#">Locations</a></li>
          <li><a className="text-muted" href="#">Privacy</a></li>
          <li><a className="text-muted" href="#">Terms</a></li>
        </ul>
      </div>
    </div>
  </footer>
</div>
    </>
  )
}

export default App
