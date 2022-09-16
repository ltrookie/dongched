import styled from 'styled-components'
import { px2rem } from '@/assets/global-style'
//44px 苹果的tabar的高度
export const NewsItemWrapper = styled.div`
        
        height: ${px2rem(800)};
        a{
            width: 100%;
            
            color: #000;
            .content{
                width:${px2rem(350)};
                height: ${px2rem(155)};;
                margin-left: ${px2rem(15)};
                padding-top: ${px2rem(20)};;
                text-align:left;
                border-bottom:2px solid #f3f4f9;
                .title{
                   font-size: ${px2rem(15)};
                }

            }
            .car-pic{
                margin-top: ${px2rem(10)};
                img{
                        width: ${px2rem(115)};
                        height: ${px2rem(85)};
                        margin-right: 1px;
                }
            }
            .bottom{
                span{
                   font-size: ${px2rem(5)};
                   color: #979aa8;
                }
                
            }


        }
        /* background-color: pink; */


`
