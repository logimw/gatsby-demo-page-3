import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'

const CategoryTemplate = props => {
  const {
    data: {
      allMdx: { nodes: posts },
    },
  } = props
  const {
    pageContext: { category },
  } = props
  return (
    <Layout>
      <Hero />
      <Posts posts={posts} title={`category / ${category}`} />
    </Layout>
  )
}

export const query = graphql`
  query GetCategory($category: String) {
    allMdx(filter: { frontmatter: { category: { eq: $category } } }) {
      nodes {
        id
        frontmatter {
          title
          author
          category
          date(formatString: "MMMM, Do YYYY")
          slug
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        excerpt
      }
    }
  }
`

export default CategoryTemplate
