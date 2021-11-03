import Button from "./Button"
const Header = ( { showOrHideIssue } ) => {

    return (
        <div className="kd-top-bar kd-white-black">
            <Button text="Nieuw issuereport" onClick={ () => showOrHideIssue (0, "create") } height="50px"></Button>
        </div>
    )
}
export default Header


