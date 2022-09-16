import styled from 'styled-components'
import { px2rem  } from '@/assets/global-style'
import style from '@/assets/global-style'


export const Wrapper = styled.div`
 
   .video_bottom{  
    width: 100%;
    height:${px2rem(44)};
    background-color: #f7f8fc;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    a {  
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        color:#1f2129;
        &.active{
            .circle{
                background-color: ${style['theme_color']};
            }
        } 
        .circle{
            height: ${px2rem(26)};
            width: ${px2rem(26)};
            border-radius: ${px2rem(26)};
            display: flex;
            align-items: center; 
            justify-content: space-around; 
             i{
            font-size:${px2rem(20)};
            font-weight: 700;
        }
        }
        span{
            font-size:${px2rem(2)};
            
           }
       
        }
 
}

  
`