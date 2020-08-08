import firestore from '@react-native-firebase/firestore';

let helpers = {};



helpers.getDataOnces = async function (docName) {
    try {
        const response = await firestore()
            .collection(docName)
            .get();
        return response.docs
    } catch (error) {
        console.log(error)
        return error
    }
}

helpers.getDataOncesWithId = async function (docName, id) {
    try {
        const response = await firestore()
            .collection(docName)
            .doc(id)
            .get();
        return response
    } catch (error) {
        console.log(error)
        return error
    }
}

helpers.InsertDataWithOutId = async function (docName, data) {
    try {
        const response = await firestore()
            .collection(docName)
            .add(data)
        return response
    } catch (error) {
        console.log(error)
        return error
    }
}

helpers.InsertDataWithId = async function (collection, id, data) {
    try {
        const response = await firestore()
            .collection(collection)
            .doc(id)
            .set(data)
        return response
    } catch (error) {
        console.log(error)
        return error
    }
}

helpers.UpdateData = async function (collection, id, data) {
    try {
        const response = await firestore()
            .collection(collection)
            .doc(id)
            .update(data)
        return response
    } catch (error) {
        console.log(error)
        return error
    }
}
helpers.DeleteData = async function (collection, id) {
    try {
        const response = await firestore()
            .collection(collection)
            .doc(id)
            .delete()
        return response
    } catch (error) {
        console.log(error)
        return error
    }
}

export default helpers