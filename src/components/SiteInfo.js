import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const SiteInfoWrapper = styled.div`
flex-grow: 1;
color: white;
`

const SiteInfo = () => (
    <StaticQuery query={graphql`
    {
  siteinfo: allWordpressSiteMetadata {
    edges {
      node {
        name
        description
      }
    }
  }
}
    `} render={props => (
        <SiteInfoWrapper>
            
        </SiteInfoWrapper>
    )}/>
);

export default SiteInfo;