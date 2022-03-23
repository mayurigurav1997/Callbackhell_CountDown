var count = 10;


//This is a Callback hell
setTimeout(() => {
    document.getElementById("myDiv").innerText = count;
    count--;
    setTimeout(() => {
        document.getElementById("myDiv").innerText = count;
        count--;
        setTimeout(() => {
            document.getElementById("myDiv").innerText = count;
            count--;
            setTimeout(() => {
                document.getElementById("myDiv").innerText = count;
                count--;
                setTimeout(() => {
                    document.getElementById("myDiv").innerText = count;
                    count--;
                    setTimeout(() => {
                        document.getElementById("myDiv").innerText = count;
                        count--;
                        setTimeout(() => {
                            document.getElementById("myDiv").innerText = count;
                            count--;
                            setTimeout(() => {
                                document.getElementById("myDiv").innerText = count;
                                count--;
                                setTimeout(() => {
                                    document.getElementById("myDiv").innerText = count;
                                    count--;
                                    setTimeout(() => {
                                        document.getElementById("myDiv").innerText = count;
                                        count--;
                                        setTimeout(()=> {
                                            document.getElementById("myDiv").innerText = "";
                                            document.getElementById("first").innerText ="Happy";
                                        },1000);
                                        setTimeout(()=> {
                                            document.getElementById("second").innerText ="Independence";
                                        },1000);
                                        setTimeout(() => {
                                            document.getElementById("third").innerText ="Day";
                                        },1000);
                                    },1000);
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);
},1000);