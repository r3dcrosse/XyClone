import { connect } from 'react-redux'
import PageSidebar from '../PageSidebar'

const mapStateToProps = (state) => {
  return {
    currPage: state.xyclone.currPage
  }
};

// const mapDispatchToProps = (dispatch) => {
// }x`

const PageSidebar = connect(
  mapStateToProps
  // ,
  // mapDispatchToProps
)(PageSidebar);

export default PageSidebar;
