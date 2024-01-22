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
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatee = exports.deletee = exports.createe = exports.getOne = exports.getProducts = void 0;
const product_1 = require("../models/product");
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listProducts = yield product_1.Product.findAll();
    res.json(listProducts);
});
exports.getProducts = getProducts;
const getOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const listProducts = yield product_1.Product.findOne({ where: { id: id } });
    res.json(listProducts);
});
exports.getOne = getOne;
const createe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, precio, image, descripcion } = req.body;
    yield product_1.Product.create({ nombre: nombre, precio: precio, image: image, descripcion: descripcion });
    res.json({
        msg: 'producto nuevo'
    });
});
exports.createe = createe;
const deletee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield product_1.Product.destroy({ where: { id: id } });
    res.json({
        msg: 'producto destruido'
    });
});
exports.deletee = deletee;
const updatee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield product_1.Product.update(req.body, { where: { id: id } });
    res.json({
        msg: 'producto modificado'
    });
});
exports.updatee = updatee;
