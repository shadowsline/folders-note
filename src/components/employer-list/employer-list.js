import EmployerListItem from "../employer-list-item/employer-list-item";
import './employer-list.css';

const EmployerList = () => {
    return (
        <ul className="app-list list-group">
            <EmployerListItem/>
            <EmployerListItem/>
            <EmployerListItem/>
        </ul>
    )
}

export default EmployerList;