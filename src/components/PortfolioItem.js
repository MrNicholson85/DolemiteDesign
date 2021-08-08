import { graphql, Link, StaticQuery } from "gatsby";
import { React } from "react";

const ProtfolioItems = () => {
    return (
        <StaticQuery query={graphql`
            {
                allWordpressWpProtfolio {
                    edges {
                        node {
                            id
                            title
                            slug
                            excerpt
                            content
                            featured_media {
                                source_url
                            }
                        }
                    }
                }
            }
        `} render={props => props.allWordpressWpProtfolio.edges.maps(protfolioItem => (
            <div key={protfolioItem.node.id}>
                <h2>{protfolioItem.node.title}</h2>
                <img src={protfolioItem.node.featured_media.source_url} alt="" />
                <div dangerouslySetInnerHTML={{__html: protfolioItem.node.excerpt}}/>
                <Link to={`/portfolio/${protfolioItem.node.slug}`}>
                    View project
                </Link>
            </div>
        ))} />
    )
}

export default ProtfolioItems();