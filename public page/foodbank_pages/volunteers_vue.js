var app = new Vue({
                el: '#volunteersCard',
               
                data: {
                    items: [],
                    selectedItem:'',
                    //this is where you make new variables
                },
                mounted: function(){
                   this.loadItems(); 
                },
                methods: {
                    loadItems: function(){
                        
                        // Init variables
                        var self = this
                        var app_id = "appQiXNdEEJZqKLF1";
                        var app_key = "keyHugwZWc2X2ZEpQ";
                        this.items = []
                        axios.get(
                            "https://api.airtable.com/v0/"+app_id+"/Volunteers?view=Grid%20view",
                            { 
                                headers: { Authorization: "Bearer "+app_key } 
                            }
                        ).then(function(response){
                            self.items = response.data.records
                        }).catch(function(error){
                            console.log(error)
                        })      
        }, 
                    updateSelectedItem: function(item) {
                    this.selectedItem = item;
                    console.log(this.selectedItem);
                    //return this.selectedItem
                }
    }
});





