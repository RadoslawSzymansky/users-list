import styled from 'styled-components';
import media from '../../styles/media';

export default styled.div`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    
    ${media['md'](`
        max-width: 600px
    `)}
`;
