import React from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image } from "react-native";
import { Container } from 'native-base';
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
import * as Animatable from "react-native-animatable";

import isPhone from "../../tool/isPhone";
import { myStyle } from '../../styles/my/my.style';

const styles = StyleSheet.create({

    navTitleView: {
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0,
    },
    navTitle: {
        color: 'white',
        fontSize: 18,
        // backgroundColor: 'transparent',
    },
});


export default class MyScreen extends React.Component {
    handlerOnHide() {

    }
    handlerOnDisplay() {

    }
    render() {
        return (
            <Container>
                <StatusBar translucent={true} backgroundColor={'transparent'} barStyle="dark-content" />

                <HeaderImageScrollView
                    maxHeight={240}
                    minHeight={75}
                    fadeOutForeground
                    headerImage={require('../../images/2.jpg')}
                    renderFixedForeground={() => (
                        <Animatable.View
                            style={[styles.navTitleView, isPhone().header.title]}
                            ref={navTitleView => {
                                this.navTitleView = navTitleView;
                            }}
                        >
                            <View style={{} }>
                                <Text style={ {fontSize: 18, color: "#fff"} }>三源里菜市场</Text>
                            </View>
                        </Animatable.View>
                    )}
                >

                    <TouchableOpacity onPress={ () => { this.props.navigation.push('Text') }}>
                        <Text>测试</Text>
                    </TouchableOpacity>
                    <View>
                        <TriggeringView
                            onHide={() => this.handlerOnHide()}
                            onDisplay={() => this.handlerOnDisplay()}
                        >
                            <View style={ myStyle.user }>
                                <View style={ myStyle.userL }>
                                    <Image
                                        style={ myStyle.userImg }
                                        source={require('../../images/4.jpg')}
                                    />
                                    <View style={ myStyle.userName }>
                                        <Text style={ myStyle.userNameText }>小熊</Text>
                                    </View>
                                </View>
                                <View style={ myStyle.userR }>
                                    <TouchableOpacity>
                                        <Text style={ myStyle.userSetting }>设置</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TriggeringView>
                    </View>


                </HeaderImageScrollView>

            </Container>
        );
    }
}
