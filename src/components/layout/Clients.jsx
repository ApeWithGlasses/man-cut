import Footer from '../helpers/Footer';
import Header from '../helpers/Header';
import { clients } from '../../database/clients';

const Clients = () => {
  return (
    <>
      < Header />
      <div className="table__container">
        <div className="container">
          <div class="card">
            <div className="card-header">
              Clients
            </div>
            <div class="card-body">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Lastname</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    clients.map((client) => (
                      <tr>
                        <th scope="row">{client.id}</th>
                        <td>{client.name}</td>
                        <td>{client.lastname}</td>
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

export default Clients