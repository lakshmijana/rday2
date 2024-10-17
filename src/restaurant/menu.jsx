import Desclaimer from "./desclaimer";

function Menu() {
  return (
    <>
      <table border={1}>
        <thead>
          <tr>
            <th>Veg Menu</th>
            <th>Non-Veg Menu</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Paneer</td>
           
            <td>Chicken</td>
          </tr>
          <tr>
            <td>Dal Tadka</td>
            <td>Mutton Curry</td>
          </tr>
          <tr>
            <td>Mixed Veg</td>
            <td>Fish Fry</td>
          </tr>
          <tr>
            <td>Aloo Gobi</td>
            <td>Prawn Masala</td>
          </tr>
        </tbody>
      </table>
      <Desclaimer />
    </>
  );
}

export default Menu;
