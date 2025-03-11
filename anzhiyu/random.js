var posts=["2024/10/12/KMP/","2024/09/28/ShortNote/","2024/10/17/Tree/","2024/09/28/hello-world/","2024/09/30/biSeaNote/","2024/10/09/two-pointer/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };