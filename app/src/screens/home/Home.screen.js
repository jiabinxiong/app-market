import React from 'react';
import { View, Text, ScrollView, Image,
    ImageBackground,
    StatusBar, TextInput, FlatList, TouchableOpacity } from 'react-native';
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Container } from 'native-base';

import ICON from '../../constants/icon.constant';

import { homeStyle } from '../../styles/home/home.style';
import { uiBlockStyle, uiSearchStyle } from '../../styles';


const textArr = [
    {
        title: '北京市三源里菜市场',
        detail: '用来当文本过长的时候裁剪文本。包括折叠产生的换行在内，总的行数不会超过这个属性的限制。',
        img: require('../../images/4.jpg'),
        start: '5.9',
        p: '1000'
    },
    {
        title: '北京市三源里菜市场',
        detail: '上面我们定义了一个 getFontFamily 文件，在文件中，首先我们 font',
        img: require('../../images/2.jpg'),
        start: '5.9',
        p: '1000'
    },
    {
        title: '上面自定义Text组件中，我们做了两件事：',
        detail: '如果包含则取出对应的字体名，不包含则采用Regular字体样式。fontStyle与此相同。最后返回对应字体名',
        img: require('../../images/5.jpg'),
        start: '5.9',
        p: '1000'
    },
    {
        title: '北京市三源里菜市场',
        detail: '用来当文本过长的时候裁剪文本。包括折叠产生的换行在内，总的行数不会超过这个属性的限制。',
        img: require('../../images/3.jpg'),
        start: '5.9',
        p: '1000'
    },
    {
        title: '北京市三源里菜市场',
        detail: '用来当文本过长的时候裁剪文本。包括折叠产生的换行在内，总的行数不会超过这个属性的限制。',
        img: require('../../images/4.jpg'),
        start: '5.9',
        p: '1000'
    },
    {
        title: '北京市三源里菜市场',
        detail: '上面我们定义了一个 getFontFamily 文件，在文件中，首先我们 font',
        img: require('../../images/2.jpg'),
        start: '5.9',
        p: '1000'
    },
    {
        title: '上面自定义Text组件中，我们做了两件事：',
        detail: '如果包含则取出对应的字体名，不包含则采用Regular字体样式。fontStyle与此相同。最后返回对应字体名',
        img: require('../../images/3.jpg'),
        start: '5.9',
        p: '1000'
    },
    {
        title: '北京市三源里菜市场',
        detail: '用来当文本过长的时候裁剪文本。包括折叠产生的换行在内，总的行数不会超过这个属性的限制。',
        img: require('../../images/1.jpg'),
        start: '5.9',
        p: '1000'
    }
];


export default class HomeScreen extends React.Component {
    headerComponent() {
        return(
            <View style={ homeStyle.header }>
                <ImageBackground
                    style={ homeStyle.headerBackImg }
                    source={ require('../../images/8.jpeg') }
                >
                    <View style={ homeStyle.headerInfo }>
                        <View style={ homeStyle.headerInfoL }>
                            <View style={ homeStyle.headerLocation }>
                                <IconMaterialCommunityIcons
                                    style={ homeStyle.headerLocationIcon }
                                    name={ ICON.MAP }
                                />
                                <Text style={ homeStyle.headerLocationText }>北京市.大兴区 航天路999号</Text>
                            </View>
                            <View style={ homeStyle.headerUserName }>
                                <Text style={ homeStyle.headerUserNameText }>还没有登录了</Text>
                            </View>
                        </View>
                        <View style={ homeStyle.headerInfoR }>
                            <View style={ homeStyle.headerUserPortrait }>
                                <Image
                                    style={ homeStyle.headerUserPortraitImg }
                                    source={ require('../../images/2.jpg') }/>
                            </View>
                        </View>
                    </View>

                </ImageBackground>
            </View>
        );
    }
    renderItem = (data) => {
        return (
            <View style={ uiBlockStyle.block }>
                <View style={ uiBlockStyle.imgBlock }>
                    <TouchableOpacity onPress={() => { this.props.navigation.push('Detail') }}>
                        <Image
                            style={ uiBlockStyle.img }
                            resizeMode="cover"
                            source={data.item.img}/>
                    </TouchableOpacity>

                </View>

                <View style={ uiBlockStyle.blockInfo }>
                    <View style={ uiBlockStyle.blockTitle }>
                        <Text style={ uiBlockStyle.blockTitleName }>{ data.item.title }</Text>
                    </View>
                    <View style={ uiBlockStyle.adder }>
                        <Text style={ uiBlockStyle.adderText }>北就市大兴区航天路88888号</Text>
                    </View>
                    <View style={ uiBlockStyle.blockData }>
                        <View style={ uiBlockStyle.blockDataL }>
                            <View style={ uiBlockStyle.star }>
                                <IconMaterialCommunityIcons
                                    style={ [ uiBlockStyle.starIcon, uiBlockStyle.starSelectIcon ] }
                                    name={ ICON.STAR }
                                    color=''/>
                                <Text style={ uiBlockStyle.starText }>4.8分</Text>
                                <Text style={ uiBlockStyle.startPeoples }>(2000人评分)</Text>
                            </View>
                        </View>
                        <View style={ uiBlockStyle.blockDataR }>
                            <View style={ uiBlockStyle.star }>
                                <IconMaterialCommunityIcons
                                    style={ uiBlockStyle.starIcon }
                                    name={ ICON.HEART }
                                    color=''/>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
    render() {
        return (
            <Container style={ homeStyle.body }>
                <StatusBar translucent={true} backgroundColor={'transparent'} barStyle="dark-content" />
                <FlatList
                    data={ textArr }
                    renderItem={ this.renderItem }
                    keyExtractor={(item, index) => index.toString()}
                    ListHeaderComponent={ this.headerComponent }
                />
                {/*<ScrollView>*/}
                {/*    <View style={ homeStyle.header }>*/}
                {/*        <ImageBackground*/}
                {/*            style={ homeStyle.headerBackImg }*/}
                {/*            source={ require('../../images/8.jpeg') }*/}
                {/*        >*/}
                {/*            <View style={ homeStyle.headerInfo }>*/}
                {/*                <View style={ homeStyle.headerInfoL }>*/}
                {/*                    <View style={ homeStyle.headerLocation }>*/}
                {/*                        <IconMaterialCommunityIcons*/}
                {/*                            style={ homeStyle.headerLocationIcon }*/}
                {/*                            name={ ICON.MAP }*/}
                {/*                        />*/}
                {/*                        <Text style={ homeStyle.headerLocationText }>北京市.大兴区 航天路999号</Text>*/}
                {/*                    </View>*/}
                {/*                    <View style={ homeStyle.headerUserName }>*/}
                {/*                        <Text style={ homeStyle.headerUserNameText }>还没有登录了</Text>*/}
                {/*                    </View>*/}
                {/*                </View>*/}
                {/*                <View style={ homeStyle.headerInfoR }>*/}
                {/*                    <View style={ homeStyle.headerUserPortrait }>*/}
                {/*                        <Image*/}
                {/*                            style={ homeStyle.headerUserPortraitImg }*/}
                {/*                            source={ require('../../images/2.jpg') }/>*/}
                {/*                    </View>*/}
                {/*                </View>*/}
                {/*            </View>*/}

                {/*        </ImageBackground>*/}
                {/*    </View>*/}
                {/*    <View*/}
                {/*        style={ [ uiSearchStyle.search, homeStyle.search ] }>*/}
                {/*        <TouchableOpacity*/}
                {/*            activeOpacity={1}*/}
                {/*            style={ homeStyle.searchTouch  }*/}
                {/*            onPress={() => { this.props.navigation.push('Search') }}>*/}
                {/*            <IconMaterialCommunityIcons*/}
                {/*                style={[uiSearchStyle.icon,  homeStyle.searchIcon ] }*/}
                {/*                name={ ICON.MAGNIFY }*/}
                {/*                color=''/>*/}
                {/*            <Text style={ homeStyle.placeholder }>输入市场名称</Text>*/}
                {/*        </TouchableOpacity>*/}
                {/*    </View>*/}

                {/*    <View style={ homeStyle.cnt }>*/}
                {/*        {*/}
                {/*            textArr.map((data, index) => (*/}
                {/*                <View key={index} style={ uiBlockStyle.block }>*/}
                {/*                    <View style={ uiBlockStyle.imgBlock }>*/}
                {/*                        <TouchableOpacity onPress={() => { this.props.navigation.push('Detail') }}>*/}
                {/*                            <Image*/}
                {/*                                style={ uiBlockStyle.img }*/}
                {/*                                resizeMode="cover"*/}
                {/*                                source={data.img}/>*/}
                {/*                        </TouchableOpacity>*/}

                {/*                    </View>*/}

                {/*                    <View style={ uiBlockStyle.blockInfo }>*/}
                {/*                        <View style={ uiBlockStyle.blockTitle }>*/}
                {/*                            <Text style={ uiBlockStyle.blockTitleName }>{ data.title }</Text>*/}
                {/*                        </View>*/}
                {/*                        <View style={ uiBlockStyle.adder }>*/}
                {/*                            <Text style={ uiBlockStyle.adderText }>北就市大兴区航天路88888号</Text>*/}
                {/*                        </View>*/}
                {/*                        <View style={ uiBlockStyle.blockData }>*/}
                {/*                            <View style={ uiBlockStyle.blockDataL }>*/}
                {/*                                <View style={ uiBlockStyle.star }>*/}
                {/*                                    <IconMaterialCommunityIcons*/}
                {/*                                        style={ [ uiBlockStyle.starIcon, uiBlockStyle.starSelectIcon ] }*/}
                {/*                                        name={ ICON.STAR }*/}
                {/*                                        color=''/>*/}
                {/*                                    <Text style={ uiBlockStyle.starText }>4.8分</Text>*/}
                {/*                                    <Text style={ uiBlockStyle.startPeoples }>(2000人评分)</Text>*/}
                {/*                                </View>*/}
                {/*                            </View>*/}
                {/*                            <View style={ uiBlockStyle.blockDataR }>*/}
                {/*                                <View style={ uiBlockStyle.star }>*/}
                {/*                                    <IconMaterialCommunityIcons*/}
                {/*                                        style={ uiBlockStyle.starIcon }*/}
                {/*                                        name={ ICON.HEART }*/}
                {/*                                        color=''/>*/}
                {/*                                </View>*/}
                {/*                            </View>*/}
                {/*                        </View>*/}
                {/*                    </View>*/}
                {/*                </View>*/}
                {/*            ))*/}
                {/*        }*/}
                {/*    </View>*/}

                {/*</ScrollView>*/}

                {/*<View style={ homeStyle.header }>*/}
                {/*    <View*/}
                {/*        style={ [ uiSearchStyle.search, homeStyle.search ] }>*/}
                {/*        <TouchableOpacity*/}
                {/*            activeOpacity={1}*/}
                {/*            style={ [ uiSearchStyle.search, homeStyle.search ] }*/}
                {/*            onPress={() => { this.props.navigation.push('Search') }}>*/}
                {/*            <IconMaterialCommunityIcons*/}
                {/*                style={ uiSearchStyle.icon }*/}
                {/*                name={ ICON.MAGNIFY }*/}
                {/*                color=''/>*/}
                {/*        </TouchableOpacity>*/}
                {/*        /!*<TextInput style={ uiSearchStyle.ipt } placeholder="搜索市场"/>*!/*/}
                {/*    </View>*/}
                {/*    <View >*/}
                {/*        <IconMaterialCommunityIcons*/}
                {/*            style={ homeStyle.bellIcon }*/}
                {/*            name={ ICON.BELL }/>*/}
                {/*    </View>*/}
                {/*</View>*/}
                {/*<View style={ homeStyle.cnt }>*/}
                {/*    <ScrollView style={ homeStyle.scroll }>*/}


                {/*    </ScrollView>*/}
                {/*</View>*/}
            </Container>
        );
    }
}
