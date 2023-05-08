import Header from '../helpers/Header';
import Footer from '../helpers/Footer';
import { barbers } from '../../database/barbers';

const Barbers = () => {
  return (
    <>
      < Header />
      <div className="table__container">
        <div className="container">
          <div class="card">
            <div className="card-header">
              Barbers
            </div>
            <div class="card-body">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Lastname</th>
                    <th scope="col">Salary</th>
                  </tr>
                </thead>
                <tbody>
                {
                    barbers.map((barber) => (
                      <tr>
                        <th scope="row">{barber.id}</th>
                        <td>{barber.name}</td>
                        <td>{barber.lastname}</td>
                        <td><strong>${barber.salary}</strong></td>
                      </tr>
                    ))
                  }
                </tbody>

              </table>
            </div>
          </div>
        </div>
      </div>
      < Footer />
    </>
  )
}

export default Barbers