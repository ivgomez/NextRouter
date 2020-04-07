import { Component } from "react";
import Link from "next/link";
import Layout from "../../components/layouts/layout";

export default class UserPage extends Component {
  static async getInitialProps({ query }) {
    return query;
  }

  render() {
    return (
      <div>
        <h1>User page</h1>
        <Layout></Layout>
      </div>
    );
  }
}
