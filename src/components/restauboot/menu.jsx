
import Table from 'react-bootstrap/Table';

function Comp3() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Sno</th>
          <th>VEG</th>
          <th>NON_VEG</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
            <td>1</td>
          <td>Pulav</td>
          <td>Chicken</td>
          
        </tr>
        <tr>
          <td>2</td>
          <td>Paneer</td>
          <td>Mutton</td>
          
        </tr>
        <tr>
          <td>3</td>
          <td >Roti</td>
          <td>Prawns</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Comp3;