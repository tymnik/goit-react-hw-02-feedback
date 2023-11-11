import {Component} from 'react';

class Section extends Component {
  render() {
    const { title, children, style } = this.props;
    return (
      <div>
        <h1 style={style}>{title}</h1>
        {children}
      </div>
    );
  }
}
export default Section;
