var demo = document.querySelector('.callback')

setTimeout(()=>{
    demo.innerText = 10;
    setTimeout(()=>{
        demo.innerText = 9;
        setInterval(()=>{
            demo.innerText = 8;
            setTimeout(()=>{
                demo.innerText = 7;
                setTimeout(()=>{
                    demo.innerText = 6;
                    setTimeout(()=>{
                        demo.innerText = 5;
                        setTimeout(()=>{
                            demo.innerText = 4;
                            setTimeout(()=>{
                                demo.innerText = 3;
                                setTimeout(()=>{
                                    demo.innerText = 2;
                                    setTimeout(()=>{
                                        demo.innerText = 1;
                                        setTimeout(()=>{
                                            demo.innerText = "HAPPY INDEPENDENCE DAY"
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)