import { Component } from "react";
import Link from "next/link";
import Layout from "../../components/layouts/layout";

export default class UserPage extends Component {
  static async getInitialProps({ query }) {
    return query;
  }

  constructor(props) {
    super(props);
  }

  render() {
    //console.log(this.props);
    return (
      <div>
        <h1>{this.props.name} page</h1>
        <Layout></Layout>
      </div>
    );
  }
}
