$(document).ready(function(){
	// var player1=prompt("請第一位玩家輸入自己名字:","");
	// var palyer2=prompt("請第二位玩家輸入自己名字:","");
	// var player3=prompt("請第三位玩家輸入自己名字:","");
	// var player4=prompt("請第四位玩家輸入自己名字:","");

	var players=new Array("Penny","Jessie","Rodney","Willy");
	// var players=new Array(player1,player2,player3,player4);
	var country_name = new Array("Start","Taiwan","Hong Kong","Japan","Korea","Russia","Israel","Syria","Turkey","Australia","New Zealand","Belgium","France","Germany","United Kingdom","Denmark","Iceland","Greece","Italy","Canada","United States");
	var game = new Game();
	game.establish(players, country_name);
	game.print(2,2);
	var s = 0;
	game.updata_cash();
	game.round(myevent,s);
	
	window.addEventListener("roundOver",function(){

		if(s==3)
			s=0;
		else
			s++;
		game.updata_cash();
		// var n = game.next_one();
		console.log(s+" is my turn");
		game.round(myevent,s);
		// alert(s+ "觸發結束");
	});
	window.addEventListener("gameover",function(){
		alert("遊戲結束");
		if(confirm("你要再繼續一場嗎？")){
			location.reload();
		}	
		else{
			window.close();
		}
	});

});

const myevent = new CustomEvent(
  'roundOver',
  {
    detail: {
              message: 'roundOver'
          },
          bubbles: false,
          cancelable: true
  }
)

const gameover = new CustomEvent(
  'gameover',
  {
    detail: {
              message: 'gameover'
          },
          bubbles: false,
          cancelable: true
  }
)
