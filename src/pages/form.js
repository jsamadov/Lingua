import "./form.css";
import Countdown from "./Countdown";

function MyForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="containerMyForm">
      <div className="formMy">
        <div>Courses For Free</div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">
            <input required type="text" id="name" placeholder="Name" />
          </label>
          <label htmlFor="email">
            <input required type="email" id="email" placeholder="Email" />
          </label>
          <label htmlFor="phone">
            <input required type="tel" id="phone" placeholder="Phone" />
          </label>
          <label htmlFor="site">
            <input required type="text" id="site" placeholder="Site" />
          </label>
          <button type="submit">Get it Now</button>
        </form>
      </div>
      <div className="registerMy">
        <div className="registerHeader">Register Now</div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim
            nulla, mollis eu metus in, sagittis fringilla tortor.
          </p>
        </div>
        <Countdown />
      </div>
    </div>
  );
}

export default MyForm;
