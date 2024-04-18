import React from 'react';
import styled from 'styled-components';
import {hover} from "../styles/globalStyleVars";
import Link from "next/link";


const Button = ({icondown,
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
                    hoverColor,
                    icon,padding, newtablink,iconvideo
                }) => {


    return (
        <StyledBtn className={`dc-btn fade-up`}
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
                   padding={padding}
        >
            {

// ok
                src ? (
                        <Link href={src || '/'}>
                            <a>
                                <span>


                        {text}  </span>
                            </a>
                        </Link>
                    )


                    : newtablink  ?


                        <a href={newtablink || '/'} target={target || '_self'}>
                    <span>  {
                        icon ? icondown ?
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20">
                                    <g id="download" transform="translate(-3.637 -3)">
                                        <path id="Path_8769" data-name="Path 8769" d="M4.692,16a1.054,1.054,0,0,1,1.056,1.053v2.105a1.051,1.051,0,0,0,.309.744h0a1.057,1.057,0,0,0,.746.308H19.47a1.054,1.054,0,0,0,1.056-1.053V17.053a1.056,1.056,0,0,1,2.111,0v2.105a3.162,3.162,0,0,1-3.167,3.158H6.8a3.162,3.162,0,0,1-3.167-3.158V17.053A1.054,1.054,0,0,1,4.692,16Z" transform="translate(0 0.684)" fill="#fff" fillRule="evenodd"/>
                                        <path id="Path_8770" data-name="Path 8770" d="M6.946,10.308a1.058,1.058,0,0,1,1.493,0l4.531,4.519L17.5,10.308A1.054,1.054,0,0,1,18.994,11.8L13.716,17.06a1.058,1.058,0,0,1-1.493,0L6.946,11.8A1.051,1.051,0,0,1,6.946,10.308Z" transform="translate(0.167 0.368)" fill="#fff" fillRule="evenodd"/>
                                        <path id="Path_8771" data-name="Path 8771" d="M12.692,3a1.054,1.054,0,0,1,1.056,1.053V16.684a1.056,1.056,0,0,1-2.111,0V4.053A1.054,1.054,0,0,1,12.692,3Z" transform="translate(0.444)" fill="#fff" fillRule="evenodd"/>
                                    </g>
                                </svg>
                                : iconvideo ?
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20.003" height="20" viewBox="0 0 20.003 20">
                                        <g id="Group_19478" data-name="Group 19478" transform="translate(-158 -480)">
                                            <path id="Path_8772" data-name="Path 8772" d="M19.558,25.667H17a2.318,2.318,0,0,0-4.449,0H1.667a.667.667,0,0,0,0,1.334H12.555A2.318,2.318,0,0,0,17,27h2.554a.667.667,0,0,0,0-1.334ZM14.78,27.333a1,1,0,1,1,1-1A1,1,0,0,1,14.78,27.333Z" transform="translate(157 471.336)"/>
                                            <path id="Path_8773" data-name="Path 8773" d="M18.909,1H3.094A2.1,2.1,0,0,0,1,3.094V13.575a2.1,2.1,0,0,0,2.094,2.094H18.909A2.1,2.1,0,0,0,21,13.575V3.094A2.1,2.1,0,0,0,18.909,1Zm.76,12.575a.761.761,0,0,1-.76.76H3.094a.761.761,0,0,1-.76-.76V3.094a.761.761,0,0,1,.76-.76H18.909a.761.761,0,0,1,.76.76Z" transform="translate(157 479)"/>
                                            <path id="Path_8774" data-name="Path 8774" d="M18.354,9.435,13.02,6.1A.667.667,0,0,0,12,6.667v6.668a.667.667,0,0,0,1.02.565l5.334-3.334a.667.667,0,0,0,0-1.133Zm-5.021,2.7V7.867L16.743,10Z" transform="translate(153.334 477.334)"/>
                                        </g>
                                    </svg>


                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                        <g id="login_2" data-name="login 2" transform="translate(-3.25)">
                                            <path id="Path_8718" data-name="Path 8718" d="M12.107,3.25a.857.857,0,1,0,0,1.714,8.286,8.286,0,0,1,0,16.571.857.857,0,1,0,0,1.714,10,10,0,0,0,0-20Z" transform="translate(1.143 -3.25)" fill="#fff"/>
                                            <path id="Path_8719" data-name="Path 8719" d="M11.5,9.713A.857.857,0,1,1,12.713,8.5l3.429,3.429a.857.857,0,0,1,0,1.212L12.713,16.57A.857.857,0,1,1,11.5,15.358l1.965-1.965H4.107a.857.857,0,0,1,0-1.714h9.359Z" transform="translate(0 -2.536)" fill="#fff"/>
                                        </g>
                                    </svg>

                            : ''

                    }{text}</span>
                        </a>

                        : (
                            <a target={target || '_self'}>
                    <span>  {
                        icon ? icondown ?

                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20">
                                    <g id="download" transform="translate(-3.637 -3)">
                                        <path id="Path_8769" data-name="Path 8769" d="M4.692,16a1.054,1.054,0,0,1,1.056,1.053v2.105a1.051,1.051,0,0,0,.309.744h0a1.057,1.057,0,0,0,.746.308H19.47a1.054,1.054,0,0,0,1.056-1.053V17.053a1.056,1.056,0,0,1,2.111,0v2.105a3.162,3.162,0,0,1-3.167,3.158H6.8a3.162,3.162,0,0,1-3.167-3.158V17.053A1.054,1.054,0,0,1,4.692,16Z" transform="translate(0 0.684)" fill="#fff" fillRule="evenodd"/>
                                        <path id="Path_8770" data-name="Path 8770" d="M6.946,10.308a1.058,1.058,0,0,1,1.493,0l4.531,4.519L17.5,10.308A1.054,1.054,0,0,1,18.994,11.8L13.716,17.06a1.058,1.058,0,0,1-1.493,0L6.946,11.8A1.051,1.051,0,0,1,6.946,10.308Z" transform="translate(0.167 0.368)" fill="#fff" fillRule="evenodd"/>
                                        <path id="Path_8771" data-name="Path 8771" d="M12.692,3a1.054,1.054,0,0,1,1.056,1.053V16.684a1.056,1.056,0,0,1-2.111,0V4.053A1.054,1.054,0,0,1,12.692,3Z" transform="translate(0.444)" fill="#fff" fillRule="evenodd"/>
                                    </g>
                                </svg>

                                :
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                    <g id="login_2" data-name="login 2" transform="translate(-3.25)">
                                        <path id="Path_8718" data-name="Path 8718" d="M12.107,3.25a.857.857,0,1,0,0,1.714,8.286,8.286,0,0,1,0,16.571.857.857,0,1,0,0,1.714,10,10,0,0,0,0-20Z" transform="translate(1.143 -3.25)" fill="#fff"/>
                                        <path id="Path_8719" data-name="Path 8719" d="M11.5,9.713A.857.857,0,1,1,12.713,8.5l3.429,3.429a.857.857,0,0,1,0,1.212L12.713,16.57A.857.857,0,1,1,11.5,15.358l1.965-1.965H4.107a.857.857,0,0,1,0-1.714h9.359Z" transform="translate(0 -2.536)" fill="#fff"/>
                                    </g>
                                </svg>

                            : ''

                    }{text}</span>
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
            width: ${props => props.width || 'fit-content'};
            height: 100%;
            align-items: center;
            justify-content: center;
            font-size: ${props => props.fontSize || '16'}px;
            font-weight: ${props => props.fontWeight || 500};
            margin: 0;
            line-height: ${props => props.lineHeight || '24'}px;
            background-color: ${props => props.background || `#978C21`};
            position: relative;
            border-radius: ${props => props.borderRadius || '22'}px;
            overflow: hidden;
            z-index: 0;
            transition: border 1s cubic-bezier(.25, .74, .22, .99);
            padding:${props => props.padding || `0px 36px`} ;
            box-sizing: border-box;
            border: ${props => props.border || `none`};
            border-color:  ${props => props.borderColor || `transparent`};
            border-style: ${props => props.border ? 'solid' : `transparent`};
            span {
                transition: all 1s cubic-bezier(.25, .74, .22, .99);
                color: ${props => props.color || `#FFFFFF`};
                position: relative;
                z-index: 2;

                top: 2px;

                line-height: 45px;
                svg{
                    margin-right: 8px;
                    line {
                        transition: all 1s cubic-bezier(.25, .74, .22, .99);

                    }
                    path {
                        transition: all 1s cubic-bezier(.25, .74, .22, .99);
                    }
                }
            }


            &:before {
                bottom: 0;
                content: "";
                display: block;
                position: absolute;
                right: 0;
                top: 0;
                left: 0;
                background-color: ${p => p.hoverBackground || '#3C3C3B'};
                height: 100%;
                width: 100%;
                margin: auto;
                transition: all 1s cubic-bezier(.25, .74, .22, .99);
                border-radius: 22px;
                transform: translateY(100px);
            }

            &:hover {
                    //border-color: ${hover};
                span {
                    color: ${props => props.hoverColor || `#FFF`};
                }

                svg {
                    line {
                        stroke: ${props => props.hoverColor || '#FFF'};
                    }
                    path {
                        fill: ${props => props.hoverColor || '#FFF'};
                    }
                }

                &:before {
                    transform: translate(0);
                }
            }

            &:focus {
                color: #222222;
            }
        }
    }

`;


export default React.memo(Button);
