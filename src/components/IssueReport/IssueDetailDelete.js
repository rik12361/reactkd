import { useState } from "react";

const IssueDetailDelete = ( { id, showOrHideIssue, mutationType, setRefreshIssue } ) => {

    const  [sId, setId ]= useState (id);
    const  [email, setEmail ]= useState ('');
    const  [url, setUrl ]= useState ('');
    const  [description, setDescription ]= useState ('');
    const  [done, setDone] = useState (false);
    const  [loaded, setLoaded ]= useState (false);

    const handleSubmit = async (e) => {
        e.preventDefault();   
        console.log(e.target.target);
        console.log(e.value);

        var sMethode = "DELETE";
        var sUrl = 'http://localhost:8080/issuereport' ;
        sUrl = sUrl + ((mutationType === "create") ? "" : ("/" + id));
        const rawResponse = await fetch(sUrl,
        {
            headers: {
                'content-type' : 'application/json'
            },
            method: sMethode,
        }).catch(() => alert("fetch failed!"))

        showOrHideIssue();
        setRefreshIssue(true);
    }

    const getIssues = async () => {
        console.log("fetching");
        const rawResponse = await fetch('http://localhost:8080/issuereport/' + id,
        {
            headers: {
                'content-type' : 'application/json'
            },
            method: "GET",
        })
        const content = await rawResponse.json();
        setId(id); 
        setUrl(content.url);
        setEmail(content.email);
        setDescription(content.description);
   }

    const closeWithoutSave = () => {
        showOrHideIssue();        
    }

    function componentWillMount () {
          if (!loaded) {
            setLoaded(true);
            getIssues();
        }
    }
    componentWillMount();

    return (

        <div className="kd-modal">
            <div>
                <div className="kd-modal-content kd-black-white kd-64-p"> 
					<form onSubmit={handleSubmit}>
                        <div className="kd-right-text" onClick={() => closeWithoutSave ()}><i className="fa fa-window-close"></i></div>
                        <div className="kd-10-p kd-32-text"> Do you want to delete this item? </div>
						<div className="kd-10-p">
                            <p style= {{ width: '8rem', border: '1px solid', borderColor: 'rgb(168,168,168)', padding: '11px' }} className="kd-inline-block">{sId}</p>
    						<span className="kd-16-l-p"> <input style= {{ width: '16rem' }} className="kd-full-width kd-10-p" onChange={(e) => setEmail(e.target.value)} value={ email } type="text" placeholder="e-mail"/></span>
                            { done? <span className="kd-fright kd-white-green kd-8-p" >Done</span> : <span className="kd-fright kd-white-red  kd-8-p" >Open</span>}
                        </div>
						<div className="kd-10-p">
                            <input className="kd-full-width kd-10-p" type="text" onChange={(e) => setUrl(e.target.value)} value= { url } placeholder="url"/>
                        </div>
						<div className="kd-10-p">
                            <textarea className="kd-full-width kd-10-p" style={{rows: '10', cols:'100'}}  onChange={(e) => setDescription(e.target.value)} value= { description } placeholder="description"/>
                        </div>
                        <div className="kd-flex-row-center">
                            <span className="kd-10-p"><input type="submit" id="B01" className="kd-white-red kd-hover-white-grey kd-center-text kd-10-t-p kd-delete-button" value='Yes'></input></span>
                            <span className="kd-10-p"><button className="kd-white-green kd-hover-white-grey kd-center-text kd-10-t-p kd-delete-button" onClick={closeWithoutSave}>No</button></span>
                        </div>
					</form>
				</div>
            </div>
        </div>
    )
}
export default IssueDetailDelete