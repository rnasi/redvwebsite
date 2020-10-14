import { useStaticQuery, graphql } from "gatsby"
export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query MyQuery {
        site {
          siteMetadata {
            title
            description
            author{
              name
            }
            sections
            favicon
            logo
            menuItems{
              path
              label
            }
            social{
              service
              url
              fa
            }
          }
        }
      }
    `
  )
  return site.siteMetadata
}
