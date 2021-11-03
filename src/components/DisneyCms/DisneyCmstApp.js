import '../../css/kd-general.css'
import '../../css/kd-devices.css'
import './css/kd-app.css'
import Header from './Header'
import CmsTable from './DisneyCmsTable'
import DisneyCmsReportDetailWindow from './DisneyCmsDetailWindow'
import DisneyCmsReportDetailDelete from './DisneyCmsReportDetailDelete'

import { useState, useEffect } from "react";

const DisneyCmsReportApp = ( ) => {

    const  [showCms, setshowCms ] = useState (false);
    const  [refreshCms, setRefreshCms ] = useState (true);
    const  [updateId, setupdateId ] = useState (1);
    const  [mutationType, setMutationType ] = useState ('');

    const showOrHideCms = (id, mutationType) => {
        setshowCms(!showCms);
        setMutationType(mutationType);
        console.log("ShoworHide " + showCms + " "+ mutationType);
        setupdateId(id);
    }

    const  [Cmss, setCmss ]= useState ([]);

    const getCmss = async () => {
            const rawResponse = await fetch('http://localhost:8080/disneycmsreport',
            {
                headers: {
                    'content-type' : 'application/json'
                },
                   method: "GET",
            })
            const content = await rawResponse.json();
            setCmss(content);
    }
 
    useEffect(() => {
//        getCmss();
        }, [])

    if (refreshCms) 
    {
        getCmss();
        setRefreshCms(false);
        console.log("Refreshhhhhhh");
    }   

    return (
        <div className="kd-flex-center">
            <Header showOrHideCms={ showOrHideCms }></Header>
            <div className="kd-64-t-p"></div>
            <CmsTable showOrHideCms={showOrHideCms} setRefreshCms={setRefreshCms} cms= {cms}></CmsTable>
            { (showCms && (mutationType === "create" || mutationType === "edit"))? <DisneyCmsReportDetailWindow id={updateId} showOrHideCms={showOrHideCms} setRefreshCms={setRefreshCms} mutationType={ mutationType }></DisneyCmsReportDetailWindow> : undefined }       
            { (showCms && (mutationType === "delete"))? <DisneyCmsReportDetailDelete id={updateId} showOrHideCms={showOrHideCms} setRefreshCms={setRefreshCms} mutationType={ mutationType }></DisneyCmsReportDetailDelete> : undefined }       
        </div>
    )
}

DisneyCmsReportApp.defaultProps = {
    title : "Geen title",
}
export default DisneyCmsReportApp

