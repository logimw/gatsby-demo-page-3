import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
const Success = () => {
  return (
    <Layout>
      <section className="success-page">
        <div className="page-cennter">
          <h2>your submission was recieved!</h2>
          <Link to="/" className="btn">
            Back Home
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export default Success
