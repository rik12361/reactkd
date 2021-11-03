import { isCompositeComponent } from "react-dom/test-utils";

const DisneyCmsRow = ({ cms, showOrHideCms}) => {

    return (
        <tr>
        <td> { cms.id } </td>
        <td> { cms.email } </td>
        <td> { cms.url } </td>
        <td> { cms.description } </td>
        <td> { cms.markedAsPrivate ? 'yes' : 'no'} </td>
        <td> { cms.updates? 'yes' : 'no'} </td>
        <td> { cms.done? 'yes' : 'no' } </td>
        <td> { cms.created == null? '0000-00-00' : cms.created.split('T')[0] } </td>
        <td> { cms.updated == null? '0000-00-00' : cms.updated.split('T')[0] } </td>
        <td className="kd-flex-row-space-between">
            <i onClick={() => showOrHideCms(cms.id, "delete")} className="fa fa-trash-alt"></i>
            <i onClick={() => showOrHideCms(cms.id, "edit")} className="fa fa-edit"></i>
        </td>
        </tr>
    );
}
export default DisneyCmsRow