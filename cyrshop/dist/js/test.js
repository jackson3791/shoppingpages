"use strict";function getCart(){var t=localStorage.getItem("cart")||"[]";return JSON.parse(t)}function setCart(t){localStorage.setItem("cart",JSON.stringify(t))}function showList(){var t=getCart();if(t.length<1)return $("tbody").hide(),void $("h2").show();$("tbody").empty(),$.each(t,function(t,e){console.log(e),$("tbody").append("<tr>\n          <td>".concat(e.product_id,"</td>\n          <td>").concat(e.product_name,'</td>\n          <td>\n              <img src="').concat(e.product_img,'" alt="">\n          </td>\n          <td>').concat(e.product_price,'</td>\n          <td>\n              <span class="add">+</span>\n              <span>').concat(e.product_num,'</span>\n              <span class="cut">-</span>\n          </td>\n          <td>\n              <button class="del">删除</button>\n          </td>\n      </tr>'))})}localStorage.getItem("name")?$(".h11").html(localStorage.getItem("name")+"的购物车"):location.href="./resign.html",showList(),$(".add").click(function(){$(this).next().text(+$(this).next().text()+1)}),$(".cut").click(function(){$(this).prev().text($(this).prev().text()-1)});for(var delArr=document.querySelectorAll(".del"),h2=document.querySelector("h2"),thead=document.querySelector("thead"),aa=delArr.length,i=0;i<delArr.length;i++)delArr[i].onclick=function(){var t;confirm("确定要删除吗?")&&(console.log(aa),(t=this.parentNode).parentNode.parentNode.removeChild(t.parentNode),0==--aa&&(h2.style.display="block",thead.style.display="none"))};