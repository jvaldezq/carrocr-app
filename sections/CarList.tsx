import {
    StyleSheet,
    SafeAreaView,
    ScrollView,
    StatusBar,
} from 'react-native';
import CarCard from "@/components/CarCard";

export default function CarList() {
    return (<SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
        </ScrollView>
    </SafeAreaView>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
        marginBottom: 60,
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
    },
    text: {
        fontSize: 42,
    },
});
