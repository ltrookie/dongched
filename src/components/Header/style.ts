import styled from 'styled-components'
import { px2rem } from '@/assets/global-style'
//44px 苹果的tabar的高度
export const HeaderWrapper = styled.div`
     display: flex;
     /* position: fixed;
     top: 0;
     left: 0; */
     z-index: 1000;
     height:${px2rem(28)};
     padding:${px2rem(8)};
     background-color: #ffffff;
     .icon{
       margin-top: ${px2rem(5)};
       text-align: center;
       line-height:${px2rem(18)};
       padding-left: ${px2rem(5)} ;
        img{ 
          height:${px2rem(18)};
          width:${px2rem(75)};

        }
     }
     .search{
        position: relative;
        width: 65%;
        margin-left:${px2rem(10)} ;
         .search-box{
        float:left;
        width: 100%;
    }
        .scan-icon{
        
        float:left;
        i{  
            position: absolute;
            top:${px2rem(5)};
            right: ${px2rem(10)};
            font-size: ${px2rem(20)};
            color: #969798;          
        }  

     }     
}
     .add-icon{ 
        float:right;
        margin-top: ${px2rem(2)};
        margin-left:  ${px2rem(10)};
        i{
            font-size: ${px2rem(25)};
            color: #000;
            
        } 
       
     }
`

