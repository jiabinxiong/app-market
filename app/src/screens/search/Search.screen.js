import React from 'react';
import { View, Text, StatusBar, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Container } from 'native-base';

import { CLOSE_ICON, HEART_ICON, MAGNIFY_ICON, STAR_ICON } from "../../constants/icon.constant";

import { searchStyle } from '../../styles/search/search.style';
import { uiBlockStyle, uiSearchStyle } from "../../styles";
import { homeStyle } from "../../styles/home/home.style";

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
    },
    {
        title: '北京市三源里菜市场',
        detail: '用来当文本过长的时候裁剪文本。包括折叠产生的换行在内，总的行数不会超过这个属性的限制。',
        img: require('../../images/1.jpg'),
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

const SearchScreen = () => {
    const [ selectIpt, setSelectIpt ] = React.useState(true);


    return (
        <Container>
            <StatusBar translucent={true} backgroundColor={'transparent'} barStyle="dark-content" />
            <View style={ searchStyle.header }>
                <View style={ [ uiSearchStyle.search, searchStyle.search ] }>
                    <IconMaterialCommunityIcons
                        style={ uiSearchStyle.icon }
                        name={ MAGNIFY_ICON }/>
                    <TextInput
                        autoFocus={selectIpt}
                        style={ uiSearchStyle.ipt } placeholder="搜索市场"/>
                    <View style={uiSearchStyle.close}>
                        <IconMaterialCommunityIcons
                            style={ uiSearchStyle.closeIcon }
                            name={ CLOSE_ICON }/>
                    </View>
                </View>
                <View style={ searchStyle.clearBtn }>
                    <TouchableOpacity>
                        <Text style={ searchStyle.clearText }>取消</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/*<View>*/}
            {/*    <ScrollView*/}
            {/*        style={ searchStyle.default }*/}
            {/*        horizontal={true}*/}
            {/*        showsHorizontalScrollIndicator={false}*/}
            {/*    >*/}
            {/*        {*/}
            {/*            textArr.map((data, index) => (*/}
            {/*                <View key={index} style={[uiBlockStyle.block, searchStyle.defaultBlock]}>*/}
            {/*                    <View style={[ uiBlockStyle.imgBlock, uiBlockStyle.defaultImgBlock ]}>*/}
            {/*                        <TouchableOpacity*/}
            {/*                            onPress={() => { this.props.navigation.push('Detail') }}>*/}
            {/*                            <Image*/}
            {/*                                style={[uiBlockStyle.img, searchStyle.defaultImg]}*/}
            {/*                                resizeMode="cover"*/}
            {/*                                source={data.img}/>*/}
            {/*                        </TouchableOpacity>*/}
            {/*                    </View>*/}

            {/*                    <View style={ searchStyle.defaultInfo }>*/}
            {/*                        <View style={ uiBlockStyle.blockTitle }>*/}
            {/*                            <Text*/}
            {/*                                ellipsizeMode="tail"*/}
            {/*                                numberOfLines={1}*/}
            {/*                                style={ uiBlockStyle.blockTitleName }>{ data.title }</Text>*/}
            {/*                        </View>*/}
            {/*                        <View style={ uiBlockStyle.adder }>*/}
            {/*                            <Text*/}
            {/*                                ellipsizeMode="tail"*/}
            {/*                                numberOfLines={1}*/}
            {/*                                style={ uiBlockStyle.adderText }>北就市大兴区航天路88888号</Text>*/}
            {/*                        </View>*/}
            {/*                        <View style={ uiBlockStyle.blockData }>*/}
            {/*                            <View style={ uiBlockStyle.blockDataL }>*/}
            {/*                                <View style={ uiBlockStyle.star }>*/}
            {/*                                    <IconMaterialCommunityIcons*/}
            {/*                                        style={ [ uiBlockStyle.starIcon, uiBlockStyle.starSelectIcon ] }*/}
            {/*                                        name={ STAR_ICON }*/}
            {/*                                        color=''/>*/}
            {/*                                    <Text style={ uiBlockStyle.starText }>4.8分</Text>*/}
            {/*                                    <Text style={ uiBlockStyle.startPeoples }>(2000人评分)</Text>*/}
            {/*                                </View>*/}
            {/*                            </View>*/}
            {/*                        </View>*/}
            {/*                    </View>*/}
            {/*                </View>*/}
            {/*            ))*/}
            {/*        }*/}
            {/*    </ScrollView>*/}
            {/*</View>*/}
            <ScrollView style={ searchStyle.listBlock } enableOnAndroid={true} >
                {
                    textArr.map((data, index) => (
                        <View key={index} style={[ uiBlockStyle.block, uiBlockStyle.lRBlock ]}>
                            <View style={ uiBlockStyle.lRInfo }>
                                <View style={ uiBlockStyle.blockTitle }>
                                    <Text
                                        ellipsizeMode="tail"
                                        numberOfLines={1}
                                        style={ uiBlockStyle.blockTitleName }>
                                        {  data.title }
                                    </Text>
                                </View>
                                <View style={ uiBlockStyle.lRDetail }>
                                    <Text
                                        ellipsizeMode="tail"
                                        numberOfLines={2}
                                        style={ uiBlockStyle.lRDetailText }>
                                        { data.detail }
                                    </Text>
                                </View>
                                <View style={ uiBlockStyle.blockData }>
                                    <View style={ uiBlockStyle.blockDataL }>
                                        <View style={ uiBlockStyle.star }>
                                            <IconMaterialCommunityIcons
                                                style={ [ uiBlockStyle.starIcon, uiBlockStyle.starSelectIcon ] }
                                                name={ STAR_ICON }
                                                color=''/>
                                            <Text style={ uiBlockStyle.starText }>4.8分</Text>
                                            <Text style={ uiBlockStyle.startPeoples }>(2000人评分)</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={ uiBlockStyle.imgBlock }>
                                <Image
                                    style={[ uiBlockStyle.img, uiBlockStyle.lRImg ]}
                                    resizeMode="cover"
                                    source={data.img}/>
                            </View>
                        </View>
                    ))
                }
            </ScrollView>
        </Container>

    );
};

export default SearchScreen;
