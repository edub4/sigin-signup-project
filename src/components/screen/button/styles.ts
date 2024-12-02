import { TouchableOpacity } from "react-native";
import styled from 'styled-components/native'

export const Container = styled(TouchableOpacity)`
    width: 300px;
    align-items: center;
    backgroundColor: #d3d3d3;
    border-radius: 5px;
    padding: 15px;
    margin-top: 30px;
    
`;

export const Title = styled.Text`

    font-size: ${(16)}px;
    color: White;
`;