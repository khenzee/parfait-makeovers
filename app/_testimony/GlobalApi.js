import {gql, request } from "graphql-request"
const MASTER_URL ='https://us-west-2.cdn.hygraph.com/content/'+process.env.NEXT_PUBLIC_MASTER_URL_KEY+'/master'

const getTestimony= async()=>{

    const query = gql`
       query GetTestimony {
                testimonials {
                id
                name
                testimony
                }
            }
    `

    const data = await request( MASTER_URL, query)  
    return data
}

const getServices= async()=>{

    const query = gql`
      query GetServices {
            services {
                price
                info
                duration
                id
                title
                brief
                image {
                id
                url
                }
            }
        }
    `

    const data = await request( MASTER_URL, query)  
    return data
}

const getService = async(info) =>{
    const query = gql`
        query GetServiceByInfo {
        service(where: {info:"` +info+`"}) {
          id
          price
          info
          title
          duration
          brief
          image {
            id
            url
          }
          body {
            text
          }
        }
      }
    `
    const data = await request( MASTER_URL, query)  
    return data
}

const getPopularService = async() =>{
  const query = gql`
     query getPopularCat {
      services(where: {category: {name: "popular"}}) {
        brief
        id
        info
        image {
          url
        }
        title
        category{
        name
        }
      }
    }
  `
  const data = await request( MASTER_URL, query)  
  return data
}

export default {
    getTestimony,
    getServices,
    getService,
    getPopularService
};
