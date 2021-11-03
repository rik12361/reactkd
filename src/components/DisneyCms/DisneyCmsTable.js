import DisneyCmsReportTableRow from "./DisneyCmsReportTableRow";
const DisneyCmsReportTable = ( { showOrHideIssue, setRefreshIssue, issues }) => {


    return (
         <div>
         <table className="kd-issue-table">
         <tbody>
          <tr>
			<th>id</th>
			<th>email</th>
			<th>url</th>
			<th>description</th>
			<th>private</th>
			<th>updates</th>
			<th>done</th>
			<th>created</th>
			<th>updated</th>
	    	</tr>
             { issues.map((issue) => <DisneyCmsReportTableRow issue key= {issue.id } issue={issue} showOrHideIssue={showOrHideIssue} setRefreshIssue={setRefreshIssue}/> )}
             </tbody>
         </table>
        </div>
     )
 }

 IssueTable.defaultProps = {
     title : "Geen title",
     showAdd: false
 }
 export default DisneyCmsReportTable
 
 