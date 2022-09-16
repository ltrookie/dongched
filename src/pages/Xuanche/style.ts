import styled from 'styled-components'
import { px2rem } from '@/assets/global-style'
export const XuancheWrapper = styled.div`
     .hot-car-box{
        height: ${px2rem(300)};
        .log-list{
         display: flex;
         flex-direction:row;
         align-items: center;
        justify-content: center;

         .logo{
            flex:1;
            img{
               height: ${px2rem(29)};
               width: ${px2rem(29)};               

            }
            p{
               font-size: ${px2rem(10)};
                  color:black;
            }
         }
        }
        .condition-select{
         margin-top: ${px2rem(10)};
         margin-left: ${px2rem(1)};
         display: flex;
         flex-direction:row;
         align-items: center;
         flex-wrap: wrap;
         .select{
           
              margin-top: ${px2rem(10)};
              margin-left: ${px2rem(8)};
               height: ${px2rem(29)};
               width: ${px2rem(80)};  
               background-color:#f7f8fc;
               span{
                  font-size:${px2rem(10)} ;
               }
         }
        }
        .hot-car{
         margin-top:${px2rem(10)} ;
            h4{
               font-size:${px2rem(13)};
               margin-left: ${px2rem(10)};
               text-align: left;

            }
          .hot{
               display: flex;
               align-items: center;
               justify-content: center;
               flex-wrap:wrap;
            .car{
               margin-right:${px2rem(20)} ;
               margin-left:${px2rem(20)} ;
               
               img{
                  height: ${px2rem(51)};
                  width: ${px2rem(76)};  
               }
               h4{
                  font-size:${px2rem(13)};
                  text-align: center;
               }
            }
          }
        }
     }
     .car-list{
        display: flex;
        flex-direction: column;
        /* align-items: center; */
        /* justify-content:space-around; */
        img{
           float: left;
           /* margin-left: ${px2rem(10)}; */
           height: ${px2rem(36)};
           width: ${px2rem(36)};
        }
        p{
            margin-left: ${px2rem(60)};
            padding-top: ${px2rem(6)};
            text-align: left;
        }
     }
    
    `

export const EnterLoading = styled.div`
position: fixed;
left: 0;
right: 0;
bottom: 20%;
top: 0;
width: 100%;
height: 100%;
margin: auto;
`