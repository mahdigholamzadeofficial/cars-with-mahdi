import { gql } from "@apollo/client";

const SEND_POST = gql`
  mutation MyMutation($name:String!,$email:String!,$text:String!,$slug:String!) {
    createComment(
      data: {name: $name, email: $email, text: $text, post: {connect: {slug:$slug}}}
    ) {
      name
      email,
      text,
      id
    }
  }
`

export {SEND_POST}