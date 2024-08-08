import {
    Image,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {colors} from "@/utils/colors";

export default function CarCard() {
    return (<View style={styles.container}>
        <Image source={{uri: 'https://static.cargurus.com/images/forsale/2024/04/18/07/55/2017_porsche_911-pic-6771499861641859342-1024x768.jpeg'}} style={styles.image}/>
        <View style={styles.inlineTextContainer}>
        <Text style={styles.text}>Porsche 911</Text>
            <Text style={styles.textBold}>2027</Text>
        </View>
        <Text style={styles.textBold}>Carrera GTS</Text>
        <Text style={styles.text}>Manual</Text>
        <Text style={styles.text}>50,000km</Text>
        <Text style={styles.price}>$19,230.00</Text>
    </View>);
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 25,
        paddingHorizontal: 25,
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
    },
    inlineTextContainer: {
      display: 'flex',
      flexDirection: 'row',
      gap: 5,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 15,
    },
    textBold: {
        fontSize: 16,
        color: colors.tertiary,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 16,
        color: colors.tertiary
    },
    price: {
        fontSize: 20,
        color: colors.tertiary,
        fontWeight: 'bold',
        alignSelf: 'flex-end',
    }
});
