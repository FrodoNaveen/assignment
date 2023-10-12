import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h4 className="colorWhite mt-2">Startup3</h4>
          </div>
          <div className="col-6 d-flex justify-content-between colorWhite">
            <b style={{ color: "#6958b0" }} className="mt-2">Overview</b>
            <b className="mt-2">Prices</b>
            <b className="mt-2">Blogs</b>
            <b className="mt-2">Feedback</b>
            <b className="btn btnbg">Purchase</b>
          </div>
        </div>
        <div className="row containerbody">
          <div className="col-5">
            <div className="colorWhite">
              <h1 style={{ fontSize: "58px" }}>Generate Awesome Web Pages</h1>
              <p style={{ fontSize: "22px" }} className="mt-5">The most important part of the Startup is the samples. The samples from a set of 25 usable pages you can use as is  or you can add new blocks</p>
              <b className="btn btnbg mt-4">LearnMore</b>
            </div>

          </div>
          <div className="col-7">
            <div className="card cardBody">
              <div className>
                <h1 style={{ color: "#1E0E62" }} className="text-center mt-5">Sign Up Now</h1>
                <input className=" form-control input mt-4" placeholder="Your email" />
                <input className=" form-control input mt-4" placeholder="Your password" />
                <input type="checkbox" className="mt-4 checkbox" /><span> I agree to the terma of services</span>
                <br />
                <b className="btn btnInCard mt-4 pt-2">Sign in</b>
                <div className="d-flex mt-3">
                  <hr className="hr"></hr>
                  <span className="mt-1 ms-2">or</span>
                  <hr className="nhr"></hr>
                </div>
                <button className="btn btnIncard mt-3 pt-2"><b>Log in via twitter</b></button>
                <div className="mt-4 cardFooter mb-5">
                  <b><span>Do you have an Account?</span> <span style={{ color: "#25DAC5" }}> Sign in</span></b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
