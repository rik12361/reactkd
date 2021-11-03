import { useState } from "react";

const IssueDetailWindow = ( { id, showOrHideIssue, mutationType, setRefreshIssue } ) => {

    const  [sId, setId ]= useState (id);
    const  [email, setEmail ]= useState ('');
    const  [url, setUrl ]= useState ('');
    const  [description, setDescription ]= useState ('');
    const  [markedAsPrivate, setMarkedAsPrivate] = useState (false);
    const  [done, setDone] = useState (false);
    const  [updates, setUpdates] = useState (false);
    const  [created, setCreated] = useState (new Date().toISOString().split('T')[0]);
    const  [updated, setUpdated] = useState (new Date().toISOString().split('T')[0]);
    const  [loaded, setLoaded ]= useState (false);
    const  [btnText, setBtnText ]= useState ('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        var mutIssue = { id, email, url, description, markedAsPrivate, updates, updated, created};
        var sMethode = mutationType === "create" ? "POST" : "PUT";
        var sUrl = 'http://localhost:8080/issuereport' ;
        sUrl = sUrl + ((mutationType === "create") ? "" : ("/" + id));
        const rawResponse = await fetch(sUrl,
        {
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(mutIssue),
            method: sMethode,
        }).catch(() => alert("failure, failure, failure"))
        showOrHideIssue();
        setRefreshIssue(true);
    }

    const getIssues = async () => {
        const rawResponse = await fetch('http://localhost:8080/issuereport/' + id,
        {
            headers: {
                'content-type' : 'application/json'
            },
            method: "GET",
        })
        setId(mutationType === "create"? ' ' : id); 
        const content = await rawResponse.json();
        setUrl(content.url);
        setEmail(content.email);
        setDescription(content.description);
        setMarkedAsPrivate(content.markedAsPrivate);
        setUpdates(content.updates);
        setUpdated(content.updated == null? '0000-00-00' : content.updated.split('T')[0]);
        setCreated(content.created == null? '0000-00-00' : content.created.split('T')[0]);
   }

    const closeWithoutSave = () => {
        showOrHideIssue();        
    }

    function componentWillMount () {
        if (!loaded) {
            setBtnText("Create");
            setLoaded(true);
           if (mutationType === "edit") {
            setBtnText("Update");
               getIssues();
           }
        }
    }

    componentWillMount();

    return (

        <div className="kd-modal">
            <div>
                <div className="kd-modal-content kd-black-white kd-64-p"> 
					<form onSubmit={handleSubmit}>
                        <div className="kd-right-text" onClick={() => closeWithoutSave ()}><i className="fa fa-window-close"></i></div>
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
						<div className="kd-10-p">
                            <input className="kd-10-p" type="checkbox" defaultChecked={markedAsPrivate}  onChange={(e) => setMarkedAsPrivate(e.target.checked)} value= { markedAsPrivate } id='markedAsPrivate'/>
                            <label className="kd-10-l-p" htmlFor='markedAsPrivate' >private</label>
                            <span className="kd-10-t-p kd-16-l-p"><input className="kd-10-p" type="checkbox" defaultChecked={updates} onChange={(e) => setUpdates(e.target.checked)} id='updates'/></span>
                            <label className="kd-14-t-p kd-10-l-p" htmlFor='updated'>updates</label>
                            {/* <span className="kd-10-t-p kd-16-l-p"><input style={{ width: '8rem' }} className="kd-10-p" type="text" id='created' onChange={(e) => setCreated(e.target.value)} placeholder="created"/></span>
                            <span className="kd-10-t-p kd-16-l-p"><input style={{ width: '8rem' }} className="kd-10-p" type="text" id='updated' onChange={(e) => setUpdated(e.target.value)} placeholder="updated"/></span> */}
                            <div className="kd-inline-block kd-16-l-p"><span style= {{ border: '1px solid', borderColor: 'rgb(168,168,168)', padding: '11px' }}>{created}</span></div>
                            <div className="kd-inline-block kd-16-l-p"><span style= {{ border: '1px solid', borderColor: 'rgb(168,168,168)', padding: '11px' }}>{updated}</span></div>
                        </div>
						<div className="kd-10-p"><input type="submit" className="kd-full-width kd-white-black kd-hover-white-grey kd-center-text kd-10-t-p kd-button-basic" value={ btnText } ></input></div>
					</form>
				</div>
            </div>
        </div>
    )

}
export default IssueDetailWindow