"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.updatee = exports.deletee = exports.getOne = exports.getUsers = exports.newUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_1 = require("../models/user");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const newUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, nombre, apellidos, pass } = req.body;
    //validamos si el usuario ya existe en la DB
    const hashedPassword = yield bcrypt_1.default.hash(pass, 10);
    const user = yield user_1.User.findOne({ where: { username: username } });
    if (user) {
        return res.status(400).json({
            msg: 'ya existe un usuario con ese nombre' + user
        });
    }
    try {
        //guardamos usuario en la base de dats
        yield user_1.User.create({
            username: username,
            nombre: nombre,
            apellidos: apellidos,
            pass: hashedPassword,
        });
        res.json({
            msg: 'Usuario ' + username + ' creado exitosamentes'
        });
    }
    catch (error) {
        res.status(400).json({
            msg: 'ups ocurrio un error',
            error
        });
    }
});
exports.newUser = newUser;
//----------------------------------------------------------------------------
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listUsers = yield user_1.User.findAll();
    res.json(listUsers);
});
exports.getUsers = getUsers;
const getOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const listUser = yield user_1.User.findOne({ where: { id: id } });
    res.json(listUser);
});
exports.getOne = getOne;
const deletee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield user_1.User.destroy({ where: { id: id } });
    res.json({
        msg: 'producto eliminado'
    });
});
exports.deletee = deletee;
const updatee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { username } = req.body;
    yield user_1.User.update({ username: username }, { where: { id: id } });
    res.json({
        msg: 'Usuario actualizado'
    });
});
exports.updatee = updatee;
//----------------------------------------------------------------------------------------
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, pass } = req.body;
    //validamos si el usuario existe en la DB
    const user = yield user_1.User.findOne({ where: { username: username } });
    if (!user) {
        return res.status(400).json({
            msg: 'no existe ' + username + ' en la DB'
        });
    }
    //validamos passworrd
    const passwordValid = yield bcrypt_1.default.compare(pass, user.pass);
    console.log(passwordValid);
    if (!passwordValid) {
        return res.status(400).json({
            msg: 'password incorrecto'
        });
    }
    //generamos token
    const token = jsonwebtoken_1.default.sign({
        username: username
    }, process.env.SECRET_KEY || 'pepito123');
    res.json({ token });
});
exports.loginUser = loginUser;
