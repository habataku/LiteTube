import styled from 'styled-components'
import styles from 'styles/values'

const StyledLayout = styled.div`
    
`

const StyledLayoutHeader = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    height: ${styles.size.HEADER};
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${styles.color.shade.WHITE};
    padding: ${styles.unit.DOUBLE *2}px;
`

const StyledLayoutMain = styled.div`
    display: flex;
    min-height: calc(100vh - ${styles.size.HEADER});
    padding-top: ${styles.size.HEADER};
    background-color: ${styles.color.shade.WHITEY};
`

export {
    StyledLayout,
    StyledLayoutHeader,
    StyledLayoutMain
}