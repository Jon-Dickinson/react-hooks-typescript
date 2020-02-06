import React from 'react';

class CounterClass extends React.Component {
	public state: any;
	public setState: any;

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
  }

  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
  }

  render() {
    return (
      <div className="vertical-inline-flex align--center max-w-50-perc pad-tb-20 border-1px-silver pad-all-10">
        <p>Click count: {this.state.count}</p>
        <button className="button-solid" onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click
        </button>
      </div>
    );
  }
}

export default CounterClass;