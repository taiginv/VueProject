<script>
export default{
    props : {
        imgUrl: String,
        name: String,
        birth : String
    },
    data(){
        return {
            color:""
        }
    },
    computed:{
        compareBirth(){
            console.log("compareBirth invoked in computed")
            if (Date.parse(this.birth) < Date.parse('1970-01-01')){
                this.color = "green"
                return 'older'
            } else {
                this.color = "red"
                return 'younger'
            }
        }
    },
    // methods:{
    //     compareBirth(){
    //                 console.log("compareBirth invoked in methods")
    //         if (Date.parse(this.birth) < Date.parse('1970-01-01')){
    //             return 'older'
    //         } else {
    //             return 'younger'
    //         }
    //     }
    // }
    //data()
    //methods
}
</script>
<template>
        <div class="card">
            <img :src="imgUrl" alt="prifle image" class="card__img">
            <h2 class="card__name">{{ name }}</h2>
            <h2>{{birth}}</h2>
            <h3 class="card__birth">{{ compareBirth }}</h3>
            <!-- <h2 class="card__birth">{{ (Date.parse(birth) < Date.parse('1970-01-01'))? 'older':'younger' }}</h2>
            <h2 class="card__birth">{{ (Date.parse(birth) < Date.parse('1970-01-01'))? 'older':'younger' }}</h2>
            <h2 class="card__birth">{{ (Date.parse(birth) < Date.parse('1970-01-01'))? 'older':'younger' }}</h2> -->
        </div>

</template>
<style scoped>
        .card{
            display:flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap:10px;
            width: 200px;
            height: 250px;
            background-color: cadetblue;
            box-shadow: 1px 1px 10px grey;
        }
        .card__img{
            width: 100px;
            height: 100px;
            object-fit: cover;
            border-radius: 100%;
            border:solid 2px;
            padding: 5px;
            background-color: white;
            box-shadow: 1px 1px 10px grey;
        }
        .card__name{
            font-weight:700;
        }
        .card__birth{
            font-weight: 300;
            color: v-bind(color)
        }
</style>

