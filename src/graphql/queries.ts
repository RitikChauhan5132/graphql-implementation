import { gql } from "@apollo/client";

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

const query = gql`
  query Luke {
    person @rest(type: "Person", path: "people/1/",endpoint: "v1") {
      name
    }
  }
`;

const postTitleQuery1 = gql`
  query PostTitle {
    post @rest(type: "Post", path: "/post", endpoint: "v1") {
      id
      title
    }
  }
`;
const postTitleQuery2 = gql`
  query PostTitle {
    post @rest(type: "[Tag]", path: "/tags", endpoint: "v2") {
      id
      tags
    }
  }
`;

const GET_DOGS = gql`
  query GetDogs {
    dogs {
      id
      breed
    }
  }
`;

const GET_DOG_PHOTO = gql`
  query Dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`;

export { GET_LOCATIONS, GET_DOGS, GET_DOG_PHOTO, query,postTitleQuery1,postTitleQuery2 };
