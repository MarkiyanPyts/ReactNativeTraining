import { View, Button, Alert, Image, Text, StyleSheet } from "react-native"
import { launchCameraAsync, useCameraPermissions, PermissionStatus } from 'expo-image-picker';
import { useState } from "react";
import { Colors } from "../../constants/colors";
import OutlinedButton from "../UI/OutlinedButton";

function ImagePicker({onTakeImage}) {
    const [pickedImage, setPickedImage] = useState(null);
    const [cameraPermissionInfo, reqPermission] = useCameraPermissions();
    async function verifyPermission() {
        if (cameraPermissionInfo.status === PermissionStatus.UNDETERMINED) {
            const permissionResponce = await reqPermission();

            return permissionResponce.granted;
        }

        if (cameraPermissionInfo.status === PermissionStatus.DENIED) {
            Alert.alert('Permission Denied', 'You need to grant camera permission to use this app', [{ text: 'Okay' }]);
            return false;
        }

        return true;
    }
    async function takeImageHandler() {
        const hasPermission = await verifyPermission();

        if (!hasPermission) {
            return;
        }

        const image = await launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.5
        });
        setPickedImage(image.assets[0].uri);
        onTakeImage(image.assets[0].uri);
        console.log('image', image)

    }

    let imagePreview = <Text>No image picked yet.</Text>;

    if (pickedImage) {
        imagePreview = <Image source={{ uri: pickedImage }} style={styles.image}></Image>
    }

    return <View>
        <View style={styles.imagePreview}>
            {imagePreview}
        </View>
        <OutlinedButton onPress={takeImageHandler} icon="camera">Take Image</OutlinedButton>
    </View>
}

const styles = StyleSheet.create({
    imagePreview: {
        width: '100%',
        height: 200,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary100,
        borderRadius: 4,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
    }
});

export default ImagePicker