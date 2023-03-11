import Header from "../components/Header";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardTitle, MDBCardOverlay,
    MDBCardImage
} from "mdb-react-ui-kit";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />
      <MDBContainer className="mt-5">
        <div className="mt-3 mb-4">
          <h3>Top Categories</h3>
          <h5>Have a look & Explore...!</h5>
        </div>
        <MDBRow>
          <MDBCol size="md">
            <MDBCard background="dark" className="text-white">
              <MDBCardImage
                overlay
                src="https://mdbootstrap.com/img/new/slides/017.webp"
                alt="..."
              />
              <MDBCardOverlay>
                {/* <MDBCardTitle>Clothing</MDBCardTitle> */}
                <div className="mt-5">
                  <button
                    type="button"
                    class="btn btn-primary btn-rounded btn-xs"
                    data-mdb-ripple-color="dark"
                  >
                    REVIEWS
                  </button>

                  <MDBCardTitle className="mt-2">Clothing</MDBCardTitle>
                </div>
              </MDBCardOverlay>
            </MDBCard>
          </MDBCol>
          <MDBCol size="md">
            <MDBCard background="dark" className="text-white">
              <MDBCardImage
                overlay
                src="https://mdbootstrap.com/img/new/slides/017.webp"
                alt="..."
              />
              <MDBCardOverlay>
                {/* <MDBCardTitle>Clothing</MDBCardTitle> */}
                <div className="mt-5">
                  <button
                    type="button"
                    class="btn btn-primary btn-rounded btn-xs"
                    data-mdb-ripple-color="dark"
                  >
                    REVIEWS
                  </button>

                  <MDBCardTitle className="mt-2">Hotels</MDBCardTitle>
                </div>
              </MDBCardOverlay>
            </MDBCard>
          </MDBCol>
          <MDBCol size="md">
            <MDBCard background="dark" className="text-white">
              <MDBCardImage
                overlay
                src="https://mdbootstrap.com/img/new/slides/017.webp"
                alt="..."
              />
              <MDBCardOverlay>
                {/* <MDBCardTitle>Clothing</MDBCardTitle> */}
                <div className="mt-5">
                  <button
                    type="button"
                    class="btn btn-primary btn-rounded btn-xs"
                    data-mdb-ripple-color="dark"
                  >
                    REVIEWS
                  </button>

                  <MDBCardTitle className="mt-2">Restaurant</MDBCardTitle>
                </div>
              </MDBCardOverlay>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <MDBRow className="mt-3">
          <MDBCol size="md">
            <MDBCard background="dark" className="text-white">
              <MDBCardImage
                overlay
                src="https://mdbootstrap.com/img/new/slides/017.webp"
                alt="..."
              />
              <MDBCardOverlay>
                {/* <MDBCardTitle>Clothing</MDBCardTitle> */}
                <div className="mt-5">
                  <button
                    type="button"
                    class="btn btn-primary btn-rounded btn-xs"
                    data-mdb-ripple-color="dark"
                  >
                    REVIEWS
                  </button>

                  <MDBCardTitle className="mt-2">Bars</MDBCardTitle>
                </div>
              </MDBCardOverlay>
            </MDBCard>
          </MDBCol>
          <MDBCol size="md">
            <MDBCard background="dark" className="text-white">
              <MDBCardImage
                overlay
                src="https://mdbootstrap.com/img/new/slides/017.webp"
                alt="..."
              />
              <MDBCardOverlay>
                {/* <MDBCardTitle>Clothing</MDBCardTitle> */}
                <div className="mt-5">
                  <button
                    type="button"
                    class="btn btn-primary btn-rounded btn-xs"
                    data-mdb-ripple-color="dark"
                  >
                    REVIEWS
                  </button>

                  <MDBCardTitle className="mt-2">Electronics</MDBCardTitle>
                </div>
              </MDBCardOverlay>
            </MDBCard>
          </MDBCol>
          <MDBCol size="md">
            <MDBCard background="dark" className="text-white">
              <MDBCardImage
                overlay
                src="https://mdbootstrap.com/img/new/slides/017.webp"
                alt="..."
              />
              <MDBCardOverlay>
                {/* <MDBCardTitle>Clothing</MDBCardTitle> */}
                <div className="mt-5">
                  <button
                    type="button"
                    class="btn btn-primary btn-rounded btn-xs"
                    data-mdb-ripple-color="dark"
                  >
                    REVIEWS
                  </button>

                  <MDBCardTitle className="mt-2 ">Beauty</MDBCardTitle>
                </div>
              </MDBCardOverlay>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <div className="mt-5 mb-4">
          <h3>Latest Reviews</h3>
          <h5>We seek your help in reviewing us...!</h5>
        </div>
      </MDBContainer>

      <header style={{ paddingLeft: 0 }}>
        <div
          className="p-5 text-center bg-image"
          style={{
            backgroundImage:
              "url('https://mdbootstrap.com/img/new/slides/041.webp')",
            height: 400,
          }}
        >
          <div
            className="mask"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          >
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                <h2 className="mb-3">Let's Review It!</h2>
                <h6 className="mb-3">
                  ReviewsJet is a review platform open to everyone. Share your
                  experiences to help others make better choices, and help
                  companies up their game. Our mission is to bring people and
                  companies together to create experiences for everyone.
                </h6>

                <a
                  className="btn btn-outline-light btn-lg"
                  href="#!"
                  role="button"
                >
                  JOIN OUR PLATFORM TODAY!!
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Footer />
    </>
  );
}
export default Home;
