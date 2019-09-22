import React from 'react';
import { ImageBackground, ImageSourcePropType, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';

export interface IProps {
    backgroundImage: ImageSourcePropType;
    title: string;
    titleStyle?: StyleProp<ViewStyle>;
}

export default class Header extends React.Component<IProps> {
    render() {
        return (
            <View style={styles.root}>
                <ImageBackground source={this.imageSrc()} style={styles.background}>
                    <Text style={[styles.title, this.props.titleStyle]}>{this.props.title}</Text>
                </ImageBackground>
            </View>
        );
    }

    private imageSrc = () => {
        if(this.props.backgroundImage == null) {
            return require('../../assets/img/bg_dialog_react.png');
        }
        return this.props.backgroundImage;
    }
}

const styles = StyleSheet.create({
    background: {
        alignItems: 'center',
        height: '100%',
    },
    root: {
        backgroundColor: 'white',
        height: 94
    },
    title: {
        color: 'white',
        fontSize: 25,
        marginVertical: 30,
    }
});