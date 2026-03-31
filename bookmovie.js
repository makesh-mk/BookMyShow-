 let movielist=document.getElementById("movielist")
        let seated=document.getElementById("seated")
        let count=document.getElementById("count")
        let total=document.getElementById("total")
        let btn=document.getElementById("btn")

        for(i=0;i<=53;i++){
            const seat=document.createElement("div");
            seat.classList.add("seat");
            seated.appendChild(seat)
        }

        function updateprice(){
            const selectedseat=document.querySelectorAll(".seat.selected");
            const ticketprice=+ movielist.value;

            count.textContent=selectedseat.length;
            total.textContent=selectedseat.length*ticketprice;

        }

        seated.addEventListener("click",(e)=>{
            if(e.target.classList.contains("seat")){
                e.target.classList.toggle("selected");
                updateprice()
            }
        })

        movielist.addEventListener("change",updateprice);

        btn.addEventListener("click",()=>{
             const selectedseat=document.querySelectorAll(".seat.selected");  
             if(selectedseat.length===0){
                alert("Please select your seats 😊!");
             } else{
                alert("🎉 Booking successfully 🎉 : "+selectedseat.length + " seats")
             }
        })