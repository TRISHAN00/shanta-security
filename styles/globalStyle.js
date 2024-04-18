import {createGlobalStyle, css} from 'styled-components';
import {book, hover, text, title} from './globalStyleVars';

function createCSS() {
    let styles = '';

    for (let i = 2; i < 20; i += 1) {
        styles += `
        .anim-active.fade-up:nth-child(${i}) {
          transition-delay: ${i * .12}s;
        }
     `
    }

    for (let a = 2; a < 100; a += 1) {
        styles += `
        .anim-active.fade-right span:nth-child(${a}) {
          transition-delay: ${a * .03}s;
        }
     `
    }

    for (let s = 2; s < 100; s += 1) {
        styles += `
        .custom-loop:nth-child(${s}) {
          img{
          transform: rotate(${90 * s * 5}deg);
        
          }
           .rotate_svg svg{
          transform: rotate(${90 * s * 5}deg);
        
          }
             
             .draw svg{
          transform: rotate(${90 * s * 5}deg);
        
          }
        }
     `
    }


    for (let s = 2; s < 100; s += 1) {
        styles += `
        .blog-single-single-wrp:nth-child(${s}) {
          svg{
          transform: rotate(${90 * s + 90}deg);
        
          }
        }
     `
    }

    return css`${styles}`;
}

export default createGlobalStyle`

  ${createCSS()}
  #root {
    min-height: 100vh;
    overflow-x: hidden;
  }

 

  //container
  @media (min-width: 1200px) {
    .container, .container-lg, .container-md, .container-sm, .container-xl {
      max-width: 90%;
    }
  }

  //split text
  .fade-up {
    overflow: hidden
  }

  .split-line {
    overflow: hidden;
  }


  //typography
  h1 {
    font-family: ${book} !important;
    font-size: 136px;
    line-height: 163px;
  }

  h2 {
    font-family: ${book} !important;
    font-size: 60px;
    line-height: 72px;
  }

  h3 {
    font-family: ${title} !important;
    font-size: 44px;
    line-height: 56px;
    font-weight: 500;
  }

  h4 {
    font-family: "Avenir Heavy" ;
    font-size: 40px;
    line-height: 52px;
  }

  h5 {
    font-family: "Avenir Heavy";
    font-size: 32px;
    line-height: 44px;
  }

  h6 {
    font-family: "Avenir Heavy";
    font-size: 28px;
    line-height: 36px;
  }

  @media (max-width: 767px) {
    h2 {
      font-size: 40px;
      line-height: 48px;
    }

    h3 {
      font-size: 36px;
      line-height: 42px;
    }

    h5 {
      font-size: 28px;
      line-height: 36px;
    }

    h5 {
      font-size: 28px;
      line-height: 36px;
    }

    h6 {
      font-size: 28px;
      line-height: 36px;
    }
  }
html{
    /* Hide scrollbar for Chrome, Safari and Opera */

    &::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
}

  body {
    font-family: 'Avenir', Arial, Helvetica, freesans, sans-serif !important;
    font-style: normal;
    margin: 0;
    color: ${text};
    padding: 0;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    touch-action: manipulation;
    //font-kerning: none;
    //-webkit-text-rendering: optimizeSpeed;
    //text-rendering: optimizeSpeed;
    //-webkit-transform: translateZ(0);
    //transform: translateZ(0);


    /* Hide scrollbar for Chrome, Safari and Opera */

    &::-webkit-scrollbar {
      display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  sub, sup {
    vertical-align: top;
  }

  a {
    transition: color .3s ease;
    text-decoration: none;

    &:hover {
      color: ${hover} !important;
      text-decoration: none;
      outline: none;
      box-shadow: none;
    }

    &:focus {
      text-decoration: none;
      outline: none;
      box-shadow: none;
      color: ${text};
    }
  }

  ::selection {
    background: ${hover};
    color: #FFF;
  }

  p, a, h4, h3, h5, h6 {
    color: ${text};
    font-weight: 400;
    margin: 0;
  }

  h1, h2 {
      //font-family: ${title};
    margin: 0;
  }

  ul, ol {
    margin: 0;
    padding: 0
  }

  li {
    list-style: none;
  }

  img {
    max-width: 100%;
    object-fit: contain;
  }


  .btn:focus, button:focus, button:active:focus, .btn.active.focus, .btn.active:focus, .btn.focus, .btn:active.focus, .btn:active:focus, .btn:focus {
    outline: none;
    box-shadow: none;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    border: 1px solid rgba(0, 0, 0, 0);
    -webkit-text-fill-color: #000;
    -webkit-box-shadow: 0 0 0px 1000px rgba(0, 0, 0, 0) inset;
    transition: background-color 5000s ease-in-out 0s;
  }


  table {
    width: 100%;
  }

  form div {
    position: relative;
  }

  .form-control {
    box-shadow: none;
    outline: 0;
    border-radius: 0;

    &:focus {
      box-shadow: none;
    }
  }

  .p-0 {
    padding: 0 !important;
  }

  .pl-0 {
    padding-left: 0;
  }

  .pr-0 {
    padding-right: 0;
  }

  .pt-200 {
    padding-top: 200px;
    @media (max-width: 767px) {
      padding-top: 100px;
    }
  }

  .pt-80 {
    padding-top: 80px;
    @media (max-width: 767px) {
      padding-top: 80px;
    }
  }

  .pb-200 {
    padding-bottom: 200px;
    @media (max-width: 767px) {
      padding-bottom: 100px;
    }
  }

  .pt-160 {
    padding-top: 160px;
    @media (max-width: 767px) {
      padding-top: 100px;
    }
  }

  .pb-160 {
    padding-bottom: 160px;
    @media (max-width: 767px) {
      padding-bottom: 100px;
    }
  }

  .pb-130 {
    padding-bottom: 130px;
    @media (max-width: 767px) {
      padding-bottom: 100px;
    }
  }

  .pt-100 {
    padding-top: 100px;
    @media (max-width: 767px) {
      padding-top: 60px;
    }
  }

  .pb-100 {
    padding-bottom: 100px;
    @media (max-width: 767px) {
      padding-bottom: 60px;
    }
  }

  .pt-80 {
    padding-top: 80px;
    @media (max-width: 767px) {
      padding-top: 40px;
    }
  }

  .pb-80 {
    padding-bottom: 80px;
    @media (max-width: 767px) {
      padding-bottom: 40px;
    }
  }


  .MuiDrawer-paper {
    width: 500px !important;
    padding: 20px;
    @media (max-width: 767px) {
      width: 100% !important;
    }
  }

  .swiper-button-disabled {
    opacity: 0 !important;
  }

  @media (min-width: 1500px) {
    .container {
      //min-width: 1366px;
      min-width: 85%;
      margin: auto;
    }
  }

  @media (max-width: 1199px) and (min-width: 768px) {
    .container, .container-lg, .container-md, .container-sm {
      max-width: 90%;
      margin: auto;
    }
  }


  @media (max-width: 767px) {
    .container, .container-sm {
      max-width: 100%;
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }


  //react select
  .css-yk16xz-control, .css-1pahdxg-control {
    height: 50px;
    border-radius: 0 !important;
    padding-left: 5px;
    font-size: 16px;
    outline: none !important;
    border-color: #D9D9D9 !important;
    box-shadow: none !important;

    .css-1wa3eu0-placeholder {
      font-weight: 300;
      line-height: 21px;
      color: rgba(0, 0, 0, 0.5);
      outline: none;
    }

    .css-1okebmr-indicatorSeparator {
      display: none;
    }

    .css-tlfecz-indicatorContainer, .css-1gtu0rj-indicatorContainer {
      margin-right: 10px;
    }
  }

  .css-2613qy-menu {
    border-radius: 0 !important;
    margin-top: 0 !important;
  }

  //animation class


  .info-window {
    max-width: 200px;
  }

  .gm-style-iw {
    border-radius: 0 !important;
  }

  .swiper-pagination-bullet {
    outline: none;
  }

  .css-nmuc1a-menu {
    z-index: 5 !important;
  }


  .map-info__img {
    img {
      height: 100px;
      margin-bottom: 12px;
      object-fit: cover;
    }
  }

  .map-info__content {
    h4 {
      font-size: 20px;
    }

    p {
      margin-bottom: 5px;
    }
  }

  .overlay {
    position: fixed;
    height: 0;
    width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 9;
    opacity: 0;
    visibility: hidden;
    background: rgba(0, 0, 0, 0.5);

    &.show {
      display: block;
    }
  }

  .form-control.has-error {
    border-color: #dc004e !important;
  }

  .has-error .find-retainer-filter__control {
    border-color: #dc004e !important;
  }

  //preloader
  .content-loader {
    position: absolute;
    height: 70%;
    width: 70%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }

  .loading-before-submit {
    position: fixed;
    height: 100vh;
    width: 100%;
    bottom: 0;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.65);
    z-index: 9;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      height: 40px;
    }
  }


  .swiper-slide {
    height: auto;
  }

  .slick-slide {
    div {
      outline: none !important
    }
  }

  button, button:active, button:focus, button:focus-visible {
    outline: none !important;
    box-shadow: none !important;
  }


  .hover {
    position: relative;
    overflow: hidden;

    span {
      z-index: 2;
    }

    &:after {
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      background-color: ${hover};
      transition: all .5s ease;
      border-radius: 50%;
      transform: translateY(110%);
    }

    &:hover {
      &:after {
        transform: translateY(0);

      }
    }
  }


  .modal-backdrop {
    background-color: rgb(34 31 31 / 90%);
    min-width: 100%;
    //z-index: 9999;

    &.show {
      opacity: 1;
    }
  }


  .valid {
    color: ${hover};
    position: absolute;
    font-size: 12px;
    top: 44px;
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }


  //menu fixed
  .scroll-down .desktop-menu {
    transform: translate3d(0, -100%, 0);
  }

  body.scroll-up {
    .desktop-menu {
      background: rgba(255, 255, 255, 1) !important;
      border-bottom: 1px solid rgba(60, 60, 59, 0.1);

      .burger-click {
        line {
          stroke: #3C3C3B !important;
        }
      }

      .normal_logo {
        opacity: 0;
        visibility: hidden;
        display: none;

      }

      .sticky_logo {

        opacity: 1;
        visibility: visible;
        display: block;
      }

      #Ellipse_18, #Ellipse_19 {
        stroke: #3C3C3B;
      }

      #Path_8648 {
        fill: #3C3C3B;
      }

      .call {
        g, #Ellipse_18, #Ellipse_19 {
          stroke: #3C3C3B;
        }

        #_16634, #Path_8647 {
          fill: #3C3C3B;
        }

        #Group_4811 {
          stroke: none;
        }
      }
    }


    .Mobile-menu-wrap {
      background: #fff !important;

      .forNormal {
        display: none;
      }

      .forClose {
        display: block !important;
      }

      .hamburger {
        line {
          stroke: #3C3C3B;
        }
      }
    }
  }

  body.sticky {
    .desktop-menu {
      background: rgba(255, 255, 255, 1) !important;

      .burger-click {
        line {
          stroke: #3C3C3B !important;
        }
      }

      .normal_logo {
        opacity: 0;
        visibility: hidden;
        display: none;

      }

      .sticky_logo {

        opacity: 1;
        visibility: visible;
        display: block;
      }

      #Ellipse_18, #Ellipse_19 {
        stroke: #3C3C3B;
      }

      #Path_8648 {
        fill: #3C3C3B;
      }

      .call {
        g, #Ellipse_18, #Ellipse_19 {
          stroke: #3C3C3B;
        }

        #_16634, #Path_8647 {
          fill: #3C3C3B;
        }

        #Group_4811 {
          stroke: none;
        }
      }
    }


    .Mobile-menu-wrap {
      background: #fff !important;

      .forNormal {
        display: none;
      }

      .forClose {
        display: block !important;
      }

      .hamburger {
        line {
          stroke: #3C3C3B;
        }
      }
    }
  }

  .form-control:disabled {
    background-color: transparent;
  }

  @media (max-width: 600px) {
    .prevent-overflow {
      overflow: hidden;
      height: 100vh;
    }
  }

  .Toastify__toast-container {
    z-index: 99999999;
  }

  .mobile-menu {
    #fb-root, .fb_reset {
      display: none !important;
      opacity: 0 !important;
      visibility: hidden !important;
    }
  }

  .slick-slide {
    -webkit-transform: translate3d(0, 0, 0);
  }

  .reveal, .revealFast {
    overflow: hidden;
    height: 100%;
    width: 100%;
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;

    img {
      transform-origin: left;
    }

    .global-image {
      background: transparent;
    }
  }

  //calender
  ._3efP_GeH5kyBAzqnLzL._kN_bCa3VNYpqFLH311L {
    border-radius: 0 !important;
  }

  //video modal 
  .modal-video-close-btn:before, .modal-video-close-btn:after {
    background-color: ${hover};
  }

  .page-loader {
    position: fixed;
    background-color: rgb(36, 24, 67);
    width: 100vw;
    z-index: 999999999999999999;
    overflow: hidden;
    //opacity: 0;
    //height: 100vh;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    //left: 0; //width: 0;
    //transition: all 2.6s ease;
    //.anim-logo {
    //  width: 130px;
    //  overflow: hidden;
    //  height: fit-content;
    //  position: absolute;
    //  left: 0;
    //  right: 0;
    //  top: 0;
    //  bottom: 0;
    //  opacity: 0;
    //  margin: auto;
    //  z-index: 2;
    //
    //  img {
    //    height: 55px;
    //  }
    //}

    //.hide-logo {
    //  background-color: #010A1A;
    //  width: 50%;
    //  height: 100vh;
    //  top: 0;
    //  left: 0;
    //  right: 0;
    //  margin: auto;
    //  position: absolute;
    //  z-index: 999;
    //}

    .pre-loader__img {
      //position: fixed;
      height: 100px;
      width: 100px;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgb(36, 24, 67);
      z-index: 99999999;

      //flex: 1;
      margin: auto;
      opacity: 0;

      img {
        display: block;
      }

      .top {
        height: 8px;
      }

      .bottom {
        height: 30px;
        margin-top: 5px;
        animation: flip 1s linear infinite;
      }

      @keyframes flip {
        0% {
          transform: rotateY(0deg)
        }
        100% {
          transform: rotateY(180deg)
        }
      }
    }

  }

  //------------------------animation
  //text animation 
  .split-parent {
    overflow: hidden;
  }

  .split-child {
    overflow: hidden;
  }

  .reveal {
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    img {
      transform-origin: left;
    }

    .global-image {
      background: transparent;
    }
  }


  //image reveal 
  //image reveal 


  //.reveal  , .reveal_nox{
  //  overflow: hidden;
  //
  //  img {
  //    transform-origin: left;
  //    inset: 0px;
  //  }
  //}
  //
  //.parallax-text, .parallax-shadow, .parallax-inner-down, .parallax-inner, .parallax-fast, .reveal , .reveal_nox{
  //  transform: inherit;
  //
  //  p, ul, .title, .global-image, svg, img {
  //    transform: inherit;
  //
  //  }
  //}


  //scroll menu 

  //menu fixed
  .scroll-down .desktop-menu {
    //transform: translate3d(0, -100%, 0);


  }


  .box {
    top: 0px;
  }

  .swiper-wrapper {
  }

  //modal for bod version 1
  .modal-backdrop {
    //background-color: #fff;
    opacity: 1 !important;
    z-index: 9999999;
    background-color: rgba(34, 31, 31, 0.9);
    min-width: 100%;
  }

  .modal {
    height: 100vh;
    overflow: hidden !important;
    z-index: 9999999;
    .dc-btn{
      #Contact_Us{
        transform: translate(10px, 15px);
      }
    }
    #Ellipse_18 {
      opacity: 1;
    }

    #Ellipse_19 {
      stroke: ${hover}
    }

    .modal-data__content {
      border-top: 1px solid rgba(60, 60, 59, 0.3);
      padding-top: 40px;
      padding-left: 0;
    }

    &.modal {
      .modal-close {

      }

      .modal-body {
        //padding-top: 50px;
      }
    }

    .modal-body {
      padding: 0;
    }

    .modal-content {
      border: 0;
    }

    .modal-body {
      .modal-close {
        position: relative;
        height: 45px;
        width: 45px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        //top: -30px;
        right: 0px;
        top: 30px;
        overflow: hidden;


        svg {
          #Ellipse_19 {
            transition: 0.7s all ease;
          }
        }

        &:hover {
          svg {
            #Ellipse_19 {
              opacity: 1;
              stroke-dasharray: 142px;
            }
          }
        }
      }

      .hover:after {
        border-radius: 50%;
      }

      .for-close {

        align-items: flex-end;
        justify-content: flex-end;

      }

      .modal-data {
        margin-top: 40px;
        width: 100%;
        display: flex !important;
        flex-direction: row;
        padding-left: 0;

        &__img {

          img {
            object-fit: cover;
            width: 100%;
            margin-bottom: 20px;
          }

          h4 {
            font-size: 20px;
            font-weight: 500;
            line-height: 28px;
            font-family: ${title};
          }

          p {
            color: rgba(60, 60, 59, 0.5);
            font-size: 16px;
            font-weight: 500;
            line-height: 32px;
          }
        }

        &__content {
          h4 {
            font-size: 26px;
            line-height: 32px;
            font-weight: bold;
            margin-bottom: 20px;
          }

          ul {

            padding-bottom: 20px;
            border-bottom: 1px solid #221F1F;
            margin-bottom: 40px;

            li {
              position: relative;
              padding-left: 25px;
              font-size: 16px;
              line-height: 22px;
              margin-bottom: 10px;

              &:after {
                content: '';
                height: 10px;
                width: 10px;
                background-color: ${hover};
                border-radius: 50%;
                left: 0;
                top: 7px;
                //bottom: 0;
                //margin: auto;
                position: absolute;
              }
            }

          }

          p {
            font-size: 16px;
            line-height: 22px;
            margin-bottom: 20px;

            &:nth-last-child(1) {
              margin-bottom: 0;
            }
          }
        }

        .scroll-div {
          overflow: hidden;
          padding-right: 10px;
          padding-bottom: 10px;
        }
      }
    }

    .modal-dialog {
      width: 90%;
      max-width: unset;
      margin: 1.75rem auto;
      padding: 0;
    }

    .simplebar-track {
      right: -12px;
    }

    .simplebar-track.simplebar-vertical {
      width: 6px;
    }
  }

  @media (max-width: 991px) {
    .modal-dialog {
      width: 95%;
    }
  }

  @media (max-width: 767px) {
    &.modal {
      .modal-close {
        right: 15px !important;
        top: 20px !important;
      }

      .modal-body {
        //padding-top: 50px;
      }
    }

    .modal {
      height: 100% !important;
      overflow-y: auto !important;
      min-height: 100%;

      .col-sm-7 {
        margin: 0;
      }
    }

    .modal-data__img {
      min-width: 100%;

      img {
        max-width: 100%;
      }
    }

    .modal-data__content {
      min-width: 100%;
      margin-top: 40px !important;
    }

    .modal-dialog {
      width: 100%;
      margin: 0;
    }

    .modal-content {
      //padding: 50px 0;
      padding: 0;
      overflow: hidden;
      height: 100vh;
    }
    .modal-data__content{
      padding-bottom: 60px;
    }

    .modal-body {
      flex: 0;
      padding: 0;

      .modal-data {
        flex-wrap: wrap;
        margin-top: 80px;
      }

      .modal-close {
        right: 15px;
        top: -10px;
      }
    }


  }

  .gph_modal .modal-dialog {
    margin: 0px;
    width: 100%;
    height: 100%;
    background: rgb(244, 244, 244);
  }

  .feedback-form {
    .modal-data__content {
      padding-top: 0;
    }

    .svg-icon {
      position: absolute;
      bottom: -100px;
      left: -100px;
    }


    .modal-body {
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      @media (max-width: 767px) {
        align-items: unset;
        justify-content: unset;
      }

      .container:first-child {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
      }
    }

    .modal-body .modal-data {
      display: flex !important;
      height: 100%;
      align-items: center;
      justify-content: center;
    }

    [data-simplebar] {
      overflow: hidden;
    }
  }


  //investor popup
  .investor_popup {

    .hints{
      font-size: 14px !important;
      color: gray !important;
      margin-bottom: 25px !important;
      margin-top: 5px;
      font-weight: 500;
    }

    .react-select__value-container {
      div:nth-of-type(5) {
        svg {
          display: none;
        }
      }
    }


    .custom {
      border: 1px solid black;
      border-collapse: collapse;

      td, th, td {
        border: 1px solid black;

      }
    }

    .modal-data__content {
      border-top: none;
    }

    .dc-btn a:hover {
      span {
        color: white;
      }
    }

    .form {
      input[type="Date"] {
        color: #3C3C3B;

      }

      .react-datepicker-wrapper {
        width: 100%;
      }

      .react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::before {
        left: -25px;
      }

      .react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::after {
        left: -25px;

      }

      .react-datepicker__input-container {
        width: 100%;

        input {
          width: 100%;

          font-size: 14px;
          font-weight: 500;
          color: #3C3C3B;
          border-right: none;
          border-left: none;
          border-top: none;
          outline: none;
          box-shadow: none;
          padding-left: 0;
          padding-right: 0;
          padding-bottom: 10px;
          padding-top: 0;
          height: 33px;
          margin-bottom: 25px;
          border-bottom: 1px solid rgba(60, 60, 59, 0.5);

          &::placeholder {
            font-size: 14px;
            font-weight: 500;
            color: rgba(60, 60, 59, 0.5);
          }
        }

      }

      .form-control {
        font-size: 14px;
        font-weight: 500;
        color: #3C3C3B;
        border-right: none;
        border-left: none;
        border-top: none;
        outline: none;
        box-shadow: none;
        padding-left: 0;
        padding-right: 0;
        padding-bottom: 10px;
        padding-top: 0;
        height: 33px;
        margin-bottom: 25px;
        border-bottom: 1px solid rgba(60, 60, 59, 0.5);

        &::placeholder {
          font-size: 14px;
          font-weight: 500;
          color: rgba(60, 60, 59, 0.5);
        }
      }

      .react-select__indicator {
        padding: 0;
      }

      .react-select__placeholder {
        margin: 0;
        padding: 0;
        font-size: 14px;
        font-weight: 500;
        color: rgba(60, 60, 59, 0.5);
      }

      .react-select__control {
        border-bottom: 1px solid rgba(60, 60, 59, 0.5);
        margin-bottom: 0px;
        border-right: none;
        border-left: none;
        border-top: none;
        outline: none;
        box-shadow: none;
        padding-left: 0;
        padding-right: 0;

        .react-select__indicator-separator {
          display: none;
        }

        .react-select__input-container {
          padding: 0;
          margin: 0;
        }

        .react-select__single-value {
          margin: 0;
          padding: 0;
          font-size: 14px;
          font-weight: 500;
          color: #3C3C3B;
        }

        .react-select__value-container {
          padding-left: 0;
          padding-right: 0;
          padding-top: 0;
          padding-bottom: 0;
        }
      }
    }

    .result-wrp {
      p {
        color: rgba(60, 60, 59, 0.5);
        margin-bottom: 9px !important;

        &.last {
          margin-top: 30px;
        }
      }

      h3 {
        font-size: 32px;
        font-weight: 500;
        line-height: 44px;
        color: #978C21;

      }
    }

    .simplebar-content {
      &::-webkit-scrollbar {
        display: none;
      }
    }

    .invest-content {
      margin-top: 80px;
      padding-top: 80px;
      border-top: 1px;
      display: block;
      border-style: solid;
      border-color: #3C3C3B;
      border-bottom: none !important;

      ul {
        margin: 0;
        padding-left: 0;
        border: none !important;

        li {
          font-size: 16px;
          line-height: 24px;
          font-weight: 500;
          color: #3C3C3B;

          span {
            font-family: "Avenir Heavy";
          }

          p {
            font-size: 20px;
            line-height: 24px;
            font-weight: 500;
            color: #3C3C3B;
            margin: 0 !important;
          }

          padding: 0px 0 20px 35px !important;
          z-index: 50;
          position: relative;
          counter-increment: count;
          border-bottom: 1px solid rgba(198, 198, 198, 0.5);
          margin-bottom: 20px !important;

          &:first-child {
            padding-top: 0;
          }

          &:last-child {
            padding-bottom: 0;
            border-bottom: 0;
            margin-bottom: 0 !important;
          }

          &:first-child:before {
            margin-top: 0;
          }

          &:last-child:before {
            margin-bottom: 0;
          }

          &:after {
            content: counter(count, upper-alpha) !important;
            position: absolute !important;;
            height: 20px !important;;
            width: 20px !important;;
            padding: 1px 0px 0px 0px !important;;
            //margin: 35px 0;
            font-size: 12px;
            line-height: 20px;
            font-weight: 500;
            border: 1px solid #FFFFFF;
            background-color: #978C21;
            border-radius: 50%;
            color: white !important;;
            top: 0 !important;;
            left: 0;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }

    }


    @media (max-width: 767px) {
      .scroll-div {
        padding: 0 !important;

      }

      .modal-data {
        margin-top: 0 !important;
      }

      .modal-close {
        right: 15px !important;
        //top: 0px !important;
      }

      .result {
        margin-top: 60px;
      }

      .invest-content {
        padding-top: 60px;
        margin-bottom: 60px;
      }

      .modal-data__content {
        margin-top: 60px !important;
        padding: 0 15px !important;
      }
    }
  }


  .career_feedback_form {

    .dc-btn a:hover span{
      color:black;
    }
    .for-close {
      position: relative;

      .col-md-12 {
        .title {
          padding-top: 80px;
          padding-bottom: 0;
          padding-bottom: 15px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.3);
          @media (max-width: 767px) {
            padding-top: 0;
          }
        }

      }

      .modal-close {
        position: absolute;
        right: 15px;
        top: 30px;
      }
    }

    .career_form {
      margin: 0 15px;

      .container {
        max-width: 100%;

        .formContact {
          padding: 0;
        }
      }

      .popup_data {
        h3 {
          font-size: 24px;
          font-weight: 500;
          line-height: 32px;
          color: #978C21;
          margin-bottom: 15px;
        }

        p {
          margin-bottom: 40px;

          &:last-child {
            margin-bottom: 0;
          }
        }

        ul {
          margin: 0 0 0px !important;
          padding-left: 0;
          border: none !important;


          @media (max-width: 768px) {
            margin-bottom: 40px;
          }

          li {

            color: #3C3C3B;

            p {
              font-size: 20px;
              line-height: 24px;
              font-weight: 500;
              color: #3C3C3B;
              margin: 0 !important;
            }

            padding: 0px 0 25px 40px;
            z-index: 50;
            position: relative;
            counter-increment: count;
            border-bottom: 1px solid rgba(198, 198, 198, 0.5);
            margin-bottom: 25px;

            &:first-child {
              padding-top: 0;
            }

            &:last-child {
              padding-bottom: 0;
              border-bottom: 0;
            }

            &:first-child:before {
              margin-top: 0;
            }

            &:last-child:before {
              margin-bottom: 0;
            }

            &:after {
              display: none;
            }

            &:before {
              content: counter(count, interger);
              position: absolute;
              height: 20px;
              width: 20px;
              margin: 0;
              font-size: 12px;
              line-height: 20px;
              font-weight: 500;
              border: 1px solid #978C21;
              background-color: #978C21;
              border-radius: 50%;
              color: white;
              top: -4px;
              left: 0px;
              display: flex;
              align-items: center;
              justify-content: center;

            }
          }
        }

      }
    }

  }


  //will be removed 
  //.split-parent {
  //  position: relative;
  //}
  //
  //.split-child {
  //  position: absolute;
  //  top: 0;
  //  left: 0;
  //}

  .loader {
    width: 0;
    height: 100%;
    position: fixed;
    background-color: black;
    color: rgb(136, 136, 136);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    z-index: 99999999999;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
  }

  .fadeTranslate-enter {
    opacity: 0;
    position: fixed;
  }

  .fadeTranslate-enter.fadeTranslate-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in 500ms, transform 500ms ease-in-out 500ms;
  }

  .fadeTranslate-exit {
    opacity: 1;
    position: fixed;
  }

  .fadeTranslate-exit.fadeTranslate-exit-active {
    opacity: 0;
    transition: opacity 1000ms ease-in, transform 1000ms ease-in-out;
  }


  //toast 


  //page transation 
  //page transition
  .page-transition {
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-color: #3C3C3B;
    z-index: 999999999;
    //display: none;
    //opacity: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    .logo {
      height: 80px;
      opacity: 0;
    }
  }

  body {
    &.open_menu {
      overflow: hidden;

      .overlay {
        opacity: 1;
        visibility: visible;
        height: 100vh;
        transition-delay: 0.2s;
      }
    }
  }

  .global-image {
    overflow: hidden;
  }

  //dark theme 
  body.scroll-up.dark-theme .desktop-menu .normal_logo{
    display: block !important;
    opacity: 1 !important;
    visibility: visible !important;
  }
  body.scroll-up.dark-theme .desktop-menu .sticky_logo{
    display: none !important;
    opacity: 0 !important;
    visibility: hidden !important;
  }
  .dark-theme {
    transition: all 0.5s ease;

      
      .blog_details{
          ul{
              li{
                  color: white;
              }
          }
      }
    .investor_poupup{
      input:-internal-autofill-selected{
        color: white !important;

      }
    }
    .investor_popup .form .react-select__control .react-select__single-value{
      color: white;

    }
    .blog-slider__slider-wrap__inner{
      h3{
        color: white;

      }
    }
    .security-seal__text ol li ,  .security-seal__text a{
      color: white;
    }
    .date_wise_filter .flex .title h6{
      color: white;
    }
    .modal{
      .modal-data__content{
        border-top: 1px solid white !important;
      }
    }
    .modal .modal-body {
      p, a, ul li, h1, h2, h3, h4, h5, h6 {
        color: white !important;
      }
      .dc-btn{
        #Rectangle_492 , #Rectangle_493{
          stroke: white !important;
        }
        #Contact_Us{
          fill: white !important;
        }
      }
    }

    .black {
      background: #000 !important;
    }

    .search-desktop {
      //background: #000 !important;
      //border-top: 1px solid rgba(255, 255, 255, 0.5);
    }

    .search-desktop form .search-input button {
      color: white;

    }

    .canvasjs-chart-container {
      filter: invert(1);
    }

    .search-desktop .clickto_close {
      svg {
        path {
          stroke: white;
          fill: white;
        }
      }
    }

    //.search-desktop form .search-input .form-control {
    //  background: transparent;
    //  color: white;
    //
    //  &::placeholder {
    //    color: white;
    //
    //  }
    //}

    .investor_popup {
      h2, ul li, p, a, h3, h4, h5, h6, span {
        color: white;
      }
    }

    .investor_popup .form .react-select__control {
      background: transparent;
      border-bottom: 1px solid rgba(198, 198, 198, 0.5);
    }

    .investor_popup .form .react-select__placeholder {
      color: rgba(255, 255, 255, 0.5);
    }

    .feature-box-container {
      .single-item-wrapper.last {
        background: ${hover} !important;
      }

      .single-item-wrapper {
        border-right: 1px solid white;
        background: #000 !important;

        .content {
          p, h3 {
            color: white !important;
          }
        }

        svg {
          #Rectangle_492, #Rectangle_5661, line {
            stroke: #ffffff !important;
          }
        }
      }


    }

    .home-blue-bg-info {
      //background: #3C3C3B;

    }

    .cookie-modal {
      background: #3C3C3B !important;

      .dc-btn a::before {
        background: #fff;
      }

      .dc-btn a:hover {
        span {
          color: black;
        }

      }

      #Rectangle_493 {
        stroke: white;
      }

      #No {
        fill: white;
      }

      background: #3C3C3B;

      h3 {
        b {
          color: white !important;

        }

        color: white !important;
      }
    }


    .desktop-menu {
      .desktop-menu__bottom {
        background: #000000 !important;
        border-bottom: 1px solid rgba(255, 255, 255, 0.5);
      }

      .content_wrap {
        background: #000000 !important;

        li a {
          color: #FFFFFF !important;

          &:hover {
            color: ${hover} !important;
          }
        }
      }

      .mega_menu {
        background: #000000 !important;

        border-top: 1px solid rgba(255, 255, 255, 0.5);
      }

      .middle-menu {
        border-right: 1px solid rgba(255, 255, 255, 0.5) !important;
      }

      .fixed_menu, .middle-menu {
        background: #000000 !important;

        li {
          a {
            color: #FFFFFF !important;

            &:hover {
              color: ${hover} !important;
            }
          }
        }

        .content {
          h3 {
            color: #FFFFFF !important;
          }

          p {
            color: rgba(255, 255, 255, 0.5) !important;
          }

          a {
            color: #FFFFFF !important;

            &:hover {
              color: ${hover} !important;
            }
          }
        }

        .menu-tab .form-group .form-control {
          color: white !important;

          &::placeholder {
            color: rgba(255, 255, 255, 0.5) !important;
          }
        }

        .menu-tab {
          h3, h2 {
            color: #FFFFFF !important;
          }

          p {
            color: rgba(255, 255, 255, 1) !important;
          }
        }
      }
    }

    .Mobile-menu-wrap {
      border-bottom: 1px solid white;
    }

    &.scroll-up .desktop-menu {
      background: #000 !important;

      .burger-click {
        line {
          stroke: white !important;

        }
      }

      #Button_-_Hotline_-_Light {
        #Rectangle_492, #Rectangle_493 {
          stroke: white !important;

        }

        #_16634, #Path_8647 {
          fill: white !important;
        }
      }

      #Button_-_Search_-_Light {
        #Ellipse_19, #Ellipse_18 {
          stroke: white !important;
        }

        path {
          fill: white !important;
        }
      }

      .sticky_logo svg {
        #Path_9352, #Path_9353 {
          fill: ${hover} !important;
        }

        path, rect {
          fill: white !important;
        }
      }
    }

    &.sticky .desktop-menu {
      background: #000 !important;

      .burger-click {
        line {
          stroke: white !important;

        }
      }

      #Button_-_Hotline_-_Light {
        #Rectangle_492, #Rectangle_493 {
          stroke: white !important;

        }

        #_16634, #Path_8647 {
          fill: white !important;
        }
      }

      #Button_-_Search_-_Light {
        #Ellipse_19, #Ellipse_18 {
          stroke: white !important;
        }

        path {
          fill: white !important;
        }
      }

      .sticky_logo svg {
        #Path_9352, #Path_9353 {
          fill: ${hover} !important;
        }

        path, rect {
          fill: white !important;
        }
      }
    }


    &.scroll-up .Mobile-menu-wrap {
      background: #000000 !important;

      .mobile-menu .main_child .submenu {
        background: #000000 !important;

        li a {
          color: #FFFFFF !important;

          &:hover {
            color: ${hover} !important;
          }
        }
      }

      .main_title {
        color: #FFFFFF !important;

      }

      .forClose {
        #Path_9352, #Path_9353 {
          fill: ${hover} !important;
        }

        path, rect {
          fill: white !important;
        }
      }

      .mobile-menu__items {
        background: #000000 !important;

      }

      .mobile-menu__items__top {
        span {
          color: #FFFFFF !important;

        }

        #Ellipse_19, #Ellipse_18 {
          stroke: white !important;
        }

        path {
          fill: white !important;
        }

        #Rectangle_492, #Rectangle_493 {
          stroke: white !important;

        }

        #_16634, #Path_8647 {
          fill: white !important;
        }
      }

      .mobile-menu__items__ul {
        li a {
          color: #FFFFFF !important;

          &:hover {
            color: ${hover} !important;
          }
        }

      }

      .hamburger {
        line {
          stroke: white !important;

        }
      }

      .main_child #Rectangle_492, #Rectangle_493, line {
        stroke: white !important;

      }


    }

    .Mobile-menu-wrap.menu-open {
      background: #000000 !important;

      .mobile-menu .main_child .submenu {
        background: #000000 !important;

        li a {
          color: #FFFFFF !important;

          &:hover {
            color: ${hover} !important;
          }
        }
      }

      .main_title {
        color: #FFFFFF !important;

      }

      .main_child #Rectangle_492, #Rectangle_493, line {
        stroke: white !important;

      }

      .forClose {
        #Path_9352, #Path_9353 {
          fill: ${hover} !important;
        }

        path, rect {
          fill: white !important;
        }
      }

      .mobile-menu__items {
        background: #000000 !important;

      }

      .mobile-menu__items__top {
        span {
          color: #FFFFFF !important;

        }

        #Ellipse_19, #Ellipse_18 {
          stroke: white !important;
        }

        path {
          fill: white !important;
        }

        #Rectangle_492, #Rectangle_493 {
          stroke: white !important;

        }

        #_16634, #Path_8647 {
          fill: white !important;
        }
      }

      .mobile-menu__items__ul {
        li a {
          color: #FFFFFF !important;

          &:hover {
            color: ${hover} !important;
          }
        }

      }

      .hamburger {
        line {
          stroke: white !important;

        }
      }
    }

    .lube-testing {
      background: #242424;
    }

    .blog-slider {
      position: relative;

      &:after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: -1px;
        height: calc(50vh - 125px);
        background: #242424;
      }
    }

    .lube-testing {
      h5, p {
        color: #FFFFFF !important;
      }

      h5, p, h2, h3 {
        color: #FFFFFF !important;
      }

    }

    #board-of-directors, #expert,#our-board, #our-team {
      .blog-slider {
        background: #000000 !important;

        h5, p {
          color: #FFFFFF !important;
        }

        h5, p, h2, h3 {
          color: #FFFFFF !important;
        }

        &:after {
          display: none;
        }
      }

    }

    .counter {
      background: #000000 !important;
    }

    .finger-tips {
      background: rgba(0, 0, 0, 0.8) !important;

      h5, p, h2, h3 {
        color: #FFFFFF !important;
      }

      .dc-btn {
        #Rectangle_492, #Rectangle_493, line {
          stroke: white !important;
        }

        #Contact_Us {
          fill: white !important;
        }
      }
    }

    .security-seal {
      background: #000000;

      .heading .icon img {
        filter: invert(1);
      }

      h5, p, h2, h3, h4 {
        color: #FFFFFF !important;
      }

      .dc-btn {
        #Rectangle_492, #Rectangle_493, line {
          stroke: white !important;
        }

        text {
          fill: white !important;
        }
      }

    }

    &.services {
      background: #000000;

      .service_blog_slider {
        background: #000000;

        .box-slider {
          background: #000000;

          &:after {
            display: none !important;
          }

          .dc-btn {
            #Rectangle_492, #Rectangle_493, line {
              stroke: white !important;
            }

            #Contact_Us {
              fill: white !important;
            }
          }

          .slider-nav li {
            background: #fff !important;

            svg {
              color: black !important;
            }
          }

          h2 {
            color: #FFFFFF !important;

          }
        }
      }
    }

    .amenities {
      background: #000000;

      h5, p, h2, h3, h4, .flex {
        color: #FFFFFF !important;

        p {
          color: rgba(255, 255, 255, 0.5) !important;

        }
      }

      ul {
        li {
          background: #fff !important;

          &:nth-of-type(2) {
            background: transparent !important;

          }

          svg {
            color: black !important;

          }

          p, span {
            color: #FFFFFF !important;
          }
        }
      }

      .container .slider-nav p {
        color: #FFFFFF !important;

      }

      .dc-btn {
        #Rectangle_492, #Rectangle_493, line {
          stroke: white !important;
        }

        text {
          fill: white !important;
        }
      }

    }

    .ministry {
      &:before {
        position: absolute;
        content: "";
        width: 100%;
        height: 50%;
        top: 0;
        background: rgba(0, 0, 0) !important;
      }

      &:after {
        height: calc(50% + 1px);

        bottom: -1px;
        background: rgba(0, 0, 0, 0.8) !important;
      }
    }

    .products {
      background: #000000;

      h5, p, h2, h3 {
        color: #FFFFFF !important;
      }
    }


    .service_page {
      .blog-slider {
        &:after {
          background: #000 !important;
        }
      }
    }

    .quotes {
      background: #000 !important;

      h5, p, h2, h3 {
        color: #FFFFFF !important;
      }
    }

    .research-page {
      .blog-slider {
        background: #000000;

        .dc-btn a {
          border: 1px solid rgba(255, 255, 255, 0.2) !important;

          span {
            color: white
          }
        }

        &:after {
          display: none;
        }
      }
    }

    .first-section {
      h5, p, h2, h3 {
        color: #FFFFFF !important;
      }
    }

    .pathshala {
      .first-section {
        background: black;

      }

      .blog-slider {
        background: black;

        .dc-btn a {
          border: 1px solid rgba(255, 255, 255, 0.2) !important;

          span {
            color: white
          }
        }

        &:after {
          display: none;
        }
      }

    }


    .case_study_detail {
      background: #000;

      .social-vertical p {
        color: white;
      }

      .header p {
        color: white !important;

        span {
          border-right: 1px solid white !important;

          &:last-child {
            border-right: none !important;
          }
        }

      }

      .blog_details {
        p {
          color: white;
        }
      }
    }


    .modal {
      .for-close {
        h5, p, h2, h3, h4 {
          color: #FFFFFF !important;
        }
      }

      section {
        background: transparent;
      }

      .popup_data {
        p, li {
          color: #FFFFFF !important;

        }
      }

      .modal-close {
        #Ellipse_18, #Ellipse_19, #Line_4, #Line_3877 {
          stroke: white !important;
        }
      }

      .modal-dialog, .modal-content {
        background: #000;

        .form-control {
          background: transparent;
          color: #FFFFFF;
          border-bottom: 1px solid rgba(198, 198, 198, 0.5);

          &::placeholder {
            color: rgba(255, 255, 255, 0.5);
          }
        }
      }
    }


    .hr-philosophy {
      background: #3C3C3B !important;

      h5, p, h2, h3, h4 {
        color: #FFFFFF !important;
      }
    }

    .career_page {
      .blog-slider {
        background: #3C3C3B;

        .dc-btn a {
          border: 1px solid rgba(255, 255, 255, 0.2) !important;

          span {
            color: white
          }
        }

        &:after {
          background: #000;
          height: 50vh;
        }
      }

    }

    .job {
      background: #000;

      h5, p, h2, h3, h4 {
        color: #FFFFFF !important;
      }
    }

    .career_form {
      background: #000;

      h5, p, h2, h3, h4 {
        color: #FFFFFF !important;
      }
    }

    .testimonial__head__navigation ul li {
      background: #FFF;

      svg {
        color: black;
      }
    }

    .slider_component {
      background: #000;

      h5, p, h2, h3, h4 {
        color: #FFFFFF !important;
      }
    }

    .addresstab {
      background: #000;

      &:after {
        background: #242424;
      }

      h5, p, h2, h3, h4 {
        color: #FFFFFF !important;
      }

      span {
        color: rgba(255, 255, 255, 0.5) !important;

      }

      a {
        color: #FFFFFF !important;

        &:hover {
          color: ${hover} !important;

        }
      }

      .nav-item .nav-link {
        border: 1px solid rgba(255, 255, 255, 0.2) !important;
        color: white !important;
      }


    }

    .list_with_form {
      background: #242424 !important;
    }

    .job-lists {
      background: #242424 !important;

      h5, p, h2, h3, h4 {
        color: #FFFFFF !important;
      }

    }

    .accordion-header button.collapsed span {
      background: #ffffff;

      svg {
        path {
          fill: black !important;
        }
      }
    }

    .faq {
      .accordion-header button {
        color: ${hover} !important;
        border-color: ${hover} !important;
      }
      .accordion-body{
        color: ${hover} !important;

      }
    }
    .accordion-body a{ 
      color: ${hover} !important;

    }
    .accordion-header button {
      color: ${hover} !important;
      border-color: ${hover} !important;
    }
    .new_img{
      display: none !important;
    }
    .dark_image_deskotp{
      display: block !important;

    }
    .icon.dark{
      display: block !important;
      img{
        
        width: auto;
      }
    }
    .icon.white{
      display: none;
    }
   @media(max-width: 767px){
     .dark_image{
       display: block !important;
     }
     .dark_image_deskotp{
       display: none !important;

     }
   
   }
    
   
    
    .accordion-header button.collapsed {
      color: #FFFFFF !important;
      border-color: #FFFFFF !important;
    }

    .feedback_form_contact {
      .box_wrapper {
        position: relative;
        z-index: 1;
      }

      .blog-slider {
        background: #242424;

        &:after {
          height: 50%;
          background: #000000;
          z-index: 0;
        }
      }
    }


    .core_features {
      background: #000000;

      h3 {
        color: ${hover} !important;
      }

      p {
        color: #3C3C3B !important;
      }
    }

    .tuorital {
      .finger-tips {
        h4 {
          color: #fff !important;
        }
      }
    }


    .home_easy_trade {
      .finger-tips {
        background: rgba(0, 0, 0, 0.8) !important;

      }
    }

    #who-we-are {
      .lube-testing {
        background: rgb(36, 36, 36) !important;
      }
    }


    .hide-mobile {
      .accordion-header button.collapsed span {
        background: transparent;
      }
    }


    .download-list {
      background: #000000;
    }
  }


  .modal_video_popup {
    .modal-video {
      background: transparent;
    }

    .modal-dialog, .modal-content {
      background: transparent;
    }
  }

  @media (max-width: 767px) {
    body {
      overflow-y: scroll !important;
    }
  }


  .rs-calendar-table-cell-selected .rs-calendar-table-cell-content ,.rs-btn-primary, .rs-btn-primary:disabled, .rs-btn-primary.rs-btn-disabled, .rs-btn-primary:hover, .rs-btn-primary:focus{
    background-color: #978C21;
  }
  .rs-picker-menu .rs-calendar .rs-calendar-table-cell:hover .rs-calendar-table-cell-content{
    background-color: #978C21;

  }
  .rs-calendar-table-cell-is-today .rs-calendar-table-cell-content{
    box-shadow: inset 0 0 0 1px #978C21;
  }
  .rs-btn-link{
    color: black;
  }
  .rs-picker-menu .rs-calendar .rs-calendar-table-cell:hover .rs-calendar-table-cell-content{
    color: white;
  }

  .rs-calendar-table-cell-in-range::before {
    background-color: rgba(151, 140, 33, 0.3);

  }
  
  #smooth-content{
    opacity: 1;
  }
  .modal_opening_popup{

    background: rgba(0, 0, 0, 0.5);
    .container {
      height: 100%;

      .row {
        height: 100%;

        .custom-width {
          margin: auto;
          overflow: hidden;
        }
      }
    }

    .opening-modal {
      background-color: #fff;
      padding: 30px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      border-radius: 0px;
      transition: 1.5s all cubic-bezier(.25, .74, .22, .99);
      margin: auto;
      overflow: hidden;
      //transform: translateY(100%);
      .text-right {
        display: block;
      }
      
      // .opening-modal-content{
      //   height: 60vh;
      //   overflow-y: scroll;
      //   /* Hide scrollbar for Chrome, Safari and Opera */
      //
      //   &::-webkit-scrollbar {
      //     display: none;
      //   }
      //
      //   /* Hide scrollbar for IE, Edge and Firefox */
      //   -ms-overflow-style: none; /* IE and Edge */
      //   scrollbar-width: none; /* Firefox */
      // }

      .close-modal {
        right: 0px;
        position: relative !important;
        text-align: right;
        margin-bottom: 30px;
        cursor: pointer;

        svg {
          #Ellipse_19 {
            transition: 1s all cubic-bezier(.25, .74, .22, .99);
          }
        }

        &:hover {
          svg {
            #Ellipse_19 {
              opacity: 1;
              stroke-dasharray: 0 142px;
            }
          }
        }
      }

      h3 {
        line-height: 36px;
        font-size: 28px;
        font-weight: 300;
        color: #3C3C3B;
        margin-bottom: 15px;
      }

      .image-wrapper {
        position: relative;
        overflow: hidden;
        padding-top: calc(380 / 640  * 100%);
        //padding-top: 88%;
        margin-bottom: 20px;

        .stripe {
          transform: translateX(100%);
          transition: all 1s cubic-bezier(.25, .74, .22, .99);
          position: absolute;
          left: 0;
          right: 0;
          bottom: 30px;
          background: rgba(151, 140, 33, 0.7);
          padding: 20px;
          @media (max-width: 767px) {
            position: relative;
            bottom: 0;
          }

          h6 {
            font-size: 16px;
            line-height: 24px;
            color: #FFFFFF;
            transform: translateX(100%);
            transition: all 1s cubic-bezier(.25, .74, .22, .99);
            font-family: "Avenir Heavy";
          }
        }
      }


      &.hide {
        transform: translateY(-150%) !important;
      }
    }

    .dc-btn a{
      width: auto;
      text-align: left;
      display: inline-flex;
    }

    .modal-dialog{
      display: flex;
      align-items: center;
      justify-content: center;
    
    }
  }




  .modal-backdrop{
    
  }

  
  //.dc-btn, .dcbtn , #Button_-_Hotline_-_Light, #Button_-_Search_-_Light, #Hamburger_-_Light, #Hamburger_-_Light, #Button_-_Open_an_Account_Now{
  //   display: none;
  //}
  
`;



