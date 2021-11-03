import '../../css/kd-general.css'
import '../../css/kd-devices.css'
import './css/kd-app.css'
import Header from './Header'
import IssueTable from './IssueTable'
import IssueDetailWindow from './IssueDetailWindow'
import IssueDetailDelete from './IssueDetailDelete'

import { useState, useEffect } from "react";

const IssueReportApp = ( ) => {

    const  [showIssue, setshowIssue ] = useState (false);
    const  [refreshIssue, setRefreshIssue ] = useState (true);
    const  [updateId, setupdateId ] = useState (1);
    const  [mutationType, setMutationType ] = useState ('');

    const showOrHideIssue = (id, mutationType) => {
        setshowIssue(!showIssue);
        setMutationType(mutationType);
        console.log("ShoworHide " + showIssue + " "+ mutationType);
        setupdateId(id);
    }

    const  [issues, setIssues ]= useState ([]);

    const getIssues = async () => {
            const rawResponse = await fetch('http://localhost:8080/issuereport',
            {
                headers: {
                    'content-type' : 'application/json'
                },
                   method: "GET",
            })
            const content = await rawResponse.json();
            setIssues(content);
    }
 
    useEffect(() => {
//        getIssues();
        }, [])

    if (refreshIssue) 
    {
        getIssues();
        setRefreshIssue(false);
        console.log("Refreshhhhhhh");
    }   

    return (
        <div className="kd-flex-center">
            <Header showOrHideIssue={ showOrHideIssue }></Header>
            <div className="kd-64-t-p"></div>
            <IssueTable showOrHideIssue={showOrHideIssue} setRefreshIssue={setRefreshIssue} issues= {issues}></IssueTable>
            { (showIssue && (mutationType === "create" || mutationType === "edit"))? <IssueDetailWindow id={updateId} showOrHideIssue={showOrHideIssue} setRefreshIssue={setRefreshIssue} mutationType={ mutationType }></IssueDetailWindow> : undefined }       
            { (showIssue && (mutationType === "delete"))? <IssueDetailDelete id={updateId} showOrHideIssue={showOrHideIssue} setRefreshIssue={setRefreshIssue} mutationType={ mutationType }></IssueDetailDelete> : undefined }       
        </div>
    )
}

IssueReportApp.defaultProps = {
    title : "Geen title",
}
export default IssueReportApp

