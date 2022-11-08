import styled from "styled-components"

export const Cards = styled.section`
	display: grid;
    gap: 50px;
	grid-template-columns: repeat(auto-fit, 400px);
	justify-content: center;
    padding: 40px
`

export const Card = styled.div`
	background-color: #121212;
    border-radius: 20px;
    height: 400px;
    overflow: hidden;   
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    
    &:hover {
        filter: opacity(0.8);
        transition: filter 500ms;
      }
`

export const Detail = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    margin-top: 60px;
`