import api from "./api";
const getOrderById = async (id) => {
    try {
        const response = await api.get(`/mvPurchaseOrders/${id}`);
        return response.data;
    } catch(err) {
        return null;
    }
};

export default getOrderById;