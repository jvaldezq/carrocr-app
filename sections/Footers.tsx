import {useCallback} from 'react';
import {StyleSheet, Pressable, View, Text, Alert, Image} from 'react-native';
import {colors} from '@/utils/colors';

export default function Footers() {

    const onPress = useCallback(() => {
        Alert.alert('Simple Button pressed')
    }, [])

    return (<View style={styles.container}>
        <Pressable style={styles.button} onPress={onPress}>
            <Image source={require('@/assets/icons/home-icon.webp')} style={styles.icon}/>
            <Text style={styles.text}>Home</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={onPress}>
            <Image source={require('@/assets/icons/search-icon.webp')} style={styles.icon}/>
            <Text style={styles.text}>Buscar</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={onPress}>
            <Image source={require('@/assets/icons/profile-icon.webp')} style={styles.icon}/>
            <Text style={styles.text}>Perfil</Text>
        </Pressable>
    </View>);
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: colors.secondary,
        paddingBottom: 25,
        paddingTop: 15,
        borderStyle: 'solid',
        borderTopWidth: 1,
        borderColor: 'rgba(80, 81, 79, 0.1)',
        paddingHorizontal: 25,
        position: 'absolute',
        bottom: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    }, button: {
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5
    }, text: {
        color: colors.tertiary, fontSize: 15,
    }, icon: {
        width: 25, height: 25,
    }
});
