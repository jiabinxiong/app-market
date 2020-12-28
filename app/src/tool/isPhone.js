import DeviceInfo from 'react-native-device-info';

const isPhone = () => {
    if (
        DeviceInfo.getModel() === "iPhone 11" ||
        DeviceInfo.getModel() === "iPhone x" ||
        DeviceInfo.getModel() === "iPhoneXR" ||
        DeviceInfo.getModel() === "iPhoneXs" ||
        DeviceInfo.getModel() === "iPhoneXsMax" ) {
        return {
            header: {                   //头部
                left: {
                    marginTop: -20
                },
                right: {
                    marginTop: -15,
                },
                title: {
                    height: 75, paddingTop: 30
                }
            },
            tabBar: {
                area: {
                    height: 70
                }
            }
        }
    } else {
        return {
            header: {                   //头部
                title: {
                    height: 60, paddingTop: 45
                }
            },
            tabBar: {
                area: {
                    height: 60
                }
            }
        }
    }
}

export default isPhone;
