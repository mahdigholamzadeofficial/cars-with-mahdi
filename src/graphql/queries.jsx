import { gql } from "@apollo/client";

const GET_POST = gql`
  query  {
    posts {
      carName
      slug
      id
      coverPhoto {
        url
      }
      content {
        text
      }
      company {
        name
        avatar {
          url
        }
      }
    }
  }
`
const GET_COMPANIES = gql`
  query {
    companies {
      id
      avatar {
        url
      }
      country
      name
      slug
      description {
        text
      }
    }
  }

`

const GET_ONE_COMPANY=gql`
query getCompany($slug : String!){
  company(where: {slug: $slug}) {
    avatar {
      url
    }
    description {
      html
    }
    name
    country
    post {
      id
      slug
      carName
      coverPhoto {
        url
      }
      company {
        name
        avatar {
          url
        }
      }
    }
  }
}


`

const GET_ONE_POST = gql`
  query getPost ($slug:String!){
    post(where: {slug: $slug}) {
      slug
      carName
      company {
        country
        avatar {
          url
        }
        name
      }
      coverPhoto {
        url
      }
      content {
        html
      }
    }
  }
`

const GET_COMMENTS = gql`
  query getComment($slug:String!) {
    comments(where: {post: {slug: $slug}}) {
      id,
      name,
      text,
    }
  }


`

export {
  GET_POST,
  GET_COMPANIES,
  GET_COMMENTS,

  GET_ONE_COMPANY,
  GET_ONE_POST,
}