import styled from 'styled-components';
import media from '../../styles/media';

export default styled.div`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    ${media['sm'](`
        max-width: 500px
    `)}
    ${media['md'](`
        max-width: 750px
    `)}
    ${media['lg'](`
        max-width: 960px
    `)}
    ${media['xl'](`
        max-width: 1100px
    `)}
`;
