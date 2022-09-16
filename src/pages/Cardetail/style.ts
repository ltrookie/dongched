import styled from 'styled-components'
import { px2rem } from '@/assets/global-style'
import style from '@/assets/global-style';

export const Wrapper = styled.div`
    
    .data-car{
        margin-top: ${px2rem(50)};
        height: ${px2rem(127)};
        img{
            width: ${px2rem(200)};
            height: ${px2rem(127)};
        }
    }
    .data-box{
        margin-top: ${px2rem(200)};
    }
`

