(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{205:function(e,a,t){e.exports=t.p+"static/media/aunty.fd600475.jpg"},209:function(e,a,t){e.exports=t(428)},214:function(e,a,t){},426:function(e,a,t){},428:function(e,a,t){"use strict";t.r(a);var n=t(1),o=t.n(n),l=t(9),i=t.n(l),r=t(44),c=(t(214),t(20)),u=t(17),s=t(22),m=t(21),p=t(23),v=t(56),d=t(71),E=t(196),h=t(6),g=t(92),b=t(195),f=t(154),y=t(151),S=t(152),I=t(153),w=t(158),A=t(159),O=t(4),C=t.n(O),k=t(11),M=t(155),G=t(149),T=t(150),N=t(157),j=t(156),P=t(15),B=t(51),L=t.n(B),F=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(o)))).state={firstName:"",lastName:"",email:"",password:"",dateOfBirth:"",nationality:""},t.handleInput=function(e){t.setState(Object(k.a)({},e.target.id,e.target.value))},t.handleSubmit=function(e){var a=t.props.toastManager;L()({method:"POST",url:"https://gokaikai.herokuapp.com/api/v1/users/",data:{firstName:t.state.firstName,lastName:t.state.lastName,email:t.state.email,password:t.state.password,dateOfBirth:t.state.dateOfBirth,nationality:t.state.nationality}}).then(function(e){"success"===e.data.status?(a.add("Thank you for creating an account! You are now logged in.",{appearance:"success",autoDismiss:!0}),localStorage.setItem("token",e.data.auth_token),localStorage.setItem("userId",e.data.user.id),localStorage.setItem("firstName",e.data.user.first_name),localStorage.setItem("lastName",e.data.user.last_name),localStorage.setItem("email",e.data.user.email)):a.add("Uh oh! We already have an account with that email. ",{appearance:"error",autoDismiss:!0}),t.props.toggle()}).catch(function(e){console.log(e);var t=e.data.message;a.add('Something went wrong: "'.concat(t,'"'),{appearance:"error"})})},t}return Object(p.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(M.a,null,o.a.createElement(P.AvForm,{onValidSubmit:this.handleSubmit,id:"register"},o.a.createElement(G.a,null,o.a.createElement(T.a,null,o.a.createElement(P.AvGroup,null,o.a.createElement(N.a,null,"First Name"),o.a.createElement(P.AvInput,{name:"firstName",type:"text",placeholder:"First Name","aria-describedby":"inputGroupPrepend",value:this.state.firstName,onChange:this.handleInput,id:"firstName",required:!0}),o.a.createElement(P.AvFeedback,null,"Please enter a first name."))),o.a.createElement(T.a,null,o.a.createElement(P.AvGroup,null,o.a.createElement(N.a,null,"Last Name"),o.a.createElement(P.AvInput,{name:"lastName",type:"text",placeholder:"Last Name","aria-describedby":"inputGroupPrepend",value:this.state.lastName,onChange:this.handleInput,id:"lastName",required:!0}),o.a.createElement(P.AvFeedback,null,"Please enter a last name.")))),o.a.createElement(G.a,null,o.a.createElement(T.a,null,o.a.createElement(P.AvGroup,null,o.a.createElement(N.a,null,"Email"),o.a.createElement(P.AvInput,{name:"email",type:"email",placeholder:"Email Address",value:this.state.email,onChange:this.handleInput,id:"email",required:!0}),o.a.createElement(P.AvFeedback,null,"Please provide a valid email address."))),o.a.createElement(T.a,null,o.a.createElement(P.AvGroup,null,o.a.createElement(N.a,null,"Password"),o.a.createElement(P.AvInput,{name:"password",type:"password",placeholder:"Password",value:this.state.password,id:"password",autoComplete:"off",onChange:this.handleInput,required:!0}),o.a.createElement(P.AvFeedback,null,"Please provide a valid password.")))),o.a.createElement(G.a,null,o.a.createElement(T.a,null,o.a.createElement(P.AvGroup,null,o.a.createElement(N.a,null,"Date of Birth"),o.a.createElement(P.AvInput,{name:"dateOfBirth",type:"date",placeholder:"2000-01-01",value:this.state.dateOfBirth,onChange:this.handleInput,id:"dateOfBirth",required:!0}),o.a.createElement(P.AvFeedback,null,"Please provide a valid date of birth."))),o.a.createElement(T.a,null,o.a.createElement(P.AvGroup,null,o.a.createElement(N.a,null,"Nationality"),o.a.createElement(P.AvField,{name:"nationality",type:"select",value:this.state.nationality,onChange:this.handleInput,id:"nationality",required:!0},R),o.a.createElement(P.AvFeedback,null,"Please provide a nationality.")))))),o.a.createElement(j.a,null,o.a.createElement(g.a,{form:"register",color:"primary",type:"submit"},"Register")))}}]),a}(o.a.Component),R=o.a.createElement(o.a.Fragment,null,o.a.createElement("option",{value:""},"Choose Country"),o.a.createElement("option",{value:"AF"},"Afghanistan"),o.a.createElement("option",{value:"AX"},"\xc5land Islands"),o.a.createElement("option",{value:"AL"},"Albania"),o.a.createElement("option",{value:"DZ"},"Algeria"),o.a.createElement("option",{value:"AS"},"American Samoa"),o.a.createElement("option",{value:"AD"},"Andorra"),o.a.createElement("option",{value:"AO"},"Angola"),o.a.createElement("option",{value:"AI"},"Anguilla"),o.a.createElement("option",{value:"AQ"},"Antarctica"),o.a.createElement("option",{value:"AG"},"Antigua and Barbuda"),o.a.createElement("option",{value:"AR"},"Argentina"),o.a.createElement("option",{value:"AM"},"Armenia"),o.a.createElement("option",{value:"AW"},"Aruba"),o.a.createElement("option",{value:"AU"},"Australia"),o.a.createElement("option",{value:"AT"},"Austria"),o.a.createElement("option",{value:"AZ"},"Azerbaijan"),o.a.createElement("option",{value:"BS"},"Bahamas"),o.a.createElement("option",{value:"BH"},"Bahrain"),o.a.createElement("option",{value:"BD"},"Bangladesh"),o.a.createElement("option",{value:"BB"},"Barbados"),o.a.createElement("option",{value:"BY"},"Belarus"),o.a.createElement("option",{value:"BE"},"Belgium"),o.a.createElement("option",{value:"BZ"},"Belize"),o.a.createElement("option",{value:"BJ"},"Benin"),o.a.createElement("option",{value:"BM"},"Bermuda"),o.a.createElement("option",{value:"BT"},"Bhutan"),o.a.createElement("option",{value:"BO"},"Bolivia, Plurinational State of"),o.a.createElement("option",{value:"BQ"},"Bonaire, Sint Eustatius and Saba"),o.a.createElement("option",{value:"BA"},"Bosnia and Herzegovina"),o.a.createElement("option",{value:"BW"},"Botswana"),o.a.createElement("option",{value:"BV"},"Bouvet Island"),o.a.createElement("option",{value:"BR"},"Brazil"),o.a.createElement("option",{value:"IO"},"British Indian Ocean Territory"),o.a.createElement("option",{value:"BN"},"Brunei Darussalam"),o.a.createElement("option",{value:"BG"},"Bulgaria"),o.a.createElement("option",{value:"BF"},"Burkina Faso"),o.a.createElement("option",{value:"BI"},"Burundi"),o.a.createElement("option",{value:"KH"},"Cambodia"),o.a.createElement("option",{value:"CM"},"Cameroon"),o.a.createElement("option",{value:"CA"},"Canada"),o.a.createElement("option",{value:"CV"},"Cape Verde"),o.a.createElement("option",{value:"KY"},"Cayman Islands"),o.a.createElement("option",{value:"CF"},"Central African Republic"),o.a.createElement("option",{value:"TD"},"Chad"),o.a.createElement("option",{value:"CL"},"Chile"),o.a.createElement("option",{value:"CN"},"China"),o.a.createElement("option",{value:"CX"},"Christmas Island"),o.a.createElement("option",{value:"CC"},"Cocos (Keeling) Islands"),o.a.createElement("option",{value:"CO"},"Colombia"),o.a.createElement("option",{value:"KM"},"Comoros"),o.a.createElement("option",{value:"CG"},"Congo"),o.a.createElement("option",{value:"CD"},"Congo, the Democratic Republic of the"),o.a.createElement("option",{value:"CK"},"Cook Islands"),o.a.createElement("option",{value:"CR"},"Costa Rica"),o.a.createElement("option",{value:"CI"},"C\xf4te d'Ivoire"),o.a.createElement("option",{value:"HR"},"Croatia"),o.a.createElement("option",{value:"CU"},"Cuba"),o.a.createElement("option",{value:"CW"},"Cura\xe7ao"),o.a.createElement("option",{value:"CY"},"Cyprus"),o.a.createElement("option",{value:"CZ"},"Czech Republic"),o.a.createElement("option",{value:"DK"},"Denmark"),o.a.createElement("option",{value:"DJ"},"Djibouti"),o.a.createElement("option",{value:"DM"},"Dominica"),o.a.createElement("option",{value:"DO"},"Dominican Republic"),o.a.createElement("option",{value:"EC"},"Ecuador"),o.a.createElement("option",{value:"EG"},"Egypt"),o.a.createElement("option",{value:"SV"},"El Salvador"),o.a.createElement("option",{value:"GQ"},"Equatorial Guinea"),o.a.createElement("option",{value:"ER"},"Eritrea"),o.a.createElement("option",{value:"EE"},"Estonia"),o.a.createElement("option",{value:"ET"},"Ethiopia"),o.a.createElement("option",{value:"FK"},"Falkland Islands (Malvinas)"),o.a.createElement("option",{value:"FO"},"Faroe Islands"),o.a.createElement("option",{value:"FJ"},"Fiji"),o.a.createElement("option",{value:"FI"},"Finland"),o.a.createElement("option",{value:"FR"},"France"),o.a.createElement("option",{value:"GF"},"French Guiana"),o.a.createElement("option",{value:"PF"},"French Polynesia"),o.a.createElement("option",{value:"TF"},"French Southern Territories"),o.a.createElement("option",{value:"GA"},"Gabon"),o.a.createElement("option",{value:"GM"},"Gambia"),o.a.createElement("option",{value:"GE"},"Georgia"),o.a.createElement("option",{value:"DE"},"Germany"),o.a.createElement("option",{value:"GH"},"Ghana"),o.a.createElement("option",{value:"GI"},"Gibraltar"),o.a.createElement("option",{value:"GR"},"Greece"),o.a.createElement("option",{value:"GL"},"Greenland"),o.a.createElement("option",{value:"GD"},"Grenada"),o.a.createElement("option",{value:"GP"},"Guadeloupe"),o.a.createElement("option",{value:"GU"},"Guam"),o.a.createElement("option",{value:"GT"},"Guatemala"),o.a.createElement("option",{value:"GG"},"Guernsey"),o.a.createElement("option",{value:"GN"},"Guinea"),o.a.createElement("option",{value:"GW"},"Guinea-Bissau"),o.a.createElement("option",{value:"GY"},"Guyana"),o.a.createElement("option",{value:"HT"},"Haiti"),o.a.createElement("option",{value:"HM"},"Heard Island and McDonald Islands"),o.a.createElement("option",{value:"VA"},"Holy See (Vatican City State)"),o.a.createElement("option",{value:"HN"},"Honduras"),o.a.createElement("option",{value:"HK"},"Hong Kong"),o.a.createElement("option",{value:"HU"},"Hungary"),o.a.createElement("option",{value:"IS"},"Iceland"),o.a.createElement("option",{value:"IN"},"India"),o.a.createElement("option",{value:"ID"},"Indonesia"),o.a.createElement("option",{value:"IR"},"Iran, Islamic Republic of"),o.a.createElement("option",{value:"IQ"},"Iraq"),o.a.createElement("option",{value:"IE"},"Ireland"),o.a.createElement("option",{value:"IM"},"Isle of Man"),o.a.createElement("option",{value:"IL"},"Israel"),o.a.createElement("option",{value:"IT"},"Italy"),o.a.createElement("option",{value:"JM"},"Jamaica"),o.a.createElement("option",{value:"JP"},"Japan"),o.a.createElement("option",{value:"JE"},"Jersey"),o.a.createElement("option",{value:"JO"},"Jordan"),o.a.createElement("option",{value:"KZ"},"Kazakhstan"),o.a.createElement("option",{value:"KE"},"Kenya"),o.a.createElement("option",{value:"KI"},"Kiribati"),o.a.createElement("option",{value:"KP"},"Korea, Democratic People's Republic of"),o.a.createElement("option",{value:"KR"},"Korea, Republic of"),o.a.createElement("option",{value:"KW"},"Kuwait"),o.a.createElement("option",{value:"KG"},"Kyrgyzstan"),o.a.createElement("option",{value:"LA"},"Lao People's Democratic Republic"),o.a.createElement("option",{value:"LV"},"Latvia"),o.a.createElement("option",{value:"LB"},"Lebanon"),o.a.createElement("option",{value:"LS"},"Lesotho"),o.a.createElement("option",{value:"LR"},"Liberia"),o.a.createElement("option",{value:"LY"},"Libya"),o.a.createElement("option",{value:"LI"},"Liechtenstein"),o.a.createElement("option",{value:"LT"},"Lithuania"),o.a.createElement("option",{value:"LU"},"Luxembourg"),o.a.createElement("option",{value:"MO"},"Macao"),o.a.createElement("option",{value:"MK"},"Macedonia, the former Yugoslav Republic of"),o.a.createElement("option",{value:"MG"},"Madagascar"),o.a.createElement("option",{value:"MW"},"Malawi"),o.a.createElement("option",{value:"MY"},"Malaysia"),o.a.createElement("option",{value:"MV"},"Maldives"),o.a.createElement("option",{value:"ML"},"Mali"),o.a.createElement("option",{value:"MT"},"Malta"),o.a.createElement("option",{value:"MH"},"Marshall Islands"),o.a.createElement("option",{value:"MQ"},"Martinique"),o.a.createElement("option",{value:"MR"},"Mauritania"),o.a.createElement("option",{value:"MU"},"Mauritius"),o.a.createElement("option",{value:"YT"},"Mayotte"),o.a.createElement("option",{value:"MX"},"Mexico"),o.a.createElement("option",{value:"FM"},"Micronesia, Federated States of"),o.a.createElement("option",{value:"MD"},"Moldova, Republic of"),o.a.createElement("option",{value:"MC"},"Monaco"),o.a.createElement("option",{value:"MN"},"Mongolia"),o.a.createElement("option",{value:"ME"},"Montenegro"),o.a.createElement("option",{value:"MS"},"Montserrat"),o.a.createElement("option",{value:"MA"},"Morocco"),o.a.createElement("option",{value:"MZ"},"Mozambique"),o.a.createElement("option",{value:"MM"},"Myanmar"),o.a.createElement("option",{value:"NA"},"Namibia"),o.a.createElement("option",{value:"NR"},"Nauru"),o.a.createElement("option",{value:"NP"},"Nepal"),o.a.createElement("option",{value:"NL"},"Netherlands"),o.a.createElement("option",{value:"NC"},"New Caledonia"),o.a.createElement("option",{value:"NZ"},"New Zealand"),o.a.createElement("option",{value:"NI"},"Nicaragua"),o.a.createElement("option",{value:"NE"},"Niger"),o.a.createElement("option",{value:"NG"},"Nigeria"),o.a.createElement("option",{value:"NU"},"Niue"),o.a.createElement("option",{value:"NF"},"Norfolk Island"),o.a.createElement("option",{value:"MP"},"Northern Mariana Islands"),o.a.createElement("option",{value:"NO"},"Norway"),o.a.createElement("option",{value:"OM"},"Oman"),o.a.createElement("option",{value:"PK"},"Pakistan"),o.a.createElement("option",{value:"PW"},"Palau"),o.a.createElement("option",{value:"PS"},"Palestinian Territory, Occupied"),o.a.createElement("option",{value:"PA"},"Panama"),o.a.createElement("option",{value:"PG"},"Papua New Guinea"),o.a.createElement("option",{value:"PY"},"Paraguay"),o.a.createElement("option",{value:"PE"},"Peru"),o.a.createElement("option",{value:"PH"},"Philippines"),o.a.createElement("option",{value:"PN"},"Pitcairn"),o.a.createElement("option",{value:"PL"},"Poland"),o.a.createElement("option",{value:"PT"},"Portugal"),o.a.createElement("option",{value:"PR"},"Puerto Rico"),o.a.createElement("option",{value:"QA"},"Qatar"),o.a.createElement("option",{value:"RE"},"R\xe9union"),o.a.createElement("option",{value:"RO"},"Romania"),o.a.createElement("option",{value:"RU"},"Russian Federation"),o.a.createElement("option",{value:"RW"},"Rwanda"),o.a.createElement("option",{value:"BL"},"Saint Barth\xe9lemy"),o.a.createElement("option",{value:"SH"},"Saint Helena, Ascension and Tristan da Cunha"),o.a.createElement("option",{value:"KN"},"Saint Kitts and Nevis"),o.a.createElement("option",{value:"LC"},"Saint Lucia"),o.a.createElement("option",{value:"MF"},"Saint Martin (French part)"),o.a.createElement("option",{value:"PM"},"Saint Pierre and Miquelon"),o.a.createElement("option",{value:"VC"},"Saint Vincent and the Grenadines"),o.a.createElement("option",{value:"WS"},"Samoa"),o.a.createElement("option",{value:"SM"},"San Marino"),o.a.createElement("option",{value:"ST"},"Sao Tome and Principe"),o.a.createElement("option",{value:"SA"},"Saudi Arabia"),o.a.createElement("option",{value:"SN"},"Senegal"),o.a.createElement("option",{value:"RS"},"Serbia"),o.a.createElement("option",{value:"SC"},"Seychelles"),o.a.createElement("option",{value:"SL"},"Sierra Leone"),o.a.createElement("option",{value:"SG"},"Singapore"),o.a.createElement("option",{value:"SX"},"Sint Maarten (Dutch part)"),o.a.createElement("option",{value:"SK"},"Slovakia"),o.a.createElement("option",{value:"SI"},"Slovenia"),o.a.createElement("option",{value:"SB"},"Solomon Islands"),o.a.createElement("option",{value:"SO"},"Somalia"),o.a.createElement("option",{value:"ZA"},"South Africa"),o.a.createElement("option",{value:"GS"},"South Georgia and the South Sandwich Islands"),o.a.createElement("option",{value:"SS"},"South Sudan"),o.a.createElement("option",{value:"ES"},"Spain"),o.a.createElement("option",{value:"LK"},"Sri Lanka"),o.a.createElement("option",{value:"SD"},"Sudan"),o.a.createElement("option",{value:"SR"},"Suriname"),o.a.createElement("option",{value:"SJ"},"Svalbard and Jan Mayen"),o.a.createElement("option",{value:"SZ"},"Swaziland"),o.a.createElement("option",{value:"SE"},"Sweden"),o.a.createElement("option",{value:"CH"},"Switzerland"),o.a.createElement("option",{value:"SY"},"Syrian Arab Republic"),o.a.createElement("option",{value:"TW"},"Taiwan, Province of China"),o.a.createElement("option",{value:"TJ"},"Tajikistan"),o.a.createElement("option",{value:"TZ"},"Tanzania, United Republic of"),o.a.createElement("option",{value:"TH"},"Thailand"),o.a.createElement("option",{value:"TL"},"Timor-Leste"),o.a.createElement("option",{value:"TG"},"Togo"),o.a.createElement("option",{value:"TK"},"Tokelau"),o.a.createElement("option",{value:"TO"},"Tonga"),o.a.createElement("option",{value:"TT"},"Trinidad and Tobago"),o.a.createElement("option",{value:"TN"},"Tunisia"),o.a.createElement("option",{value:"TR"},"Turkey"),o.a.createElement("option",{value:"TM"},"Turkmenistan"),o.a.createElement("option",{value:"TC"},"Turks and Caicos Islands"),o.a.createElement("option",{value:"TV"},"Tuvalu"),o.a.createElement("option",{value:"UG"},"Uganda"),o.a.createElement("option",{value:"UA"},"Ukraine"),o.a.createElement("option",{value:"AE"},"United Arab Emirates"),o.a.createElement("option",{value:"GB"},"United Kingdom"),o.a.createElement("option",{value:"US"},"United States"),o.a.createElement("option",{value:"UM"},"United States Minor Outlying Islands"),o.a.createElement("option",{value:"UY"},"Uruguay"),o.a.createElement("option",{value:"UZ"},"Uzbekistan"),o.a.createElement("option",{value:"VU"},"Vanuatu"),o.a.createElement("option",{value:"VE"},"Venezuela, Bolivarian Republic of"),o.a.createElement("option",{value:"VN"},"Viet Nam"),o.a.createElement("option",{value:"VG"},"Virgin Islands, British"),o.a.createElement("option",{value:"VI"},"Virgin Islands, U.S."),o.a.createElement("option",{value:"WF"},"Wallis and Futuna"),o.a.createElement("option",{value:"EH"},"Western Sahara"),o.a.createElement("option",{value:"YE"},"Yemen"),o.a.createElement("option",{value:"ZM"},"Zambia"),o.a.createElement("option",{value:"ZW"},"Zimbabwe")),D=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(o)))).state={loginEmail:"",loginPassword:""},t.handleInput=function(e){t.setState(Object(k.a)({},e.target.id,e.target.value))},t.handleSubmit=function(e){var a=t.props.toastManager;L()({method:"POST",url:"https://gokaikai.herokuapp.com/api/v1/sessions/",data:{email:t.state.loginEmail,password:t.state.loginPassword}}).then(function(e){"success"===e.data.status?(a.add("Welcome back! You are now logged in.",{appearance:"success",autoDismiss:!0}),localStorage.setItem("token",e.data.auth_token),localStorage.setItem("userId",e.data.user.id),localStorage.setItem("firstName",e.data.user.first_name),localStorage.setItem("lastName",e.data.user.last_name),localStorage.setItem("email",e.data.user.email)):a.add("Uh oh! We were unable to match your email with the password provided.",{appearance:"error",autoDismiss:!0}),t.props.toggle()}).catch(function(e){console.log(e);var t=e.data.message;a.add('Something went wrong: "'.concat(t,'"'),{appearance:"error"})})},t}return Object(p.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(M.a,null,o.a.createElement(P.AvForm,{onValidSubmit:this.handleSubmit,id:"login"},o.a.createElement(G.a,null,o.a.createElement(T.a,null,o.a.createElement(P.AvGroup,null,o.a.createElement(N.a,null,"Email"),o.a.createElement(P.AvInput,{name:"loginEmail",type:"email",placeholder:"Email Address",value:this.state.loginEmail,onChange:this.handleInput,id:"loginEmail",required:!0}),o.a.createElement(P.AvFeedback,null,"Please provide a valid email address."))),o.a.createElement(T.a,null,o.a.createElement(P.AvGroup,null,o.a.createElement(N.a,null,"Password"),o.a.createElement(P.AvInput,{name:"loginPassword",type:"password",placeholder:"Password",value:this.state.loginPassword,id:"loginPassword",onChange:this.handleInput,autoComplete:"off",required:!0}),o.a.createElement(P.AvFeedback,null,"Please provide a valid password.")))))),o.a.createElement(j.a,null,o.a.createElement(g.a,{form:"login",color:"primary",type:"submit"},"Login")))}}]),a}(o.a.Component),W=Object(d.withToastManager)(F),H=Object(d.withToastManager)(D),K=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).switch=t.switch.bind(Object(h.a)(Object(h.a)(t))),t.state={activeTab:"1"},t}return Object(p.a)(a,e),Object(u.a)(a,[{key:"switch",value:function(e){this.state.activeTab!==e&&this.setState({activeTab:e})}},{key:"render",value:function(){var e=this;return o.a.createElement(b.a,{isOpen:this.props.isOpen,toggle:this.props.toggle,className:this.props.className},o.a.createElement(f.a,{toggle:this.props.toggle},o.a.createElement(y.a,{tabs:!0},o.a.createElement(S.a,null,o.a.createElement(I.a,{className:C()({active:"1"===this.state.activeTab}),onClick:function(){e.switch("1")}},"Register")),o.a.createElement(S.a,null,o.a.createElement(I.a,{className:C()({active:"2"===this.state.activeTab}),onClick:function(){e.switch("2")}},"Login")))),o.a.createElement(w.a,{activeTab:this.state.activeTab},o.a.createElement(A.a,{tabId:"1"},o.a.createElement(W,{toggle:this.props.toggle})),o.a.createElement(A.a,{tabId:"2"},o.a.createElement(H,{toggle:this.props.toggle}))))}}]),a}(o.a.Component),U=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).showModal=function(){t.setState(function(e){return{modal:!e.modal}})},t.state={modal:!1},t.showModal=t.showModal.bind(Object(h.a)(Object(h.a)(t))),t}return Object(p.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(r.b,{to:"/chat"},"Chat with Aunty")," ",o.a.createElement("br",null),o.a.createElement(r.b,{to:"/geolocation"},"Geolocation")," ",o.a.createElement("br",null),o.a.createElement(r.b,{to:"/mapj"},"Jade's Map")," ",o.a.createElement("br",null)," ",o.a.createElement("br",null),o.a.createElement(g.a,{outline:!0,color:"primary",onClick:this.showModal},"Register / Login"),o.a.createElement("p",null,"This is the home page. ",o.a.createElement("br",null),"Wait ah, Aunty still building."),o.a.createElement(K,{isOpen:this.state.modal,toggle:this.showModal}))}}]),a}(o.a.Component),V=t(124),Y=t(200),Z=t.n(Y),x=t(148),z=(t(410),t(31)),J=t.n(z),q=t(206),_="YYYY-MM-DD HH:mm",Q=J()().hour(0).minute(0),X={background:"#f5f8fb",fontFamily:"Helvetica Neue",headerBgColor:"#EF6C00",headerFontColor:"#fff",headerFontSize:"15px",botBubbleColor:"#EF6C00",botFontColor:"#fff",userBubbleColor:"#fff",userFontColor:"#4a4a4a"},$=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(o)))).state={loggedIn:!0,firstName:"",loading:!0,itineraryTime:""},t.componentDidMount=function(){t.setState({firstName:localStorage.getItem("firstName"),loading:!1}),localStorage.getItem("token")||t.setState({loggedIn:!1})},t.handleTime=function(e){t.setState({itineraryTime:e&&e.format(_)}),localStorage.setItem("itineraryTime",e.format(_))},t}return Object(p.a)(a,e),Object(u.a)(a,[{key:"handleRedirect",value:function(){if(!1===this.state.loggedIn)return window.alert("Please login to access chat."),o.a.createElement(v.a,{to:"/"})}},{key:"render",value:function(){var e=o.a.createElement("div",null,"Loading..."),a=[{id:"1",message:"Hallo hallo ".concat(this.state.firstName,"! Aunty here. How are you?"),trigger:"2"},{id:"2",user:!0,trigger:"3"},{id:"3",message:"How can Aunty help you today?",trigger:"4"},{id:"4",options:[{value:"Tell Aunty where I'm going so she can check on me",label:"Aunty, I'm going out today!",trigger:"5"},{value:"Get on a call with Aunty",label:"Aunty, lai! We chit chat together gether.",trigger:"22"},{value:"Ask Aunty where the nearest safe spot is",label:"Aunty, I don't feel safe here. Where's the nearest, safest place to go?",trigger:"23"},{value:"Let Aunty scan your location for danger",label:"Aunty, I don't feel safe, can you look around for me?",trigger:"24"}]},{id:"5",message:"Where are you going?",trigger:"itineraryLocation"},{id:"itineraryLocation",user:!0,trigger:"7"},{id:"7",message:function(e){var a=e.previousValue;return localStorage.setItem("itineraryLocation",a),"Is it this one ah? ".concat(a)},trigger:"8"},{id:"8",options:[{value:"Ya, ya, correct.",label:"Ya, ya, correct.",trigger:"9"},{value:"No, that's not the right location.",label:"No, that's not the right location.",trigger:"5"}]},{id:"9",component:o.a.createElement("div",null,o.a.createElement("p",null,"When you going? What time?"),o.a.createElement(q.a,{showSecond:!1,defaultValue:Q,className:"xxx",onChange:this.handleTime,format:_,use12Hours:!0,inputReadOnly:!0})),asMessage:!0,trigger:"itineraryTime"},{id:"itineraryTime",options:[{value:"Time selected.",label:"Time selected.",trigger:"11"}]},{id:"11",message:"You going with who?",trigger:"itineraryDetails"},{id:"itineraryDetails",options:[{value:"alone",label:"By myself",trigger:"13"},{value:"With people lah.",label:"With people lah.",trigger:"16"}]},{id:"13",message:function(e){var a=e.previousValue;return localStorage.setItem("itineraryDetails",a),"Wah, you syok sendiri! Bojio Aunty ):"},trigger:"14"},{id:"14",message:"Joking only lah. If anything you call Aunty. Enjoy!",trigger:"reviewItineraryPin"},{id:"16",message:"Who? Who? Go on a date ah? Aunty kepo...",trigger:"17"},{id:"17",user:!0,trigger:"18"},{id:"18",message:function(e){var a=e.previousValue;return localStorage.setItem("itineraryDetails","with "+a),"Oh ya, I know the mother. You all enjoy and be safe!"},trigger:"reviewItineraryPin"},{id:"reviewItineraryPin",component:o.a.createElement(ee,null),asMessage:!0,trigger:"19"},{id:"19",message:"You got go anywhere else?",trigger:"20"},{id:"20",options:[{value:"Yes",label:"Yes",trigger:"5"},{value:"No",label:"No",trigger:"21"}]},{id:"21",message:"Ok ok. Come and spend time with Aunty lah.",end:!0},{id:"22",message:"<Link this to a fake call>",end:!0},{id:"23",message:"Nah, this is the nearest I can find. Open the map and see <Link to map>",end:!0},{id:"24",message:'<Link to "video call"/ camera scan>',end:!0}];return o.a.createElement(x.a,null,o.a.createElement(G.a,{className:"justify-content-md-center"},o.a.createElement(T.a,{md:"auto"},this.state.loading||0===this.state.firstName.length?e:o.a.createElement(V.ThemeProvider,{theme:X},o.a.createElement(Z.a,{headerTitle:"Chat with Aunty",recognitionEnable:!0,speechSynthesis:{enable:!0,lang:"en"},steps:a})))))}}]),a}(o.a.Component),ee=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(o)))).state={location:"",description:"",time:""},t}return Object(p.a)(a,e),Object(u.a)(a,[{key:"componentWillMount",value:function(){var e=localStorage.getItem("userId"),a=localStorage.getItem("itineraryLocation"),t=localStorage.getItem("itineraryTime"),n=localStorage.getItem("itineraryDetails");L()({method:"POST",url:"http://localhost:5000/api/v1/pins/itinerary/",data:{pinName:a,userId:e,longitude:37.0364,latitude:28.8951,startTime:t,description:n}}).then(function(e){console.log(e.data)}).catch(function(e){console.log(e)}),this.setState({location:a,description:n,time:t})}},{key:"render",value:function(){return o.a.createElement("div",null,"Ok so you are going to ",this.state.location," ",this.state.description," at ",this.state.time,"? Aunty will check in then, lah!")}}]),a}(o.a.Component),ae=t(430),te=t(33),ne=t(432),oe=t(433),le=t(431),ie=t(434),re=t(130),ce=function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(u.a)(a,[{key:"createLeafletElement",value:function(){var e=new re.OpenStreetMapProvider;return Object(re.GeoSearchControl)({provider:e,style:"bar"})}}]),a}(ae.a),ue=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(o)))).state={markers:[{id:1,lat:3.1348112113359,lng:101.62996282434,category:"Snatch"},{id:2,lat:3.11103,lng:101.549431,category:"Snatch"}]},t}return Object(p.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=Object(te.b)(ce);return o.a.createElement(ne.a,{center:[this.props.my_lat,this.props.my_lng],zoom:15,maxZoom:20,attributionControl:!0,zoomControl:!0,doubleClickZoom:!0,scrollWheelZoom:!0,dragging:!0,animate:!0,easeLinearity:.35},o.a.createElement(oe.a,{url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png"}),o.a.createElement(e,null),this.state.markers.map(function(e,a){return o.a.createElement(le.a,{key:a,position:[e.lat,e.lng]},o.a.createElement(ie.a,{key:a},e.category))}))}}]),a}(o.a.Component),se=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(o)))).state={isGeolocationAvailable:"",isGeolocationEnabled:"",latitude:0,longitude:0},t}return Object(p.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){this.setState({isGeolocationAvailable:localStorage.getItem("isGeolocationAvailable"),isGeolocationEnabled:localStorage.getItem("isGeolocationEnabled"),latitude:localStorage.getItem("latitude"),longitude:localStorage.getItem("longitude")})}},{key:"render",value:function(){return this.state.isGeolocationAvailable?this.state.isGeolocationEnabled?this.state.latitude?o.a.createElement(ue,{my_lat:this.state.latitude,my_lng:this.state.longitude}):o.a.createElement("div",null,"Getting the location data\u2026"):o.a.createElement("div",null,"Geolocation is not enabled"):o.a.createElement("div",null,"Your browser does not support Geolocation")}}]),a}(o.a.Component),me=function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return o.a.createElement("p",null,"doot doot?")}}]),a}(o.a.Component),pe=t(205),ve=t.n(pe),de=(t(426),function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(o)))).notificationItinerary=function(){var e=localStorage.getItem("token");console.log("this funciton works"),L()({method:"GET",url:"https://gokaikai.herokuapp.com/api/v1/pins/itinerary/",headers:{Authorization:"Bearer ".concat(e)}}).then(function(e){console.log(e)})},t}return Object(p.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){this.notificationItinerary()}},{key:"render",value:function(){return this.props.coords&&(localStorage.setItem("latitude",this.props.coords.latitude),localStorage.setItem("longitude",this.props.coords.longitude),localStorage.setItem("isGeolocationAvailable",this.props.isGeolocationEnabled),localStorage.setItem("isGeolocationEnabled",this.props.isGeolocationEnabled)),o.a.createElement(d.ToastProvider,null,o.a.createElement("div",{align:"center"},o.a.createElement("img",{src:ve.a,alt:"aunty",width:"250px"}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(r.b,{to:"/"},"Home"),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(v.b,{exact:!0,path:"/",component:U}),o.a.createElement(v.b,{exact:!0,path:"/chat",component:$}),o.a.createElement(v.b,{exact:!0,path:"/geolocation",component:se}),o.a.createElement(v.b,{exact:!0,path:"/mapj",component:me})))}}]),a}(n.Component)),Ee=Object(E.geolocated)({positionOptions:{enableHighAccuracy:!1},userDecisionTimeout:6e3})(de),he=(t(427),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function ge(e,a){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(o.a.createElement(r.a,null,o.a.createElement(Ee,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var a="".concat("","/service-worker.js");he?(function(e,a){fetch(e).then(function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ge(e,a)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(a,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):ge(a,e)})}}()}},[[209,1,2]]]);
//# sourceMappingURL=main.8eae1264.chunk.js.map