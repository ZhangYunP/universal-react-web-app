import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class OgMeta extends Component {
  render() {
    return (
      <Helmet>
        <meta property="og:title" content={this.props.title}/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content={this.props.url}/>
        <meta property="og:image" content={this.props.image}/>
        <meta property="og:description" content={this.props.description}/>
      </Helmet>
    );
  }
}

export default OgMeta;
