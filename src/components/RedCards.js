import "../sass/components/_red-cards.scss";

const RedCard = () => {
  return (
    <div className="red-cards-grid">
      <div className="red-card">
        <img className="red-card__icon" src="/images/recto.png" alt="" />
        <h3 className="red-card__title">Title</h3>
        <p className="red-card__paragraph">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p className="red-card__paragraph">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

      <div className="red-card">
        <img className="red-card__icon" src="/images/estomago.png" alt="" />
        <h3 className="red-card__title">Title</h3>
        <p className="red-card__paragraph">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
};

export default RedCard;
