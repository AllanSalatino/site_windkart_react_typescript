const { createGlobalStyle } = require("styled-components");

export const Global = createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }
    :root{
        --black: #333333;
        --white: rgb(255 255 255 / 91%);;
        --darkBlue: #0f232e;
        --blue: #2e245e;
        --greenWater: #00eeff;
        --green: #245e54;
        --buttonBG: #bbdfd825;
        --buttonShadow: #7bcab2e0;
        --buttonBGActive: #2d5d6b7e;
        --buttonShadowActive: #7bcab2a1;
    }
    button{
        cursor: pointer;
        background-color: transparent;
        border: 0;
        border-radius: 15px;
        transition: .3s;
    }
    aside, section, div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    }


    //Typography --------------------------------
    
    h1{
        font-family: 'Josefin Sans', sans-serif;
        font-style: italic;
        font-size: 40px;
        font-weight: 700;
        text-shadow: rgb(140, 250, 199) 0px 0px 15px;
    }
    h2{
        font-size: 30px;
        font-weight: 700;
    }
    h3{
        font-size: 18px;
        font-size: 700;
        color: var(--black);
    }
    h4{
        font-size: 14;
        color: var(--white);
        background-color: #37b6a0de;;
        padding: 2px 5px;
        border-radius: 7px;
    }
    p{
        font-size: 16px;
        color: var(--white);
    }
    span{
        font-size: 18px;
        font-weight: 600;
        color: #23725a;
    }
    img{
        width: 100%;
    }
`;
