import Sidenav from '../Sidenav/Sidenav'
import Section from '../Section/Section'
import useSection from '../../hooks/useSection'
import {Fragment} from 'react'

const PageController = ({state, actions}) => {
  const {mainPage} = state
  const Component = useSection(mainPage)
  return (
    <Fragment>
      <Sidenav state={state} actions={actions} />
      <div id="page-controller" className="column is-fullheight">
        <Section>
          <Component state={state} actions={actions} />
        </Section>
      </div>
    </Fragment>
  )
}

export default PageController
