import styled from 'styled-components'
import { px2rem } from '@/assets/global-style'
//44px 苹果的tabar的高度
export const CardataboxWrapper = styled.div`
      width: ${px2rem(350)};
      height:${px2rem(185)};
      margin-left:${px2rem(12)} ;
      background-color: #fefcf3;
     
      .tab{  
         .tab-content-chexi{
            /* margin-top: ${px2rem(10)}; */

            .jiaoche{
               display: flex;
               align-items: center;
               justify-content:space-around;
               .car{
                  margin-top: ${px2rem(10)};
                  text-align: center;
                  img{
                     width:${px2rem(83)} ;
                     height: ${px2rem(53)};
                  }
                  h4{
                     font-size:${px2rem(13)};
                  }
                  .dijai{
                     color:red;
                     margin-right:${px2rem(5)} ;
                     

                  }
                  span{
                     font-size: ${px2rem(10)};
                    
                  }
               }

            }

         }  
         .tab-content-pingpai{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap:wrap;
            height: ${px2rem(80)};
         .pingbai{
               /* flex: 1;  */
               margin-top: ${px2rem(10)};
               text-align: center;
               width: 20% ;
               img{
                  height: ${px2rem(30)};
                  width: ${px2rem(30)};
    }
               p{
                  font-size: ${px2rem(10)};
                  color:black;
                  margin-top:${px2rem(5)};     
    }
  }
 }
           .title{
            color: #606370;

           
         }
            
        
}

`

export const EnterLoading = styled.div`
position: fixed;
left: 0;
right: 0;
bottom: 0;
top: 0;
width: 100%;
height: 100%;
margin: auto;
`
