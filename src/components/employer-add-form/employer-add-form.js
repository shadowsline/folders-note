import './employer-add-form.css';

const EmployerAddForm = () => {
    return (
        <div className="app-add-form">
            <h3>Додайте нового працівника</h3>
            <form className="add-form d-flex">
                <input type="text" placeholder="Імя працівника" className="form-control new-post-label" />
                <input type="number" placeholder="З/П в $" className="form-control new-post-label" />
                <button type="submit" className="btn btn-outline-light">
                    Додати
                </button>
            </form>
        </div>
    )
}

export default EmployerAddForm;