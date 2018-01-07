function Game(){
	this.now=0;
	this.players= new Array;
	this.field= new Array;


	this.get_now= function(){
		return this.now;
	}

	// this.next_one= function(){
	// 	if(this.now==3)
	// 		this.now=0;
	// 	else
	// 		this.now++;

	// 	return this.now;
	// }

	this.establish= function(player_name, field_name){
		
		for(var i=0; i<20; i++){
			var id=convert_field_id(0,i);

			$("#"+id.toString()).append("<div class='country'>"+field_name[i]+"</div>");
			console.log("#"+id.toString()+" add country name "+field_name[i]);
			this.field.push(new Field(id, field_name[i]));
		}

		for(var i =0; i<4; i++){

			var p = new Player(i,player_name[i]);
			p.initial_position(this.field[0]);

			$("#player"+(i).toString()+" "+".name").html(p.get_name());
			this.players.push(p);
		}
		// var temp = $("table").position();

		// console.log(temp.left);
	};

	this.print= function(player,field){
		this.players[player].print();
		this.field[field].print();
		// console.log("------Player-------")
		// console.log("first: "+players[i].);
		// console.log("cash: "+this.cash);
		// console.log("position: "+this.position);
	};

	this.updata_cash= function(){
		for(var i=0; i<4; i++){
			var money = this.players[i].get_cash();
			// console.log(this.players[i].get_id());
			$("#player"+(i).toString()+" "+".money").html(money);
		}
	}

	this.round= function(myevent,s){
		
		var the_player=this.players[s];
		// alert("player "+s+" :"+the_player.get_name());
		alert("輪到"+the_player.get_name()+"囉");
		the_player.my_round_start();
		
		//roll dice
		
		//check buy or pay
		var emptyObject = {};
		var button = document.getElementById("p"+s); 
		var field_list = this.field;
		button.addEventListener("click", function a(){
			roll_die();
			window.addEventListener("dieRun",function h(){
				alert("是 "+result+" !!!");
				var target = convert_field_id(the_player,result);
				var the_field = field_list.find(function(f){return f.get_id()==target;});
				console.log("check get filed "+the_field.get_name());
				movement(the_player,the_field,myevent);	
				this.removeEventListener("dieRun",h,false);
			});
			this.removeEventListener('click',a,false);
		},false);
  		// button.addEventListener( "click", );//https://msdn.microsoft.com/zh-tw/library/ff841995(v=vs.94).aspx
		
		//move mark
		//and do
	}
};
var interval = null;
var dieImage;
var result;

function roll_die(){
	stop = false;
	if ( interval )
	  return;
   	interval = window.setInterval(run, 100 );


	return result;
		
}
   	
function run(){
	var field = document.getElementById("die");
	var dieValue = Math.floor(1+Math.random()*6);
	var image_html = "<img id='thedie' src='img/die"+dieValue+".png' alt='die"+dieValue+"image'><div class='hint' style='font-size:12px'>按住停止</div>";
	field.innerHTML = image_html;

	$("#thedie").click(function(){
		image_html = "<img id='thedie' src='img/die"+dieValue+".png' alt='die"+dieValue+"image'>";
		field.innerHTML = image_html;
		result = dieValue;
		window.clearInterval( interval );
		interval = null;
		window.dispatchEvent(dieRun);
	});
   	
}

function movement(the_player,the_field,myevent){
	// move mark
	the_player.set_position(the_field,moveMark);
	alert(the_player.get_name()+" arrive at "+the_field.get_name()+"\n");
	window.addEventListener("moveMark",function t(){

		the_player.print();
		the_field.print();
		if(the_field.get_id()!="100"){
		// the country has no owner
			if(the_field.state==null){
				if(the_player.get_cash()<1000){
					alert("你錢不夠歐");
				}
				else{
					if(confirm("你要購買土地嗎？要花你1000元歐")){
						the_field.transaction(the_player,0);
					}
				}
			}//the country has owner
			else{
				//build up if your the owner
				if(the_field.get_owner().get_name()==the_player.get_name()){
					if(the_player.get_cash()<500){
						alert("你錢不夠歐");
					}
					else{
						if(confirm("你要蓋房子嗎？要花你500元歐")){
							the_field.transaction(the_player,2);
						}
					}
				}
				else{
					if(the_player.get_cash()>=the_field.get_rent()){
						if(the_player.get_cash()>the_field.get_price())
						{
							//buy it
							if(confirm("你要買下來嗎？要花你"+the_field.get_price()+"元歐")){
								the_field.transaction(the_player,1);
							}
							//pay rent
							else{
								alert("你要給"+the_field.get_owner().get_name()+the_field.get_rent()+"元ＱＱ");
								the_field.get_owner().add_cash(the_field.get_rent());
								the_player.add_cash(-the_field.get_rent());
								console.log("------pay rent------");
								the_field.get_owner().print();
								the_player.print();
								if(the_player.check_bankruptcy()){
									alert("Game Over!");
								}
							}
						}
						else{
								alert("你要給"+the_field.get_owner().get_name()+the_field.get_rent()+"元ＱＱ");
								the_field.get_owner().add_cash(the_field.get_rent());
								the_player.add_cash(-the_field.get_rent());
								console.log("------pay rent------");
								the_field.get_owner().print();
								the_player.print();
						}
					}
					else{
						alert(the_player.get_name()+"你破產了");
						window.dispatchEvent(gameover);
					}
				}
			}

		// var money = the_player.get_cash();
		// console.log("#player"+the_player.get_id()+" "+".money: "+money);
		// $("#player"+the_player.get_id()+" "+".money").html(money);
		
		
		}
		the_player.my_round_end(myevent);
		// alert(the_player.get_id()+" 觸發");
		this.removeEventListener('moveMark',t,false);
		window.dispatchEvent(myevent);
		// alert(the_player.get_id()+" 觸發下個");
	})
	
}
function convert_field_id(the_player,number){

	if(the_player!=0){
		var now = the_player.get_position().get_id()%100;
		var temp = now+number;
		if(temp>19){
			number = temp-19;
			// number=0;
			alert("經過起點");
		}
		else{
			number = temp;
		}
		console.log("Here convert field_id"+number+" now:"+now);
	}
	if(number<10){
		return "10"+number.toString();
	}
	else
		return "1"+number.toString();
}

const moveMark = new CustomEvent(
  'moveMark',
  {
    detail: {
              message: 'moveMark'
          },
          bubbles: false,
          cancelable: true
  }
)

const dieRun = new CustomEvent(
  'dieRun',
  {
    detail: {
              message: 'dieRun'
          },
          bubbles: false,
          cancelable: true
  }
)
