import styled from 'styled-components'
import { px2rem } from '@/assets/global-style'
//44px 苹果的tabar的高度
export const TabBarWrapper = styled.div`
     background-color: #ffffff;
     z-index: 10;
     
        
         a{
            background-color: red;

            &.active::after{
            content: "";
            background-color: yellow;
            width:${px2rem(20)};
            height: ${px2rem(3)};
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            margin-left: auto;
            margin-right: auto;
            color: #e23d43;
            }
            &.active{
             
            p{      
            
            color: #000000; 
            font-weight:700;
            font-size:  ${px2rem(18)};           
            }
            }
            p{           
            color: #000; 
            /* background-color: red; */
            }
            
           
}

`
