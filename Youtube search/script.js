$(document).ready(function(){
    var API_KEY="AIzaSyCNDTvDi79LgabkRxWA1PCVgtnKtOPt3-4"
    
    var video=''
 
   $("form").submit(function(event){
    event.preventDefault()

    var search=$("#search").val()
  
videosearch(API_KEY,search,2)


})

   function videosearch(key,search,maxResults){
    $("#video").empty()

    $.get("https://www.googleapis.com/youtube/v3/search?key="+key+
    "&type=video&part=snippet&maxresults="+maxResults+"&q="+search,function(data){
        console.log(data)
       
         data.items.forEach(item =>{
            video=`
            <iframe width="200" height="100" src="https://www.youtube.com/embed/${item.id.videoId}" frameborder="0"></iframe>
            
            `
            $("#videos").append(video)
         });
    })
   }
})