import SidenavLink from './SidenavLink'

const Sidenav = ({state, actions}) => {
  const {sidebarSections} = state
  return (
    <div className="column is-one-fifth is-fullheight has-background-white is-hidden-mobile">
      <ul className="relative">
        {sidebarSections.map(({text, page}, index) => (
          <SidenavLink
            text={text}
            id={`sidenav-${index}`}
            key={`sidenav-${index}`}
            actions={actions}
            page={page}
          />
        ))}
      </ul>
    </div>
  )
}

export default Sidenav
