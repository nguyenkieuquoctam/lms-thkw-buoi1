 
 function inBCC() {
            let n = document.getElementById("txtSo").value;
            let result = "";

            for (let i = 1; i <= 10; i++) {
                result += `${n} x ${i} = ${n * i}<br>`;
            }
            document.getElementById("result").innerHTML = result;
}



