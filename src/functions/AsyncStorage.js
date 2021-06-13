import AsyncStorage from '@react-native-async-storage/async-storage';


const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
        alert('data saved successfully');
    } catch (error) {
        alert(error)
    }
}
const storeDataJson = async (key, value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonValue);
        alert('data saved successfully');
        console.log('data saved')
    } catch (error) {
        alert(error)
    }
}

const getData = async (key) => {
    try {
        const data = await AsyncStorage.getItem(key);
        if (data != null) {
            alert(data);
        } else {
            alert('no data assigned');
        }
    } catch (error) {
        alert(error)
    }
}
const getDataJSON = async (key) => {
    try {
        let data = await AsyncStorage.getItem(key);
        if (data != null) {
            const jsonData = JSON.parse(data);
            return jsonData;
            // console.log(jsonData);
        } else {
            console.log('no data assigned');
        }
    } catch (error) {
        console.log(error)
    }
}

const removeData = async (key) => {
    try {
        await AsyncStorage.setItem(key);
        console.log('data removed')
    } catch (error) {
        alert(error)
    }
}

export { storeData, storeDataJson, getData, getDataJSON, removeData };

