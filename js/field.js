
function Field (id,name){
	this.id=id;
	this.name=name;//Land name
	this.state=null;//ground or layers of houss
	this.owner=null;//who's the owner
	$("#"+this.id+" "+"").append("<div class='status'>empty</div>");

	this.get_id= function(){
		return this.id;
	}
	this.get_name= function(){
		return this.name;
	}

	this.get_state= function(){
		return this.state;
	}

	this.get_price= function(){
		if(this.state==0){
			return 1000*1.5;
		}
		else{
			return (1000+this.state*500)*1.5;
		}
	}

	this.get_owner= function(){
		return this.owner;
	}

	this.get_rent = function(){
		return (this.state+1)*500;
	}

	this.set_state= function(state){
		// console.log(state+"change here origin: "+this.state);
		this.state = state;
		// console.log("change here origin(done): "+this.state);
		return this.state;
	}

	this.build_price= function(){
		if(this.state==0){
			return 1000;
		}
		else{
			return 500;
		}
	}
	this.build= function(){
		this.state+=1;
	}

	this.print= function(){
		console.log("------Field-------")
		console.log("name: "+this.name);
		console.log("state: "+this.state);
		if(this.owner!=null)
			console.log("owner: "+this.owner.get_name());
	}

	this.transaction= function(player,buyorbuild){
		console.log("transaction: with "+player);
		
		if(buyorbuild==0){//own the field
			this.owner=player;
			change_state(this,0);
			player.add_cash(-1000);
			// console.log("transcation: "+this.id+" color: "+player.get_color());
			$("#"+this.id).css("background",player.get_color());
		}
		else if(buyorbuild==1){
			// console.log(player.get_name()+" pay "+this.owner.get_name()+" "+price);
			var price = (1000+this.state*500)*1.5;
			this.owner.add_cash(price);
			player.add_cash(-1*price);
			this.owner=player;
			$("#"+this.id).css("background",player.get_color());
		}
		else if(buyorbuild==2){//for second time
			change_state(this,this.state+1);
			player.add_cash(-500);
		}
	}

};

function change_state(field,state){
	console.log("------change_state_-------to"+state);
	$("#"+field.get_id()+" "+".status").html(state);
	field.set_state(state);
	field.print();
}
