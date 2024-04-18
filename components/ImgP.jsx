import styled from "styled-components";
import React from 'react';

export const Img = React.memo(({src, speed,position, objectFit, height, width, banner, alt, left, margin, right, top, bottom}) => {
    // const smoother = useContext(SmootherContext);
    //
    // useEffect(() => {
    //     smoother.effects("img", {speed: "auto"})
    // }, [])

    return (
        <StyledImg   className='global-image  ' objectFit={objectFit} margin={margin} position={position} left={left}
                   right={right} top={top}
                   bottom={bottom} height={height} width={width}>
            {
                src &&
                <img data-speed="0.2"  src={src ? src : 'images/static/blur.jpg'} alt={alt || 'Shanta Securities Limited'}/>

            }
        </StyledImg>

    );
});

const StyledImg = styled.div`
  position: ${props => props.position || 'absolute'};
  height: ${props => props.height || '100%'};
  width: ${props => props.width || '100%'};
  top: ${props => props.top || 0};
  left: ${props => props.left || 0};
  bottom: ${props => props.bottom || 0};
  right: ${props => props.right || 0};
  margin: ${props => props.margin || 0};
  overflow: hidden;
  img {
    width: 100%;
    height: 130%;
    object-fit: ${props => props.objectFit || 'cover'};
    position: absolute;
    top: -50px;
    left: 0;
    right: 0;
    bottom: 0;
    will-change: transform;
  }
`;