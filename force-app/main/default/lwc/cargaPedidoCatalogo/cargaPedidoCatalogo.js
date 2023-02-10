import { LightningElement, api } from 'lwc';

export default class CargaPedidoCatalogo extends LightningElement {
    @api orderId;
    @api accountId;
}