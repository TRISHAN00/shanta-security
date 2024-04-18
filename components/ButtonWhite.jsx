import React from 'react';
import styled from 'styled-components';
import {Link} from 'next/link';


const Button =({
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
                    hoverColor, callicon
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
                <Link href={src || '/'}>
                    {
                        callicon ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                <path id="Path_8647" data-name="Path 8647"
                                      d="M4.965,13.295a21.287,21.287,0,0,0,7.084,5.528,11.057,11.057,0,0,0,3.964,1.169c.1,0,.187.008.283.008a3.289,3.289,0,0,0,2.546-1.09.09.09,0,0,0,.017-.021,10.7,10.7,0,0,1,.8-.829c.2-.186.4-.381.587-.58a2,2,0,0,0-.008-2.98l-2.5-2.491a2.027,2.027,0,0,0-1.464-.671,2.1,2.1,0,0,0-1.481.667l-1.489,1.484c-.137-.079-.279-.149-.412-.215a5.15,5.15,0,0,1-.458-.249A15.74,15.74,0,0,1,8.671,9.61,9.037,9.037,0,0,1,7.4,7.588c.391-.352.757-.721,1.111-1.082.125-.128.254-.257.383-.385a2.121,2.121,0,0,0,.691-1.492,2.1,2.1,0,0,0-.691-1.492L7.652,1.9c-.146-.145-.283-.286-.424-.431C6.953,1.189,6.666.9,6.383.638A2.078,2.078,0,0,0,4.919,0,2.139,2.139,0,0,0,3.438.642L1.882,2.192A3.179,3.179,0,0,0,.929,4.231a7.644,7.644,0,0,0,.578,3.315A19.273,19.273,0,0,0,4.965,13.295ZM1.944,4.318a2.189,2.189,0,0,1,.661-1.409L4.153,1.368a1.122,1.122,0,0,1,.765-.352,1.065,1.065,0,0,1,.749.361c.279.257.541.526.824.812.141.145.287.29.433.439l1.24,1.235a1.124,1.124,0,0,1,.391.775,1.124,1.124,0,0,1-.391.775c-.129.128-.258.261-.387.39-.387.39-.749.758-1.148,1.111l-.021.021a.808.808,0,0,0-.208.92c0,.012.008.021.012.033a9.747,9.747,0,0,0,1.46,2.366,16.613,16.613,0,0,0,4.01,3.639,5.961,5.961,0,0,0,.549.3,5.15,5.15,0,0,1,.458.249l.046.025a.872.872,0,0,0,.4.1.884.884,0,0,0,.62-.282l1.556-1.55a1.1,1.1,0,0,1,.761-.369,1.046,1.046,0,0,1,.736.369L19.52,15.23a1,1,0,0,1-.012,1.562c-.175.186-.358.365-.553.551a11.955,11.955,0,0,0-.869.9A2.288,2.288,0,0,1,16.3,19c-.071,0-.146,0-.216-.008A10.045,10.045,0,0,1,12.5,17.92a20.222,20.222,0,0,1-6.743-5.263,18.448,18.448,0,0,1-3.286-5.45A6.662,6.662,0,0,1,1.944,4.318Z"
                                      transform="translate(-0.912 0)" fill="#3c3c3b"/>
                            </svg>

                            : ''
                    }
                    {/*<svg className={'ok'}><rect x="0.75" y="0.75" rx="1.5" width="1.5" height="1.5"></rect><rect x="0.75" y="0.75" rx="1.5" width="1.5" height="1.5"></rect></svg>*/}
                    <span> {text}  </span>
                </Link>





                ) : (
                <a target={target || '_self'}>
                    <span>{text}</span>
                </a>
            )}

            <svg id="Button_-_Hotline_-_Light" data-name="Button - Hotline - Light" xmlns="http://www.w3.org/2000/svg" width="231" height="44" viewBox="0 0 231 44">
                <g id="Rectangle_492" data-name="Rectangle 492" fill="none" stroke="#fff" stroke-width="1" opacity="0.3">
                    <rect width="231" height="44" rx="22" stroke="none"/>
                    <rect x="0.5" y="0.5" width="230" height="43" rx="21.5" fill="none"/>
                </g>
                <g id="Rectangle_493" data-name="Rectangle 493" fill="none" stroke="#fff" stroke-width="1" strokeDasharray="512 520">
                    <rect width="231" height="44" rx="22" stroke="none"/>
                    <rect x="0.5" y="0.5" width="230" height="43" rx="21.5" fill="none"/>
                </g>
                <g id="Group_4811" data-name="Group 4811" transform="translate(-791 -27)">
                    <text id="_88-02-_58810684-88" data-name="+88-02- 58810684-88" transform="translate(843 54)" fill="#fff" font-size="16" font-family="Avenir-Medium, Avenir" font-weight="500"><tspan x="0" y="0">+88-02- 58810684-88</tspan></text>
                    <path id="Path_8647" data-name="Path 8647" d="M4.965,13.295a21.287,21.287,0,0,0,7.084,5.528,11.057,11.057,0,0,0,3.964,1.169c.1,0,.187.008.283.008a3.289,3.289,0,0,0,2.546-1.09.09.09,0,0,0,.017-.021,10.7,10.7,0,0,1,.8-.829c.2-.186.4-.381.587-.58a2,2,0,0,0-.008-2.98l-2.5-2.491a2.027,2.027,0,0,0-1.464-.671,2.1,2.1,0,0,0-1.481.667l-1.489,1.484c-.137-.079-.279-.149-.412-.215a5.15,5.15,0,0,1-.458-.249A15.74,15.74,0,0,1,8.671,9.61,9.037,9.037,0,0,1,7.4,7.588c.391-.352.757-.721,1.111-1.082.125-.128.254-.257.383-.385a2.121,2.121,0,0,0,.691-1.492,2.1,2.1,0,0,0-.691-1.492L7.652,1.9c-.146-.145-.283-.286-.424-.431C6.953,1.189,6.666.9,6.383.638A2.078,2.078,0,0,0,4.919,0,2.139,2.139,0,0,0,3.438.642L1.882,2.192A3.179,3.179,0,0,0,.929,4.231a7.644,7.644,0,0,0,.578,3.315A19.273,19.273,0,0,0,4.965,13.295ZM1.944,4.318a2.189,2.189,0,0,1,.661-1.409L4.153,1.368a1.122,1.122,0,0,1,.765-.352,1.065,1.065,0,0,1,.749.361c.279.257.541.526.824.812.141.145.287.29.433.439l1.24,1.235a1.124,1.124,0,0,1,.391.775,1.124,1.124,0,0,1-.391.775c-.129.128-.258.261-.387.39-.387.39-.749.758-1.148,1.111l-.021.021a.808.808,0,0,0-.208.92c0,.012.008.021.012.033a9.747,9.747,0,0,0,1.46,2.366,16.613,16.613,0,0,0,4.01,3.639,5.961,5.961,0,0,0,.549.3,5.15,5.15,0,0,1,.458.249l.046.025a.872.872,0,0,0,.4.1.884.884,0,0,0,.62-.282l1.556-1.55a1.1,1.1,0,0,1,.761-.369,1.046,1.046,0,0,1,.736.369L19.52,15.23a1,1,0,0,1-.012,1.562c-.175.186-.358.365-.553.551a11.955,11.955,0,0,0-.869.9A2.288,2.288,0,0,1,16.3,19c-.071,0-.146,0-.216-.008A10.045,10.045,0,0,1,12.5,17.92a20.222,20.222,0,0,1-6.743-5.263,18.448,18.448,0,0,1-3.286-5.45A6.662,6.662,0,0,1,1.944,4.318Z" transform="translate(814.089 39)" fill="#fff"/>
                </g>
            </svg>

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
      padding: 0px 36px;
      box-sizing: border-box;
      border: 1px solid rgba(60, 60, 59, 0.5);

      svg {
        margin-right: 8px;
        z-index: 2;
      }

      span {
        transition: color 1s cubic-bezier(.25, .74, .22, .99);
        color: ${props => props.color || `#3C3C3B`};
        position: relative;
        margin-top: 5px;
        z-index: 2;
        line-height: 45px;
      }


      &:before {
        //bottom: 0;
        //content: "";
        //display: block;
        //position: absolute;
        //right: 0;
        //top: 0;
        //left: 0;
          //background-color: ${p => p.hoverBackground || '#3C3C3B'};
        //height: 100%;
        //width: 100%;
        //margin: auto;
        //transition: all .7s cubic-bezier(.25, .74, .22, .99);
        //border-radius: 22px;
        //transform: translateY(100px);
      }

      &:hover {
        span {
            //color: ${props => props.hoverColor || `#FFF`};
        }

        svg {
          line {
            stroke: ${props => props.hoverColor || '#FFF'};
          }

          path {
              //fill: ${props => props.hoverColor || '#FFF'};
          }
        }

        &:before {
          transform: translate(0);
        }
      }

      &:focus {
        color: #222222;
      }

      &::before,
      &::after {
        box-sizing: inherit;
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 12;
        border-radius: ${props => props.borderRadius || '22'}px;
        overflow: hidden;
      }

      &::before,
      &::after {
        // Set border to invisible, so we don't see a 4px border on a 0x0 element before the transition starts
        border: 1px solid transparent;
        width: 0;
        height: 0;
      }

      // This covers the top & right borders (expands right, then down)
      &::before {
        top: 0;
        left: 0;
      }

      // And this the bottom & left borders (expands left, then up)
      &::after {
        bottom: 0;
        right: 0;
      }

      &:hover {
        color: #222222;
      }

      // Hover styles
      &:hover::before,
      &:hover::after {
        width: 100%;
        height: 100%;
      }

      &:hover::before {
        border-top-color: #222222;
        border-right-color: #222222;
        transition: width 0.25s cubic-bezier(.25, .74, .22, .99), height 0.25s cubic-bezier(.25, .74, .22, .99) 0.25s;
      }
      &:hover::after {
        border-bottom-color: #222222;
        border-left-color: #222222;
        transition: border-color 0s cubic-bezier(.25, .74, .22, .99) 0.5s, width 0.25s cubic-bezier(.25, .74, .22, .99) 0.5s, height 0.25s ease 0.75s;
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
