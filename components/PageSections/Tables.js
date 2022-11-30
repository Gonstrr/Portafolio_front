import CreateTable from '../Tables/CreateTable'
import Tables from '../Tables/Tables'

const TablesComponent = (props) => {
  return (
    <div id="tableComponent" className="panel has-background-white p-2 ">
      <CreateTable {...props} />
      <Tables {...props} />
    </div>
  )
}

export default TablesComponent
