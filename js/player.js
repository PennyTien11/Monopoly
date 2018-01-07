
function Player (id,name){
	this.id=id;
	this.name=name;
	this.cash=10000;
	this.position=100;


	this.get_id= function(){
		return this.id;
	}
	this.get_name= function(){
		return this.name;
	}
	this.get_cash= function(){
		return this.cash;
	}
	this.get_position= function(){
		return this.position;
	}
	this.get_color= function(){
		// console.log("#player"+this.id+" !! "+$("#player"+this.id).css("background-color"));
		return $("#player"+this.id).css("background-color");
	}
	this.initial_position= function(position){
		var position_id = position.get_id();
		var field = $('#'+position_id).offset();
		$('#'+this.id).css("top",field.top+this.id*15+10);
		$('#'+this.id).css("left",field.left+Math.floor(1+ Math.random()*80));
		$('#'+this.id).css("display","inline");
		console.log("set position "+position_id+" done"+this.id);
		this.position = position;
	}
	this.set_position= function(position,moveMark){
		var position_id = position.get_id();
		var field = $('#'+position_id).offset();
		// var origin = $('#'+id).offset();
		// var target = $('#'+position_id).offset();
		move_mark(id,field,moveMark);
		this.position = position;
	}
	this.add_cash= function(money){
		console.log(this.cash+money);
		this.cash = this.cash+money;
		return this.cash;
	}
	this.check_bankruptcy= function(){
		if(this.cash<0){
			return true;
		}
		return false;
	}
	this.my_round_start= function(){
		$("#player"+this.id).css("width",100);
		$("#player"+this.id).css("height",100);
		$("#player"+this.id+" "+".roll").css("display","inline");

	}
	this.my_round_end= function(myevent){
		$("#player"+this.id+" "+".roll").css("display","none");
		$("#player"+this.id).css("width",50);
		$("#player"+this.id).css("height",50);
	}
	this.print= function(){
		console.log("------Player-------")
		console.log("name: "+this.name);
		console.log("cash: "+this.cash);
		console.log("position: "+this.position.get_id());
	}

};

var flag = null;
var num = 0;

function move_mark(id,target){

	var target_top=target.top+id*15+10;
	var target_left=target.left+Math.floor(1+ Math.random()*80);

	clearInterval(flag);
    flag=setInterval(move.bind("QQ",target_top,target_left,id,moveMark),10);
	// $('#'+id).css("top",field.top+this.id*15);
	// $('#'+id).css("left",field.left+Math.floor(1+ Math.random()*80));
	// $('#'+id).css("display","inline");
	// console.log("set position "+position_id+" done"+this.id);

}
function move (tt,tl,id,moveMark) {

	var origin = $('#'+id).offset();
	var ot=origin.top;
	var ol=origin.left;
	console.log("here"+ot+","+ol+" --- "+tt+","+tl);
   // document.getElementById(id).innerHTML = num;

   var success=0;

   if(ot!=tt){
   		if(ot>tt){
			if(ot-tt<2){
				$('#'+id).css("top",tt);
   			}
   			else{
   				$('#'+id).css("top",ot-3);
   			}
   		}
   		else{
   			if(tt-ot<2){
				$('#'+id).css("top",tt);
   			}
   			else{
   				$('#'+id).css("top",ot+3);
   			}
   		}

   }
   else{
   		success+=50;
   }

   if(ol!=tl){
   		if(ol>tl){
   			if(ol-tl<2){
	   			$('#'+id).css("left",tl);
	   		}
	   		else{
	   			$('#'+id).css("left",ol-3);
	   		}
   		}
   		else{
	   		if(tl-ol<2){
	   			$('#'+id).css("left",tl);
	   		}
	   		else{
	   			$('#'+id).css("left",ol+3);
	   		}
	   	}
   }
   else{
   	success+=50;
   }

   if(success==100){
   		window.dispatchEvent(moveMark);
   		// alert("complete!");
   		clearInterval(flag);
   }
}
