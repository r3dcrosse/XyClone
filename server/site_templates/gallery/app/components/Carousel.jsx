import React from 'react';
import GalleryPost from './GalleryPost.jsx'

class Carousel extends React.Component {
  constructor(props) {
    super(props)
    // console.log(props, 'THIS IS PROPS');

    this.state = {
      show: 0,
      currChild: [],
    }
  }

  componentWillMount () {
    this.setState({
      show: 0,
      currChild: this.props.arrayChildren[this.state.show],
    })
  }

  clickNext (e) {
    this.setState({
      show: (this.state.show + 1) % this.props.arrayChildren.length
    })
    
  }

  clickBack (e) {
    this.setState({
      show: ((this.state.show - 1) + this.props.arrayChildren.length) % this.props.arrayChildren.length
    })
  }

  render() {
    return (
      <div className=''>
          <div className='Carousel-flexcontainer' style={this.props.style} >
            {
              <GalleryPost style={this.props.arrayChildren[this.state.show][0]} image={this.props.arrayChildren[this.state.show][1]} textbox={this.props.arrayChildren[this.state.show][2]}/>
            }
          </div>
          <button onClick={this.clickBack.bind(this)}>BACK</button> <button onClick={this.clickNext.bind(this)}>NEXT</button>
        </div>
    )
  }

}

export default Carousel;