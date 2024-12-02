import React from "react";
import { Container } from './styles';
import { PropsWithChildren } from 'react';
import { TextInput, TextInputProps } from "react-native";

export const Input:React.FunctionComponent<TextInputProps> = ({... otherProps}: PropsWithChildren<TextInputProps>) => {
    return (
    <Container>
        <TextInput placeholderTextColor="rgb(192, 192, 192)" {...otherProps} />
    </Container>

    );

};