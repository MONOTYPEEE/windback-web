import AwardProfile from "../../../components/Awardprofile";
import { Center } from "../../../components/layout/Center";
import { Text24Regular, Text36Bold } from "../../../components/Texts";

const Data = {
    name: '니간우',
    id: '984407929048432701',
    tag: 'kimkw',
    count: 672,
    icon: 'eac8e9a725a38f99dd21120881088ad9'
}

export default function AwardCensor(){
    return(
        <>
            <Text36Bold>(검열됨)</Text36Bold>
            <Center>
                <AwardProfile {...Data}/>
                <Text24Regular>메시지 수정·삭제 268회</Text24Regular>
            </Center>
        </>
    )
}