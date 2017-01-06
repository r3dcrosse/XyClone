import { connect } from 'react-redux'
import BuildSite from '../components/BuildSite'

const mapStateToProps = (state) => {
  console.log('MAPPING TO BuildSiteCONTAINERASDFASDFASDF', state)
  return {
    components: state.xyclone.components,
    currComponent: state.xyclone.currComponent
  }
}

const BuildSiteContainer = connect(
  mapStateToProps
)(BuildSite)

export default BuildSiteContainer;