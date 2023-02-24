import logo from './logo.svg';
import './App.css';

function Table(props) {
      
  return (
    <div className="table">
      <h1>Employee Table</h1>
      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Designation</th>
        </tr>
        </thead>
        <tbody>
          <tr>
            <td>Robert</td>
            <td>23</td>
            <td>Male</td>
            <td>Full Stack(React + Java) Developer</td>
          </tr>
          <tr>
            <td>Michal</td>
            <td>24</td>
            <td>Male</td>
            <td>Full Stack Engineer</td>
          </tr>
          <tr>
            <td>Morgan</td>
            <td>24</td>
            <td>Female</td>
            <td>React Developer</td>
          </tr>
          <tr>
            <td>Tom</td>
            <td>26</td>
            <td>Male</td>
            <td>Front End Developer</td>
          </tr>
          <tr>
            <td>Steve</td>
            <td>27</td>
            <td>Female</td>
            <td>UI/UX Designer</td>
          </tr>
          </tbody>
      </table>
    </div>
  );
}

export default App;