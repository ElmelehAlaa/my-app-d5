import { Anchor, Nav } from "react-bootstrap";

const MyNavBar = (props) => (
  <>
    <Nav className="navbar navbar-expand-lg navbar-dark p-0" style={{ backgroundColor: "#221f1f" }}>
      <Anchor className="navbar-brand" href="#">
        <img src="assets/logo.png" alt="logo" style={{ width: "100px", height: "55px" }} />
      </Anchor>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Anchor className="nav-link font-weight-bold" href="#">
              Home <span className="sr-only">(current)</span>
            </Anchor>
          </li>
          <li className="nav-item active">
            <Anchor className="nav-link font-weight-bold" href="#">
              TV Shows
            </Anchor>
          </li>
          <li className="nav-item">
            <Anchor className="nav-link font-weight-bold" href="#">
              Movies
            </Anchor>
          </li>
          <li className="nav-item">
            <Anchor className="nav-link font-weight-bold" href="#">
              Recently Added
            </Anchor>
          </li>
          <li className="nav-item">
            <Anchor className="nav-link font-weight-bold" href="#">
              My List
            </Anchor>
          </li>
        </ul>
        <i className="fa fa-search icons text-white mx-2 "></i>
        <div className="text-white mx-2" id="kids">
          KIDS
        </div>
        <i className="fa fa-bell icons text-white mx-2"></i>
        <i className="fa fa-user icons text-white mx-2"></i>
      </div>
    </Nav>
  </>
);
export default MyNavBar;
