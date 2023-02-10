({
    init: function(cmp) {
        var myPageRef = cmp.get("v.pageReference");
        var orderId = myPageRef.state.c__orderId;
        var accountId = myPageRef.state.c__accountId;
        cmp.set("v.orderId", orderId);
        cmp.set("v.accountId", accountId);
    }
})
