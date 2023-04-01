import './employer-list-item.css';

const EmployerListItem = () => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="list-group-item-label">Vasya Pupkin</span>
            <input type="text" className="list-group-item-input" defaultValue="1000$"/>
            <div className="d-flex jusify-content-center align-items-center">
                <button className="btn-cookie btn-sm" type="button">
                    <i className="fas fa-cookie"></i>
                </button>
                <button className="btn-trash btn-sm" type="button">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployerListItem;