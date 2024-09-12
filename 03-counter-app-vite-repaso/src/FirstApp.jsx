import PropTypes from 'prop-types';
export const FirstApp = ( { 
  title= "No hay titulo",
  subtitle= "No hay subtitulo",
  name="Christian"
} ) => {

  return (
        <>
          <h1>{ title }</h1>
            {/* <code>{ JSON.stringify(newMessage) }</code> */}
            <p>{ subtitle }</p>
            <p>{ name }</p>
        </>
    
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.number,
  name: PropTypes.string
}