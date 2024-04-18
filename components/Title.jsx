import React from 'react';
import styled from 'styled-components';
import {hover, text, title, title_ms60} from "../styles/globalStyleVars";
import ReactHtmlParser from "react-html-parser";

const Title = ({
                   text,
                   fontSize,
                   fontWeight,
                   color,
                   letterSpacing,
                   lineHeight,
                   textTransform,
                   margin,
                   padding,
                   borderColor,
                   varient,
                   center,
                   classname,
                   small_text,noanim,h1
               }) => {


    return (

        <StyledTitle className={`title fade-up ${classname}`}
                     fontSize={fontSize}
                     fontWeight={fontWeight}
                     color={color}
                     lineHeight={lineHeight}
                     LetterSpacing={letterSpacing}
                     textTransform={textTransform}
                     margin={margin}
                     padding={padding}
                     varient={varient}
                     center={center}
                     borderColor={borderColor}>

            {
                text ?
                    h1 ?
                    <h1  className={`${noanim ? '' : 'split-up'}`}> {ReactHtmlParser(text)} </h1>
:
                        <h2  className={`${noanim ? '' : 'split-up'}`}> {ReactHtmlParser(text)} </h2>

                    :
                    ''
            }


        </StyledTitle>

    )
};


const StyledTitle = styled.div`
  margin: ${props => props.margin || '0px'};
  position: relative;
  width: 100%;
  font-family: ${title};
  text-align: ${props => props?.center ? 'center' : ''};
  padding: ${p => p.padding};

  h2 {
    font-family: ${title};
    font-size: ${props => props.fontSize || 44}px;
    line-height: ${props => props.lineHeight || 56}px;
    letter-spacing: -1px;
    font-weight: ${props => props.fontWeight || '500'};
    color: ${props => props.color || '#3C3C3B'};
    span{
      color: ${hover};
    }
  }
  h1 {
    font-family: ${title} ;
    font-size: ${props => props.fontSize || 44}px !important;
    line-height: ${props => props.lineHeight || 56}px !important;
    letter-spacing: -1px !important;
    font-weight: ${props => props.fontWeight || '500'} !important;
    color: ${props => props.color || '#3C3C3B'} !important;
    span{
      color: ${hover} !important;
    }
  }


  @media (max-width: 767px) {
    margin-bottom: 40px;
    padding: 0;
    h2 {
      font-size: 35px !important;
      line-height: 42px !important;
      sub {
        bottom: 9.1px;
        line-height: inherit;
      }
    }
    h1 {
      font-size: 35px !important;
      line-height: 42px !important;
      sub {
        bottom: 9.1px;
        line-height: inherit;
      }
    }
  }
`;


export default React.memo(Title);














