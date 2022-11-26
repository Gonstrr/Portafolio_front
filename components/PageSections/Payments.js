const Payments = () => {

  const data = [
    { name: "Anom", age: 19, Nmesa: "1" },
    { name: "Megha", age: 19, Nmesa: "2" },
    { name: "Subham", age: 25, Nmesa: "3"},
  ]

  return (
    <table class="table-auto">
  <thead>
    <tr class="">
      <th>Orden</th>
      <th>Mesa</th>
      <th>Pedido</th>
      <th>Cuenta</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Pollo con papas fritas y ensalada a la chilena</td>
      <td>Mesa: 4 </td>
      <td>Numero: 4</td>
      <td>Total cuenta: $6.000</td>
    </tr>
    <tr>
      <td>Cazuela de pollo con pebre</td>
      <td>Mesa: 4 </td>
      <td>Numero: 4</td>
      <td>Total cuenta: $5.000</td>
    </tr>
    <tr>
      <td>Charquican y ensaladas mixtas</td>
      <td>Mesa: 4 </td>
      <td>Numero: 4</td>
      <td>Total cuenta: $10.000</td>
    </tr>
    <tr>
    </tr>
  </tbody>
</table>
    

  )
}

export default Payments
