import styled from 'styled-components'
import { px2rem } from '@/assets/global-style'
import style from '@/assets/global-style';

export const Wrapper = styled.div`
.search{
    margin-top: ${px2rem(20)};
    width: 90%;
   
}
 .result{
        margin-top: ${px2rem(20)};
        height: ${px2rem(70)};
        width: 100%;
        h4{
             text-align: left;
             margin-left: ${px2rem(20)};
             font-size: ${px2rem(15)};
             /* color:yellow */
        }
        
        .car{
            display: flex;
            img{
            margin-left:${px2rem(20)} ;
            height:  ${px2rem(70)};
            width:  ${px2rem(110)};
            
        }
        h3{ 
            margin-top: ${px2rem(13)};
            font-size: ${px2rem(15)};
            text-align: left;
            margin-left: ${px2rem(5)} ;
        }
        p{  
            font-size:${px2rem(10)} ;
            color: #ff5f00;
            text-align: left;
            margin-top:${px2rem(5)} ;
            margin-left: ${px2rem(5)} ;

        }
        }
        
    }
`

export const SearchBoxWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: ${px2rem(15)};
    box-sizing: border-box;
    width: 90%;
    margin-left:${px2rem(10)};
    padding: 0 0.3rem;
    padding-right: 1rem;
    height: ${px2rem(30)};
    background: #ffffff;
    .box {
        flex: 1;
        line-height:${px2rem(25)};
        background:#f8f8f8;
        /* margin-left: ${px2rem(20)}; */
        color: #000000;
        font-size: ${style["font-size-m"]};
        outline: none;
        border: none;
        
        &::placeholder{
            color: black;
        }
    }
    .icon-cuo{
        font-size: 16px;
        color: #000000;
    }
    
`