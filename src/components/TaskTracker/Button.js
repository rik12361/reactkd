import PropTypes from 'prop-types'

const Button = ({color, backgroundcolor, text, onClick }) => {
    
        return (
        <div>
               <button 
                    style= {{ backgroundColor: backgroundcolor, color: color}}
                    onClick= {onClick}
                    className='btn'>
                        { text }
                </button>         
        </div>
    )
}

Button.defaultProps = {
    text : 'button',
    color: 'white',
    backgroundcolor: 'green',
    onClick: () => { alert("No button onclick defined!")}
}

// propTypes start met een klein: verwarrend...
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

export default Button