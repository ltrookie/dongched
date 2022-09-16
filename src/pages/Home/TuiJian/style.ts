import styled from 'styled-components'
import { px2rem } from '@/assets/global-style'


export const Wrapper = styled.div`
   
    display:flex;
    flex-direction:column;
    /* margin-top:${px2rem(74)}; */
    .swiper-box{
      .swiper{
      margin-top: ${px2rem(5)} ;
      height: ${px2rem(150)};
      .banners{
        height: ${px2rem(150)};
        width: 100%;

      }
 }
    }
 
 .intrduce{
        display: flex;
        align-items: center;
        justify-content: center;
        height: ${px2rem(80)};
  .button{
    flex: 1; 
       text-align: center;
    img{
      height: ${px2rem(30)};
      width: ${px2rem(30)};

      /* color:#fcb94a;     */
    }
    p{
      font-size: ${px2rem(10)};
      color:black;
      margin-top:${px2rem(5)};     
    }

  }

 }
    
`