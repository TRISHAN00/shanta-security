import React from 'react';
import styled from 'styled-components';
import {Link} from 'next/link';


const Button = ({
                    onSubmit,
                    text,
                    src,
                    img,
                    hoverImg,
                    fontSize,
                    fontWeight,
                    color,
                    letterSpacing,
                    lineHeight,
                    margin,
                    background,
                    borderRadius,
                    border,
                    width,
                    height,
                    hoverBackground,
                    target,
                    borderColor,
                    hoverColor, icon
                }) => {


    return (
        <StyledBtn className={`dc-btn `}
                   fontSize={fontSize}
                   fontWeight={fontWeight}
                   color={color}
                   background={background}
                   lineHeight={lineHeight}
                   letterSpacing={letterSpacing}
                   margin={margin}
                   border={border}
                   img={img}
                   borderRadius={borderRadius}
                   width={width}
                   hoverImg={hoverImg}
                   hoverBackground={hoverBackground}
                   height={height}
                   borderColor={borderColor}
                   target={target}
                   hoverColor={hoverColor}
                   onSubmit={onSubmit}
        >
            {src ? (
                <a href={src || '/' }  target={target || '_self'}>


                    {
                        icon ?

                            <svg id="Button_-_Corporate_Brochure" data-name="Button - Corporate Brochure" width="260" height="44" viewBox="0 0 260 44">
                                <g id="Rectangle_492" data-name="Rectangle 492" fill="none" stroke={`${color ? color : 'white'}`} stroke-width="1" opacity="0.5">
                                    <rect width="260" height="44" rx="22" stroke="none"/>
                                    <rect x="0.5" y="0.5" width="259" height="43" rx="21.5" fill="none"/>
                                </g>
                                <g id="Group_19461" data-name="Group 19461" transform="translate(-124 -328)">
                                    <text id="Corporate_Borchure" data-name={text ? text : 'Download User Manual'} transform="translate(187 355)" fill={`${color ? color : 'white'}`} font-size="16" font-family="Avenir-Medium, Avenir" font-weight="500"><tspan x="0" y="0">Download User Manual</tspan></text>
                                    <g id="download" transform="translate(156.363 337)">
                                        <path id="Path_8769" data-name="Path 8769" d="M4.692,16a1.054,1.054,0,0,1,1.056,1.053v2.105a1.051,1.051,0,0,0,.309.744h0a1.057,1.057,0,0,0,.746.308H19.47a1.054,1.054,0,0,0,1.056-1.053V17.053a1.056,1.056,0,0,1,2.111,0v2.105a3.162,3.162,0,0,1-3.167,3.158H6.8a3.162,3.162,0,0,1-3.167-3.158V17.053A1.054,1.054,0,0,1,4.692,16Z" transform="translate(0 0.684)" fill={`${color ? color : 'white'}`} fillRule="evenodd"/>
                                        <path id="Path_8770" data-name="Path 8770" d="M6.946,10.308a1.058,1.058,0,0,1,1.493,0l4.531,4.519L17.5,10.308A1.054,1.054,0,0,1,18.994,11.8L13.716,17.06a1.058,1.058,0,0,1-1.493,0L6.946,11.8A1.051,1.051,0,0,1,6.946,10.308Z" transform="translate(0.167 0.368)" fill={`${color ? color : 'white'}`} fillRule="evenodd"/>
                                        <path id="Path_8771" data-name="Path 8771" d="M12.692,3a1.054,1.054,0,0,1,1.056,1.053V16.684a1.056,1.056,0,0,1-2.111,0V4.053A1.054,1.054,0,0,1,12.692,3Z" transform="translate(0.444)" fill={`${color ? color : 'white'}`} fillRule="evenodd"/>
                                    </g>
                                </g>
                                <g id="Rectangle_493" data-name="Rectangle 493" fill="none" stroke={`${color ? color : 'white'}`} stroke-width="1" opacity={'0'} strokeDasharray="0 520">
                                    <rect width="260" height="44" rx="22" stroke="none"/>
                                    <rect x="0.5" y="0.5" width="259" height="43" rx="21.5" fill="none"/>
                                </g>
                            </svg>




                        :
                            <svg id="Button_-_Open_an_Account_Now" data-name="Button - Open an Account Now" xmlns="http://www.w3.org/2000/svg" width="238" height="44" viewBox="0 0 238 44">
                                <g id="Rectangle_492" data-name="Rectangle 492" fill="none" stroke={`${color ? color : 'white'}`} stroke-width="1" opacity="0.3">
                                    <rect width="238" height="44" rx="22" stroke="none"/>
                                    <rect x="0.5" y="0.5" width="237" height="43" rx="21.5" fill="none"/>
                                </g>
                                <g id="Rectangle_493" data-name="Rectangle 493" fill="none" stroke={`${color ? color : 'white'}`} stroke-width="1" strokeDasharray="2 520" opacity="0">
                                    <rect width="238" height="44" rx="22" stroke="none"/>
                                    <rect x="0.5" y="0.5" width="237" height="43" rx="21.5" fill="none"/>
                                </g>
                                <text id="Open_an_Account_Now" data-name="Open an Account Now" transform="translate(36 27)" fill={`${color ? color : 'white'}`} font-size="16" font-family="Avenir-Medium, Avenir" font-weight="500"><tspan x="0" y="0">{text}</tspan></text>
                            </svg>

                    }


                    {/*<svg className={'ok'}><rect x="0.75" y="0.75" rx="1.5" width="1.5" height="1.5"></rect><rect x="0.75" y="0.75" rx="1.5" width="1.5" height="1.5"></rect></svg>*/}
                </a>



            ) : (
                <Link href={src || '/'} target={target || '_self'}>
                    <span>{text}</span>
                </Link>
            )}


        </StyledBtn>
    )
};

const StyledBtn = styled.div`
  &.dc-btn {
    margin: ${props => props.margin || '0'};
    width: ${props => props.width || '100%'};
    height: ${props => props.height || '44'}px;
    cursor: pointer;

    a {
      display: flex;
      width: fit-content;
      height: 100%;
      align-items: center;
      justify-content: center;
      font-size: ${props => props.fontSize || '16'}px;
      font-weight: ${props => props.fontWeight || 500};
      margin: 0;
      line-height: ${props => props.lineHeight || '24'}px;
      background-color: ${props => props.background || `transparent`};
      position: relative;
      border-radius: ${props => props.borderRadius || '22'}px;
      overflow: hidden;
      z-index: 0;
      transition: border 1s cubic-bezier(.25, .74, .22, .99);
      box-sizing: border-box;
      color: ${props => props.color || `#3C3C3B`};

      svg {
        width: auto;
        height: 100%;
        #Rectangle_493 {
          transition: all 1s cubic-bezier(.25, .74, .22, .99);
        }
      }

      span {
        transition: color 1s cubic-bezier(.25, .74, .22, .99);
        color: ${props => props.color || `#3C3C3B`};
        position: relative;
        margin-top: 5px;
        z-index: 2;
        line-height: 45px;
      }
      @keyframes dash {
        from {
          stroke-dashoffset: 0;
        }
        to {
          stroke-dashoffset: 600px;
        }
      }

      &:hover {
        svg {
          line {
            stroke: ${props => props.hoverColor || '#FFF'};
          }
          #Rectangle_493 {
            opacity: 1;
            stroke-dasharray: 600px;
          }
        }
        &:before {
          transform: translate(0);
        }
      }

      &:focus {
        color: #222222;
      }

   



      &:hover {
        color: #222222;
      }



    }

    .ok {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: visible;
      transform: translateX(0.25px);
      margin: 0;

      rect {
        rx: calc(20 / 2);
        ry: calc(20 / 2);
        stroke: #3C3C3B;
      }
    }
  }

`;


export default React.memo(Button);
