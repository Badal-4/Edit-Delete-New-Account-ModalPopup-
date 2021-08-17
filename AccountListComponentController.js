({
getAccountlst : function(component, event, helper) {

var action = component.get("c.getAccountlists");

action.setCallback(this, function(a) {
if (a.getState() === "SUCCESS") {
component.set("v.accountlist", a.getReturnValue());
} else if (a.getState() === "ERROR") {
$A.log("Errors", a.getError());
}
});

$A.enqueueAction(action);
},
handleClick : function(component,event,helper)
    {
        var eventSource = event.getSource();
         var i = eventSource.get('v.name');
        alert(i);
      var act = component.get("c.deleteAcc");
       act.setParams({
            accountId : i
        });
        act.setCallback(this,function(resp)
                        {
                            var rs = resp.getReturnValue();
                            component.set("v.conList",rs);
                        });
        $A.enqueueAction(act);
    },    
     editRecord : function(component,event,helper)
    {
        var editRecordEvent = $A.get("e.force:editRecord");
         var eventSource = event.getSource();
         var i = eventSource.get('v.name');
        editRecordEvent.setParams({
            "recordId" : i
        });
        editRecordEvent.fire();
    }
})
