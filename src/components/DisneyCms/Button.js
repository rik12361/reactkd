const Button = ({ text, color, background, height, onClick }) => {

    const onClickLog = () => {
        console.log("Klik");
    }

    return (
        <button className="kd-hover-black-white kd-button-basic kd-48-h-p kd-32-text" style = {{ height: height, color: color, background: background}} onClick={() => onClick()}> { text } </button>
    )
}
export default Button

Button.defaultProps = {
    hover: 'red',
    color: 'white',
    background: 'black',
    text: 'button issue',
    onClick: 'onClickLog()',
    height: '16px'
}

