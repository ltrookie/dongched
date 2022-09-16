import styled from 'styled-components'
import { px2rem } from '@/assets/global-style'
export const HomeWrapper = styled.div`
   
    width: 100%;
    background-color: #ffffff;
    /* z-index: 10; */
    padding-bottom: ${px2rem(2)};
    
         .partition {
        position: relative;
        /* margin-top:${px2rem(28)}; 
        position: fixed;
        top: 0;
        left: 0; */
        .tab-bar {
            margin-right: ${px2rem(44)};
             width: 90%; 
        }
        .switch {
            position: absolute;
            top: 0;
            bottom: 0;
            right: ${px2rem(14)};
            
        i{  
            line-height: ${px2rem(30)};
            font-size: ${px2rem(15)};
        }
        .all-tabbar{
        
        .all-channel{
         margin-top: ${px2rem(10)};
         margin-left: ${px2rem(1)};
         display: flex;
         flex-direction:row;
         align-items: center;
         flex-wrap: wrap;
         .channel{
           
              margin-top: ${px2rem(10)};
              margin-left: ${px2rem(8)};
               height: ${px2rem(29)};
               width: ${px2rem(80)};  
               background-color:#f7f8fc;
               span{
                  font-size:${px2rem(10)};
               }
         }
        }
        }
        } 
       
    }
    

    
    `