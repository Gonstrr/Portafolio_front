import Finances from '../Finances/Finances';
const FinancesComponent = (props) => {
  return (
    <div id="financesComponent" className="panel has-background-white p-2">
      <Finances {...props} />
    </div>
  )
}

export default FinancesComponent
