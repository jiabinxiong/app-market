import React from 'react';
import { View, Text, StatusBar, Image, Animated, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
import * as Animatable from 'react-native-animatable';
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Container } from "native-base";

import ICON from '../../constants/icon.constant';

import isPhone from '../../tool/isPhone';

import { uiListStyle, uiCommentStyle } from '../../styles';
import { detailStyle } from '../../styles/detail/detail.style';

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


export default class DetailScreen extends React.Component {
    handerOnHide() {
        // alert("b");
        this.navTitleView.fadeInUp(200)
    }
    handerOnDisplay() {
        this.navTitleView.fadeOut(100)
    }
    render() {
        return(
            <Container>
                <StatusBar translucent={true} backgroundColor={'transparent'} barStyle="dark-content" />

                <HeaderImageScrollView
                    maxHeight={240}
                    minHeight={75}
                    fadeOutForeground
                    headerImage={require('../../images/2.jpg')}
                    renderForeground={() => (
                        <View style={{ height: 240, justifyContent: "center", alignItems: "center" }} >
                            <View style={ detailStyle.title }>
                                <Text style={ detailStyle.titleText }>三源里菜市场</Text>
                                <Text style={ detailStyle.subtitleText }>san yuang market</Text>
                            </View>
                        </View>
                    )}
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


                    <View style={{}}>
                        <TriggeringView
                            onHide={() => this.handerOnHide()}
                            onDisplay={() => this.handerOnDisplay()}
                        >
                        </TriggeringView>
                        <View style={ uiListStyle.list }>
                            <View style={ uiListStyle.li }>
                                <View style={ uiListStyle.liL }>
                                    <IconMaterialCommunityIcons
                                        style={ uiListStyle.lIcon }
                                        name={ICON.CLOCK_OUTLINE}
                                    />
                                    <View style={ uiListStyle.liLText }>
                                        <Text style={ uiListStyle.liLTextInfo }>
                                            <Text style={ detailStyle.liTag }>开放中 </Text>
                                            <Text style={{ paddingLeft: 100 }}>简价 | 攻略 买菜须知</Text>
                                        </Text>
                                    </View>
                                </View>
                                <View style={ uiListStyle.liR }>
                                    <IconMaterialCommunityIcons
                                        style={ uiListStyle.lIcon }
                                        name={ICON.ARROW_RIGHT}
                                    />
                                </View>
                            </View>
                            <View style={ uiListStyle.li }>
                                <View style={ uiListStyle.liL }>
                                    <IconMaterialCommunityIcons
                                        style={ uiListStyle.lIcon }
                                        name={ICON.MAP}
                                    />
                                    <View style={ uiListStyle.liLText }>
                                        <Text style={ uiListStyle.liLTextInfo }>
                                            北京市大兴区三源里
                                        </Text>
                                    </View>
                                </View>
                                <View style={ uiListStyle.liR }>
                                    <IconMaterialCommunityIcons
                                        style={ uiListStyle.lIcon }
                                        name={ICON.ARROW_RIGHT}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={ detailStyle.comment }>
                        <View style={ detailStyle.commentTitle }>
                            <Text style={ detailStyle.commentTitleText }>精选评论</Text>
                            <View style={ detailStyle.commentTitleMore }>
                                <TouchableOpacity>
                                    <Text style={ detailStyle.commentTitleMoreText }>更新>></Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {
                            ['../../images/1.jpg', '../../images/2.jpg', '3'].map((data, index) => {
                                return <View key={ index } style={ uiCommentStyle.block }>
                                    <View style={ uiCommentStyle.t }>
                                        <View style={ uiCommentStyle.tL }>
                                            <View style={ uiCommentStyle.portrait }>
                                                <Image
                                                    style={ uiCommentStyle.portraitImg }
                                                    source={require('../../images/2.jpg')}/>
                                            </View>
                                            <View style={ uiCommentStyle.userInfo }>
                                                <View style={ uiCommentStyle.userName }>
                                                    <Text style={ uiCommentStyle.userNameText }>熊先生</Text>
                                                </View>
                                                <View style={ uiCommentStyle.time }>
                                                    <Text style={ uiCommentStyle.timeText }>2020.12.12</Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={ uiCommentStyle.tR }></View>
                                    </View>
                                    <View style={ uiCommentStyle.cnt }>
                                        <Text style={ uiCommentStyle.cntText }>
                                            安全提示: 目前, onMessage and postMessage 方法不能够指定源。当WebView加载某些非预期文档时可能导致跨站脚本攻击。请查阅 MDN 文档获取更多安全方面的细节
                                        </Text>
                                    </View>
                                    <View style={ uiCommentStyle.imgArea }>
                                        <View style={ uiCommentStyle.imgBlock }>
                                            <Image style={ uiCommentStyle.imgBlockImg } resizeMode="cover" source={require('../../images/2.jpg')}/>
                                        </View>
                                        <View style={ uiCommentStyle.imgBlock }>
                                            <Image style={ uiCommentStyle.imgBlockImg } resizeMode="cover" source={require('../../images/3.jpg')}/>
                                        </View>
                                        <View style={ uiCommentStyle.imgBlock }>
                                            <Image style={ uiCommentStyle.imgBlockImg } resizeMode="cover" source={require('../../images/4.jpg')}/>
                                        </View>
                                        <View style={ uiCommentStyle.imgBlock }>
                                            <View style={ uiCommentStyle.imgBlockMore }>
                                                <Text style={ uiCommentStyle.imgBlockMoreText}>+ 10</Text>
                                            </View>
                                            <Image style={ uiCommentStyle.imgBlockImg } resizeMode="cover" source={require('../../images/1.jpg')}/>
                                        </View>
                                    </View>
                                </View>
                            })
                        }
                    </View>


                </HeaderImageScrollView>
            </Container>
        );
    }
}
