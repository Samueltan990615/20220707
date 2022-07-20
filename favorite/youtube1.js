var box1 = new Vue({
    el:'#box',
    data:{
        itemList:[
          {
            id:'1',
            itemName:'Build and Deploy a React Admin Dashboard App With Theming, Tables, Charts, Calendar, Kanban and More',
            imgUrl:'https://i.ytimg.com/vi/jx5hdo50a2M/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLDwtjtFsgg-THNiE-RLYgMgLAwEcg',
            itemCName:'JavaScript Mastery',
            itemLink:'https://www.youtube.com/watch?v=jx5hdo50a2M'
          },
          {
            id:'2',
            itemName:'How To Upload And Display Image on Website Using HTML CSS JS | Upload Stories & Post',
            imgUrl:'https://i.ytimg.com/vi/73Pnj4MfhzI/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDCD_IUbUggIwOYoKkGIPz9pfEZfQ',
            itemCName:'Easy Tutorials',
            itemLink:'https://www.youtube.com/watch?v=73Pnj4MfhzI'
          },
          {
            id:'3',
            itemName:'Junior vs Senior React Folder Structure - How To Organize React Projects',
            imgUrl:'https://i.ytimg.com/vi/UUga4-z7b6s/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLDd89J1b56h8t7L1KQMjvTm0xNCOA',
            itemCName:'Web Dev Simplified',
            itemLink:'https://www.youtube.com/watch?v=UUga4-z7b6s'
          }
    ]
    },
    methods:{

        handledelete: function(index){
            console.log(this);
            this.itemList.splice(index,1);
        },
    },
})