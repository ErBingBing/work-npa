
  
     function sleCheckbox(num){
      var List1 = document.getElementById('hkje');
      var List2 = document.getElementById('hkl');
      var changes = document.getElementById('changeCots');
      
      if(num=='1'){
       
        List1.checked=true; 
        List2.checked=false;   
         var inputs = document.getElementById('tbody1').getElementsByTagName("input");
        for (var i=0;i<inputs.length;i++) {
          inputs[i].value="";
          }
        changes.innerHTML = '还款金额';
        getSpanCots(' 万元');
      };
      if(num=='2'){
        List2.checked=true; 
        List1.checked=false;  

        // alert(hkl.value);
        var inputs = document.getElementById('tbody1').getElementsByTagName("input");
        for (var i=0;i<inputs.length;i++) {
          inputs[i].value="";
          }
        changes.innerHTML = '还款率'; 
         getSpanCots(' %');
      }

     };

      function getSpanCots(text){
        var spans=document.getElementById("tbody1").getElementsByTagName("span");
      for (var i=0;i<spans.length;i++) {
          spans[i].innerText=text;
           }

        }



      function btnDelete(currentbtn){
           var tr = currentbtn.parentNode.parentNode;
           //从tbody中删除的行
           document.getElementById('tbody1').removeChild(tr);
        }

      window.onload = function (){
        document.getElementById('addRows').onclick=function(){
          //alert('abc');
        var tbodyObj  = document.getElementById('tbody1');
        //向tbody表格中插入一行
        var currentRow = tbodyObj.insertRow(-1);
        var List1 = document.getElementById('hkje');
        var List2 = document.getElementById('hkl');
        //向tbody表格中插入一列
        if(List1.checked==true){
        currentRow.insertCell(-1).innerHTML = ' <td><input type="number" min="0" ></td>'         
        currentRow.insertCell(-1).innerHTML = ' <td><span>万元</span></td>';
        currentRow.insertCell(-1).innerHTML = ' <td>~</td>';
        currentRow.insertCell(-1).innerHTML = ' <td><input type="number" min="0"></td>';
        currentRow.insertCell(-1).innerHTML = ' <td><span>万元</span></td>';
        currentRow.insertCell(-1).innerHTML = ' <td><input type="number" min="0"></td>';
        currentRow.insertCell(-1).innerHTML = ' <td> &nbsp;&nbsp;%</td>';
        currentRow.insertCell(-1).innerHTML = ' <td><img src="images/delRow.png" alt="" onclick="btnDelete(this)"></td>';
        }
        if(List2.checked==true){
        currentRow.insertCell(-1).innerHTML = ' <td><input type="number" min="0" ></td>'         
        currentRow.insertCell(-1).innerHTML = ' <td><span>%</span></td>';
        currentRow.insertCell(-1).innerHTML = ' <td>~</td>';
        currentRow.insertCell(-1).innerHTML = ' <td><input type="number" min="0"></td>';
        currentRow.insertCell(-1).innerHTML = ' <td><span>%</span></td>';
        currentRow.insertCell(-1).innerHTML = ' <td><input type="number" min="0"></td>';
        currentRow.insertCell(-1).innerHTML = ' <td><span> &nbsp;&nbsp;%</span></td>';
        currentRow.insertCell(-1).innerHTML = ' <td><img src="images/delRow.png" alt="" onclick="btnDelete(this)"></td>';
        }
     

        };
      };

