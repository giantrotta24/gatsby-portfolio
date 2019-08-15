import React, { Component } from 'react';
import mixitup from 'mixitup';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: '',
      items: [
        {
          id: 1,
          title: 'Outdoor Gear Camp',
          type: 'fullstack',
        },
        {
          id: 2,
          title: 'WildPlantID',
          type: 'fullstack',
        },
        {
          id: 3,
          title: 'Chatter Squadron',
          type: 'frontend',
        },
        {
          id: 4,
          title: 'LIRI',
          type: 'backend',
        },
      ],
    };
  }

  componentDidMount() {
    this.mixer = mixitup(this.containerElement, {
      selectors: {
        target: '[data-article]',
      },
      data: {
        uidKey: 'id',
      },
      render: {
        target: Portfolio.renderTargetHtml,
      },
    });

    // render the initial targets on mount (no animation)

    this.mixer.dataset(this.state.items, false);
  }

  setContainerRef = element => {
    this.containerElement = element;
  };


  renderItems = () => {
    let items = this.state.items;
    if (this.state.filter !== '') {
      items = this.state.items.filter(item => {
        return item.type === this.state.filter;
      });
    }
    // console.log(items);
    this.mixer.dataset(items);
  };
  applyFilter = filter => {
    this.setState({ filter }, this.renderItems);
  };

  render() {
    return (
      <div>
        <button
          type="button"
          onClick={this.applyFilter.bind(this, '')}
          className="btn btn-secondary"
        >
          All
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={this.applyFilter.bind(this, 'fullstack')}
        >
          Full-Stack
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={this.applyFilter.bind(this, 'frontend')}
        >
          Front-End
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={this.applyFilter.bind(this, 'backend')}
        >
          Back-End
        </button>
        <div className="container" ref={this.setContainerRef}/>
      </div>
    );
  }
  static renderTargetHtml(item) {
    // An example target render function, returning a string
    return `
        <div class="target" data-article id="${item.id}">${item.title}</div>
    `;
  }
}

export default Portfolio;
