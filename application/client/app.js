
const menuItems = new Vue({
    el: '#menuItems',
    data: {
        appName: "Search Restaurants menu items",
        menuItems: {},
        searchItem: "",
        menuInfo: {},
        imageArr: [],
        infoImage: "",
        infoNutrients: [],
        searchHistory: [],
    },

    methods: {
        searchHistoryFunc: async function(id){
            const response = await axios.post("http://localhost:8888/api/fetch", {
                id : id
            })
            this.menuItems = {}
            this.imageArr = response.data.images
            this.infoImage = this.imageArr[0]
            this.infoNutrients = response.data.nutrition.nutrients
            this.menuInfo = response.data
        },
        searchMenuItems: async function() {
            const response = await axios.post("http://localhost:8888/api/search", {
                searchItem : this.searchItem
            })
            this.menuInfo = {}
            this.imageArr = []
            this.infoImage = ""
            this.infoNutrients = []
            this.menuItems = response.data
           
        },
        fetchMenuItems: async function(id) {
            const response = await axios.post("http://localhost:8888/api/fetch", {
                id : id
            })
            this.menuItems = {}
            console.log(response.data)
            this.imageArr = response.data.images
            this.infoImage = this.imageArr[0]           
            this.infoNutrients = response.data.nutrition.nutrients
            this.menuInfo = response.data
            this.searchHistory.push(this.menuInfo)
        }
   
    }
})