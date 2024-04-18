import React from 'react';
import styled from 'styled-components';
import {Link} from 'next/link';


const CookieButton = ({
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


    const Yes = `<svg id="Button_-_Open_an_Account_Now" data-name="Button - Open an Account Now" xmlns="http://www.w3.org/2000/svg" width="238" height="44" viewBox="0 0 238 44">
                                <g id="Rectangle_492" data-name="Rectangle 492" fill="none" stroke="#fff" stroke-width="1" opacity="0.3">
                                    <rect width="238" height="44" rx="22" stroke="none"/>
                                    <rect x="0.5" y="0.5" width="237" height="43" rx="21.5" fill="none"/>
                                </g>
                                <g id="Rectangle_493" data-name="Rectangle 493" fill="none" stroke="#fff" stroke-width="1" strokeDasharray="2 520" opacity="0">
                                    <rect width="238" height="44" rx="22" stroke="none"/>
                                    <rect x="0.5" y="0.5" width="237" height="43" rx="21.5" fill="none"/>
                                </g>
                                <text id="Open_an_Account_Now" data-name="Open an Account Now" transform="translate(36 27)" fill="#fff" font-size="16" font-family="Avenir-Medium, Avenir" font-weight="500"><tspan x="0" y="0">{text}</tspan></text>
                            </svg>
`;

    const  No = `
       <svg id="Button_-_No" data-name="Button - No" xmlns="http://www.w3.org/2000/svg" width="120" height="44" viewBox="0 0 120 44">
                                <g id="Rectangle_492" data-name="Rectangle 492" fill="none" stroke="#c6c6c6" stroke-width="1" opacity="0.5">
                                    <rect width="120" height="44" rx="22" stroke="none"/>
                                    <rect x="0.5" y="0.5" width="119" height="43" rx="21.5" fill="none"/>
                                </g>
                                <text id="No" transform="translate(49 27)" fill="#3c3c3b" font-size="16" font-family="Avenir-Medium, Avenir" font-weight="500"><tspan x="0" y="0">No</tspan></text>
                                <g id="Rectangle_493" data-name="Rectangle 5701" fill="none" stroke="#3c3c3b" stroke-width="1" strokeDasharray="0 520" opacity={'0'}>
                                    <rect width="120" height="44" rx="22" stroke="none"/>
                                    <rect x="0.5" y="0.5" width="119" height="43" rx="21.5" fill="none"/>
                                </g>
                            </svg>

    `;
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
                <Link href={src || '/'}>


                    {
                        icon ?


                            <div dangerouslySetInnerHTML={{__html: No}}/>


                            // <svg id="Button_-_No" data-name="Button - No" xmlns="http://www.w3.org/2000/svg" width="120" height="44" viewBox="0 0 120 44">
                            //     <g id="Rectangle_492" data-name="Rectangle 492" fill="none" stroke="#c6c6c6" stroke-width="1" opacity="0.5">
                            //         <rect width="120" height="44" rx="22" stroke="none"/>
                            //         <rect x="0.5" y="0.5" width="119" height="43" rx="21.5" fill="none"/>
                            //     </g>
                            //     <text id="No" transform="translate(49 27)" fill="#3c3c3b" font-size="16" font-family="Avenir-Medium, Avenir" font-weight="500"><tspan x="0" y="0">No</tspan></text>
                            //     <g id="Rectangle_493" data-name="Rectangle 5701" fill="none" stroke="#3c3c3b" stroke-width="1" strokeDasharray="0 520" opacity={'0'}>
                            //         <rect width="120" height="44" rx="22" stroke="none"/>
                            //         <rect x="0.5" y="0.5" width="119" height="43" rx="21.5" fill="none"/>
                            //     </g>
                            // </svg>


                        :

                        <div dangerouslySetInnerHTML={{__html: Yes}}/>

                        // <svg id="Button_-_Open_an_Account_Now" data-name="Button - Open an Account Now" xmlns="http://www.w3.org/2000/svg" width="238" height="44" viewBox="0 0 238 44">
                        //         <g id="Rectangle_492" data-name="Rectangle 492" fill="none" stroke="#fff" stroke-width="1" opacity="0.3">
                        //             <rect width="238" height="44" rx="22" stroke="none"/>
                        //             <rect x="0.5" y="0.5" width="237" height="43" rx="21.5" fill="none"/>
                        //         </g>
                        //         <g id="Rectangle_493" data-name="Rectangle 493" fill="none" stroke="#fff" stroke-width="1" strokeDasharray="2 520" opacity="0">
                        //             <rect width="238" height="44" rx="22" stroke="none"/>
                        //             <rect x="0.5" y="0.5" width="237" height="43" rx="21.5" fill="none"/>
                        //         </g>
                        //         <text id="Open_an_Account_Now" data-name="Open an Account Now" transform="translate(36 27)" fill="#fff" font-size="16" font-family="Avenir-Medium, Avenir" font-weight="500"><tspan x="0" y="0">{text}</tspan></text>
                        //     </svg>

                    }


                    {/*<svg className={'ok'}><rect x="0.75" y="0.75" rx="1.5" width="1.5" height="1.5"></rect><rect x="0.75" y="0.75" rx="1.5" width="1.5" height="1.5"></rect></svg>*/}
                </Link>



            ) : (
                <a target={target || '_self'}>
                    <span>{text}</span>
                </a>
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


      &:hover {
        svg {
          line {
            stroke: ${props => props.hoverColor || '#FFF'};
          }

          #Rectangle_493 {
            opacity: 1;
            stroke-dasharray: 520px;
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


export default React.memo(CookieButton);
