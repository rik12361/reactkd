const IssueTableRow = ({ issue, showOrHideIssue}) => {

    return (
        <tr onDoubleClick={() => showOrHideIssue(issue.id, "edit")}>
        <td> { issue.id } </td>
        <td> { issue.email } </td>
        <td> { issue.url } </td>
        <td> { issue.description } </td>
        <td> { issue.markedAsPrivate ? 'yes' : 'no'} </td>
        <td> { issue.updates? 'yes' : 'no'} </td>
        <td> { issue.done? 'yes' : 'no' } </td>
        <td> { issue.created == null? '0000-00-00' : issue.created.split('T')[0] } </td>
        <td> { issue.updated == null? '0000-00-00' : issue.updated.split('T')[0] } </td>
        <td className="kd-flex-row-space-between">
            <i onClick={() => showOrHideIssue(issue.id, "delete")} className="fa fa-trash-alt"></i>
            <i onClick={() => showOrHideIssue(issue.id, "edit")} className="fa fa-edit"></i>
        </td>
        </tr>
    );
}
export default IssueTableRow