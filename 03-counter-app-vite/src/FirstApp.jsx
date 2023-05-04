// instalamos en vite npm i prop-types
import PropTypes from "prop-types";

// en los props se puede colocar valores por defecto
// asi: ({ title = "hola, soy david" })
export const FirstApp = ({ title, subTitle, name }) => {
  // propTypes => definir el tipo a los props,

  return (
    <>
      {/* <code>{JSON.stringify(newMessage)}!!!</code> */}
      {/* <p>{ subTitle }</p> */}
      <h1 data-testid="test-title"> {title} </h1>
      <p>{ subTitle }</p>
      <p>{ subTitle }</p>
      <p>{ name }</p>
    </>
  );
};

//definir propTypes
FirstApp.propTypes = {
  title: PropTypes.string.isRequired, // obliga el tipo de string
  subTitle: PropTypes.string,
};

// definir defaultProps
FirstApp.defaultProps = {
  name: "Christian Vargas",
  subTitle: "No hay subtitulo",
  // title: "No hay titulo",
};
