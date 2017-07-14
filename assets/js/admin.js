account = {
	ini:function(){
		this.add();
		this.list();
	},
	management:function(){
		var data = system.xml("pages.xml");
		$(data.responseText).find("addAccount").each(function(i,content){
			$("#modal .modal-content").html(content);
			$('#modal').openModal('show');			
		});
	},
	list:function(){
		var content = "";
		var data = system.html('../assets/harmony/Process.php?get-admin');
		data.done(function(data){
			data = JSON.parse(data);
			var profile = (data[0][8] == "")?'avatar.jpg':data[0][8];
			content = "<div id='profile-card' class='card'>"+
					"    <div class='card-image waves-effect waves-block waves-light'>"+
					"        <img class='activator' src='../assets/images/user-bg.jpg' alt='user background'>"+
					"    </div>"+
					"    <div class='card-content'>"+
					"        <div class=' responsive-img activator card-profile-image circle'>"+
					"        	<img src='../assets/images/profile/"+profile+"' alt='' class='circle'>"+
					"        	<a data-cmd='updateAdminPicture' data-value='"+profile+"' data-name='"+data[0][1]+"' data-node='"+data[0][0]+"' data-prop='Picture' class='btn waves-effect white-text no-shadow black' style='font-size: 10px;z-index: 1;padding: 0 12px;top:40px;'>Change</a>"+
					"		 </div>"+
					"        <span class='card-title activator grey-text text-darken-4'>"+data[0][1]+" </span>"+
					"			<a data-cmd='updateAdmin' data-value='"+data[0][1]+"' data-name='"+data[0][1]+"' data-node='"+data[0][0]+"' data-prop='Name' class='tooltipped btn-floating waves-effect black-text no-shadow white right' data-position='left' data-delay='50' data-tooltip='Update name'>"+
					"				<i class='mdi-editor-mode-edit right black-text'></i>"+
					"			</a>"+
					"		 <div class='divider'></div>"+
					"        <p><span style='width:80%;display: inline-block;' class='truncate'><i class='mdi-communication-email cyan-text text-darken-2'></i> Email: "+data[0][5]+"</span>"+
					"			<a data-cmd='updateAdmin' data-value='"+data[0][5]+"' data-name='"+data[0][1]+"' data-node='"+data[0][0]+"' data-prop='Email' class='tooltipped btn-floating waves-effect black-text no-shadow white right' data-position='left' data-delay='50' data-tooltip='Update email'>"+
					"				<i class='mdi-editor-mode-edit right black-text'></i>"+
					"			</a>"+
					"		 </p>"+
					"		 <div class='divider'></div>"+
					"        <p><span style='width:80%;display: inline-block;' class='truncate'><i class='mdi-action-perm-identity cyan-text text-darken-2'></i> Username: "+data[0][2]+"</span>"+
					"			<a data-cmd='updateAdmin' data-value='"+data[0][2]+"' data-name='"+data[0][1]+"' data-node='"+data[0][0]+"' data-prop='Username' class='tooltipped btn-floating waves-effect black-text no-shadow white right' data-position='left' data-delay='50' data-tooltip='Update uaername'>"+
					"				<i class='mdi-editor-mode-edit right black-text'></i>"+
					"			</a>"+
					"		 </p>"+
					"		 <div class='divider'></div>"+
					"        <p><span style='width:80%;display: inline-block;' class='truncate'><i class='mdi-action-verified-user cyan-text text-darken-2'></i> Password"+"</span>"+
					"			<a data-cmd='updateAdmin' data-name='"+data[0][1]+"' data-node='"+data[0][0]+"' data-prop='Password' class='tooltipped btn-floating waves-effect black-text no-shadow white right' data-position='left' data-delay='50' data-tooltip='Update password'>"+
					"				<i class='mdi-editor-mode-edit right black-text'></i>"+
					"			</a>"+
					"		 </p>"+
					"    </div>"+
					"</div>";
			$("#display_newAdmin").html(content);
		});

		content = "";
		var data = system.html('../assets/harmony/Process.php?get-listAdmin');
		var actions = "", status = "";
		data.done(function(data){
			data = JSON.parse(data);
			$.each(data,function(i,v){
				if(Number(v[6]) == 1){
					status = "Active";
					var actions = "<a data-cmd='deactivateAdmin' data-name='"+v[1]+"' data-node='"+v[0]+"' class='tooltipped btn-floating waves-effect black-text no-shadow grey lighten-5 right' data-position='left' data-delay='50' data-tooltip='Deactivate account' data-cmd='update'>"+
								  "	<i class='mdi-action-lock-open right black-text'></i>"+
								  "</a>";	
				}
				else{
					status = "Deactivated";
					var actions = "<a data-cmd='activateAdmin' data-name='"+v[1]+"' data-node='"+v[0]+"' class='tooltipped btn-floating waves-effect black-text no-shadow grey lighten-5 right' data-position='left' data-delay='50' data-tooltip='Activate account' data-cmd='update'>"+
								  "	<i class='mdi-action-lock right black-text'></i>"+
								  "</a>";	
				}
				content += "<tr>"+
							"	<td>"+v[1]+"</td>"+
							"	<td>Admin</td>"+
							"	<td>"+status+"</td>"+
							"	<td>"+actions+"</td>"+
							"</tr>";
			})	

			content = "<table class='table bordered'>"+
						"	<tr>"+
						"		<th>Name</th><th>Role</th><th>Status</th><th></th>"+
						"	</tr>"+content+"</table>";
			$("#display_adminList").html(content);

			account.deactivate();
			account.activate();
		});
		account.update();
		account.updatePicture();
	},
	add:function(){
		$("#add_client").on('click',function(){
			var data = system.xml("pages.xml");
			$(data.responseText).find("addAccount").each(function(i,content){
				$("#modal_popUp .modal-content").html(content);
				$('#modal_popUp').openModal('show');			

				$("#form_registerAdmin").validate({
				    rules: {
				        field_name: {required: true,maxlength: 50},
				        field_email: {required: true,maxlength: 50,checkEmail:true},
				        field_username: {required: true,maxlength: 50,checkUsername:true,validateUsername:true},
				        field_password: {required: true,maxlength: 50,checkPassword:true,validatePassword:true},
				        // field_capabilities: {required: true,maxlength: 500},
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
						var data = system.ajax('../assets/harmony/Process.php?set-newAdmin',_form);
						data.done(function(data){
							if(data == 1){
								var text = "<h1>Congratulations</h1>, you are now registered. You can login using <u>"+_form[2]['value']+"</u> as you username and <u>"+
								_form[3]['value']+"</u> as your password. <a href='http://localhost/kaboomRewards/login.html'>Just follow this link</a>";
								var data = system.send_mail(_form[1]['value']+',info@rnrdigitalconsultancy.com','New admin Registration',text);
								if(data.responseText != ""){
									system.clearForm();
									Materialize.toast('Saved.',4000);
									App.handleLoadPage("#cmd=index;content=account");
								}
							}
							else{
								Materialize.toast('Cannot process request.',4000);
							}
						});
				    }
				}); 
			});
		});
	},
	update:function(){
		$("a[data-cmd='updateAdmin']").on('click',function(){
			var data = $(this).data();
			console.log(data);

			var content = "<h5>Change "+data.prop+"</h5>"+
						  "<form id='form_update' class='formValidate' method='get' action='' novalidate='novalidate'>"+
						  "		<label for='field_"+data.prop+"'>"+data.prop+": </label>"+
						  "		<input id='field_"+data.prop+"' value='"+data.value+"' type='text' name='field_"+data.prop+"' data-error='.error_"+data.prop+"'>"+
						  "		<div class='error_"+data.prop+"'></div>"+
						  "		<button type='submit' data-cmd='button_proceed' class='waves-effect waves-grey grey lighten-5 blue-text btn-flat modal-action right'>Save</button>"+
						  "		<a class='waves-effect waves-grey grey-text btn-flat modal-action modal-close right'>Cancel</a>"+
						  "</form>";
			$("#modal_confirm .modal-content").html(content);
			$('#modal_confirm .modal-footer').html("");			

			if(data.prop == "Name"){
				$('#modal_confirm').openModal('show');			
				$("#form_update").validate({
				    rules: {
				        field_Name: {required: true,maxlength: 50},
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
						if(data.value == _form[0]['value']){
							Materialize.toast('You did not even change the value.',4000);
						}
						else{
							var ajax = system.ajax('../assets/harmony/Process.php?update-admin',_form);
							ajax.done(function(ajax){
								if(ajax == 1){
									system.clearForm();
									Materialize.toast('Name updated.',4000);
									$('#modal_confirm').closeModal();	
									App.handleLoadPage("#cmd=index;content=account");
								}
								else{
									Materialize.toast('Cannot process request.',4000);
								}
							});
						}
				    }
				}); 
			}			
			else if(data.prop == "Email"){
				$('#modal_confirm').openModal('show');			
				$("#form_update").validate({
				    rules: {
				        field_Email: {required: true,maxlength: 50,checkEmail:true},
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
						if(data.value == _form[0]['value']){
							Materialize.toast('You did not even change the value.',4000);
						}
						else{
							var ajax = system.ajax('../assets/harmony/Process.php?update-admin',_form);
							ajax.done(function(ajax){
								if(ajax == 1){
									system.clearForm();
									Materialize.toast('Email updated.',4000);
									$('#modal_confirm').closeModal();	
									App.handleLoadPage("#cmd=index;content=account");
								}
								else{
									Materialize.toast('Cannot process request.',4000);
								}
							});
						}
				    }
				}); 
			}
			else if(data.prop == "Username"){
				$('#modal_confirm').openModal('show');			
				$("#form_update").validate({
				    rules: {
				        field_Username: {required: true,maxlength: 50,checkUsername:true,validateUsername:true},
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
						if(data.value == _form[0]['value']){
							Materialize.toast('You did not even change the value.',4000);
						}
						else{
							var ajax = system.ajax('../assets/harmony/Process.php?update-admin',_form);
							ajax.done(function(ajax){
								if(ajax == 1){
									system.clearForm();
									Materialize.toast('Username updated.',4000);
									$('#modal_confirm').closeModal();	
									App.handleLoadPage("#cmd=index;content=account");
								}
								else{
									Materialize.toast('Cannot process request.',4000);
								}
							});
						}
				    }
				}); 
			}
			else if(data.prop == "Password"){
				$('#modal_confirm').openModal('show');			
				$("#field_Password").val("");
				$("#field_Password").attr({"type":"password"});
				$("#form_update").append("<p><input type='checkbox' id='showPassword'><label for='showPassword'>Show password</label></p>");

				$("#showPassword").on("click",function(){
					if($(this).is(':checked')){
						$("#field_Password").attr({"type":"text"});						
					}
					else{
						$("#field_Password").attr({"type":"password"});						
					}
				})

				$("#form_update").validate({
				    rules: {
				        field_Password: {required: true,maxlength: 50,checkPassword:true,validatePassword:true},
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
						var data = system.ajax('../assets/harmony/Process.php?update-admin',_form);
						data.done(function(data){
							console.log(data);
							if(data == 1){
								system.clearForm();
								Materialize.toast('Password updated.',4000);
								$('#modal_confirm').closeModal();	
								App.handleLoadPage("#cmd=index;content=account");
							}
							else{
								Materialize.toast('Cannot process request.',4000);
							}
						});
				    }
				}); 
			}
		});
	},
	updatePicture:function(){
		$("a[data-cmd='updateAdminPicture']").on('click',function(){
			var data = $(this).data();
			console.log(data);

			var picture = "../assets/images/avatar.jpg";
			var content = "<h4>Change "+data.prop+"</h4>"+
  							"	<div class='row'>"+
  							"		<div class='col s12'>"+
							"			<div id='profile_picture2' class='ibox-content no-padding border-left-right '></div>"+
							"		</div>"+
							"	</div>";
			$("#modal_confirm .modal-content").html(content);
			$('#modal_confirm').removeClass('modal-fixed-footer');			
			$('#modal_confirm .modal-footer').remove();			
			$('#modal_confirm').openModal('show');			

    		var content =   "<div class='image-crop col s12' style='margin-bottom:5px;'>"+
							"	<img width='100%' src='"+picture+"'>"+
							"</div>"+
							"<div class='btn-group col s12'>"+
							"	<label for='inputImage' class='btn blue btn-floating btn-flat tooltipped' data-tooltip='Load image' data-position='top'>"+
							"		<input type='file' accept='image/*' name='file' id='inputImage' class='hide'>"+
							"		<i class='large mdi-editor-publish'></i>"+
							"	</label>"+
							"	<button class='btn blue btn-floating btn-flat tooltipped' data-cmd='cancel' type='button' data-tooltip='Cancel' data-position='top'>"+
							"		<i class='mdi-navigation-close'></i>"+
							"	</button>"+
							"	<button class='btn blue btn-floating btn-flat hidden tooltipped right' data-cmd='save' type='button' data-tooltip='Save' data-position='top'>"+
							"		<i class='mdi-content-save'></i>"+
							"	</button>"+
							"</div>";
    		$("#profile_picture2").html(content);
			$('.tooltipped').tooltip({delay: 50});

            var $inputImage = $("#inputImage");
            var status = true;
            if(window.FileReader){
                $inputImage.change(function() {
                    var fileReader = new FileReader(),
                            files = this.files,
                            file;

                    file = files[0];

                    if (/^image\/\w+$/.test(file.type)) {
                        fileReader.readAsDataURL(file);
                        fileReader.onload = function () {
                            $inputImage.val("");

				            var $image = $(".image-crop > img")
				            $($image).cropper({
				            	aspectRatio: 1/1,
							    autoCropArea: 0.80,
							    preview: ".avatar-preview",
							    built: function () {
			    		    		$(".cropper-container").attr({'style':'left:0px !important;top:0px;width:100%;height:100%;'});

							    	$("button[data-cmd='save']").removeClass('hidden');
							    	$("button[data-cmd='rotate']").removeClass('hidden');
							    	
						            $("button[data-cmd='save']").click(function(){									    	
								    	$(this).html("<i class='mdi-content-save'></i>").addClass('disabled');

								    	console.log("saving...");
								    	if(status){
											var data = system.ajax('../assets/harmony/Process.php?update-adminPicture',["picture",$image.cropper("getDataURL")]); // 
											data.done(function(data){
												console.log(data);
												Materialize.toast('Picture has been changed.',4000);
												system.clearForm();
												App.handleLoadPage("#cmd=index;content=account");
												$('#modal_confirm').closeModal();	
											});
								    		status = false;
								    	}
						            });
							    }
							});

                            $image.cropper("reset", true).cropper("replace", this.result);

				            $("button[data-cmd='rotate']").click(function(){
				            	var data = $(this).data('option');
					        	$image.cropper('rotate', data);
				            });

                        };
                    }
                    else{
                        showMessage("Please choose an image file.");
                    }
                });
            }
            else{
                $inputImage.addClass("hide");
            }	            
            $("button[data-cmd='cancel']").click(function(){
				$('#modal_confirm').closeModal();	
            });
		});
	},
	deactivate:function(){
		$("a[data-cmd='deactivateAdmin']").on('click',function(){
			var id = $(this).data('node');
			var content = "Are you sure DEACTIVATE "+$(this).data('name')+"'s account?<br/>"+
						  "<label for='field_description'>Remarks: </label>"+
						  "<textarea class='materialize-textarea' data-field='field_description' name='field_description'></textarea>";
			$("#modal_confirm .modal-content").html(content);
			$("#modal_confirm .modal-footer").html("<a class='waves-effect waves-red red white-text btn-flat modal-action modal-close'>Cancel</a>"+
												   "<a data-cmd='button_proceed' class='waves-effect waves-grey btn-flat modal-action'>Proceed</a>");
			$('#modal_confirm').openModal('show');			

			$("a[data-cmd='button_proceed']").on("click",function(){
				var remarks = $("textarea[data-field='field_description']").val();
				if(remarks.length == 0){
						Materialize.toast('Remarks is required.',4000);
				}
				else if(remarks.length > 800){
						Materialize.toast('Statement is too long.',4000);
				}
				else{
					var data = system.ajax('../assets/harmony/Process.php?deactivate-admin',[id,remarks]);
					data.done(function(data){
						// console.log(data);
						if(data == 1){
							Materialize.toast('Account deactivaded.',4000);
							system.clearForm();
							App.handleLoadPage("#cmd=index;content=account");
							$('#modal_confirm').closeModal();	
						}
						else{
							Materialize.toast('Cannot process request.',4000);
						}
					});
				}
			});
		})
	},
	activate:function(){
		$("a[data-cmd='activateAdmin']").on('click',function(){
			var id = $(this).data('node');
			$("#modal_confirm .modal-content").html("Arey you sure ACTIVATE "+$(this).data('name')+"'s account?");
			$("#modal_confirm .modal-footer").html("<a class='waves-effect waves-red red white-text btn-flat modal-action modal-close'>Cancel</a>"+
												   "<a data-cmd='button_proceed' class='waves-effect waves-grey btn-flat modal-action modal-close'>Proceed</a>");
			$('#modal_confirm').openModal('show');			

			$("a[data-cmd='button_proceed']").on("click",function(){
				var data = system.ajax('../assets/harmony/Process.php?activate-admin',id);
				data.done(function(data){
					console.log(data);
					if(data == 1){
						Materialize.toast('Account activaded.',4000);
						system.clearForm();
						App.handleLoadPage("#cmd=index;content=account");
						$('#modal_confirm').closeModal();	
					}
					else{
						Materialize.toast('Cannot process request.',4000);
					}
				});
			});
		})
	}
}

client = {
	ini:function(){
		client.list();
		client.add();
	},
	get:function(){
		var data = system.html('../assets/harmony/Process.php?get-clients');
		return data;
	},
	list:function(){
		var content = "", search;
		var data = client.get();
		data = JSON.parse(data.responseText);
		if(data.length>0){			
			var getEmployee = system.ajax('../assets/harmony/Process.php?get-allEmployeeCount',"");
			getEmployee = JSON.parse(getEmployee.responseText);
			$.each(data,function(i,v){
				search = system.searchJSON(getEmployee,1,v[0]);
				search = (search.length > 0)?search[0][0]:0;
				var logo = (v[7] == "")?'avatar.jpg':v[7];
				content += "<tr>"+
							"	<td width='1px'>"+(i+1)+". </td>"+
							"	<td><img src='../assets/images/profile/"+logo+"' alt='Thumbnail' class='responsive-img valign profile-image' width='100px'></td>"+
							"	<td width='400px'>"+v[1]+"</td>"+
							"	<td>"+search+"</td>"+
							"	<td width='10px'>Active</td>"+
							"	<td width='1px'>"+
							"		<a data-cmd='update' data-node='"+v[0]+"' class='tooltipped btn-floating waves-effect black-text no-shadow grey lighten-5 right' data-position='left' data-delay='50' data-tooltip='Show'>"+
							"			<i class='mdi-navigation-more-vert right black-text'></i>"+
							"		</a>"+
							"	</td>"+
							"</tr>";
			})	

			content = "<table class='table bordered' id='products'>"+
						"<thead>"+
						"	<tr>"+
						"		<th>#</th><th>Logo</th><th>Client</th><th># of Employees</th><th>Status</th><th></th>"+
						"	</tr>"+
						"</thead>"+
						"</tbody>"+
							content+
						"</tbody>"+
						"</table>";
			$("#display_clientList").html(content);

			var table = $('#products').DataTable({
		        "order": [[ 0, 'asc' ]],
		        bLengthChange: false,
		        iDisplayLength: -1,
		        "drawCallback": function ( settings ) {
		            var api = this.api();
		            var rows = api.rows( {page:'current'} ).nodes();
		            var last=null;
		        }
		    });

			$('.dataTable').on('click', 'tbody tr', function() {
				var data = table.row(this).data();
				data = $.parseHTML(data[5]);
				data = data[0].dataset.node;
		    	$(location).attr('href','#cmd=index;content=focusClient;'+data);			
			});
		}
		else{
			$("#display_clientList").html("<h5 class='center'>No Clients to show.</h5>");
		}
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
		$("#add_client").on('click',function(){
			var data = system.xml("pages.xml");
			$(data.responseText).find("addClient").each(function(i,content){
				$("#modal_popUp .modal-content").html(content);
				$('#modal_popUp').openModal('show');		

				$("#field_password").on('focus',function(){
					$("#note_password").removeClass('zoomOut hidden').addClass("zoomIn");
				}).on('blur',function(){
					$("#note_password").removeClass('zoomIn').addClass('zoomOut hidden');
				})

				$("#form_addClient").validate({
				    rules: {
				        field_name: {required: true,maxlength: 50},
				        field_phone: {required: true,maxlength: 50},
				        field_email: {required: true,maxlength: 50,checkEmail:true},
				        field_address: {required: true,maxlength: 50},
				        field_accountName: {required: true,maxlength: 50},
				        field_accountPhone: {required: true,maxlength: 50},
				        field_accountEmail: {required: true,maxlength: 50},
				        field_username: {required: true,maxlength: 50,checkUsername:true},
				        field_password: {required: true,maxlength: 50,checkPassword:true,validatePassword:true},
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
						var data = system.ajax('../assets/harmony/Process.php?set-newClient',_form);
						data.done(function(data){
							if(data == 1){
								var text = "<h1>Congratulations</h1>, you are now registered. You can login using <u>"+_form[2]['value']+"</u> as you username and <u>"+
								_form[5]['value']+"</u> as your password. <a href='http://localhost/kaboomRewards/login.html'>Just follow this link</a>";
								var data = system.send_mail('rufo.gabrillo@gmail.com,info@rnrdigitalconsultancy.com','Employer Registration',text);
								if(data.responseText != ""){
									Materialize.toast('Saved.',4000);
									system.clearForm();
									App.handleLoadPage("#cmd=index;content=clients");
								}
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
	companyProfile(data){
		data = data[0];
		if(Number(data[5]) == 1){
			status = "Active";
			var actions = "<a data-cmd='deactivateEmployer' data-name='"+data[1]+"' data-node='"+data[0]+"' class='tooltipped btn-floating waves-effect black-text no-shadow white right' data-position='left' data-delay='50' data-tooltip='Deactivate account' data-cmd='update'>"+
						  "	<i class='mdi-action-lock-open right black-text'></i>"+
						  "</a>";	
		}
		else{
			status = "Deactivated";
			var actions = "<a data-cmd='activateEmployer' data-name='"+data[1]+"' data-node='"+data[0]+"' class='tooltipped btn-floating waves-effect black-text no-shadow white right' data-position='left' data-delay='50' data-tooltip='Activate account' data-cmd='update'>"+
						  "	<i class='mdi-action-lock right black-text'></i>"+
						  "</a>";	
		}

		var profile = ((data[7] == "") || data[7] == null)?"avatar.jpg":data[7];

		content = "<div id='profile-card' class='card'>"+
				"    <div class='card-image waves-effect waves-block waves-light'>"+
				"        <img class='activator' src='../assets/images/user-bg.jpg' alt='user background'>"+
				"    </div>"+
				"    <div class='card-content'>"+
				"        <div class=' responsive-img activator card-profile-image circle'>"+
				"        	<img src='../assets/images/profile/"+profile+"' alt='' class='circle'>"+
				"        	<a data-cmd='updateCompanyLogo' data-value='"+profile+"' data-name='"+data[1]+"' data-node='"+data[0]+"' data-prop='Picture' class='btn waves-effect white-text no-shadow black' style='font-size: 10px;z-index: 1;padding: 0 12px;top:40px;'>Change</a>"+
				"		 </div>"+
				"        <span class='card-title activator grey-text text-darken-4'>"+data[1]+" </span>"+
				"			<a data-cmd='updateCompany' data-value='"+data[1]+"' data-name='"+data[1]+"' data-node='"+data[0]+"' data-prop='Name' class='tooltipped btn-floating waves-effect black-text no-shadow white right' data-position='left' data-delay='50' data-tooltip='Update account'>"+
				"				<i class='mdi-editor-mode-edit right black-text'></i>"+
				"			</a>"+
				"		 <div class='divider'></div>"+
				"        <p><span style='width:80%;display: inline-block;' class='truncate'><i class='mdi-action-perm-phone-msg cyan-text text-darken-2'></i> Phone: "+data[4]+"</span>"+
				"			<a data-cmd='updateCompany' data-value='"+data[4]+"' data-name='"+data[1]+"' data-node='"+data[0]+"' data-prop='Phone' class='tooltipped btn-floating waves-effect black-text no-shadow white right' data-position='left' data-delay='50' data-tooltip='Update phone'>"+
				"				<i class='mdi-editor-mode-edit right black-text'></i>"+
				"			</a>"+
				"		 </p>"+
				"		 <div class='divider'></div>"+
				"        <p><span style='width:80%;display: inline-block;' class='truncate'><i class='mdi-communication-email cyan-text text-darken-2'></i> Email: "+data[3]+"</span>"+
				"			<a data-cmd='updateCompany' data-value='"+data[3]+"' data-name='"+data[1]+"' data-node='"+data[0]+"' data-prop='Email' class='tooltipped btn-floating waves-effect black-text no-shadow white right' data-position='left' data-delay='50' data-tooltip='Update email'>"+
				"				<i class='mdi-editor-mode-edit right black-text'></i>"+
				"			</a>"+
				"		 </p>"+
				"		 <div class='divider'></div>"+
				"        <p><span style='width:80%;display: inline-block;' class='truncate'><i class='mdi-action-room cyan-text text-darken-2'></i> Address: "+data[2]+"</span>"+
				"			<a data-cmd='updateCompany' data-value='"+data[2]+"' data-name='"+data[1]+"' data-node='"+data[0]+"' data-prop='Address' class='tooltipped btn-floating waves-effect black-text no-shadow white right' data-position='left' data-delay='50' data-tooltip='Update address'>"+
				"				<i class='mdi-editor-mode-edit right black-text'></i>"+
				"			</a>"+
				"		 </p>"+
				"    </div>"+
				"</div>";
		$("#companyProfile").html(content);	
	},
	accountProfile(data){
		data = data[0];
		if(Number(data[8]) == 1){
			status = "Active";
			var actions = "<a data-cmd='deactivateEmployer' data-name='"+data[2]+"' data-node='"+data[0]+"' class='tooltipped btn-floating waves-effect black-text no-shadow white right' data-position='left' data-delay='50' data-tooltip='Deactivate account' data-cmd='update'>"+
						  "	<i class='mdi-action-lock-open right black-text'></i>"+
						  "</a>";	
		}
		else{
			status = "Deactivated";
			var actions = "<a data-cmd='activateEmployer' data-name='"+data[2]+"' data-node='"+data[0]+"' class='tooltipped btn-floating waves-effect black-text no-shadow white right' data-position='left' data-delay='50' data-tooltip='Activate account' data-cmd='update'>"+
						  "	<i class='mdi-action-lock right black-text'></i>"+
						  "</a>";	
		}

		var profile = ((data[7] == "") || data[7] == null)?"avatar.jpg":data[7];

		content = "<div id='profile-card' class='card'>"+
				"    <div class='card-image waves-effect waves-block waves-light'>"+
				"        <img class='activator' src='../assets/images/user-bg.jpg' alt='user background'>"+
				"    </div>"+
				"    <div class='card-content'>"+
				"        <div class=' responsive-img activator card-profile-image circle'>"+
				"        	<img src='../assets/images/profile/"+profile+"' alt='' class='circle'>"+
				"        	<a data-cmd='updateEmployerPicture' data-value='"+profile+"' data-name='"+data[2]+"' data-node='"+data[0]+"' data-prop='Picture' class='btn waves-effect white-text no-shadow black' style='font-size: 10px;z-index: 1;padding: 0 12px;top:40px;'>Change</a>"+
				"		 </div>"+
				"        <span class='card-title activator grey-text text-darken-4'>"+data[2]+" </span>"+
				"			<a data-cmd='updateEmployer' data-value='"+data[2]+"' data-name='"+data[2]+"' data-node='"+data[0]+"' data-prop='Name' class='tooltipped btn-floating waves-effect black-text no-shadow white right' data-position='left' data-delay='50' data-tooltip='Update account'>"+
				"				<i class='mdi-editor-mode-edit right black-text'></i>"+
				"			</a>"+
				"		 <div class='divider'></div>"+
				"        <p><i class='mdi-action-info-outline cyan-text text-darken-2'></i> Status: "+status+actions+"</p>"+
				"		 <div class='divider'></div>"+
				"        <p><i class='mdi-action-perm-identity cyan-text text-darken-2'></i> HR Officer</p>"+
				"		 <div class='divider'></div>"+
				"        <p><span style='width:80%;display: inline-block;' class='truncate'><i class='mdi-action-perm-phone-msg cyan-text text-darken-2'></i> Phone: "+data[4]+"</span>"+
				"			<a data-cmd='updateEmployer' data-value='"+data[4]+"' data-name='"+data[1]+"' data-node='"+data[0]+"' data-prop='Phone' class='tooltipped btn-floating waves-effect black-text no-shadow white right' data-position='left' data-delay='50' data-tooltip='Update phone'>"+
				"				<i class='mdi-editor-mode-edit right black-text'></i>"+
				"			</a>"+
				"		 </p>"+
				"		 <div class='divider'></div>"+
				"        <p><span style='width:80%;display: inline-block;' class='truncate'><i class='mdi-communication-email cyan-text text-darken-2'></i> Email: "+data[3]+"</span>"+
				"			<a data-cmd='updateEmployer' data-value='"+data[3]+"' data-name='"+data[1]+"' data-node='"+data[0]+"' data-prop='Email' class='tooltipped btn-floating waves-effect black-text no-shadow white right' data-position='left' data-delay='50' data-tooltip='Update email'>"+
				"				<i class='mdi-editor-mode-edit right black-text'></i>"+
				"			</a>"+
				"		 </p>"+
				"		 <div class='divider'></div>"+
				"        <p><span style='width:80%;display: inline-block;' class='truncate'><i class='mdi-action-verified-user cyan-text text-darken-2'></i> Username: "+data[5]+"</span>"+
				"			<a data-cmd='updateEmployer' data-value='"+data[5]+"' data-name='"+data[1]+"' data-node='"+data[0]+"' data-prop='Username' class='tooltipped btn-floating waves-effect black-text no-shadow white right' data-position='left' data-delay='50' data-tooltip='Update account'>"+
				"				<i class='mdi-editor-mode-edit right black-text'></i>"+
				"			</a>"+
				"		 </p>"+
				"		 <div class='divider'></div>"+
				"        <p><span style='width:80%;display: inline-block;' class='truncate'><i class='mdi-action-verified-user cyan-text text-darken-2'></i> Password"+"</span>"+
				"			<button disabled class='tooltipped btn-floating waves-effect black-text no-shadow white right'>"+
				"				<i class='mdi-editor-mode-edit right grey-text'></i>"+
				"			</button>"+
				"		 </p>"+
				"    </div>"+
				"</div>";
		$("#accountProfile").html(content);	
	},
	details:function(id){
		client.getConfirm(id);
		var _this = this;
		var content = "";
		var getEmployer = system.ajax('../assets/harmony/Process.php?get-clientDetails',id);
		getEmployer.done(function(data_getEmployer){
			data_getEmployer = JSON.parse(data_getEmployer);

			var getEmployer = system.ajax('../assets/harmony/Process.php?get-employerByID',id);
			getEmployer = JSON.parse(getEmployer.responseText);

			var getEmployees = system.ajax('../assets/harmony/Process.php?get-employeeByID',id);
			getEmployees = JSON.parse(getEmployees.responseText);

			_this.companyProfile(data_getEmployer);
			_this.accountProfile(getEmployer);

			if(getEmployees.length > 0){
				employee.list(id);
			}
			else{
				$("#employees").html("<div class='col s12 center'>No employees yet</div>");
			}
		});

		$("#options a[data-cmd='add_employee']").on('click',function(){
			employee.add(id);
		});

		$("#options a[data-cmd='bulk_upload']").on('click',function(){
	    	$(location).attr('href','#cmd=index;content=upload_employee;'+id);			
		});

		$("#options a[data-cmd='points_upload']").on('click',function(){
	    	$(location).attr('href','#cmd=index;content=upload_points;'+id);			
		});

		_this.deactivate();
		_this.activate();
		_this.update();
		_this.updatePicture();
	},
	update:function(){
		$("a[data-cmd='updateEmployer']").on('click',function(){
			var data = $(this).data();
			var id = data.node;

			var content = "<h5>Change "+data.prop+"</h5>"+
						  "<form id='form_update' class='formValidate' method='get' action='' novalidate='novalidate'>"+
						  "		<label for='field_"+data.prop+"'>"+data.prop+": </label>"+
						  "		<input id='field_"+data.prop+"' value='"+data.value+"' type='text' name='field_"+data.prop+"' data-error='.error_"+data.prop+"'>"+
						  "		<div class='error_"+data.prop+"'></div>"+
						  "		<button type='submit' data-cmd='button_proceed' class='waves-effect waves-grey grey lighten-5 blue-text btn-flat modal-action right'>Save</button>"+
						  "		<a class='waves-effect waves-grey grey-text btn-flat modal-action modal-close right'>Cancel</a>"+
						  "</form>";
			$("#modal_confirm .modal-content").html(content);
			$('#modal_confirm .modal-footer').html("");			

			if(data.prop == "Name"){
				$('#modal_confirm').openModal('show');			
				$("#form_update").validate({
				    rules: {
				        field_Name: {required: true,maxlength: 50},
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
						if(data.value == _form[0]['value']){
							Materialize.toast('You did not even change the product name.',4000);
						}
						else{
							var ajax = system.ajax('../assets/harmony/Process.php?update-employer',[id,_form]);
							ajax.done(function(ajax){
								console.log(ajax);
								if(ajax == 1){
									system.clearForm();
									Materialize.toast('Name updated.',4000);
									$('#modal_confirm').closeModal();	
									App.handleLoadPage("#cmd=index;content=focusClient");
								}
								else{
									Materialize.toast('Cannot process request.',4000);
								}
							});
						}
				    }
				}); 
			}			
			else if(data.prop == "Phone"){
				$('#modal_confirm').openModal('show');			
				$("#form_update").validate({
				    rules: {
				        field_Name: {required: true,maxlength: 50},
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
						if(data.value == _form[0]['value']){
							Materialize.toast('You did not even change the value.',4000);
						}
						else{
							var ajax = system.ajax('../assets/harmony/Process.php?update-employer',[id,_form]);
							ajax.done(function(ajax){
								if(ajax == 1){
									system.clearForm();
									Materialize.toast('Phone updated.',4000);
									$('#modal_confirm').closeModal();	
									App.handleLoadPage("#cmd=index;content=focusClient");
								}
								else{
									Materialize.toast('Cannot process request.',4000);
								}
							});
						}
				    }
				}); 
			}			
			else if(data.prop == "Email"){
				$('#modal_confirm').openModal('show');			
				$("#form_update").validate({
				    rules: {
				        field_Email: {required: true,maxlength: 50,checkEmail:true},
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
						if(data.value == _form[0]['value']){
							Materialize.toast('You did not even change the value.',4000);
						}
						else{
							var ajax = system.ajax('../assets/harmony/Process.php?update-employer',[id,_form]);
							ajax.done(function(ajax){
								if(ajax == 1){
									system.clearForm();
									Materialize.toast('Email updated.',4000);
									$('#modal_confirm').closeModal();	
									App.handleLoadPage("#cmd=index;content=focusClient");
								}
								else{
									Materialize.toast('Cannot process request.',4000);
								}
							});
						}
				    }
				}); 
			}
			else if(data.prop == "Address"){
				$('#modal_confirm').openModal('show');			
				$("#form_update").validate({
				    rules: {
				        field_Email: {required: true,maxlength: 50,checkEmail:true},
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
						if(data.value == _form[0]['value']){
							Materialize.toast('You did not even change the value.',4000);
						}
						else{
							var ajax = system.ajax('../assets/harmony/Process.php?update-employer',[id,_form]);
							ajax.done(function(ajax){
								if(ajax == 1){
									system.clearForm();
									Materialize.toast('Address updated.',4000);
									$('#modal_confirm').closeModal();	
									App.handleLoadPage("#cmd=index;content=focusClient");
								}
								else{
									Materialize.toast('Cannot process request.',4000);
								}
							});
						}
				    }
				}); 
			}
			else if(data.prop == "Username"){
				$('#modal_confirm').openModal('show');			
				$("#form_update").validate({
				    rules: {
				        field_Username: {required: true,maxlength: 50,checkUsername:true,validateUsername:true},
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
						if(data.value == _form[0]['value']){
							Materialize.toast('You did not even change the value.',4000);
						}
						else{
							var ajax = system.ajax('../assets/harmony/Process.php?update-employer',[id,_form]);
							ajax.done(function(ajax){
								if(ajax == 1){
									system.clearForm();
									Materialize.toast('Username updated.',4000);
									$('#modal_confirm').closeModal();	
									App.handleLoadPage("#cmd=index;content=focusClient");
								}
								else{
									Materialize.toast('Cannot process request.',4000);
								}
							});
						}
				    }
				}); 
			}
			else if(data.prop == "Password"){
				$('#modal_confirm').openModal('show');			
				$("#field_Password").attr({"type":"password"});
				$("#form_update").append("<p><input type='checkbox' id='showPassword'><label for='showPassword'>Show password</label></p>");

				$("#showPassword").on("click",function(){
					if($(this).is(':checked')){
						$("#field_Password").attr({"type":"text"});						
					}
					else{
						$("#field_Password").attr({"type":"password"});						
					}
				})

				$("#form_update").validate({
				    rules: {
				        field_Password: {required: true,maxlength: 50,checkPassword:true,validatePassword:true},
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
						var ajax = system.ajax('../assets/harmony/Process.php?update-employer',[id,_form]);
						ajax.done(function(ajax){
							if(ajax == 1){
								system.clearForm();
								Materialize.toast('Password updated.',4000);
								$('#modal_confirm').closeModal();	
								App.handleLoadPage("#cmd=index;content=focusClient");
							}
							else{
								Materialize.toast('Cannot process request.',4000);
							}
						});
				    }
				}); 
			}
		});

		$("a[data-cmd='updateCompany']").on('click',function(){
			var data = $(this).data();
			var id = data.node;

			var content = "<h5>Change "+data.prop+"</h5>"+
						  "<form id='form_update' class='formValidate' method='get' action='' novalidate='novalidate'>"+
						  "		<label for='field_"+data.prop+"'>"+data.prop+": </label>"+
						  "		<input id='field_"+data.prop+"' value='"+data.value+"' type='text' name='field_"+data.prop+"' data-error='.error_"+data.prop+"'>"+
						  "		<div class='error_"+data.prop+"'></div>"+
						  "		<button type='submit' data-cmd='button_proceed' class='waves-effect waves-grey grey lighten-5 blue-text btn-flat modal-action right'>Save</button>"+
						  "		<a class='waves-effect waves-grey grey-text btn-flat modal-action modal-close right'>Cancel</a>"+
						  "</form>";
			$("#modal_confirm .modal-content").html(content);
			$('#modal_confirm .modal-footer').html("");			

			if(data.prop == "Name"){
				$('#modal_confirm').openModal('show');			
				$("#form_update").validate({
				    rules: {
				        field_Name: {required: true,maxlength: 50},
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
						if(data.value == _form[0]['value']){
							Materialize.toast('You did not even change the value.',4000);
						}
						else{
							var ajax = system.ajax('../assets/harmony/Process.php?update-company',[id,_form]);
							ajax.done(function(ajax){
								console.log(ajax);
								if(ajax == 1){
									system.clearForm();
									Materialize.toast('Name updated.',4000);
									$('#modal_confirm').closeModal();	
									App.handleLoadPage("#cmd=index;content=focusClient");
								}
								else{
									Materialize.toast('Cannot process request.',4000);
								}
							});
						}
				    }
				}); 
			}			
			else if(data.prop == "Phone"){
				$('#modal_confirm').openModal('show');			
				$("#form_update").validate({
				    rules: {
				        field_Name: {required: true,maxlength: 50},
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
						if(data.value == _form[0]['value']){
							Materialize.toast('You did not even change the value.',4000);
						}
						else{
							var ajax = system.ajax('../assets/harmony/Process.php?update-company',[id,_form]);
							ajax.done(function(ajax){
								if(ajax == 1){
									system.clearForm();
									Materialize.toast('Phone updated.',4000);
									$('#modal_confirm').closeModal();	
									App.handleLoadPage("#cmd=index;content=focusClient");
								}
								else{
									Materialize.toast('Cannot process request.',4000);
								}
							});
						}
				    }
				}); 
			}			
			else if(data.prop == "Email"){
				$('#modal_confirm').openModal('show');			
				$("#form_update").validate({
				    rules: {
				        field_Email: {required: true,maxlength: 50,checkEmail:true},
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
						if(data.value == _form[0]['value']){
							Materialize.toast('You did not even change the value.',4000);
						}
						else{
							var ajax = system.ajax('../assets/harmony/Process.php?update-company',[id,_form]);
							ajax.done(function(ajax){
								if(ajax == 1){
									system.clearForm();
									Materialize.toast('Email updated.',4000);
									$('#modal_confirm').closeModal();	
									App.handleLoadPage("#cmd=index;content=focusClient");
								}
								else{
									Materialize.toast('Cannot process request.',4000);
								}
							});
						}
				    }
				}); 
			}
			else if(data.prop == "Address"){
				$('#modal_confirm').openModal('show');			
				$("#form_update").validate({
				    rules: {
				        field_Address: {required: true,maxlength: 100},
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
						if(data.value == _form[0]['value']){
							Materialize.toast('You did not even change the value.',4000);
						}
						else{
							var ajax = system.ajax('../assets/harmony/Process.php?update-company',[id,_form]);
							ajax.done(function(ajax){
								console.log(ajax);
								if(ajax == 1){
									system.clearForm();
									Materialize.toast('Address updated.',4000);
									$('#modal_confirm').closeModal();	
									App.handleLoadPage("#cmd=index;content=focusClient");
								}
								else{
									Materialize.toast('Cannot process request.',4000);
								}
							});
						}
				    }
				}); 
			}
		});
	},
	updatePicture:function(){
		$("a[data-cmd='updateEmployerPicture']").on('click',function(){
			var data = $(this).data();
			console.log(data);
			var id = data.node;
			var picture = "../assets/images/profile/avatar.jpg";
			var content = "<h4>Change "+data.prop+"</h4>"+
  							"	<div class='row'>"+
  							"		<div class='col s12'>"+
							"			<div id='profile_picture2' class='ibox-content no-padding border-left-right '></div>"+
							"		</div>"+
							"	</div>";
			$("#modal_confirm .modal-content").html(content);
			$('#modal_confirm').removeClass('modal-fixed-footer');			
			$('#modal_confirm .modal-footer').remove();			
			$('#modal_confirm').openModal('show');			

    		var content =   "<div class='image-crop col s12' style='margin-bottom:5px;'>"+
							"	<img width='100%' src='"+picture+"'>"+
							"</div>"+
							"<div class='btn-group col s12'>"+
							"	<label for='inputImage' class='btn blue btn-floating btn-flat tooltipped' data-tooltip='Load image' data-position='top'>"+
							"		<input type='file' accept='image/*' name='file' id='inputImage' class='hide'>"+
							"		<i class='large mdi-editor-publish'></i>"+
							"	</label>"+
							"	<button class='btn blue btn-floating btn-flat tooltipped' data-cmd='cancel' type='button' data-tooltip='Cancel' data-position='top'>"+
							"		<i class='mdi-navigation-close'></i>"+
							"	</button>"+
							"	<button class='btn blue btn-floating btn-flat hidden tooltipped right' data-cmd='save' type='button' data-tooltip='Save' data-position='top'>"+
							"		<i class='mdi-content-save'></i>"+
							"	</button>"+
							"</div>";
    		$("#profile_picture2").html(content);
			$('.tooltipped').tooltip({delay: 50});

            var $inputImage = $("#inputImage");
            var status = true;
            if(window.FileReader){
                $inputImage.change(function() {
                    var fileReader = new FileReader(),
                            files = this.files,
                            file;

                    file = files[0];

                    if (/^image\/\w+$/.test(file.type)) {
                        fileReader.readAsDataURL(file);
                        fileReader.onload = function () {
                            $inputImage.val("");

				            var $image = $(".image-crop > img")
				            $($image).cropper({
				            	aspectRatio: 1/1,
							    autoCropArea: 0.80,
							    preview: ".avatar-preview",
							    built: function () {
			    		    		$(".cropper-container").attr({'style':'left:0px !important;top:0px;width:100%;height:100%;'});

							    	$("button[data-cmd='save']").removeClass('hidden');
							    	$("button[data-cmd='rotate']").removeClass('hidden');
							    	
						            $("button[data-cmd='save']").click(function(){									    	
								    	$(this).html("<i class='mdi-action-cached icon-spin'></i>").addClass('disabled');
								    	if(status){
											var data = system.ajax('../assets/harmony/Process.php?update-employerPicture',[id,$image.cropper("getDataURL")]); // 
											data.done(function(data){
												Materialize.toast('Picture has been changed.',4000);
												system.clearForm();
												App.handleLoadPage("#cmd=index;content=focusClient;"+id);
												$('#modal_confirm').closeModal();	
											});
								    		status = false;
								    	}
						            });
							    }
							});

                            $image.cropper("reset", true).cropper("replace", this.result);

				            $("button[data-cmd='rotate']").click(function(){
				            	var data = $(this).data('option');
					        	$image.cropper('rotate', data);
				            });

                        };
                    }
                    else{
                        showMessage("Please choose an image file.");
                    }
                });
            }
            else{
                $inputImage.addClass("hide");
            }	            
            $("button[data-cmd='cancel']").click(function(){
				$('#modal_confirm').closeModal();	
            });
		});

		$("a[data-cmd='updateCompanyLogo']").on('click',function(){
			var data = $(this).data();
			console.log(data);
			var id = data.node;
			var picture = "../assets/images/profile/avatar.jpg";
			var content = "<h4>Change "+data.prop+"</h4>"+
  							"	<div class='row'>"+
  							"		<div class='col s12'>"+
							"			<div id='profile_picture2' class='ibox-content no-padding border-left-right '></div>"+
							"		</div>"+
							"	</div>";
			$("#modal_confirm .modal-content").html(content);
			$('#modal_confirm').removeClass('modal-fixed-footer');			
			$('#modal_confirm .modal-footer').remove();			
			$('#modal_confirm').openModal('show');			

    		var content =   "<div class='image-crop col s12' style='margin-bottom:5px;'>"+
							"	<img width='100%' src='"+picture+"'>"+
							"</div>"+
							"<div class='btn-group col s12'>"+
							"	<label for='inputImage' class='btn blue btn-floating btn-flat tooltipped' data-tooltip='Load image' data-position='top'>"+
							"		<input type='file' accept='image/*' name='file' id='inputImage' class='hide'>"+
							"		<i class='large mdi-editor-publish'></i>"+
							"	</label>"+
							"	<button class='btn blue btn-floating btn-flat tooltipped' data-cmd='cancel' type='button' data-tooltip='Cancel' data-position='top'>"+
							"		<i class='mdi-navigation-close'></i>"+
							"	</button>"+
							"	<button class='btn blue btn-floating btn-flat hidden tooltipped right' data-cmd='save' type='button' data-tooltip='Save' data-position='top'>"+
							"		<i class='mdi-content-save'></i>"+
							"	</button>"+
							"</div>";
    		$("#profile_picture2").html(content);
			$('.tooltipped').tooltip({delay: 50});

            var $inputImage = $("#inputImage");
            var status = true;
            if(window.FileReader){
                $inputImage.change(function() {
                    var fileReader = new FileReader(),
                            files = this.files,
                            file;

                    file = files[0];

                    if (/^image\/\w+$/.test(file.type)) {
                        fileReader.readAsDataURL(file);
                        fileReader.onload = function () {
                            $inputImage.val("");

				            var $image = $(".image-crop > img")
				            $($image).cropper({
				            	aspectRatio: 1/1,
							    autoCropArea: 0.80,
							    preview: ".avatar-preview",
							    built: function () {
			    		    		$(".cropper-container").attr({'style':'left:0px !important;top:0px;width:100%;height:100%;'});

							    	$("button[data-cmd='save']").removeClass('hidden');
							    	$("button[data-cmd='rotate']").removeClass('hidden');
							    	
						            $("button[data-cmd='save']").click(function(){									    	
								    	$(this).html("<i class='mdi-action-cached icon-spin'></i>").addClass('disabled');
								    	if(status){
											var data = system.ajax('../assets/harmony/Process.php?update-employerCompanyLogo',[id,$image.cropper("getDataURL")]); // 
											data.done(function(data){
												Materialize.toast('Picture has been changed.',4000);
												system.clearForm();
												App.handleLoadPage("#cmd=index;content=focusClient;"+id);
												$('#modal_confirm').closeModal();	
											});
								    		status = false;
								    	}
						            });
							    }
							});

                            $image.cropper("reset", true).cropper("replace", this.result);

				            $("button[data-cmd='rotate']").click(function(){
				            	var data = $(this).data('option');
					        	$image.cropper('rotate', data);
				            });

                        };
                    }
                    else{
                        showMessage("Please choose an image file.");
                    }
                });
            }
            else{
                $inputImage.addClass("hide");
            }	            
            $("button[data-cmd='cancel']").click(function(){
				$('#modal_confirm').closeModal();	
            });
		});
	},
	deactivate:function(){
		$("a[data-cmd='deactivateEmployer']").on('click',function(){
			var id = $(this).data('node');
			var content = "Arey you sure DEACTIVATE "+$(this).data('name')+"'s account?<br/>"+
						  "<label for='field_description'>Remarks: </label>"+
						  "<textarea class='materialize-textarea' data-field='field_description' name='field_description'></textarea>";
			$("#modal_confirm .modal-content").html(content);
			$("#modal_confirm .modal-footer").html("<a class='waves-effect waves-red red white-text btn-flat modal-action modal-close'>Cancel</a>"+
												   "<a data-cmd='button_proceed' class='waves-effect waves-grey btn-flat modal-action'>Proceed</a>");
			$('#modal_confirm').openModal('show');			

			$("a[data-cmd='button_proceed']").on("click",function(){
				var remarks = $("textarea[data-field='field_description']").val();
				if(remarks.length == 0){
						Materialize.toast('Remarks is required.',4000);
				}
				else if(remarks.length > 800){
						Materialize.toast('Statement is too long.',4000);
				}
				else{
					var data = system.ajax('../assets/harmony/Process.php?deactivate-employer',[id,remarks]);
					data.done(function(data){
						console.log(data);
						if(data == 1){
							Materialize.toast('Account deactivaded.',4000);
							system.clearForm();
							App.handleLoadPage("#cmd=index;content=focusClient");
							$('#modal_confirm').closeModal();	
						}
						else{
							Materialize.toast('Cannot process request.',4000);
						}
					});
				}
			});
		})
	},
	activate:function(){
		$("a[data-cmd='activateEmployer']").on('click',function(){
			var id = $(this).data('node');
			$("#modal_confirm .modal-content").html("Arey you sure ACTIVATE "+$(this).data('name')+"'s account?");
			$("#modal_confirm .modal-footer").html("<a class='waves-effect waves-red red white-text btn-flat modal-action modal-close'>Cancel</a>"+
												   "<a data-cmd='button_proceed' class='waves-effect waves-grey btn-flat modal-action modal-close'>Proceed</a>");
			$('#modal_confirm').openModal('show');			

			$("a[data-cmd='button_proceed']").on("click",function(){
				var data = system.ajax('../assets/harmony/Process.php?activate-employer',id);
				data.done(function(data){
					if(data == 1){
						Materialize.toast('Account activaded.',4000);
						system.clearForm();
						App.handleLoadPage("#cmd=index;content=focusClient");
						$('#modal_confirm').closeModal();	
					}
					else{
						Materialize.toast('Cannot process request.',4000);
					}
				});
			});
		})
	},
	view:function(id){
		var content = "";
		var getEmployee = system.ajax('../assets/harmony/Process.php?get-searchByEmployeeID',id);
		getEmployee.done(function(data){
			data = JSON.parse(data);
			var profile = (data[0][14] == "")?"avatar.jpg":data[0][14];
			var position = ((data[0][4] == "") || data[0][4] == null)?"Not assigned":data[0][4];
			var address = ((data[0][13] == "") || data[0][13] == null)?"Not assigned":data[0][13];
			var contactNumber = ((data[0][11] == "") || data[0][11] == null)?"Not assigned":data[0][11];

			content = "<div class='row'>"+
					"<div class=''>"+
					"	<div class='col s3 m2 l2'>"+
					"		<img src='../assets/images/avatar.jpg' alt='Employee logo' class='circle center responsive-img valign profile-image'>"+
					"	</div>"+
					"	<div class='col s9 m10 l10'>"+
					"		<ul class='collection with-header'>"+
					"			<li class='collection-header'>"+
					"				<h4>"+data[0][6]+" "+data[0][5]+" <small>"+data[0][1]+"</small></h4>"+
					"			</li>"+
					"			<li class='collection-item'>"+
					"        		<div><i class='mdi-action-perm-identity cyan-text text-darken-2'></i> "+position+"</div>"+
					"			</li>"+
					"			<li class='collection-item'>"+
					"        		<div><i class='mdi-action-perm-phone-msg cyan-text text-darken-2'></i> "+contactNumber+"</div>"+
					"			</li>"+
					"			<li class='collection-item'>"+
					"        		<div><i class='mdi-communication-email cyan-text text-darken-2'></i> "+data[0][12]+"</div>"+
					"			</li>"+
					"			<li class='collection-item'>"+
					"        		<div><i class='mdi-action-room cyan-text text-darken-2'></i> "+address+"</div>"+
					"			</li>"+
					"			<li class='collection-item'>"+
					"        		<div><i class='mdi-social-cake cyan-text text-darken-2'></i> "+data[0][10]+"</div>"+
					"			</li>"+
					"		</ul>"+
					"	</div>";
			$("#modal_popUp .modal-content").html(content);
			$('#modal_popUp').openModal('show');			
		});
	},	
	sendAccount:function(count){
		// system.send_mail('rufo.gabrillo@gmail.com','Testing email capability','Test test');
		var loop = 0;
		do{
			loop++;
			console.log(loop);
			var data = system.send_mail('rufo.gabrillo@gmail.com','Testing email capability','Test test');
			console.log();
		}
		while(count<10);
	},
	getConfirmCount:function(id){
		var value = 0;
		var data = system.ajax('../assets/harmony/Process.php?get-confirmStatus',id);
		data.done(function(data){
			value = data;
		});
		return value;
	},
	getConfirm:function(id){
		var content = "";
		var data = system.ajax('../assets/harmony/Process.php?get-confirmByID',id);
		console.log(data);
		data.done(function(data){
			data = JSON.parse(data);
			if(data.length>0){
				content = "<div class='card-panel' style='margin-top: 0px;'>"+
							"	<div class='row'>"+
							"		<div class='center-align'>"+
							"			<div class='col s12'>"+
							"				<p>Sending employee account confirmation. <span class='counter'>0/0</span><br/>Please do not interrupt.<br/><br/><span class='loader'></span></p>"+
							"			</div>"+
							"		</div>"+
							"	</div>"+
							"</div>";
				$("#confirmList").html(content);
				$("#confirmList p span.counter").html(data.length+" left");
				var data = system.xml("pages.xml");
				$(data.responseText).find("loader2").each(function(i,content){
					$("#confirmList p span.loader").html(content);
				});
				Materialize.toast('Sending account confirmation.',1000,'',function(){
					client.sendConfirm(id);
				});
			}
			// else{
			// 	Materialize.toast('Saved.',4000);
			// }
		});			
	},
	sendConfirm:function(id){
		var data = system.ajax('../assets/harmony/Process.php?get-confirmAccountStatus',id);
		data.done(function(data){
			// console.log(data);
			if(data <= 0){
				location.reload(true);
			}
			else{
				client.getConfirm(id);
			}
		}).fail(function(data){
			// console.log(data);
			Materialize.toast('Sending account confirmation will resume in less than a minute.',30000,'',function(){
				location.reload(true);
			});
		});
	}
}

employee = {
	get:function(){
		var data = system.html('../assets/harmony/Process.php?get-employee');
		return data;
	},
	add:function(id){
		var data = system.xml("pages.xml");
		$(data.responseText).find("addEmployee").each(function(i,content){
			console.log("xxx");
			$("#modal_popUp .modal-content").html(content);
			$('#modal_popUp').openModal('show');		
		    $("select").material_select();

			$("#form_addEmployee").validate({
			    rules: {
			        field_gname: {required: true,maxlength: 50},
			        field_mname: {required: true,maxlength: 50},
			        field_fname: {required: true,maxlength: 50},
			        field_nickname: {required: true,maxlength: 50},
			        field_dob: {required: true,maxlength: 50,checkDate:true},
			        field_gender: {required: true,maxlength: 50},
			        field_address: {required: true,maxlength: 100},
			        field_phone: {required: true,maxlength: 50},
			        field_email: {required: true,maxlength: 100,checkEmail:true},
			        field_position: {required: true,maxlength: 50,},
			        field_employeeID: {required: true,maxlength: 50,validateEmployeeID:true},
			        field_password: {required: true,maxlength: 50,checkPassword:true,validatePassword:true},
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
					var data = system.ajax('../assets/harmony/Process.php?set-newEmployee',[_form,id]);
					data.done(function(data){
						if(data == 1){
							var text = "<h1>Congratulations</h1>, you are now registered. You can login using <u>"+_form[2]['value']+"</u> as you username and <u>"+
							_form[5]['value']+"</u> as your password. <a href='http://loginocalhost/kaboomRewards/login.html'>Just follow this link</a>";
							var data = system.send_mail(_form[8]['value']+',info@rnrdigitalconsultancy.com','Employee Registration',text);
							if(data.responseText != ""){
								Materialize.toast('Saved.',4000);
								system.clearForm();
						    	$(location).attr('href',"#cmd=index;content=focusClient");			
							}
						}
						else{
							Materialize.toast('Cannot process request.',4000);
						}
					});
			    }
			});
		});
	},
	list:function(id){
		var data = system.ajax('../assets/harmony/Process.php?get-employeeByID',id);
		data = JSON.parse(data.responseText);

		var content = "", actions = "";
		$.each(data,function(i,v){
			var profile = ((v[12] == "") || (v[12] == null))?'avatar.jpg':v[12];

			if(Number(v[15]) == 1){
				actions = "<i class='mdi-action-lock-open right black-text' data-position='left' data-delay='50' data-tooltip='Active'></i>";	
			}
			else{
				actions = "<i class='mdi-action-lock right black-text' data-position='left' data-delay='50' data-tooltip='Deactivated'></i>";	
			}
			content += "<tr>"+
						"	<td width='1px'>"+(i+1)+". </td>\n"+
						"	<td><img src='../assets/images/profile/"+profile+"' alt='Thumbnail' class='responsive-img valign profile-image' style='width:50px;'>"+actions+"</td>\n"+
						"	<td width='200px'><p>"+v[1]+"</p></td>\n"+
						"	<td width='200px'><p>"+v[3]+"</p></td>\n"+
						"	<td width='200px'><p>"+v[4]+"</p></td>\n"+
						"	<td>\n"+
							"		<a data-studentID='"+v[1]+"' data-node='"+v[0]+"' data-cmd='view' class='tooltipped btn-floating waves-effect black-text no-shadow grey lighten-5 right' data-position='left' data-delay='50' data-tooltip='Show Details'>\n"+
						"			<i class='mdi-navigation-more-vert right black-text'></i>"+
						"		</a>\n"+
						"	</td>\n"+
						"</tr>\n";
		})	

		$("#employees table tbody").html(content);
		var table = $('#employees table').DataTable({
	        "order": [[ 0, 'asc' ]],
	        "drawCallback": function ( settings ) {
	            var api = this.api();
	            var rows = api.rows( {page:'current'} ).nodes();
	            var last=null;
	        }
	    });

		$('.dataTable').on('click', 'tbody tr', function() {
			var data = table.row(this).data();
			data = $.parseHTML(data[5]);
	    	$(location).attr('href','#cmd=index;content=focusEmployee;'+data[0].dataset.node);			
		});
	},
	details:function(id){
		points.add(id);
		employee.getPoints(id);
		employee.getPointsActivity(id);
		employee.getBuysActivity(id);
		var content = "";
		var data = system.ajax('../assets/harmony/Process.php?get-employeeDetails',id);
		data.done(function(data){
			data = JSON.parse(data);
			if(data.length<=0){
				var data = system.xml("pages.xml");
				$(data.responseText).find("errorContent").each(function(i,content){
					$("#display_error").html(content);
				});
			}
			else{
				$("#display_employeeDetails").removeClass('hidden');
				$("#display_error").addClass('hidden');

				if(Number(data[0][15]) == 1){
					status = "Active";
					var actions = "<a data-cmd='deactivateEmployee' data-name='"+data[0][4]+"' data-node='"+data[0][0]+"' class='tooltipped btn-floating waves-effect black-text no-shadow white right' data-position='left' data-delay='50' data-tooltip='Deactivate account' data-cmd='update'>"+
								  "	<i class='mdi-action-lock-open right black-text'></i>"+
								  "</a>";	
				}
				else{
					status = "Deactivated";
					var actions = "<a data-cmd='activateEmployee' data-name='"+data[0][4]+"' data-node='"+data[0][0]+"' class='tooltipped btn-floating waves-effect black-text no-shadow white right' data-position='left' data-delay='50' data-tooltip='Activate account' data-cmd='update'>"+
								  "	<i class='mdi-action-lock right black-text'></i>"+
								  "</a>";	
				}

				var profile = ((data[0][12] == "") || (data[0][12] == null))?"avatar.jpg":data[0][12];
				content = "<div id='profile-card' class='card'>"+
						"    <div class='card-image waves-effect waves-block waves-light'>"+
						"        <img class='activator' src='../assets/images/user-bg.jpg' alt='user background'>"+
						"    </div>"+
						"    <div class='card-content'>"+
						"        <div class=' responsive-img activator card-profile-image circle'>"+
						"        	<img src='../assets/images/profile/"+profile+"' alt='' class='circle'>"+
						"        	<a data-value='"+profile+"' data-cmd='updateEmployeePicture' data-name='"+data[0][4]+" "+data[0][5]+" "+data[0][3]+"' data-node='"+data[0][0]+"' data-prop='Picture' class='btn waves-effect white-text no-shadow black' style='font-size: 10px;z-index: 1;padding: 0 12px;top:40px;'>Change</a>"+
						"		 </div>"+
						"        <span class='card-title activator grey-text text-darken-4'>"+data[0][4]+" "+data[0][5]+" "+data[0][3]+" </span>"+
						"			<a data-value='"+JSON.stringify([data[0][4],data[0][5],data[0][3]])+"' data-cmd='updateEmployee' data-name='"+data[0][4]+" "+data[0][5]+" "+data[0][3]+"' data-node='"+data[0][0]+"' data-prop='Name' class='tooltipped btn-floating waves-effect black-text no-shadow white right' data-position='left' data-delay='50' data-tooltip='Update account'>"+
						"				<i class='mdi-editor-mode-edit right black-text'></i>"+
						"			</a>"+
						"		 <div class='divider'></div>"+
						"        <p><i class='mdi-action-info-outline cyan-text text-darken-2'></i> Status: "+status+actions+"</p>"+
						"		 <div class='divider'></div>"+
						"        <p><span style='width:80%;display: inline-block;' class='truncate'><i class='mdi-action-perm-identity cyan-text text-darken-2'></i> Nickname: "+data[0][6]+"</span>"+
						"			<a data-value='"+data[0][6]+"' data-cmd='updateEmployee' data-name='"+data[0][4]+" "+data[0][5]+" "+data[0][3]+"' data-node='"+data[0][0]+"' data-node='"+data[0][0]+"' data-prop='Nickname' class='tooltipped btn-floating waves-effect black-text no-shadow white right' data-position='left' data-delay='50' data-tooltip='Update phone'>"+
						"				<i class='mdi-editor-mode-edit right black-text'></i>"+
						"			</a>"+
						"		 </p>"+
						"		 <div class='divider'></div>"+
						"        <p><span style='width:80%;display: inline-block;' class='truncate'><i class='mdi-action-work cyan-text text-darken-2'></i> Position: "+data[0][13]+"</span>"+
						"			<a data-value='"+data[0][13]+"' data-cmd='updateEmployee' data-name='"+data[0][4]+" "+data[0][5]+" "+data[0][3]+"' data-node='"+data[0][0]+"' data-node='"+data[0][0]+"' data-prop='Position' class='tooltipped btn-floating waves-effect black-text no-shadow white right' data-position='left' data-delay='50' data-tooltip='Update phone'>"+
						"				<i class='mdi-editor-mode-edit right black-text'></i>"+
						"			</a>"+
						"		 </p>"+
						"		 <div class='divider'></div>"+
						"        <p><span style='width:80%;display: inline-block;' class='truncate'> <i class='mdi-action-perm-phone-msg cyan-text text-darken-2'></i> Phone: "+data[0][9]+"</span>"+
						"			<a data-value='"+data[0][9]+"' data-cmd='updateEmployee' data-name='"+data[0][4]+" "+data[0][5]+" "+data[0][3]+"' data-node='"+data[0][0]+"' data-node='"+data[0][0]+"' data-prop='Phone' class='tooltipped btn-floating waves-effect black-text no-shadow white right' data-position='left' data-delay='50' data-tooltip='Update phone'>"+
						"				<i class='mdi-editor-mode-edit right black-text'></i>"+
						"			</a>"+
						"		 </p>"+
						"		 <div class='divider'></div>"+
						"        <p><span style='width:80%;display: inline-block;' class='truncate'><i class='mdi-communication-email cyan-text text-darken-2'></i> Email: "+data[0][10]+"</span>"+
						"			<a data-value='"+data[0][10]+"' data-cmd='updateEmployee' data-name='"+data[0][4]+" "+data[0][5]+" "+data[0][3]+"' data-node='"+data[0][0]+"' data-node='"+data[0][0]+"' data-prop='Email' class='tooltipped btn-floating waves-effect black-text no-shadow white right' data-position='left' data-delay='50' data-tooltip='Update phone'>"+
						"				<i class='mdi-editor-mode-edit right black-text'></i>"+
						"			</a>"+
						"		 </p>"+
						"		 <div class='divider'></div>"+
						"        <p><span style='width:80%;display: inline-block;' class='truncate'><i class='mdi-maps-map cyan-text text-darken-2'></i> Address: "+data[0][11]+"</span>"+
						"			<a data-value='"+data[0][11]+"' data-cmd='updateEmployee' data-name='"+data[0][4]+" "+data[0][5]+" "+data[0][3]+"' data-node='"+data[0][0]+"' data-node='"+data[0][0]+"' data-prop='Address' class='tooltipped btn-floating waves-effect black-text no-shadow white right' data-position='left' data-delay='50' data-tooltip='Update phone'>"+
						"				<i class='mdi-editor-mode-edit right black-text'></i>"+
						"			</a>"+
						"		 </p>"+
						"		 <div class='divider'></div>"+
						"        <p><span style='width:80%;display: inline-block;' class='truncate'><i class='mdi-action-cached cyan-text text-darken-2'></i> Gender: "+data[0][7]+"</span>"+
						"			<a data-value='"+data[0][7]+"' data-cmd='updateEmployee' data-name='"+data[0][4]+" "+data[0][5]+" "+data[0][3]+"' data-node='"+data[0][0]+"' data-node='"+data[0][0]+"' data-prop='Gender' class='tooltipped btn-floating waves-effect black-text no-shadow white right' data-position='left' data-delay='50' data-tooltip='Update phone'>"+
						"				<i class='mdi-editor-mode-edit right black-text'></i>"+
						"			</a>"+
						"		 </p>"+
						"		 <div class='divider'></div>"+
						"        <p><span style='width:80%;display: inline-block;' class='truncate'><i class='mdi-action-event cyan-text text-darken-2'></i> Date of Birth: "+data[0][8]+"</span>"+
						"			<a data-value='"+data[0][8]+"' data-cmd='updateEmployee' data-name='"+data[0][4]+" "+data[0][5]+" "+data[0][3]+"' data-node='"+data[0][0]+"' data-node='"+data[0][0]+"' data-prop='Date of Birth' class='tooltipped btn-floating waves-effect black-text no-shadow white right' data-position='left' data-delay='50' data-tooltip='Update phone'>"+
						"				<i class='mdi-editor-mode-edit right black-text'></i>"+
						"			</a>"+
						"		 </p>"+
						"		 <div class='divider'></div>"+
						"        <p><span style='width:80%;display: inline-block;' class='truncate'><i class='mdi-action-account-box cyan-text text-darken-2'></i> Employee ID: "+data[0][1]+"</span>"+
						"			<button disabled data-cmd='updateEmployee' data-name='"+data[0][4]+" "+data[0][5]+" "+data[0][3]+"' data-node='"+data[0][0]+"' data-node='"+data[0][0]+"' data-prop='Employee ID' class='tooltipped btn-floating waves-effect black-text no-shadow white right' data-position='left' data-delay='50' data-tooltip='Update phone'>"+
						"				<i class='mdi-editor-mode-edit right grey-text'></i>"+
						"			</button>"+
						"		 </p>"+
						"		 <div class='divider'></div>"+
						"        <p><span style='width:80%;display: inline-block;' class='truncate'><i class='mdi-action-verified-user cyan-text text-darken-2'></i> Password"+"</span>"+
						"			<button disabled data-cmd='updateEmployee' data-name='"+data[0][4]+" "+data[0][5]+" "+data[0][3]+"' data-node='"+data[0][0]+"' data-node='"+data[0][0]+"' data-prop='Password' class='tooltipped btn-floating waves-effect black-text no-shadow white right' data-position='left' data-delay='50' data-tooltip='Update password'>"+
						"				<i class='mdi-editor-mode-edit right grey-text'></i>"+
						"			</button>"+
						"		 </p>"+
						"    </div>"+
						"</div>";
				$("#profile").html(content);

				employee.deactivate();
				employee.activate();
				employee.update();
				employee.updatePicture();
			}
		});
	},
	update:function(){
		$("a[data-cmd='updateEmployee']").on('click',function(){
			var data = $(this).data();
			var id = data.node;

			var content = "<h4>Change "+data.prop+"</h4>"+
						  "<form id='form_update' class='formValidate' method='get' action='' novalidate='novalidate'>"+
						  "		<label for='field_"+data.prop+"'>"+data.prop+": </label>"+
						  "		<input id='field_"+data.prop+"' type='text' name='field_"+data.prop+"' data-error='.error_"+data.prop+"' value='"+data.value+"'>"+
						  "		<div class='error_"+data.prop+"'></div>"+
						  "		<button type='submit' data-cmd='button_proceed' class='waves-effect waves-grey grey lighten-5 blue-text btn-flat modal-action right'>Save</button>"+
						  "		<a class='waves-effect waves-grey grey-text btn-flat modal-action modal-close right'>Cancel</a>"+
						  "</form>";
			$("#modal_confirm .modal-content").html(content);
			$('#modal_confirm .modal-footer').html("");			

			if(data.prop == "Name"){
				var content = "<h4>Change "+data.prop+"</h4>"+
							  "<form id='form_update' class='formValidate' method='get' action='' novalidate='novalidate'>"+
							  "		<div class='col s12'>"+
							  "			<label for='field_gname'>Given Name: </label>"+
							  "			<input id='field_gname' type='text' name='field_gname' data-error='.error_gname' value='"+data.value[0]+"'>"+
							  "			<div class='error_gname'></div>"+
							  "		</div>"+
							  "		<div class='col s12'>"+
							  "			<label for='field_mname'>Middle Name: </label>"+
							  "			<input id='field_mname' type='text' name='field_mname' data-error='.error_mname' value='"+data.value[1]+"'>"+
							  "			<div class='error_mname'></div>"+
							  "		</div>"+
							  "		<div class='col s12'>"+
							  "			<label for='field_fname'>Family Name: </label>"+
							  "			<input id='field_fname' type='text' name='field_fname' data-error='.error_fname' value='"+data.value[2]+"'>"+
							  "			<div class='error_fname'></div>"+
							  "		</div>"+
							  "		<button type='submit' data-cmd='button_proceed' class='waves-effect waves-grey grey lighten-5 blue-text btn-flat modal-action right'>Save</button>"+
							  "		<a class='waves-effect waves-grey grey-text btn-flat modal-action modal-close right'>Cancel</a>"+
							  "</form>";
				$("#modal_confirm .modal-content").html(content);
				$('#modal_confirm').openModal('show');			
				$("#form_update").validate({
				    rules: {
				        field_gname: {required: true,maxlength: 50},
				        field_mname: {required: true,maxlength: 50},
				        field_fname: {required: true,maxlength: 50},
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
						var data = system.ajax('../assets/harmony/Process.php?update-employee',[id,_form]);
						data.done(function(data){
							console.log(data);
							if(data == 1){
								system.clearForm();
								Materialize.toast('Name updated.',4000);
								$('#modal_confirm').closeModal();	
								App.handleLoadPage("#cmd=index;content=focusEmployee;"+id);
							}
							else{
								Materialize.toast('Cannot process request.',4000);
							}
						});
				    }
				}); 
			}			
			else if(data.prop == "Nickname"){
				$('#modal_confirm').openModal('show');			
				$("#form_update").validate({
				    rules: {
				        field_Nickname: {required: true,maxlength: 50},
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
						var data = system.ajax('../assets/harmony/Process.php?update-employee',[id,_form]);
						data.done(function(data){
							console.log(data);
							if(data == 1){
								system.clearForm();
								Materialize.toast('Name updated.',4000);
								$('#modal_confirm').closeModal();	
								App.handleLoadPage("#cmd=index;content=focusEmployee;"+id);
							}
							else{
								Materialize.toast('Cannot process request.',4000);
							}
						});
				    }
				}); 
			}			
			else if(data.prop == "Position"){
				$('#modal_confirm').openModal('show');			
				$("#form_update").validate({
				    rules: {
				        field_Nickname: {required: true,maxlength: 50},
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
						var data = system.ajax('../assets/harmony/Process.php?update-employee',[id,_form]);
						data.done(function(data){
							console.log(data);
							if(data == 1){
								system.clearForm();
								Materialize.toast('Name updated.',4000);
								$('#modal_confirm').closeModal();	
								App.handleLoadPage("#cmd=index;content=focusEmployee;"+id);
							}
							else{
								Materialize.toast('Cannot process request.',4000);
							}
						});
				    }
				}); 
			}			
			else if(data.prop == "Phone"){
				$('#modal_confirm').openModal('show');			
				$("#form_update").validate({
				    rules: {
				        field_Name: {required: true,maxlength: 50},
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
						var data = system.ajax('../assets/harmony/Process.php?update-employee',[id,_form]);
						data.done(function(data){
							console.log(data);
							if(data == 1){
								system.clearForm();
								Materialize.toast('Name updated.',4000);
								$('#modal_confirm').closeModal();	
								App.handleLoadPage("#cmd=index;content=focusEmployee;"+id);
							}
							else{
								Materialize.toast('Cannot process request.',4000);
							}
						});
				    }
				}); 
			}			
			else if(data.prop == "Email"){
				$('#modal_confirm').openModal('show');			
				$("#form_update").validate({
				    rules: {
				        field_Email: {required: true,maxlength: 50,checkEmail:true},
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
						var data = system.ajax('../assets/harmony/Process.php?update-employee',[id,_form]);
						data.done(function(data){
							console.log(data);
							if(data == 1){
								system.clearForm();
								Materialize.toast('Email updated.',4000);
								$('#modal_confirm').closeModal();	
								App.handleLoadPage("#cmd=index;content=focusEmployee;"+id);
							}
							else{
								Materialize.toast('Cannot process request.',4000);
							}
						});
				    }
				}); 
			}
			else if(data.prop == "Address"){
				$('#modal_confirm').openModal('show');			
				$("#form_update").validate({
				    rules: {
				        field_Email: {required: true,maxlength: 50,checkEmail:true},
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
						var data = system.ajax('../assets/harmony/Process.php?update-employee',[id,_form]);
						data.done(function(data){
							console.log(data);
							if(data == 1){
								system.clearForm();
								Materialize.toast('Address updated.',4000);
								$('#modal_confirm').closeModal();	
								App.handleLoadPage("#cmd=index;content=focusEmployee;"+id);
							}
							else{
								Materialize.toast('Cannot process request.',4000);
							}
						});
				    }
				}); 
			}
			else if(data.prop == "Gender"){
				var content = "<h4>Change "+data.prop+"</h4>"+
							  "<form id='form_update' class='formValidate' method='get' action='' novalidate='novalidate'>"+
							  "		<div class='col s12'>"+
							  "		<label for='field_gender' class='active'>Gender: </label>"+
							  "		<select name='field_Gender'>"+
							  "			<option selected>Male</option>"+
							  "			<option>Female</option>"+
							  "		</select>"+
							  "		</div>"+
							  "		<button type='submit' data-cmd='button_proceed' class='waves-effect waves-grey grey lighten-5 blue-text btn-flat modal-action right'>Save</button>"+
							  "		<a class='waves-effect waves-grey grey-text btn-flat modal-action modal-close right'>Cancel</a>"+
							  "</form>";
				$("#modal_confirm .modal-content").html(content);
				$('#modal_confirm').openModal('show');			
			    $("select").material_select();
				$("#form_update").validate({
				    rules: {
				        field_Email: {required: true,maxlength: 50,checkEmail:true},
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
						var data = system.ajax('../assets/harmony/Process.php?update-employee',[id,_form]);
						data.done(function(data){
							console.log(data);
							if(data == 1){
								system.clearForm();
								Materialize.toast('Gender updated.',4000);
								$('#modal_confirm').closeModal();	
								App.handleLoadPage("#cmd=index;content=focusEmployee;"+id);
							}
							else{
								Materialize.toast('Cannot process request.',4000);
							}
						});
				    }
				}); 
			}
			else if(data.prop == "Date of Birth"){
				var content = "<h4>Change "+data.prop+"</h4>"+
							  "<form id='form_update' class='formValidate' method='get' action='' novalidate='novalidate'>"+
							  "		<label for='field_dob'>Date of birth: </label>"+
							  "		<input id='field_dob' type='text' name='field_dob' data-error='.error_dob' value='"+data.value+"'>"+
							  "		<div class='error_dob'></div>"+
							  "		<button type='submit' data-cmd='button_proceed' class='waves-effect waves-grey grey lighten-5 blue-text btn-flat modal-action right'>Save</button>"+
							  "		<a class='waves-effect waves-grey grey-text btn-flat modal-action modal-close right'>Cancel</a>"+
							  "</form>";
				$("#modal_confirm .modal-content").html(content);
				$('#modal_confirm').openModal('show');			
				$("#form_update").validate({
				    rules: {
				        field_dob: {required: true,maxlength: 50,checkDate:true},
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
						var data = system.ajax('../assets/harmony/Process.php?update-employee',[id,_form]);
						data.done(function(data){
							console.log(data);
							if(data == 1){
								system.clearForm();
								Materialize.toast('Date of birth updated.',4000);
								$('#modal_confirm').closeModal();	
								App.handleLoadPage("#cmd=index;content=focusEmployee;"+id);
							}
							else{
								Materialize.toast('Cannot process request.',4000);
							}
						});
				    }
				}); 
			}
		});
	},
	updatePicture:function(){
		$("a[data-cmd='updateEmployeePicture']").on('click',function(){
			var data = $(this).data();
			console.log(data);
			var id = data.node;
			var picture = "../assets/images/profile/avatar.jpg";
			var content = "<h4>Change "+data.prop+"</h4>"+
  							"	<div class='row'>"+
  							"		<div class='col s12'>"+
							"			<div id='profile_picture2' class='ibox-content no-padding border-left-right '></div>"+
							"		</div>"+
							"	</div>";
			$("#modal_confirm .modal-content").html(content);
			$('#modal_confirm').removeClass('modal-fixed-footer');			
			$('#modal_confirm .modal-footer').remove();			
			$('#modal_confirm').openModal('show');			

    		var content =   "<div class='image-crop col s12' style='margin-bottom:5px;'>"+
							"	<img width='100%' src='"+picture+"'>"+
							"</div>"+
							"<div class='btn-group col s12'>"+
							"	<label for='inputImage' class='btn blue btn-floating btn-flat tooltipped' data-tooltip='Load image' data-position='top'>"+
							"		<input type='file' accept='image/*' name='file' id='inputImage' class='hide'>"+
							"		<i class='large mdi-editor-publish'></i>"+
							"	</label>"+
							"	<button class='btn blue btn-floating btn-flat tooltipped' data-cmd='cancel' type='button' data-tooltip='Cancel' data-position='top'>"+
							"		<i class='mdi-navigation-close'></i>"+
							"	</button>"+
							"	<button class='btn blue btn-floating btn-flat hidden tooltipped right' data-cmd='save' type='button' data-tooltip='Save' data-position='top'>"+
							"		<i class='mdi-content-save'></i>"+
							"	</button>"+
							"</div>";
    		$("#profile_picture2").html(content);
			$('.tooltipped').tooltip({delay: 50});

            var $inputImage = $("#inputImage");
            var status = true;
            if(window.FileReader){
                $inputImage.change(function() {
                    var fileReader = new FileReader(),
                            files = this.files,
                            file;

                    file = files[0];

                    if (/^image\/\w+$/.test(file.type)) {
                        fileReader.readAsDataURL(file);
                        fileReader.onload = function () {
                            $inputImage.val("");

				            var $image = $(".image-crop > img")
				            $($image).cropper({
				            	aspectRatio: 1/1,
							    autoCropArea: 0.80,
							    preview: ".avatar-preview",
							    built: function () {
			    		    		$(".cropper-container").attr({'style':'left:0px !important;top:0px;width:100%;height:100%;'});

							    	$("button[data-cmd='save']").removeClass('hidden');
							    	$("button[data-cmd='rotate']").removeClass('hidden');
							    	
						            $("button[data-cmd='save']").click(function(){									    	
								    	$(this).html("<i class='mdi-action-cached icon-spin'></i>").addClass('disabled');
								    	if(status){
											var data = system.ajax('../assets/harmony/Process.php?update-employeePicture',[id,$image.cropper("getDataURL")]); // 
											data.done(function(data){
												Materialize.toast('Picture has been changed.',4000);
												system.clearForm();
												App.handleLoadPage("#cmd=index;content=focusEmployee;"+id);
												$('#modal_confirm').closeModal();	
											});
								    		status = false;
								    	}
						            });
							    }
							});

                            $image.cropper("reset", true).cropper("replace", this.result);

				            $("button[data-cmd='rotate']").click(function(){
				            	var data = $(this).data('option');
					        	$image.cropper('rotate', data);
				            });

                        };
                    }
                    else{
                        showMessage("Please choose an image file.");
                    }
                });
            }
            else{
                $inputImage.addClass("hide");
            }	            
            $("button[data-cmd='cancel']").click(function(){
				$('#modal_confirm').closeModal();	
            });
		});
	},
	deactivate:function(){
		$("a[data-cmd='deactivateEmployee']").on('click',function(){
			var id = $(this).data('node');
			var content = "Arey you sure DEACTIVATE "+$(this).data('name')+"'s account?<br/>"+
						  "<label for='field_description'>Remarks: </label>"+
						  "<textarea class='materialize-textarea' data-field='field_description' name='field_description'></textarea>";
			$("#modal_confirm .modal-content").html(content);
			$("#modal_confirm .modal-footer").html("<a class='waves-effect waves-red red white-text btn-flat modal-action modal-close'>Cancel</a>"+
												   "<a data-cmd='button_proceed' class='waves-effect waves-grey btn-flat modal-action'>Proceed</a>");
			$('#modal_confirm').openModal('show');			

			$("a[data-cmd='button_proceed']").on("click",function(){
				var remarks = $("textarea[data-field='field_description']").val();
				if(remarks.length == 0){
						Materialize.toast('Remarks is required.',4000);
				}
				else if(remarks.length > 800){
						Materialize.toast('Statement is too long.',4000);
				}
				else{
					var data = system.ajax('../assets/harmony/Process.php?deactivate-employee',[id,remarks]);
					data.done(function(data){
						console.log(data);
						if(data == 1){
							Materialize.toast('Account deactivaded.',4000);
							system.clearForm();
							App.handleLoadPage("#cmd=index;content=focusEmployee");
							$('#modal_confirm').closeModal();	
						}
						else{
							Materialize.toast('Cannot process request.',4000);
						}
					});
				}
			});
		})
	},
	activate:function(){
		$("a[data-cmd='activateEmployee']").on('click',function(){
			var id = $(this).data('node');
			$("#modal_confirm .modal-content").html("Arey you sure ACTIVATE "+$(this).data('name')+"'s account?");
			$("#modal_confirm .modal-footer").html("<a class='waves-effect waves-red red white-text btn-flat modal-action modal-close'>Cancel</a>"+
												   "<a data-cmd='button_proceed' class='waves-effect waves-grey btn-flat modal-action modal-close'>Proceed</a>");
			$('#modal_confirm').openModal('show');			

			$("a[data-cmd='button_proceed']").on("click",function(){
				var data = system.ajax('../assets/harmony/Process.php?activate-employee',id);
				data.done(function(data){
					if(data == 1){
						Materialize.toast('Account activaded.',4000);
						system.clearForm();
						App.handleLoadPage("#cmd=index;content=focusClient");
						$('#modal_confirm').closeModal();	
					}
					else{
						Materialize.toast('Cannot process request.',4000);
					}
				});
			});
		})
	},
	getPoints:function(id){
		var data = system.ajax('../assets/harmony/Process.php?get-employeePointsAdmin',id);
		data.done(function(data){
			data = JSON.parse(data);
			data = (data.length<=0)?0:data[0][2];
			$("#employees h2 span.actual-points").html(data)
		});
	},
	getPointsActivity:function(id){
		var content = "";
		var data = system.ajax('../assets/harmony/Process.php?get-employeePointsActivityAdmin',id);
		data.done(function(data){
			data = JSON.parse(data);
			if(data.length<=0){
				$("#pointsActivity").html("<h4 class='center'>No points activity</h4>");
			}
			else{
				$.each(data,function(i,v){
					content += "<tr>"+
								"	<td width='1px'>"+(i+1)+". </td>"+
								"	<td>"+v[1]+"</td>"+
								"	<td>"+v[2]+"</td>"+
								"	<td>"+v[5]+"</td>"+
								"	<td>"+v[3]+"</td>"+
								"</tr>";
				})					
				$("#pointsActivity table tbody").html(content);

				var table = $('#pointsActivity table').DataTable({
			        "order": [[ 0, 'asc' ]],
			        "drawCallback": function ( settings ) {
			            var api = this.api();
			            var rows = api.rows( {page:'current'} ).nodes();
			            var last=null;
			        }
			    });
			}
		});
	},
	getBuysActivity:function(id){
		var content = "";
		var data = system.ajax('../assets/harmony/Process.php?get-employeeBuysActivityAdmin',id);
		data.done(function(data){
			data = JSON.parse(data);
			if(data.length<=0){
				$("#buyingActivity").html("<h4 class='center'>No buying activity</h4>");
			}
			else{
				$.each(data,function(i,v){
					content += "<tr>"+
								"	<td width='1px'>"+(i+1)+". </td>"+
								"	<td width='20%'>"+v[0].substring(0,6)+"...</td>"+
								"	<td width='30%'>"+v[2]+"</td>"+
								"	<td width='30%'>"+v[3]+"</td>"+
								"	<td width='30%'>For Delivery</td>"+
								"	<td width='9%'>"+
								"		<a data-cmd='showOrder' data-node='"+v[0]+"' data-meta='"+JSON.stringify([v[0],v[2],v[3],"For Delivery"])+"' class='tooltipped btn-floating waves-effect black-text no-shadow grey lighten-5 right' data-position='left' data-delay='0' data-tooltip='Show details'>"+
								"			<i class='mdi-navigation-more-vert right black-text'></i>"+
								"		</a>"+
								"	</td>"+
								"</tr>";
				})					
				$("#buyingActivity table tbody").html(content);

				var table = $('#buyingActivity table').DataTable({
			        "order": [[ 0, 'asc' ]],
			        "drawCallback": function ( settings ) {
			            var api = this.api();
			            var rows = api.rows( {page:'current'} ).nodes();
			            var last=null;
			        }
			    });

				$("a[data-cmd='showOrder']").on('click',function(){
					var data = $(this).data();
					var content = "";
					console.log(data);
					$("#modal_popUp table").remove();

					var subTotal = 0;
					var orders = system.ajax('../assets/harmony/Process.php?get-orders',data.node);
					orders.done(function(orders){
						var orders = JSON.parse(orders);
						content = "<thead><tr>"+
								  "<th class='center'></th>"+						
								  "<th class='center'>Product</th>"+						
								  "<th class='center'>Quantity</th>"+						
								  "<th class='center'>Price</th>"+						
								  "<th class='center'>Total</th>"+						
								  "</tr></thead>";						

						$.each(orders,function(i,v){
							var product = ((v[17] == "") || (v[17] == null))?"default.png":v[17];
							subTotal = subTotal + (v[10]*v[1]);
							content += "<tr>"+
									  "<td class='center'><img src='../assets/images/products/"+product+"' alt='Thumbnail' class='valign profile-image' width='80px'></td>"+						
									  "<td class='center'>"+v[8]+"</td>"+						
									  "<td class='center'>"+v[1]+"</td>"+						
									  "<td class='center'>"+v[10]+"</td>"+						
									  "<td class='center'>"+(v[10]*v[1])+"</td>"+						
									  "</tr>";						
						})
						$('#modal_popUp .modal-content').html('<strong>Order ID:</strong> '+data.meta[0]+'<br/><strong>Order Date:</strong> '+data.meta[1]+'<br/>\n<strong>Order Delivered:</strong> '+data.meta[2]+'<br/>\n<strong>Status:</strong> '+data.meta[3]+'');			
						$("#modal_popUp .modal-footer").before("<table class='striped bordered highlight'>"+content+"<tr><td colspan='4'><strong class='right' >Total</strong></td><td class='center'>"+subTotal+"</td></tr></table>");
						$("#modal_popUp .modal-footer").html("<a class='waves-effect waves-grey grey-text btn-flat modal-action modal-close right'>Close</a>");
						$('#modal_popUp').openModal('show');			

						console.log(orders);
					});
				});
			}
		});
	},
	upload:function(_id){
        var $inputImage = $("#field_file"), status = true, res = "";
        if(window.FileReader){
            $inputImage.on('change',function(){
            	$("#field_file").addClass("disabled");
                var files = this.files, file = files[0].name.split('.');
                if((file[1] == "csv") || (file[1] == "xlsx")){ // 
					var data = system.xml("pages.xml");
					$(data.responseText).find("tableEmployeePreview").each(function(i,content){
						$("#field_file").parse({
							config: {
								complete: function(results, file) {
									$("#display_importLoading").removeClass('zoomOut').html("");
							    	system.preloader("#display_importLoading");
									system.loading(true);
									var data = [],count = 0, search = [], search2 = [];
									var employeeList = [];

									employeeList = system.ajax('../assets/harmony/Process.php?get-employeeByID',_id);
									employeeList = JSON.parse(employeeList.responseText);
									confirmList = system.ajax('../assets/harmony/Process.php?get-confirmByID',_id);
									confirmList = JSON.parse(confirmList.responseText);

									if((results['data'][0].length == 6) && (results['data'][0][5] == 'EMAIL') && (results['data'].length<=2000)){
										Materialize.toast("Removing duplicated entries.",2000);
										setTimeout(function(){
											$("#importPreview").html(content);
						                	$("#display_import").removeClass('hidden');

											for(var x=1;x<(results['data'].length-1);x++){
												if(results['data'][x][0] != ""){
													search = system.searchJSON(employeeList,1,results['data'][x][0]);
													search2 = system.searchJSON(confirmList,1,results['data'][x][0]);

													if((search.length==0) && (search2.length==0))												
														data.push(results['data'][x]);
												}
											}

							                var table = $('#importPreview table').DataTable({
							                    data: data,
										        "order": [[ 0, 'asc' ]],
										        deferRender:    true,
										        iDisplayLength: 100,
												sScrollY:        "300px",
												sScrollX:        "100%",
												bScrollCollapse: true,
							                    columns: [
							                        {data: "",
							                            render: function ( data, type, full ){
							                            	count++;
							                                return count+".";
							                            }
							                        },
							                        {data: "",
							                            render: function ( data, type, full ){
							                                return (full[0]!="")?"<span>"+full[0]+"</span>":null;
							                            }
							                        },
							                        {data: "",
							                            render: function ( data, type, full ){
							                                return (full[2]!="")?"<span>"+full[2]+"</span>":null;
							                            }
							                        },
							                        {data: "",
							                            render: function ( data, type, full ){
							                                return (full[1]!="")?"<span>"+full[1]+"</span>":null;
							                            }
							                        },
							                        {data: "",
							                            render: function ( data, type, full ){
							                                return (full[3]!="")?"<span>"+full[3]+"</span>":null;
							                            }
							                        },
							                        {data: "",
							                            render: function ( data, type, full ){
							                                return (full[4]!="")?"<span>"+full[4]+"</span>":null;
							                            }
							                        },
							                        {data: "",
							                            render: function ( data, type, full ){
							                                return (full[5]!="")?"<span>"+full[5]+"</span>":null;
							                            }
							                        },
							                    ],
							                });

											table.on( 'order.dt search.dt', function () {
											    table.column(0, {search:'applied', order:'applied'}).nodes().each( function (cell, i) {
											        cell.innerHTML = i+1;
											    } );
											} ).draw();


											if(data.length>0){
												employee.saveUpload(_id,data);
											}
											else{
												$(".display_loading").html("<span class='red-text'>All data are already in the system.</span>");
											}

						                	$("#display_import").removeClass('hidden');
											$("#display_importLoading").addClass('animated zoomOut').html("");
										},1000)
									}
									else{
										Materialize.toast("It seems that you are uploading a data that is not validated or<br/> either of the following:<br/>"+
											"&bull; Your are uploading too many data; <br/>&bull; You are uploading unformatted CSV file.",
											10000);
					                	$("#display_import").addClass('hidden');
										$("#display_importLoading").addClass('animated zoomOut').html("");
									}
								}
							},
							before: function(file, inputElem){
								$("#display_excelFile").html(file.name);
							},
							error: function(err, file, inputElem, reason){
								Materialize.toast("MS Excel file is corrupted.",4000);
			                	$("#display_import").addClass('hidden');
								$("#display_importLoading").html("");
							},
						});
					});
                }
                else{
                	$("#display_import").addClass('hidden');
					$("#display_excelFile").html("");
					Materialize.toast("MS Excel file is not valid. Try a CSV file.",4000);
                }
            });
        }
        else{
            $inputImage.addClass("hide");
        }	 			
	},
	saveUpload:function(_id,_data){
        $("#save_import").on("click",function(){
			Materialize.toast('Importing...',4000);
        	$(this).addClass('disabled');
			var data = system.xml("pages.xml");
			$(data.responseText).find("loader2").each(function(i,content){
				$(".display_loading").html(content);
	        	setTimeout(function(){
	        		_data = ($.type(_data) == "array")?JSON.stringify(_data):_data;
					var data = system.ajax('../assets/harmony/Process.php?set-BulkEmployee',[_data,_id]);
					data.done(function(data){
						console.log(data);
						if(data == 1){
							Materialize.toast('Saved.',4000);
							App.handleLoadPage("#cmd=index;content=focusClient;"+_id);
						}
						else{
							Materialize.toast('Cannot process request.',4000);
							$(".display_loading").html("");
						}
					});
	        	},1000);
			});
        });
	},
	confirm:function(){
		console.log('xx');
	}
}

points = {
	add:function(id){
		$("#add_points").on("click",function(){
			console.log(id);
			var data = system.xml("pages.xml");
			$(data.responseText).find("addPoints").each(function(i,content){
				$("#modal_popUp .modal-content").html(content);
				$('#modal_popUp').openModal('show');	

				$("#form_addPoints").validate({
				    rules: {
				        field_points: {required: true,maxlength: 3,checkPositiveNumber:true},
				        field_remarks: {required: true,maxlength: 500},
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
						var data = system.ajax('../assets/harmony/Process.php?set-addPointsAdmin',[_form,id]);
						data.done(function(data){
							if(data == 1){
								Materialize.toast('Points added.',1000,'',function(){
									location.reload(true);
								});
							}
							else{
								Materialize.toast('Cannot process request.',4000);
							}
						});
				    }
				});
			});
		});
	},
	upload:function(_id){
        var $inputImage = $("#field_file"), status = true, res = "";
        if(window.FileReader){
            $inputImage.on('change',function(){
            	$("#field_file").addClass("disabled");
                var files = this.files, file = files[0].name.split('.');
                if((file[1] == "csv") || (file[1] == "xlsx")){ // 
					var data = system.xml("pages.xml");
					$(data.responseText).find("tablePointsPreview").each(function(i,content){
						$("#field_file").parse({
							config: {
								complete: function(results, file) {
									$("#display_importLoading").removeClass('zoomOut').html("");
							    	system.preloader("#display_importLoading");
									system.loading(true);
									var data = [],count = 0, search = [];
									var employeeList = [];

									employeeList = system.ajax('../assets/harmony/Process.php?get-employeeByID',_id);
									employeeList = JSON.parse(employeeList.responseText);

									if((employeeList.length>0)&& ((results['data'][0].length == 4) && (results['data'][0][3] == 'Points')) && (results['data'].length<=2000)){
										Materialize.toast("Validating data. This may take a minute.",2000);
										setTimeout(function(){
											$("#importPreview").html(content);
						                	$("#display_import").removeClass('hidden');

											for(var x=1;x<(results['data'].length-1);x++){
												if(results['data'][x][0] != ""){
													search = system.searchJSON(employeeList,1,results['data'][x][0]);
													if(search.length==1)												
														data.push(results['data'][x]);
												}
											}

							                var table = $('#importPreview table').DataTable({
							                    data: data,
										        "order": [[ 0, 'asc' ]],
										        deferRender:    true,
										        iDisplayLength: 100,
												sScrollY:        "300px",
												sScrollX:        "100%",
												bScrollCollapse: true,
							                    columns: [
							                        {data: "",
							                            render: function ( data, type, full ){
							                            	count++;
							                                return count+".";
							                            }
							                        },
							                        {data: "",
							                            render: function ( data, type, full ){
							                                return (full[0]!="")?"<span>"+full[0]+"</span>":null;
							                            }
							                        },
							                        {data: "",
							                            render: function ( data, type, full ){
							                                return (full[2]!="")?"<span>"+full[1]+"</span>":null;
							                            }
							                        },
							                        {data: "",
							                            render: function ( data, type, full ){
							                                return (full[1]!="")?"<span>"+full[2]+"</span>":null;
							                            }
							                        },
							                        {data: "",
							                            render: function ( data, type, full ){
							                                return (full[3]!="")?"<span>"+full[3]+"</span>":null;
							                            }
							                        }
							                    ]
							                });

											table.on( 'order.dt search.dt', function () {
											    table.column(0, {search:'applied', order:'applied'}).nodes().each( function (cell, i) {
											        cell.innerHTML = i+1;
											    } );
											} ).draw();

											if(data.length>0){
												points.saveUpload(_id,data);
											}
											else{
												$(".display_loading").html("<span class='red-text'>All data are already in the system.</span>");
											}

						                	$("#display_import").removeClass('hidden');
											$("#display_importLoading").addClass('animated zoomOut').html("");
										},1000)
									}
									else{
										Materialize.toast("It seems that you are uploading a data that is not validated or<br/> either of the following:<br/>"+
											"&bull; No employees yet; <br/>&bull; Your are uploading too many data; <br/>&bull; You are uploading unformatted CSV file.",
											10000);
					                	$("#display_import").addClass('hidden');
										$("#display_importLoading").addClass('animated zoomOut').html("");
									}
								}
							},
							before: function(file, inputElem){
								$("#display_excelFile").html(file.name);
							},
							error: function(err, file, inputElem, reason){
								Materialize.toast("MS Excel file is corrupted.",4000);
			                	$("#display_import").addClass('hidden');
								$("#display_importLoading").html("");
							},
						});
					});
                }
                else{
                	$("#display_import").addClass('hidden');
					$("#display_excelFile").html("");
					Materialize.toast("MS Excel file is not valid. Try a CSV file.",4000);
                }
            });
        }
        else{
            $inputImage.addClass("hide");
        }	 			
	},
	saveUpload:function(_id,_data){	
        $("#save_import").on("click",function(){
			Materialize.toast('Importing...',1000);
        	$(this).addClass('disabled');
			var data = system.xml("pages.xml");
			$(data.responseText).find("loader2").each(function(i,content){
				$(".display_loading").html(content);
	        	setTimeout(function(){
	        		_data = ($.type(_data) == "array")?JSON.stringify(_data):_data;
					var data = system.ajax('../assets/harmony/Process.php?set-uploadPointsAdmin',[_data,_id]);
					data.done(function(data){
						console.log(data);
						if(data == 1){
							Materialize.toast('Saved.',4000);
							App.handleLoadPage("#cmd=index;content=focusClient;"+_id);
						}
						else{
							Materialize.toast('Cannot process request.',4000);
							$(".display_loading").html("");
						}
					});
	        	},1000);
			});
        });
	}
}

product = {
	ini:function(){
		this.add();
		this.list();
	},
	get:function(){
		var data = system.html('../assets/harmony/Process.php?get-products');
		return data;
	},
	display:function(id){
		var content = "", image = "", productImage = '',chips = [],chipsContent = "";
		var data = system.ajax('../assets/harmony/Process.php?get-productDetails',id);
		data.done(function(data){
			data = JSON.parse(data);

			productImage = ((data[0][10] == "") || (data[0][10] == null))?"default.png":data[0][10];
			if(data[0][4].length>0){
				if(data[0][4][0] == "["){
					chips = JSON.parse(data[0][4]);
					$.each(chips,function(i,v){
						chipsContent += "<div class='chip'>"+v+"</div>";
					});
				}
				else{
					chipsContent = data[0][4];
				}
			}
			else{
				chipsContent = "No category";				
			}

			image = "	<div class='card-profile-image'>"+
					"   	<img class='activator' width='100%' draggable='false' src='../assets/images/products/"+productImage+"' alt='product-img'>"+
					"   	<a data-cmd='updateProductPicture' data-value='"+productImage+"' data-node='"+data[0][0]+"' data-prop='Picture' class='btn waves-effect white-text no-shadow black' style='font-size: 10px;z-index: 1;padding: 0 12px;top: -36px;'>Change</a>"+
					"	</div>";
			content = "<ul id='task-card' class='collection with-header'>"+
						"    <li class='collection-header'>"+
						"		<div class='row'>"+
						"			<div class='col s10'>"+
						"    			<strong>Product:</strong>"+data[0][1]+
						"			</div>"+
						"			<div class='col s2'>"+
						"				<a data-cmd='updateProduct' data-value='"+data[0][1]+"' data-node='"+data[0][0]+"' data-prop='Product' class='right tooltipped btn-floating waves-effect black-text no-shadow white right' data-position='left' data-delay='0' data-tooltip='Update'>"+
						"					<i class='mdi-editor-mode-edit right black-text'></i>"+
						"				</a>"+
						"			</div>"+
						"		</div>"+
						"    </li>"+
						"    <li class='collection-header'>"+
						"		<div class='row'>"+
						"			<div class='col s10'>"+
						"    			<strong>Price:</strong>"+data[0][3]+
						"			</div>"+
						"			<div class='col s2'>"+
						"				<a data-cmd='updateProduct' data-value='"+data[0][3]+"' data-node='"+data[0][0]+"' data-prop='Price' class='right tooltipped btn-floating waves-effect black-text no-shadow white right' data-position='left' data-delay='0' data-tooltip='Update'>"+
						"					<i class='mdi-editor-mode-edit right black-text'></i>"+
						"				</a>"+
						"			</div>"+
						"		</div>"+
						"    </li>"+
						"    <li class='collection-header'>"+
						"		<div class='row'>"+
						"			<div class='col s10'>"+
						"    			<strong>SKU:</strong>"+data[0][2]+
						"			</div>"+
						"			<div class='col s2'>"+
						"				<a data-cmd='updateProduct' data-value='"+data[0][2]+"' data-node='"+data[0][0]+"' data-prop='SKU' class='right tooltipped btn-floating waves-effect black-text no-shadow white right' data-position='left' data-delay='0' data-tooltip='Update'>"+
						"					<i class='mdi-editor-mode-edit right black-text'></i>"+
						"				</a>"+
						"			</div>"+
						"		</div>"+
						"    </li>"+
						"    <li class='collection-header'>"+
						"		<div class='row'>"+
						"			<div class='col s10'>"+
						"    			<strong>Categories:</strong>"+chipsContent+
						"			</div>"+
						"			<div class='col s2'>"+
						"				<a data-cmd='updateProduct' data-value='"+data[0][4]+"' data-node='"+data[0][0]+"' data-prop='Categories' class='right tooltipped btn-floating waves-effect black-text no-shadow white right' data-position='left' data-delay='0' data-tooltip='Update'>"+
						"					<i class='mdi-editor-mode-edit right black-text'></i>"+
						"				</a>"+
						"			</div>"+
						"		</div>"+
						"    </li>"+
						"    <li class='collection-header'>"+
						"		<div class='row'>"+
						"			<div class='col s10'>"+
						"    			<strong>Description:</strong>"+data[0][5]+
						"			</div>"+
						"			<div class='col s2'>"+
						"				<a data-cmd='updateProduct' data-value='"+data[0][5]+"' data-node='"+data[0][0]+"' data-prop='Description' class='right tooltipped btn-floating waves-effect black-text no-shadow white right' data-position='left' data-delay='0' data-tooltip='Update'>"+
						"					<i class='mdi-editor-mode-edit right black-text'></i>"+
						"				</a>"+
						"			</div>"+
						"		</div>"+
						"    </li>"+
						"    <li class='collection-header'>"+
						"		<div class='row'>"+
						"			<div class='col s10'>"+
						"    			<strong>Status:</strong>"+data[0][6]+
						"			</div>"+
						"			<div class='col s2'>"+
						"				<a data-cmd='updateProduct' data-value='"+data[0][6]+"' data-node='"+data[0][0]+"' data-prop='Status' class='right tooltipped btn-floating waves-effect black-text no-shadow white right' data-position='left' data-delay='0' data-tooltip='Update'>"+
						"					<i class='mdi-editor-mode-edit right black-text'></i>"+
						"				</a>"+
						"			</div>"+
						"		</div>"+
						"    </li>"+
						"    <li class='collection-header'>"+
						"		<div class='row'>"+
						"			<div class='col s10'>"+
						"    			<strong>Date added:</strong>"+data[0][7]+
						"			</div>"+
						"		</div>"+
						"    </li>"+
						"</ul>";
			$("#product").html("<div class='col s12 m3 l3' style='padding-top: 0.5rem;'>"+image+"</div><div class='col s12 m9 l9'>"+content+"</div>");
			
			$("a[data-cmd='updateProduct']").on('click',function(){
				var data = $(this).data();
				data = [data.node,data.prop,data.value];
				product.update(id,data);
			})
			$("a[data-cmd='updateProductPicture']").on('click',function(){
				var data = $(this).data();
				data = [data.node,data.prop,data.value];
				product.updatePicture(id,data);
			})
		});
	},
	update:function(id,data){
		console.log(data);
		if(data[1] == "Product"){
			var content = "<h4>Change "+data[1]+"</h4>"+
						  "<form id='form_update' class='formValidate' method='get' action='' novalidate='novalidate'>"+
						  "		<div class='col s12'>"+
						  "			<label for='field_product'>Product Name: </label>"+
						  "			<input id='field_product' type='text' name='field_product' data-error='.error_product' value='"+data[2]+"'>"+
						  "			<div class='error_product'></div>"+
						  "		</div>"+
						  "		<button type='submit' data-cmd='button_proceed' class='waves-effect waves-grey grey lighten-5 blue-text btn-flat modal-action right'>Save</button>"+
						  "		<a class='waves-effect waves-grey grey-text btn-flat modal-action modal-close right'>Cancel</a>"+
						  "</form>";
			$("#modal_confirm .modal-content").html(content);
			$('#modal_confirm').openModal('show');			
			$("#form_update").validate({
			    rules: {
			        field_product: {required: true,maxlength: 50},
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
					if(data[2] == _form[0]['value']){
						Materialize.toast('You did not even change the product name.',4000);
					}
					else{
						var ajax = system.ajax('../assets/harmony/Process.php?update-product',[id,_form]);
						ajax.done(function(ajax){
							console.log(ajax);
							if(ajax == 1){
								system.clearForm();
								Materialize.toast('Product updated.',4000);
								$('#modal_confirm').closeModal();	
								App.handleLoadPage("#cmd=index;content=focusProduct;"+id);
							}
							else{
								Materialize.toast('Cannot process request.',4000);
							}
						});
					}
			    }
			}); 
		}	
		else if(data[1] == "Price"){
			var content = "<h4>Change "+data[1]+"</h4>"+
						  "<form id='form_update' class='formValidate' method='get' action='' novalidate='novalidate'>"+
						  "		<div class='col s12'>"+
						  "			<label for='field_price'>Price: </label>"+
						  "			<input id='field_price' type='number' name='field_price' data-error='.error_price' value='"+data[2]+"'>"+
						  "			<div class='error_price'></div>"+
						  "		</div>"+
						  "		<button type='submit' data-cmd='button_proceed' class='waves-effect waves-grey grey lighten-5 blue-text btn-flat modal-action right'>Save</button>"+
						  "		<a class='waves-effect waves-grey grey-text btn-flat modal-action modal-close right'>Cancel</a>"+
						  "</form>";
			$("#modal_confirm .modal-content").html(content);
			$('#modal_confirm').openModal('show');			
			$("#form_update").validate({
			    rules: {
			        field_price: {required: true,maxlength: 50,checkCurrency:true},
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
					if(data[2] == _form[0]['value']){
						Materialize.toast('You did not even change the product name.',4000);
					}
					else{
						var ajax = system.ajax('../assets/harmony/Process.php?update-product',[id,_form]);
						ajax.done(function(ajax){
							if(ajax == 1){
								system.clearForm();
								Materialize.toast('Product updated.',4000);
								$('#modal_confirm').closeModal();	
								App.handleLoadPage("#cmd=index;content=focusProduct;"+id);
							}
							else{
								Materialize.toast('Cannot process request.',4000);
							}
						});
					}
			    }
			}); 
		}			
		else if(data[1] == "SKU"){
			var content = "<h4>Change "+data[1]+"</h4>"+
						  "<form id='form_update' class='formValidate' method='get' action='' novalidate='novalidate'>"+
						  "		<div class='col s12'>"+
						  "			<label for='field_qty'>SKU: </label>"+
						  "			<input id='field_qty' type='number' name='field_qty' data-error='.error_qty' value='"+data[2]+"'>"+
						  "			<div class='error_qty'></div>"+
						  "		</div>"+
						  "		<button type='submit' data-cmd='button_proceed' class='waves-effect waves-grey grey lighten-5 blue-text btn-flat modal-action right'>Save</button>"+
						  "		<a class='waves-effect waves-grey grey-text btn-flat modal-action modal-close right'>Cancel</a>"+
						  "</form>";
			$("#modal_confirm .modal-content").html(content);
			$('#modal_confirm').openModal('show');			
			$("#form_update").validate({
			    rules: {
			        field_qty: {required: true,maxlength: 50,checkPositiveNumber:true},
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
					if(data[2] == _form[0]['value']){
						Materialize.toast('You did not even change the product name.',4000);
					}
					else{
						var ajax = system.ajax('../assets/harmony/Process.php?update-product',[id,_form]);
						ajax.done(function(ajax){
							console.log(ajax);
							if(ajax == 1){
								system.clearForm();
								Materialize.toast('Product updated.',4000);
								$('#modal_confirm').closeModal();	
								App.handleLoadPage("#cmd=index;content=focusProduct;"+id);
							}
							else{
								Materialize.toast('Cannot process request.',4000);
							}
						});
					}
			    }
			}); 
		}			
		else if(data[1] == "Categories"){
			var content = "<h4>Change "+data[1]+"</h4>"+
						  "<form id='form_update' class='formValidate' method='get' action='' novalidate='novalidate'>"+
						  "		<div class='col s12'>"+
						  "			<label for='field_categories'>Price: </label>"+
						  "			<input id='field_categories' type='text' length='100' name='field_categories' data-error='.error_categories' value='"+data[2]+"'>"+
						  "			<div class='error_categories'></div>"+
						  "		</div>"+
						  "		<button type='submit' data-cmd='button_proceed' class='waves-effect waves-grey grey lighten-5 blue-text btn-flat modal-action right'>Save</button>"+
						  "		<a class='waves-effect waves-grey grey-text btn-flat modal-action modal-close right'>Cancel</a>"+
						  "</form>";
			$("#modal_confirm .modal-content").html(content);
			$('#modal_confirm').openModal('show');		

			$('input#field_categories').materialtags();
		    $('.chip i').removeClass('material-icons').addClass('mdi-navigation-close').html("");
			$('input#field_categories').on('itemAdded', function(event) {
			    $('.chip i').removeClass('material-icons').addClass('mdi-navigation-close').html("");
			});

			$("#form_update").validate({
			    rules: {
			        field_categories: {required: true,maxlength: 50,checkCurrency:true},
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
					$('input.n-tag').val("");
					var _form = $('input#field_categories').materialtags('items');
					if((_form.length == 1) && (data[2] == _form[0])){
						Materialize.toast('You did not even change the product name.',4000);
					}
					else{
						var ajax = system.ajax('../assets/harmony/Process.php?update-product',[id,[{'name':'field_categories','value':JSON.stringify(_form)}]]);
						ajax.done(function(ajax){
							console.log(ajax);
							if(ajax == 1){
								system.clearForm();
								Materialize.toast('Product updated.',4000);
								$('#modal_confirm').closeModal();	
								App.handleLoadPage("#cmd=index;content=focusProduct;"+id);
							}
							else{
								Materialize.toast('Cannot process request.',4000);
							}
						});
					}
			    }
			}); 
		}			
		else if(data[1] == "Description"){
			var content = "<h4>Change "+data[1]+"</h4>"+
						  "<form id='form_update' class='formValidate' method='get' action='' novalidate='novalidate'>"+
						  "		<div class='row'>"+
						  "			<div class='col s12'>"+
						  "				<label for='field_price'>Price: </label>"+
						  "				<textarea class='materialize-textarea' id='field_description' data-field='field_description' data-error='.error_description' name='field_description'>"+data[2]+"</textarea>"+
						  "				<div class='error_description'></div>"+
						  "			</div>"+
						  "		</div>"+
						  "		<button type='submit' data-cmd='button_proceed' class='waves-effect waves-grey grey lighten-5 blue-text btn-flat modal-action right'>Save</button>"+
						  "		<a class='waves-effect waves-grey grey-text btn-flat modal-action modal-close right'>Cancel</a>"+
						  "</form>";
			$("#modal_popUp .modal-content").html(content);
			$('#modal_popUp').openModal('show');

			system.froala("#field_description");

			$("#form_update").validate({
			    rules: {
			        field_description: {required: true,maxlength: 1000},
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
					if(data[2] == _form[0]['value']){
						Materialize.toast('You did not even change the product name.',4000);
					}
					else{
						var ajax = system.ajax('../assets/harmony/Process.php?update-product',[id,_form]);
						ajax.done(function(ajax){
							console.log(ajax);
							if(ajax == 1){
								system.clearForm();
								Materialize.toast('Description is updated.',4000);
								$('#modal_popUp').closeModal();	
								App.handleLoadPage("#cmd=index;content=focusProduct;"+id);
							}
							else{
								Materialize.toast('Cannot process request.',4000);
							}
						});
					}
			    }
			}); 
		}			
		else if(data[1] == "Status"){
			var content = "<h4>Change Status</h4>"+
						  "<form id='form_update' class='formValidate' method='get' action='' novalidate='novalidate'>"+
						  "		<div class='col s12'>"+
						  "		<label for='field_status' class='active'>Gender: </label>"+
						  "		<select name='field_status'>"+
						  "			<option selected>Published</option>"+
						  "			<option>Pending</option>"+
						  "		</select>"+
						  "		</div>"+
						  "		<button type='submit' data-cmd='button_proceed' class='waves-effect waves-grey grey lighten-5 blue-text btn-flat modal-action right'>Save</button>"+
						  "		<a class='waves-effect waves-grey grey-text btn-flat modal-action modal-close right'>Cancel</a>"+
						  "</form>";
			$("#modal_confirm .modal-content").html(content);
			$('#modal_confirm').openModal('show');			
		    $("select").material_select();
			$("#form_update").validate({
			    rules: {
			        field_status: {required: true,maxlength: 50},
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
					var ajax = system.ajax('../assets/harmony/Process.php?update-product',[id,_form]);
					ajax.done(function(ajax){
						console.log(ajax);
						if(ajax == 1){
							system.clearForm();
							Materialize.toast('status is updated.',4000);
							$('#modal_confirm').closeModal();	
							App.handleLoadPage("#cmd=index;content=focusProduct;"+id);
						}
						else{
							Materialize.toast('Cannot process request.',4000);
						}
					});
			    }
			}); 
		}
	},
	updatePicture:function(id,data){
		var picture = "../assets/images/products/"+data[2];
		var content = "<h4>Change product image</h4>"+
						"	<div class='row'>"+
						"		<div class='col s12'>"+
						"			<div id='profile_picture2' class='ibox-content no-padding border-left-right '></div>"+
						"		</div>"+
						"	</div>";
		$("#modal_confirm .modal-content").html(content);
		$('#modal_confirm .modal-footer').html("");			
		$('#modal_confirm').openModal('show');			

		var content =   "<div class='image-crop col s12' style='margin-bottom:5px;'>"+
						"	<img width='100%' src='"+picture+"'>"+
						"</div>"+
						"<div class='btn-group col s12'>"+
						"	<label for='inputImage' class='btn blue btn-floating btn-flat tooltipped' data-tooltip='Load image' data-position='top'>"+
						"		<input type='file' accept='image/*' name='file' id='inputImage' class='hide'>"+
						"		<i class='large mdi-editor-publish'></i>"+
						"	</label>"+
						"	<button class='btn blue btn-floating btn-flat tooltipped' data-cmd='cancel' type='button' data-tooltip='Cancel' data-position='top'>"+
						"		<i class='mdi-navigation-close'></i>"+
						"	</button>"+
						"	<button class='btn blue btn-floating btn-flat hidden tooltipped right' data-cmd='save' type='button' data-tooltip='Save' data-position='top'>"+
						"		<i class='mdi-content-save'></i>"+
						"	</button>"+
						"</div>";
		$("#profile_picture2").html(content);
		$('.tooltipped').tooltip({delay: 50});

        var $inputImage = $("#inputImage");
        var status = true;
        if(window.FileReader){
            $inputImage.change(function() {
                var fileReader = new FileReader(),
                        files = this.files,
                        file;

                file = files[0];

                if (/^image\/\w+$/.test(file.type)) {
                    fileReader.readAsDataURL(file);
                    fileReader.onload = function () {
                        $inputImage.val("");

			            var $image = $(".image-crop > img")
			            $($image).cropper({
			            	aspectRatio: 2/3,
						    autoCropArea: 0.80,
						    preview: ".avatar-preview",
						    built: function () {
		    		    		$(".cropper-container").attr({'style':'left:0px !important;top:0px;width:100%;height:100%;'});

						    	$("button[data-cmd='save']").removeClass('hidden');
						    	$("button[data-cmd='rotate']").removeClass('hidden');
						    	
					            $("button[data-cmd='save']").click(function(){									    	
							    	$(this).html("<i class='mdi-action-cached icon-spin'></i>").addClass('disabled');
							    	if(status){
										var ajax = system.ajax('../assets/harmony/Process.php?update-productPicture',[id,$image.cropper("getDataURL")]);
										ajax.done(function(ajax){
											console.log(ajax);
											if(ajax == 1){
												Materialize.toast('Picture has been changed.',4000);
												$('#modal_confirm').closeModal();	
												App.handleLoadPage("#cmd=index;content=focusProduct;"+id);
											}
											else{
												Materialize.toast('Cannot process request.',4000);
											}
										});
							    		status = false;
							    	}
					            });
						    }
						});

                        $image.cropper("reset", true).cropper("replace", this.result);

			            $("button[data-cmd='rotate']").click(function(){
			            	var data = $(this).data('option');
				        	$image.cropper('rotate', data);
			            });

                    };
                }
                else{
                    showMessage("Please choose an image file.");
                }
            });
        }
        else{
            $inputImage.addClass("hide");
        }	            
        $("button[data-cmd='cancel']").click(function(){
			$('#modal_confirm').closeModal();	
        });
	},
	list:function(){
		var content = "", chips = [],chipsContent = "";
		var data = product.get();
		data = JSON.parse(data.responseText);
		$.each(data,function(i,v){
			var prodPicture = ((v[10] == "") || (v[10] == null))?"default.png":v[10];
			content += "<tr>"+
						"	<td width='1px'>"+(i+1)+". </td>"+
						"	<td><img src='../assets/images/products/"+prodPicture+"' alt='"+v[1]+" Picture' class='valign profile-image' height='50px'></td>"+
						"	<td width='300px'>"+v[1]+"</td>"+
						"	<td>"+v[2]+"</td>"+
						"	<td>"+v[3]+"</td>"+
						"	<td>published</td>"+
						"	<td width='1px'>"+
						"		<a href='#cmd=index;content=focusProduct;"+v[0]+"' class='tooltipped btn-floating waves-effect black-text no-shadow grey lighten-5 right' data-position='left' data-delay='0' data-tooltip='Show Details' data-cmd='update'>"+
						"			<i class='mdi-navigation-more-vert right black-text'></i>"+
						"		</a>"+
						"	</td>"+
						"</tr>";
		});

		content = "<table class='table bordered center' id='products'>"+
					"<thead>"+
					"	<tr>"+
					"		<th>#</th><th>Thumbnail</th><th>Product</th><th>Qty</th><th>Price</th><th>Status</th><th></th>"+
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
			console.log();
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
				        field_category: {required: false},
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
							data = JSON.parse(data);
							if(data[0] == 1){
								$('#modal_popUp').closeModal();	
								Materialize.toast('Saved.',4000);
								system.clearForm();
						    	$(location).attr('href',"#cmd=index;content=focusProduct;"+data[1]);			
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

request = {
	ini:function(){
		var content = "", profile = "", req = "", reqCount = "", reqContent = "", genderCall = "", value = "";
		var data = request.get(10,0);
		data = JSON.parse(data);

		$.each(data,function(i,v){
			profile = (v[0][12] == "")?'avatar.jpg':v[0][12];

			if(v[0][7] == "Male")
				genderCall = "his";
			else
				genderCall = "her";

			if(v[1].length==1)
				reqCount = "<span class=''>"+v[1].length+" request</span>";
			else
				reqCount = "<span class=''>"+v[1].length+" requests</span>";

			reqContent = "";
			$.each(v[1],function(i2,v2){
				if(v2[5] == "Name"){
					var chunk = JSON.parse(v2[4]);
					value = chunk[1]+" "+chunk[2]+" "+chunk[0];
				}
				else if(v2[5] == "Profile Picture"){
					value = "click to show picture";				
				}
				else{
					value = v2[4];
				}

				reqContent += "<li style='padding:10px; border-bottom: 1px solid #ccc;'>"+
							  v[0][4]+" wants to change "+genderCall+" "+v2[5]+" to <u>"+value+".</u>"+
							  " <a data-cmd='approve' data-node='"+v[0][0]+"' data-request='"+v2[0]+"' class='blue-text hover'>Approve</a>"+
							  " <a data-cmd='cancel' data-node='"+v[0][0]+"' data-request='"+v2[0]+"' class='black-text hover'>Cancel</a>"+
							  "</li>";
			});

			content += "<li class='avatar'>"+
						"   <div class='collapsible-header' style='padding-top: 10px;padding-bottom: 10px;'>"+
						"   	<img src='../assets/images/profile/"+profile+"' class='circle' width='42px'/>"+
						"		"+v[0][4]+" "+v[0][3]+""+
						"		<a data-cmd='viewRequests' data-node='"+v[0][0]+"'>"+reqCount+"</a>"+
						"	</div>"+
						"   <div class='collapsible-body'>"+
						"		<ul style='margin: 20px;'>"+reqContent+"</ul>"+
						"	</div>"+
						"</li>"; 
		})
		$("#display_requestsList ul").append(content);
		$("#display_requestsList ul li").removeClass('active');
	    $('.collapsible').collapsible();

		$("a[data-cmd='approve']").on('click',function(){
			var data = $(this).data();
			request.options(['approve',data]);
		});

		$("a[data-cmd='cancel']").on('click',function(){
			var data = $(this).data();
			request.options(['cancel',data]);
		});
	},
	get:function(min,offset){
		var data = system.ajax('../assets/harmony/Process.php?get-request',[min,offset]);
		data = data.responseText;
		console.log(data);
		// data = JSON.parse(data);
		// console.log(data);
		return data;		
	},
	options:function(data){
		var content = "Are you sure you want to "+data[0]+" the request?<br/><br/>";
		$("#modal_confirm .modal-content").html(content);
		$('#modal_confirm .modal-footer').html("<a class='waves-effect waves-grey grey-text btn-flat modal-action modal-close right'>Close</a><button type='submit' data-cmd='button_proceed' class='waves-effect waves-grey grey lighten-5 blue-text btn-flat modal-action right'>Proceed</button>");			
		$('#modal_confirm').openModal('show');			

		$("button[data-cmd='button_proceed']").on('click',function(){
			console.log(data);
			if(data[0] == 'approve'){
				var ajax = system.ajax('../assets/harmony/Process.php?request-approve',data[1]);
				ajax.done(function(ajax){
					console.log(ajax);
					if(ajax == 1){
						Materialize.toast('Account updated.',4000);
						$('#modal_confirm').closeModal();	
						App.handleLoadPage("#cmd=index;content=request_accountUpdate;");
					}
					else{
						Materialize.toast('Cannot process request.',4000);
					}
				});
			}
			else{
				var ajax = system.ajax('../assets/harmony/Process.php?request-cancel',data[1]);
				ajax.done(function(ajax){
					console.log(ajax);
					if(ajax == 1){
						Materialize.toast('Request cancelled.',4000);
						$('#modal_confirm').closeModal();	
						App.handleLoadPage("#cmd=index;content=request_accountUpdate;");
					}
					else{
						Materialize.toast('Cannot process request.',4000);
					}
				});

			}
		});
	}
}