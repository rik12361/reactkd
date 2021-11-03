import PropTypes from "prop-types"
import Button from "./Button"

const Header = ( { title, showaddsection } ) => {
    return (
        <header className='header'>
            <h1 className="kd-8-p" >{title}</h1>
            <Button color="white" backgroundcolor="green" text="add" onClick= { () => showaddsection() } ></Button>
            {/* <Button color="white" backgroundcolor="green" text="add" onClick={ () => alert("afda") } ></Button> */}
        </header>
    )
}

// Attribs in JS:
// const headingStyle = {
//     color : "red",
//     backgroundColor : 'black'
// }

Header.defaultProps = {
    title : "Geen title",
    showAdd: false
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
 }

export default Header
