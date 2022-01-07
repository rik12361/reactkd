import React from 'react'
import styled from 'styled-components'

function ShowFolder() {
    return (
        <ShowFolderOuterContainer>
            <TextLine><span>Even bladeren<span>door de folder?</span></span></TextLine>
            <TextLine><FolderLink href="https://view.publitas.com/jumbo-supermarkten/folder-week-52-2021/page/1"><span>Bekijk de online folder</span></FolderLink></TextLine>
        </ShowFolderOuterContainer>
    )
}

export default ShowFolder

const ShowFolderOuterContainer = styled.div`
    margin: 45px 0px 60px 0px;
    span {
        font-size: 32px;
        span {
            font-weight: 800;
            margin: 0px 0px 0px 8px;
        }
    }
`

const FolderLink = styled.a`
    cursor: pointer;
    span {
        font-size: 16px;
        text-decoration: underline;
        color: black;
    }
`
const TextLine = styled.div``