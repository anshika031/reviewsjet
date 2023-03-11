import Footer from "../components/Footer";
import "./page.css";
import Navbar from "../components/Navbar";

function Productpage() {
  return (
    <>
      <header>
        <Navbar />

        <div
          className="p-5 bg-image"
          style={{ backgroundImage: "url('img/bg-banner.jpg')", height: 400 }}
        >
          <div
            className="mask"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
          >
            {/* <div className="container d-flex justify-content-center align-items-center h-100"> */}

            <div className="container d-flex align-items-center h-100">
              <h3>hello</h3>
            </div>
          </div>
        </div>
      </header>

      <div class="container">
        <div class="row mt-3">
          <div class="col-md-4">
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title">
                  <b>30 thousand</b>
                  <br></br>
                </h5>
                <h6>reviews seen every month..</h6>
                <p class="card-text">
                  Over 30 thousand review impressions every month
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title">
                  <b>5 thousand</b>
                  <br></br>
                </h5>
                <h6>real reviews per month..</h6>
                <p class="card-text">
                  Over 5 thousand reviews posted every month
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title">
                  <b>1 thousand</b>
                  <br></br>
                </h5>
                <h6>have a great return..</h6>
                <p class="card-text">
                  Over 1 thousand companies increase their business
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        <h5>More than 100 companies use ReviewsJet!</h5>
      </div>

      <div class="container myicons ">
        <div class="d-flex justify-content-center flex-wrap py-5">
          <div className="px-5">
            <i class="fa-brands fa-stack-overflow"></i>
          </div>
          <div className="px-5">
            <i class="fa-brands fa-pagelines"></i>
          </div>
          <div className="px-5">
            <i class="fa-brands fa-cloudflare"></i>
          </div>
          <div className="px-5">
            <i class="fa-brands fa-discord"></i>
          </div>
          <div className="px-5">
            <i class="fa-brands fa-dashcube"></i>
          </div>
          <div className="px-5">
            <i class="fa-brands fa-codepen"></i>
          </div>
        </div>
      </div>

      <section class="message text-center ">
        <h3 class="py-4">
          Get started now with ReviewsJet...improve your business.
        </h3>
        <br />
        <button type="button" class="btn btn-primary mb-3">
          Join Us Now!!
        </button>
      </section>

      <Footer />
    </>
  );
}
export default Productpage;
