product = {
	ini:function(){
		this.add();
		this.list();
	},
	get:function(){
		var data = system.html('assets/harmony/Process.php?get-availableProducts');
		return data.responseText;
	},
	getByID:function(id){
		var ret = [];
		var data = system.ajax('assets/harmony/Process.php?get-productsByID',id);
		data.done(function(data){
			ret = JSON.parse(data);
		});
		return ret[0];
	},
	getSuggestions(id){
		var ret = [];
		var data = system.ajax('assets/harmony/Process.php?get-suggestionsByID',id);
		data.done(function(data){
			ret = JSON.parse(data);
		});
		return ret;
	},
	suggestionsByProduct(id){
		var suggestions = product.getSuggestions(id);
		var bag = [], number = 0, content = "";
		var data_wishlist = wishlist.get();
		console.log(data_wishlist);
		$.each(suggestions,function(i,v){
			var search = system.searchJSON(data_wishlist,1,v[0]);
			content = "<div class='row'>"+
						"    <div class='card'>"+
						"        <div class='card-image waves-effect waves-block waves-light'><img alt='product-img' class='activator' draggable='false' src='assets/images/products/"+v[10]+"'></div>"+
						"        <ul class='card-action-buttons'>"+
						"            <li>"+
						"				<button class='btn-floating waves-effect shopping' data-cmd='addWishlist' data-wishlist='"+v[0]+"' data-node='"+v[0]+"'>"+
						"					<i class='mdi-action-favorite'></i>"+
						"				</button>"+
						"				<button class='btn-floating waves-effect shopping cyan' data-cmd='addCart' data-node='"+v[0]+"'>"+
						"					<i class='mdi-action-shopping-cart'></i>"+
						"				</button>"+
						"            </li>"+
						"        </ul>"+
						"        <div class='card-content'>"+
						"            <div class='row'>"+
						"                <div class='col s8'>"+
						"                    <p class='card-title grey-text text-darken-4'><a class='grey-text text-darken-4' href='#'>"+v[1]+"</a></p>"+
						"                </div>"+
						"                <div class='col s4'>"+
						"                    <p class='right' style='font-size: 24px;line-height: 32px;'>"+v[3]+"</p>"+
						"                </div>"+
						"            </div>"+
						"        </div>"+
						"        <div class='card-reveal grey darken-4'>"+
						"            <p class='card-title'><a class='white-text' href='#'>"+v[1]+"</a><i class='mdi-navigation-close right white-text'></i></p>"+
						"            <p class='white-text'>"+v[5]+"</p>"+
						"        </div>"+
						"    </div>"+
						"</div>";
			$(".product").append(content);

			if(search.length>0){
				$("button[data-wishlist='"+search[1]+"']").attr({"disabled":"true"});
			}

		});
	},
	list:function(){
		var content = "";
		var data = product.get();
		data = JSON.parse(data.responseText);
		$.each(data,function(i,v){
			content += "<tr>"+
						"	<td width='1px'>"+(i+1)+". </td>"+
						"	<td><img src='../assets/images/img3.jpg' alt='Thumbnail' class='responsive-img valign profile-image' width='100px'></td>"+
						"	<td width='300px'>"+v[1]+"</td>"+
						"	<td>"+v[5]+"</td>"+
						"	<td>"+v[4]+"</td>"+
						"	<td>"+v[2]+"</td>"+
						"	<td>"+v[3]+"</td>"+
						"	<td>published</td>"+
						"	<td width='1px'>"+
						"		<a class='tooltipped btn-floating waves-effect black-text no-shadow grey lighten-5 right' data-position='left' data-delay='50' data-tooltip='Show' data-cmd='update'>"+
						"			<i class='mdi-navigation-more-vert right black-text'></i>"+
						"		</a>"+
						"	</td>"+
						"</tr>";
		})	

		content = "<table class='table bordered' id='products'>"+
					"<thead>"+
					"	<tr>"+
					"		<th>#</th><th>Thumbnail</th><th>Product</th><th>Description</th><th>Category</th><th>Qty</th><th>Price</th><th>Status</th><th></th>"+
					"	</tr>"+
					"</thead>"+
					"</tbody>"+
						content+
					"</tbody>"+
					"</table>";
		$("#display_productList").html(content);

		var table = $('#products').DataTable({
	        "order": [[ 0, 'asc' ]],
	        "drawCallback": function ( settings ) {
	            var api = this.api();
	            var rows = api.rows( {page:'current'} ).nodes();
	            var last=null;
	        }
	    });
	},
	listGrid:function(){
		var data = system.xml("pages.xml");
		var _content = "";
		$(data.responseText).find("product").each(function(i,content){
			for(x=0;x<=100;x++){
				_content += content.innerHTML;
			}
			$("#products").html(_content);
		});
	},
	add:function(){
		$("#add_product").on('click',function(){
			var data = system.xml("pages.xml");
			$(data.responseText).find("addProduct").each(function(i,content){
				$("#modal_popUp .modal-content").html(content);
				$('#modal_popUp').openModal('show');

				$("#form_addProduct").validate({
				    rules: {
				        field_productName: {required: true,maxlength: 50},
				        field_qty: {required: true,maxlength: 50,checkPositiveNumber:true},
				        field_price: {required: true,maxlength: 50,checkCurrency:true},
				        field_description: {required: true,maxlength: 900},
				        field_category: {required: true,maxlength: 500},
				    },
				    errorElement : 'div',
				    errorPlacement: function(error, element) {
						var placement = $(element).data('error');
						if(placement){
							$(placement).append(error)
						} 
						else{
							error.insertAfter(element);
						}
					},
					submitHandler: function (form) {
						var _form = $(form).serializeArray();
						var data = system.ajax('../assets/harmony/Process.php?set-newProductAdmin',_form);
						data.done(function(data){
							if(data == 1){
								Materialize.toast('Saved.',4000);
								system.clearForm();
								App.handleLoadPage("#cmd=index;content=list_products");
							}
							else{
								Materialize.toast('Cannot process request.',4000);
							}
						});
				    }
				});
			});
		})
	},
}

market = {
	ini:function(){
		this.products();
		$("body").append("<script>console.log('%cDeveloped By: RNR Digital Consultancy (2017) http://rnrdigitalconsultancy.com ,,|,_', 'background:#f74356;color:#64c2ec;font-size:20px;')</script>");
		$(document).ready(function(){
		    $('.tooltipped').tooltip({delay: 1});
		});

		setTimeout(function(){
			system.loading(true);
			$('#content-login').addClass('animated slideInUp');
		},1000);

		var data = system.ajax('assets/harmony/Process.php?chkUserLogin',"");
		data.done(function(data){
			if(data == 0){
				$("button.shopping").attr({'disabled':"true"});
			}
			else{
				$("button.shopping").removeAttr('disabled');
				$("a[data-activates='signIn']").addClass("hidden");
				$("a[data-activates='account']").removeClass("hidden");
				$("#display_headerAccount").removeClass("invisible");
				profile.ini();
				wishlist.ini();
			}
		});

		$("#display_cartTotal").html(market.getCart().length);
	},
	products:function(){
		var content = "",search = [], disabled = "";
		var data = product.get();
		var cart = market.getCart();

		data = JSON.parse(data);
		$.each(data,function(i,v){
			search = system.searchJSON(cart,0,v[0]);
			if(search.length>0)
				disabled = "disabled";
			else
				disabled = "";

				content += "<div class='product col s12 m4 l2'>"+
						"    <div class='card'>"+
						"        <div class='card-image waves-effect waves-block waves-light'>"+
						"            <img class='activator responsive-img' draggable='false' src='assets/images/products/"+v[10]+"' alt='product-img'>"+
						"        </div>"+
						"        <ul class='card-action-buttons'>"+
						"            <li>"+
						"				<button class='btn-floating waves-effect shopping grey' data-cmd='addWishlist' data-wishlist='"+v[0]+"' data-node='"+v[0]+"'>"+
						"					<i class='mdi-action-favorite'></i>"+
						"				</button>"+
						"				<button class='btn-floating waves-effect shopping cyan' data-cmd='addCart' "+disabled+" data-node='"+v[0]+"'>"+
						"					<i class='mdi-action-shopping-cart'></i>"+
						"				</button>"+
						"			</li>"+
						"        </ul>"+
						"        <div class='card-content small'>"+
						"            <div class='row'>"+
						"                <div class='col s8'>"+
						"                    <p class='card-title grey-text text-darken-4' style='font-size: 15px;''><a href='#' class='grey-text text-darken-4 center'>"+v[1]+"</a></p>"+
						"                </div>"+
						"                <div class='col s4'>"+
						"                    <p class='center' style='font-size: 15px;line-height: 47px;'><b>"+v[3]+"</b></p>"+
						"                </div>"+
						"            </div>"+
						"        </div>"+
						"        <div class='card-reveal grey darken-4'>"+
						"	         <p class='card-title'><a href='#' class='white-text'>"+v[1]+"></a><i class='mdi-navigation-close right white-text'></i></p>"+
						"            <p class='white-text'>"+v[5]+"</p>"+
						"        </div>"+
						"    </div>"+
						"</div>";
		});
		$("#products").html(content);

		$("button[data-cmd='addCart']").on('click',function(){
			var data = $(this).data();
	    	$(location).attr('href',"product.html?id="+data.node);
		});
	},
	addToCart:function(data){
		var currentCount = ((localStorage.getItem('cartCount')=="") || (localStorage.getItem('cartCount')==null))?0:Number(localStorage.getItem('cartCount'));
		localStorage.setItem('cartCount',currentCount+1);
		localStorage.setItem('cart-'+currentCount,JSON.stringify(data));
	},
	showCart:function(){
		var count = 0, total = 0, content = "xx";
		var search = [], cart = [];
		var products = product.get();
		var cart = market.getCart(), _cart = "";
		var points = Number(localStorage.getItem('points'));
		products = JSON.parse(products);

		if(cart.length > 0){
			$.each(cart,function(i,v){
				console.log(v);
				search = system.searchJSON(products,0,v[1][0]);
				if(search.length>0){
					total = total+Number(search[0][3]);
					content += "<tr class='animated'>"+
							"	<td class='center'><img src='assets/images/products/"+search[0][10]+"' alt='' class='circle' style='width: 100px;' /></td>"+
							"	<td class='center'><span class='title'>"+search[0][1]+"  <span class='grey-text'>"+search[0][3]+"pts<span></span></td>"+
							"	<td class='center'>"+
							"		<input data-cmd='input' data-cart='"+v[0]+"' data-limit='"+search[0][2]+"' data-cost='"+search[0][3]+"' value='1' type='number' pattern='[1-9]*' class='validate valid' style='width: 40px;height: 35px;text-align: center;'/>"+
							"	</td>"+
							"	<td class='center'><p class='count' style='font-size: 20px;'>"+(Number(search[0][3])*1)+"</p></td>"+
							"	<td class='center'><button data-cmd='removeCart' data-cart='"+v[0]+"' class='btn-floating grey'><i class='mdi-navigation-close'></i></button></td>"+
							"</tr>";					
				}
			});
			$("#display_productInCart table tbody").html(content);
			$("#display_total span").html(total);
			market.options();
			market.checkCart(cart);			
			$("button[data-cmd='checkOut']").removeAttr('disabled');
		}
		else{
			$("button[data-cmd='checkOut']").attr({'disabled':true});
		}
	},
	options:function(){
		var points = localStorage.getItem('points');
		$("input[data-cmd='input']").on('change',function(){
			var data = $(this).data();
			count = Number($(this).val()) + 1;
			var cart = JSON.parse(localStorage.getItem(data.cart));

			if(($(this).val() < data.limit) && ((points-(count*data.cost)) >= 0)){
				cart = JSON.stringify([cart[0],Number($(this).val())]);
				localStorage.setItem(data.cart,cart);

				$(this).parent().find('input').val(count);				
				$(this).parent().find('a.secondary-content').html(count*data.cost);

				market.checkCart(cart);
			}
			else{
				$(this).val(cart[1]);
				Materialize.toast('Quantity is invalid',4000);
			}
		});

		$("button[data-cmd='removeCart']").on('click',function(){
			var _this = this;
			$(_this).parents('tr').addClass('fadeOutUpBig');
			setTimeout(function(){
				$(_this).parents('tr').remove();
				var data = $(_this).data();
				localStorage.removeItem(data.cart);
				Materialize.toast('Product has been removed.',4000);
				$("#display_cartTotal").html(market.getCart().length);
			},100);
		});

		$("button[data-cmd='checkOut']").on('click',function(){
			var cart = market.getCart();
			market.checkout(cart);
		});
	},
	getCart:function(){
		var data = [];
		var count = localStorage.getItem('cartCount');
		for(x=0;x<count;x++){
			cart = localStorage.getItem('cart-'+x);
			if(cart != null){
				data.push(["cart-"+x,JSON.parse(cart)]);
			}
		}
		return data;
	},
	checkCart:function(cart){
		var data = $(".count"), point = localStorage.getItem('points');
		var count = 0;
		$.each(data,function(i,v){
			count = count + Number($(v).html());
		})

		if(count>point)
			$("button[data-cmd='checkOut']").attr({'disabled':true});
		else
			$("button[data-cmd='checkOut']").removeAttr('disabled');

		return count;
	},
	checkout:function(data){
		var data = system.ajax('assets/harmony/Process.php?set-orders',data);
		data.done(function(data){
			console.log(data);
			if(data == 1){
				Materialize.toast('Order Placed.',4000);
				market.removeLocalStorage();
		    	window.location.reload(true);
			} 
			else if(data == 2){
				Materialize.toast('Insufficient points.',4000);
			}
			else{
				Materialize.toast('Cannot process orders. Try some other time.',4000);
			}
		});
	},
	removeLocalStorage:function(){
		for(x=0;x<50;x++){
			localStorage.removeItem('cart-'+x);
		}
		localStorage.removeItem('cartCount');
	},
	getProduct:function(id){
		var data = product.getByID(id);
		var suggestions = product.suggestionsByProduct(id);
		var data_wishlist = wishlist.get();
		var search_wihlist = system.searchJSON(data_wishlist,1,id);
		var search_cart = system.searchJSON(data_wishlist,1,id);

		var content = "<div class='row'>"+
						"	<div class='col s12 m6 l6'>"+
						"		<div class='card'>"+
						"			<div class='card-image'>"+
						"			<img alt='' class='responsive-img valign' draggable='false' src='assets/images/products/"+data[10]+"'>"+
						"			</div>"+
						"		</div>"+
						"	</div>"+
						"	<div class='col s12 m6 l6'>"+
						"		<h4>"+data[1]+"</h4>"+
						"		<h2 class='pink-text'>K "+data[3]+"</h2>"+
						"		<button class='btn-floating waves-effect' data-cmd='addWishlist' data-wishlist='"+data[0]+"' data-node='"+data[0]+"'><i class='mdi-action-favorite'></i></button>"+
						"		<button class='btn waves-effect cyan' data-cmd='addCart' data-node='"+data[0]+"' data-price='"+data[3]+"' data-qty='1'>Add to cart</button>"+
						"	</div>"+
						"</div>"+
						"<div class='row'>"+
						"	<p>"+data[5]+"</p>"+
						"</div>";
		$("#display_product").html(content);

		if(search_wihlist.length>0){
			wishlist.disableButton();
		}

		$("button[data-cmd='addCart']").on('click',function(){
			$(this).attr({"disabled":"true"});
			var product = [$(this).data('node'),Number($(this).data('price')),Number($(this).data('qty'))];
			market.addToCart(product);

			var content = "<div class='row'>"+
							"	<div class='col s12 m4 l4'>"+
							"		<div class='card'>"+
							"			<div class='card-image'>"+
							"			<img alt='' class='responsive-img valign' draggable='false' src='assets/images/products/"+data[10]+"'>"+
							"			</div>"+
							"		</div>"+
							"	</div>"+
							"	<div class='col s12 m8 l8'>"+
							"		<h4 class='white-text'>"+data[1]+"</h4>"+
							"		<h2 class='cyan-text'>K "+data[3]+"</h2>"+
							"	</div>"+
							"</div>"+
							"<div class='row'>"+
							"	<div class='col s12'>"+
							"		<a class='btn waves-effect pink' href='cart.html'>View my cart</a>"+
							"		<a class='right' href='sale.html'>Continue shoping</a>"+
							"	<div>"+
							"</div>";

			$("#modal .modal-content").html(content);
			$('#modal').openModal('show');			
			$("#display_cartTotal").html(market.getCart().length);
		});
	},
};

profile = {
	ini:function(){
		profile.getAccount();

        system.forceLogout(function(){
        	profile.logout();
        });
	},
	check:function(){
		var retData;
		var data = system.ajax('assets/harmony/Process.php?chkUserLogin',"");
		data.done(function(data){
			retData = data;
		});
		return retData;
	},
	get:function(){
		var ret = [];
		var data = system.html('assets/harmony/Process.php?get-employeeAccount');
		data.done(function(data){
			if(data == 0){
				$(location).attr('href','index.html');
			}
			else{
				ret = JSON.parse(data);			
			}
		});
		return ret;
	},
	getPoints:function(id){
		var data = system.ajax('assets/harmony/Process.php?get-employeePoints',id);
		data.done(function(data){
			data = JSON.parse(data);
			// localStorage.setItem('points',data[0][2]);
			$("#display_points .cart_bigNumber").html(data[0][2]+"<small> points<span style='display: block;'></span></small>");
			$(".display_points").html(data[0][2]);
		});
	},
	getAccount:function(){
		var content = "";
		var data = this.get();
		if(data.length>0){
			$("#display_account h5").html("<strong>WELCOME,<br/> <i class='pink-text'>"+data[0][4]+" "+data[0][5].substring(0,1)+". "+data[0][3]+"</i></strong>");
			$(".display_accountName").html("WELCOME, "+data[0][4]+" "+data[0][5].substring(0,1)+". "+data[0][3]+"");
			profile.getPoints(data[0][0]);
		}
		else{
	    	$("#display_cart").removeClass('bounceInUp').addClass("bounceOutUp");
	    	$("#display_login").removeClass("bounceOutUp").addClass('bounceInUp');
		}

		$("a[data-cmd='logout']").on("click",function(){
        	profile.logout();
		});

		$("a[data-cmd='account']").on("click",function(){
			localStorage.setItem("hash",'employee');
	    	$(location).attr('href','account/');
		});			
	},
	logout:function(){
		var data = system.ajax('assets/harmony/Process.php?kill-session',"");
		data.done(function(data){
			if(data == 1){
				$(location)[0].reload()	
			}
		});	
	}
}

wishlist = {
	ini:function(){
		this.add();
		this.get();
		this.disableButton();
	},
	get:function(){
		var id = profile.get()[0][0];
		var ret = [];
		var data = system.ajax('assets/harmony/Process.php?get-wishlist',id);
		console.log(data);
		data.done(function(data){
			ret = JSON.parse(data);
		});
		return ret;
	},
	add:function(){
		var profileID = "";
		profileID = profile.get()[0][0];
		$("button[data-cmd='addWishlist']").on('click',function(){
			var data = $(this).data();
			$(this).attr({'disabled':"true"});
			wishlist.save(profileID,data.node);
		});
	},
	save:function(employee,product){
		var data = system.ajax('assets/harmony/Process.php?set-wishlist',[employee,product]);
		data.done(function(data){
			if(data == 1){
				Materialize.toast('Success. This product has been added to your wishlist.',4000);
			} 
			else{
				Materialize.toast('Cannot process. Try some other time.',4000);
				$("button[data-node='"+product+"']").removeAttr('disabled');
			}
		});
	},	
	remove:function(employee,product){
		var data = system.ajax('assets/harmony/Process.php?remove-wishlist',[employee,product]);
		data.done(function(data){
			if(data == 1){
				Materialize.toast('This product has been removed to your wishlist.',4000);
				$("button[data-node='"+product+"']").removeAttr('disabled');
			} 
			else{
				Materialize.toast('Cannot process. Try some other time.',4000);
				$("button[data-node='"+product+"']").attr({'disabled':"true"});
			}
		});
	},
	disableButton:function(){
		var data = wishlist.get();
		$.each(data,function(i,v){
			$("button[data-wishlist='"+v[1]+"']").attr({"disabled":"true"});
		});
	}
}
