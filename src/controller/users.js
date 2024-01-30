const usersModel = require('../models/users');

const getAllUsers = async (req, res) => {
    try {
        const [data] = await usersModel.getAllUsers();
        res.status(200).json({
            message : 'GET users Success',
            data : data,
        })
    } catch (error) {
        res.status(500).json({ 
            message : 'Server Error',
            serverMessage : error,
        })
    }
};

const createNewUsers = async (req, res) => {
    const {body} = req

    if(!body.name || !body.name){
        return res.status(400).json({
            message: 'Invalid Input'
        })
    }
    try {
        await usersModel.createNewUsers(body);
        res.status(201).json({
            message : 'CREATE users Success',
            data : body,
        })
    } catch (error) {
        res.status(500).json({ 
            message : 'Server Error',
            serverMessage : error,
        })
    }
};

const updateUsers = async (req, res) => {
    const {id} = req.params;
    const {body} = req;
    try {
        await usersModel.updateUsers(body, id);
        res.status(200).json({
            message : 'UPDATE users Success',
            data : {
                id : id,
                ...body,
            }
        })
    } catch (error) {
        res.status(500).json({ 
            message : 'Server Error',
            serverMessage : error,
        })
    }
};

const deleteUsers = async (req, res) => {
    const {id} = req.params;
    try {
        await usersModel.deleteUsers(id);
        res.status(200).json({
            message : 'DELETE users Success',
        })
    } catch (error) {
        res.status(500).json({ 
            message : 'Server Error',
            serverMessage : error,
        })
    }
};

module.exports = {
    getAllUsers,
    createNewUsers,
    updateUsers,
    deleteUsers,
};