import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filret';
import EmployerList from '../employer-list/employer-list';
import EmployerAddForm from '../employer-add-form/employer-add-form';

import './app.css';

function App() {
    return (
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmployerList/>
            <EmployerAddForm/>
        </div>
    );
}

export default App;