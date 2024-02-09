import styled, { css } from "styled-components";

type StyledBtnPropsType = {
    btnType?:"Another"
}

export const BStyle = styled.button<StyledBtnPropsType>`
    border:2px solid #3f6efc;
    border-radius:5px;
    background-color: #3f6efc;
    padding: 6px 17px;
    font-weight:bold;
    /* margin:1px; */
    color: #ffffff;
    /* font-family: serif; */
    margin-left:5px;
    margin-top:0px;
    /* text-decoration: none; */
    cursor: pointer;
    &:hover {
        background-color: #3265ff;
        transition: all .13s;
    }
    
    ${props => props.btnType === "Another" && css <StyledBtnPropsType>`
        color:#3f6efc;
        background-color:#ffffff;
        border:2px solid #3f6efc;
        padding: 6px 30px;
        &:hover {
        background-color: #dedede;}
    }
    `
    }
`