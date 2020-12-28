import React from 'react';
import { View, Text, StyleSheet,Image, StatusBar, ScrollView, Animated, Dimensions } from 'react-native';
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const { width, height } = Dimensions.get('screen');
import ICON from '../../constants/icon.constant';

const articleParagraphs = [
    'One advanced diverted domestic sex repeated bringing you old. Possible procured her trifling laughter thoughts property she met way. Companions shy had solicitude favourable own. Which could saw guest man now heard but. Lasted my coming uneasy marked so should. Gravity letters it amongst herself dearest an windows by. Wooded ladies she basket season age her uneasy saw. Discourse unwilling am no described dejection incommode no listening of. Before nature his parish boy. ',
    'Folly words widow one downs few age every seven. If miss part by fact he park just shew. Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure education is be dashwoods or an. Use off agreeable law unwilling sir deficient curiosity instantly. Easy mind life fact with see has bore ten. Parish any chatty can elinor direct for former. Up as meant widow equal an share least. ',
    'Another journey chamber way yet females man. Way extensive and dejection get delivered deficient sincerity gentleman age. Too end instrument possession contrasted motionless. Calling offence six joy feeling. Coming merits and was talent enough far. Sir joy northward sportsmen education. Discovery incommode earnestly no he commanded if. Put still any about manor heard. ',
    'Village did removed enjoyed explain nor ham saw calling talking. Securing as informed declared or margaret. Joy horrible moreover man feelings own shy. Request norland neither mistake for yet. Between the for morning assured country believe. On even feet time have an no at. Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem. ',
    'In it except to so temper mutual tastes mother. Interested cultivated its continuing now yet are. Out interested acceptance our partiality affronting unpleasant why add. Esteem garden men yet shy course. Consulted up my tolerably sometimes perpetual oh. Expression acceptance imprudence particular had eat unsatiable. ',
    'Had denoting properly jointure you occasion directly raillery. In said to of poor full be post face snug. Introduced imprudence see say unpleasing devonshire acceptance son. Exeter longer wisdom gay nor design age. Am weather to entered norland no in showing service. Nor repeated speaking shy appetite. Excited it hastily an pasture it observe. Snug hand how dare here too. ',
    'Improve ashamed married expense bed her comfort pursuit mrs. Four time took ye your as fail lady. Up greatest am exertion or marianne. Shy occasional terminated insensible and inhabiting gay. So know do fond to half on. Now who promise was justice new winding. In finished on he speaking suitable advanced if. Boy happiness sportsmen say prevailed offending concealed nor was provision. Provided so as doubtful on striking required. Waiting we to compass assured. ',
];

const imgArr  = [
    require('../../images/2.jpg'),
    require('../../images/3.jpg'),
    require('../../images/4.jpg'),
    require('../../images/5.jpg'),
    require('../../images/1.jpg'),
    require('../../images/7.jpg'),
];

const TextScreens = () => {
    const scrollY = React.useRef(new Animated.Value(0)).current;
    console.log(scrollY);
    return (
        <View>
            <StatusBar hidden />
            <Animated.ScrollView
                contentContainerStyle={{ padding: 20 }}>
                <Text style={  styles.heading}>Black and White</Text>
                {
                    articleParagraphs.map((data, index) => {
                        return <View>
                            <Image
                                key={data}
                                style={{ width: '100%', height: 300 } }
                                source={ imgArr[index] }
                            />
                            <Text style={{ lineHeight: 30 }}>
                                { data }
                            </Text>
                        </View>
                    })
                }
                <View style={[ styles.bottomActions, { backgroundColor: "red" } ]} />
                <View>
                    <Text style={ styles.featuredTitle }>Featured</Text>
                    {
                        articleParagraphs.slice(0, 3).map((text, index) => {
                            return (
                                <View key={text} >
                                    <Image source={ imgArr[index] } style={ styles.image }/>
                                    <Text style={ styles.paragraph }>{ text }</Text>
                                </View>
                            );
                        })
                    }
                </View>
            </Animated.ScrollView>

            <Animated.View
                style={[styles.bottomActions, {
                    position: 'absolute', bottom: 0, left: 0, right: 0, paddingHorizontal: 20,
                }]}>
                <View style={{ flexDirection: 'row', height: 60, alignItems: 'center', justifyContent: 'center' }}>
                    <IconMaterialCommunityIcons
                        name={ ICON.HOME }
                        style={{ fontSize: 20 }}
                    />
                    <Text>326</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={[styles.icon]}>
                        <IconMaterialCommunityIcons
                            name={ ICON.HOME }
                            style={{ fontSize: 20 }}
                        />
                    </View>
                    <View style={[styles.icon]}>
                        <IconMaterialCommunityIcons
                            name={ ICON.HOME }
                            style={{ fontSize: 20 }}
                        />
                    </View>
                    <View style={[styles.icon]}>
                        <IconMaterialCommunityIcons
                            name={ ICON.MAP }
                            style={{ fontSize: 20 }}
                        />
                    </View>
                </View>
            </Animated.View>
        </View>
    );
}

class TextScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bottomActions: null,
            scrollY: new Animated.Value(0)
        }
        // this.scrollY = new Animated.Value(0)
    }

    render() {
        const topEdge = this.state.bottomActions?.y - height + this.state.bottomActions?.height;
        const inputRange = [-1, 0, topEdge - 30, topEdge, topEdge + 1];
        return (
            <View>
                <StatusBar hidden />
                <Animated.ScrollView
                    onScroll={ Animated.event(
                        [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
                        { useNativeDriver: true }
                    )}
                    contentContainerStyle={{ padding: 20 }}>
                    <Text style={  styles.heading}>Black and White</Text>
                    {
                        articleParagraphs.map((data, index) => {
                            return <View>
                                <Image
                                    key={data}
                                    style={{ width: '100%', height: 300 } }
                                    source={ imgArr[index] }
                                />
                                <Text style={{ lineHeight: 30 }}>
                                    { data }
                                </Text>
                            </View>
                        })
                    }
                    <View
                        onLayout={ ev => {
                            this.setState({
                                bottomActions: ev.nativeEvent.layout
                            })
                        } }
                        style={[ styles.bottomActions, { backgroundColor: "red" } ]} />
                    <View>
                        <Text style={ styles.featuredTitle }>Featured</Text>
                        {
                            articleParagraphs.slice(0, 3).map((text, index) => {
                                return (
                                    <View key={text} >
                                        <Image source={ imgArr[index] } style={ styles.image }/>
                                        <Text style={ styles.paragraph }>{ text }</Text>
                                    </View>
                                );
                            })
                        }
                    </View>
                </Animated.ScrollView>

                {
                    this.state.bottomActions && (
                        <Animated.View
                            style={[styles.bottomActions, {position: 'absolute', bottom: 0, left: 0, right: 0, paddingHorizontal: 20,
                                transform: [{
                                    translateY: this.state.scrollY.interpolate({
                                        inputRange,
                                        outputRange: [0, 0, 0, 0, -1]
                                    })
                                }]
                            }]}>
                            <View style={{ flexDirection: 'row', height: 60, alignItems: 'center', justifyContent: 'center' }}>
                                <IconMaterialCommunityIcons
                                    name={ ICON.HOME }
                                    style={{ fontSize: 20 }}
                                />
                                {/*<Entypo name='adjust' size={24} color='black' style={{ marginHorizontal: 10 }} />*/}
                                <Animated.Text
                                    style={{
                                        opacity: this.state.scrollY.interpolate({
                                            inputRange,
                                            outputRange: [0, 0, 0, 1, 1]
                                        })
                                    }}
                                >326</Animated.Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={[styles.icon]}>
                                    <IconMaterialCommunityIcons
                                        name={ ICON.HOME }
                                        style={{ fontSize: 20 }}
                                    />
                                </View>
                                <Animated.View style={[
                                    styles.icon,{
                                        transform: [{
                                            translateX: this.state.scrollY.interpolate({
                                                inputRange,
                                                outputRange: [60, 60, 60, 0, 0]
                                            })
                                        }]
                                    }]}>
                                    <IconMaterialCommunityIcons
                                        name={ ICON.HOME }
                                        style={{ fontSize: 20 }}
                                    />
                                </Animated.View>
                                <View style={[styles.icon]}>
                                    <IconMaterialCommunityIcons
                                        name={ ICON.MAP }
                                        style={{ fontSize: 20 }}
                                    />
                                </View>
                            </View>
                        </Animated.View>
                    )
                }

            </View>
        );
    }
}

export default TextScreen;

const styles = StyleSheet.create({
    featuredImage: {
        width: 50,
        height: 50,
        resizeMode: 'cover',
        marginRight: 20,
        borderRadius: 10,
    },
    bottomActions: {
        height: 80,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    image: { width: '100%', height:300, resizeMode: 'cover', marginBottom: 20 },
    featuredTitle: {
        fontSize: 24,
        fontWeight: '800',
        marginVertical: 20,
    },
    heading: {
        marginTop: 20,
        fontSize: 32,
        fontWeight: '800',
        marginBottom: 30,
    },
    paragraph: {
        flex: 1,
        marginBottom: 10,
        // fontFamily: 'Georgia'
        fontSize: 14,
        lineHeight: 16 * 1.5,
    },
    icon: {
        height: 60,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

