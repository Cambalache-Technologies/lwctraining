import { LightningElement, api, wire, track } from 'lwc';

import { getRelatedListRecords } from 'lightning/uiRelatedListApi';

import { NavigationMixin } from 'lightning/navigation';

export default class CargaPedido extends NavigationMixin(LightningElement) {
    @api recordId;

    @track orderOptions = [];

    orderElegida = '';

    @wire(getRelatedListRecords, {
        parentRecordId: '$recordId',
        relatedListId: 'Orders',
        fields: ['Order.OrderNumber', 'Order.Status']
    })
    handleWireOrders(value) {
        let { error, data } = value;

        if (data) {
            console.log(data);
            data.records.forEach(element => {
                let option = {
                    label: element.fields.OrderNumber.value,
                    value: element.id
                };

                this.orderOptions = [...this.orderOptions, option];
            });
        } else if (error) {
            console.log(error);
        }

    }

    handleShowOrders() {
        console.log(JSON.stringify(this.orders));
    }

    handleOrderSelection(event) {
        this.orderElegida = event.detail.value;
    }

    handleOpenOrder(event) {
        event.preventDefault();
        event.stopPropagation();
        this[NavigationMixin.Navigate]({
            type: "standard__component",
            attributes: {
                componentName: "c__cargaPedidoCatalogoContenedor"
            },
            state: {
                c__orderId: this.orderElegida,
                c__accountId: this.recordId
            }
        });
    }

}