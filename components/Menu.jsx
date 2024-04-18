import React from 'react';
import Link from 'next/link'
import styled from "styled-components";

const MyComponent = () => {
    return (
        <StyledMenu>
            <ul>
                <li><Link href={'/'}><a>Home</a></Link></li>
                <li><Link href={'/posts'}><a>Posts</a></Link></li>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.section`
  height: 80px;
  width: 100%;
  background-color: #DDD;
  border-bottom: 1px solid #DDD;
  position: fixed;
  top: 0;
  z-index: 99;

  ul {
    display: flex;
    justify-content: center;

    li {
      a {
        height: 80px;
        padding: 0 20px;
        display: flex;
        align-items: center;

      }
    }
  }
`;

export default MyComponent;
