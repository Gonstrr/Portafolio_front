import Finances from '../Finances/Finances';
const FinancesComponent = (props) => {
  return (
    <div id="financesComponent" className="panel has-background-white p-5 m-5">
      <Finances {...props} />
    </div>
  )
}

export default FinancesComponent
