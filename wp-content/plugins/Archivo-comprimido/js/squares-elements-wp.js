!function(a,b,c,d){a.squaresRegisterElement({name:"Paragraph",iconClass:"fa fa-paragraph",controls:{text:{text:{name:"Text",type:"textarea","default":"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."}}},controlGroupIcons:{text:"fa fa-ellipsis-h"},content:function(){var a=this.controls.text.text.getVal();return a=a.replace(/\\(.)/gm,"$1"),a=a.replace(/\n/gm,"<br>"),'<p id="'+this.controls.general.id.getVal()+'" style="'+this.controls.general.css.getVal()+this.fontStyles+' margin: 0; padding: 0;" class="'+this.controls.general.classes.getVal()+'">'+a+"</p>"}}),a.squaresRegisterElement({name:"Heading",iconClass:"fa fa-header",controls:{heading:{text:{name:"Text",type:"text","default":"Lorem Ipsum"},heading:{name:"Heading",type:"select",options:["h1","h2","h3"],"default":"h3"}}},controlGroupIcons:{heading:"fa fa-header"},content:function(){return"<"+this.controls.heading.heading.getVal()+' id="'+this.controls.general.id.getVal()+'" style="'+this.controls.general.css.getVal()+this.fontStyles+' margin: 0; padding: 0;" class="'+this.controls.general.classes.getVal()+'">'+this.controls.heading.text.getVal()+"</"+this.controls.heading.heading.getVal()+">"}}),a.squaresRegisterElement({name:"Image",iconClass:"fa fa-camera",controls:{image:{url:{name:"Image URL",type:"wp media upload","default":"https://webcraftplugins.com/uploads/placeholder_image.png"},image_is_a_link:{name:"Image is a Link",type:"switch","default":0},link_to:{name:"Link to",type:"text","default":"#"}}},controlGroupIcons:{image:"fa fa-camera"},useFontControls:!1,content:function(){var a="";return 1==parseInt(this.controls.image.image_is_a_link.getVal(),10)&&(a+='<a href="'+this.controls.image.link_to.getVal()+'">'),a+='<img src="'+this.controls.image.url.getVal()+'" id="'+this.controls.general.id.getVal()+'" style="'+this.controls.general.css.getVal()+'" class="'+this.controls.general.classes.getVal()+'">',1==parseInt(this.controls.image.image_is_a_link.getVal(),10)&&(a+="</a>"),a}}),a.squaresRegisterElement({name:"Video",iconClass:"fa fa-video-camera",controls:{video:{mp4_url:{name:"MP4 URL",type:"text","default":"http://webcraftplugins.com/uploads/example_video.mp4"},webm_url:{name:"WEBM URL",type:"text","default":"http://webcraftplugins.com/uploads/example_video.webm"},ogv_url:{name:"OGV URL",type:"text","default":"http://webcraftplugins.com/uploads/example_video.ogv"},video_is_a_link:{name:"Video is a Link",type:"switch","default":0},link_to:{name:"Link to",type:"text","default":"#"}}},useFontControls:!1,controlGroupIcons:{video:"fa fa-video-camera"},content:function(){var a="";return 1==parseInt(this.controls.video.video_is_a_link.getVal(),10)&&(a+='<a href="'+this.controls.video.link_to.getVal()+'">'),a+='<video autoplay id="'+this.controls.general.id.getVal()+'" style="'+this.controls.general.css.getVal()+'" class="'+this.controls.general.classes.getVal()+'"><source src="'+this.controls.video.mp4_url.getVal()+'" type="video/mp4"><source src="'+this.controls.video.webm_url.getVal()+'" type="video/webm"><source src="'+this.controls.video.ogv_url.getVal()+'" type="video/ogv"></video>',1==parseInt(this.controls.video.video_is_a_link.getVal(),10)&&(a+="</a>"),a}}),a.squaresRegisterElement({name:"YouTube",iconClass:"fa fa-youtube",useStyleControls:!1,useFontControls:!1,controls:{youtube:{embed_code:{name:"Embed Code",type:"textarea","default":'<iframe width="560" height="315" src="https://www.youtube.com/embed/6NC_ODHu5jg" frameborder="0" allowfullscreen></iframe>'},allow_fullscreen:{name:"Allow Fullscreen",type:"switch","default":1},iframe_width:{name:"iframe Width",type:"int","default":320},iframe_auto_width:{name:"iframe Auto Width",type:"switch","default":1},iframe_height:{name:"iframe Height",type:"int","default":320}}},controlGroupIcons:{youtube:"fa fa-youtube"},content:function(){var a=this.controls.youtube.embed_code.getVal(),b="";return b+='<div id="'+this.controls.general.id.getVal()+'" style="'+this.controls.general.css.getVal()+'" class="'+this.controls.general.classes.getVal()+'">',a=a.replace("allowfullscreen",""),1==parseInt(this.controls.youtube.allow_fullscreen.getVal(),10)&&-1==a.indexOf("allowfullscreen")&&(a=a.replace("></iframe>"," allowfullscreen></iframe>")),a=1==parseInt(this.controls.youtube.iframe_auto_width.getVal(),10)?a.replace(/width="\d+"/g,'width="100%"'):a.replace(/width="\d+"/g,'width="'+this.controls.youtube.iframe_width.getVal()+'px"'),a=a.replace(/height="\d+"/g,'height="'+this.controls.youtube.iframe_height.getVal()+'px"'),b+=a,b+="</div>"}}),a.squaresRegisterElement({name:"Button",iconClass:"fa fa-link",controls:{button:{text:{name:"Text",type:"text","default":"Button"},link_to:{name:"Link to",type:"text","default":"#"},new_tab:{name:"Open in New Tab",type:"switch","default":0},display:{name:"Display",type:"button group",options:["inline-block","block"],"default":"inline-block"},height:{name:"Height",type:"int","default":44},bg_color:{name:"Background Color",type:"color","default":"#2196f3"},text_color:{name:"Text Color",type:"color","default":"#ffffff"},border_radius:{name:"Border Radius",type:"int","default":10},padding:{name:"Padding Left/Right",type:"int","default":20}}},controlGroupIcons:{button:"fa fa-link"},content:function(){var a="";a+="display: "+this.controls.button.display.getVal()+"; ",a+="height: "+this.controls.button.height.getVal()+"px; ",a+="line-height: "+this.controls.button.height.getVal()+"px; ",a+="background-color: "+this.controls.button.bg_color.getVal()+"; ",a+="color: "+this.controls.button.text_color.getVal()+"; ",a+="border-radius: "+this.controls.button.border_radius.getVal()+"px; ",a+="padding-left: "+this.controls.button.padding.getVal()+"px; ",a+="padding-right: "+this.controls.button.padding.getVal()+"px; ";var b="";return 1==parseInt(this.controls.button.new_tab.getVal(),10)&&(b='target="_blank"'),'<div id="'+this.controls.general.id.getVal()+'" style="'+this.controls.general.css.getVal()+'" class="'+this.controls.general.classes.getVal()+'"><a href="'+this.controls.button.link_to.getVal()+'" style="'+a+'" '+b+' class="squares-button">'+this.controls.button.text.getVal()+"</a></div>"}})}(jQuery,window,document);