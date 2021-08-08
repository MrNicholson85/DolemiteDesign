import React from 'react';
import {graphql, StaticQuery, Link } from 'gatsby';
import styled from 'styled-components';
import SiteInfo from './Siteinfo';

const MainMenuStyles = styled.div`
    background-color: blue;

    a {
        color: white;
    }
`

const Container = styled.div`
    margin: auto;
    padding-left: 15px;
    padding-right: 15px;
    display: inline-block;
    margin: 25px 0;
`

const MenuItem = styled(Link)`
    margin-right: 15px;
`

const MainMenu = () => (
    <StaticQuery query={graphql`
        {
            nav: allWordpressWpApiMenusMenusItems(filter: {
                name: {
                eq: "Primary Menu"
                }
            }) {
                edges {
                    node {
                        items {
                            title
                            object_slug
                        }
                    }
                }
            }
        }

    `}render={props => (
        <MainMenuStyles>
            <SiteInfo/>
            <Container>
                {props.nav.edges[0].node.items.map(item => (
                    <MenuItem to={`/${item.object_slug}`} key={item.title}>
                        {item.title}
                    </MenuItem>
                ))}
            </Container>
        </MainMenuStyles>
    )} />
);

export default MainMenu;