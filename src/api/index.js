import { gql } from "apollo-boost";
export const baseUrl = "http://seo.srcservicesltd.com:5000";
export const GET_Login_Details = gql`
  mutation LogIn($loginid: String!, $password: String!) {
    login(loginid: $loginid, password: $password) {
      login_id
      tokenid
      message
      usertype
      userid
      organization_id
      institution_id
      first_name
      middle_name
      last_name
      institution_name
      currency_code
      currency_symbol
      language
      country_code
      locale
      full_day_hours
      half_day_hours
    }
  }
`;
