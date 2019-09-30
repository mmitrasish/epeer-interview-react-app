import React from "react";
import { database } from "firebase";
import interviewHome from "../assets/images/interview-home.webp";
import One from "../assets/images/one.svg";
import Two from "../assets/images/two.svg";
import Three from "../assets/images/three.svg";
import Four from "../assets/images/four.svg";
import { withRouter, RouteComponentProps } from "react-router-dom";

const HomePage: React.FC<RouteComponentProps> = (
  props: RouteComponentProps
) => {
  let createSession = () => {
    let key = randKeyGen(5);
    database()
      .ref()
      .child("Sessions")
      .child(key)
      .set({
        content: "Happy Coding",
        createdon: Date()
      });
    props.history.push("/practice/" + key);
  };
  let randKeyGen = (length: number) => {
    let result = "";
    let characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };
  return (
    <div className="bg-secondary text-white">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-md-6 mt-5 pt-5">
            <h2 className="display-4 font-weight-bold align-middle">
              Mock Interview
            </h2>
            <h4 className="font-weight-normal my-5">
              Get paired with suitable peer and interview each other anonymously
              and get better at face-to-face interview at Big Companies
            </h4>
            <button className="btn btn-info" onClick={createSession}>
              Start Now <i className="fa fa-caret-right pl-2" />
            </button>
          </div>
          <div className="col-md-6 p-5 ">
            <img
              src={interviewHome}
              alt="interview"
              className="rounded img-fluid"
            />
          </div>
        </div>
        <div className="border border-light rounded my-5 p-3">
          <div className="d-flex">
            <h2 className="mx-auto my-3 font-weight-bold">How It Works</h2>
          </div>
          <div className="row mt-3">
            <div className="col-md-3 text-center p-3">
              <img
                src={One}
                alt="one"
                className="image-fluid"
                height="100"
                width="100"
              />
              <h5 className="mt-3 mx-3 font-weight-bold">Pairup</h5>
              <p>
                We will match you with the suitable peer based on your
                preferences. The Interview will be of 1 Hr : 30 Mins
              </p>
            </div>
            <div className="col-md-3 text-center p-3">
              <img
                src={Two}
                alt="two"
                className="image-fluid"
                height="100"
                width="100"
              />
              <h5 className="mt-3 mx-3 font-weight-bold">
                Interview your peer &amp; Peer interview you
              </h5>
              <p>
                For the first half (45 Mins), you interview your peer. Second
                half (45 Mins), your peer interviews you.
              </p>
            </div>
            <div className="col-md-3 text-center p-3">
              <img
                src={Three}
                alt="three"
                className="image-fluid"
                height="100"
                width="100"
              />
              <h5 className="mt-3 mx-3 font-weight-bold">
                Write code in Realtime Editor
              </h5>
              <p>
                Write your code in realtime sharable code editor where your peer
                can view your code.
              </p>
            </div>
            <div className="col-md-3 text-center p-3">
              <img
                src={Four}
                alt="four"
                className="image-fluid"
                height="100"
                width="100"
              />
              <h5 className="mt-3 mx-3 font-weight-bold">
                Evaluate Each Other
              </h5>
              <p>
                After completion you and your peer provide feedback. Work on the
                areas you lack and then repeat until you are confident
              </p>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="border border-light rounded my-5 p-3">
          <div className="d-flex">
            <h2 className="mx-auto my-3 font-weight-bold">Advantages</h2>
          </div>
          <div className="row mt-3">
            <div className="col-md-3 text-center p-3">
              <img
                src={One}
                alt="one"
                className="image-fluid"
                height="100"
                width="100"
              />
              <h5 className="mt-3 mx-3 font-weight-bold">
                Reduce Stress &amp; Anxiety
              </h5>
              <p>
                Doubts about how to answer tricky interview questions may stress
                you out &amp; create anxiety. Get over your nerves with mock
                interviews.
              </p>
            </div>
            <div className="col-md-3 text-center p-3">
              <img
                src={Two}
                alt="two"
                className="image-fluid"
                height="100"
                width="100"
              />
              <h5 className="mt-3 mx-3 font-weight-bold">Boost Confidence</h5>
              <p>
                Test drive your answers with peers to improve your skills &amp;
                experience and boost confidence.
              </p>
            </div>
            <div className="col-md-3 text-center p-3">
              <img
                src={Three}
                alt="three"
                className="image-fluid"
                height="100"
                width="100"
              />
              <h5 className="mt-3 mx-3 font-weight-bold">
                Interview Feedback from Peers
              </h5>
              <p>
                Get a interview feedback with performance-based stars on various
                metrics.
              </p>
            </div>
            <div className="col-md-3 text-center p-3">
              <img
                src={Four}
                alt="four"
                className="image-fluid"
                height="100"
                width="100"
              />
              <h5 className="mt-3 mx-3 font-weight-bold">No Hassle</h5>
              <p>
                Get better at interviews just sitting at home with no download
                of software needed.
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <footer className="text-center py-3 bg-dark">
        <h5 className="font-weight-normal">Developed by &copy;mmitrasish</h5>
      </footer>
    </div>
  );
};
export default withRouter(HomePage);
