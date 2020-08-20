/*
mounted: function(){
this.loadItems();
},
methods: {
    loadItems: function(){
        //Init variables
        var self = this
        var app_id = "appQiXNdEEJZqKLF1";
        var app_key = "";
        this.items = []
        axios.get(
        "https://airtable.com/shrdfWBHeJDZjFKs4"+app_id+"",
        {
            headers: { Authorization: "Bearer "+app_key }
        }
        ).then(function(response){
            self.items = response.data.records
        }).catch(Function(error){
            console.log(error)
        })
        
    }
}

methods: {
    loadItems: function()
}
*/




function form_confirm(){
    var submit = confirm('Are you sure you want to submit this form?');
if (submit== true) {
    window.location.href = "form_success.html";
}
}

