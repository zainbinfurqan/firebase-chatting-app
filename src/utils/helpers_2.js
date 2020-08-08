import firestore from '@react-native-firebase/firestore';

let helpers = {};

helpers.getDataOnces = async function (collectionName) {
    try {
        const response = await firestore()
            .collection(collectionName)
            .get();
        return response.docs
    } catch (error) {
        return error
    }
}

helpers.getDataOncesWithId = async function (collectionName, docId) {
    try {
        const response = await firestore()
            .collection(collectionName)
            .doc(docId)
            .get();
        return response.docs
    } catch (error) {
        return error
    }
}

helpers.InsertDataWithOutId = async function (collectionName, data) {
    try {
        const response = await firestore()
            .collection(collectionName)
            .add(data)
        return response.docs
    } catch (error) {
        return error
    }
}

helpers.InsertDataWithId = async function (collectionName, id, data) {
    try {
        const response = await firestore()
            .collection(collectionName)
            .doc(id)
            .set(data)
        return response.docs
    } catch (error) {
        return error
    }
}


helpers.UdpateDoc = async function (collectionName, id, data) {
    try {
        const response = await firestore()
            .collection(collectionName)
            .doc(id)
            .update(data)
        return response
    } catch (error) {
        return error
    }
}

helpers.DeleteDoc = async function (collectionName, id, data) {
    try {
        const response = await firestore()
            .collection(collectionName)
            .doc(id)
            .delete()
        return response
    } catch (error) {
        return error
    }
}

export default helpers