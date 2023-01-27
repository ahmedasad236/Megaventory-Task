import api from "./api";
const getAllOrders = async () => {
    try {
        const response = await api.get('/mvPurchaseOrders');
        return response.data;
    } catch(err) {
        return null;
    }
};

export default getAllOrders;