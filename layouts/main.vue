<template>
  <div>
    <el-container>
      <el-aside width="300px" style="background-color: rgb(238, 241, 246)" class="diplay-none-mobile">
        <Aside />
      </el-aside>
      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <Menu class="diplay-none-mobile" />
          <Menu-Mobile class="hidden show-mobile w-10/12"/>
        </el-header>
        <el-main>
          <Nuxt />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style>
.title {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 35px;
  line-height: 41px;
  letter-spacing: 0.300349px;
  color: #0360AD;
}
.sub-title {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.300349px;
  color: #222B45;
}
.row-select {
  background: #FFFFFF;
  box-shadow: 0px 10px 60px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  padding: 10px;
}
.round-primary {
  border: 1px solid #0061AC !important;
  color: #0061AC;
}


/*
    Menú
*/

div.burger {
	height: 30px; 
	width: 40px;
	position: absolute;
	top: 11px; 
	right: 0;
	cursor: pointer;
  z-index: 2;	
}
	div.x,
	div.y,
	div.z {
		position: absolute; margin: auto;
		top: 0px; bottom: 0px;		
		background: black;
		border-radius:2px;
		-webkit-transition: all 200ms ease-out;
		   -moz-transition: all 200ms ease-out;
		    -ms-transition: all 200ms ease-out;
		     -o-transition: all 200ms ease-out;
		        transition: all 200ms ease-out;
	}		
	div.x, div.y, div.z { height: 3px; width: 26px; }
	div.y{top: 18px;}
	div.z{top: 37px;}
	div.collapse{
		top: 20px;
		background:#C4C4C4;
		-webkit-transition: all 70ms ease-out;
		   -moz-transition: all 70ms ease-out;
		    -ms-transition: all 70ms ease-out;
		     -o-transition: all 70ms ease-out;
		        transition: all 70ms ease-out;
	}
	 
	
	div.rotate30{
		-ms-transform: rotate(30deg); 
    	-webkit-transform: rotate(30deg); 
	    transform: rotate(30deg);	
		-webkit-transition: all 50ms ease-out;
		   -moz-transition: all 50ms ease-out;
		    -ms-transition: all 50ms ease-out;
		     -o-transition: all 50ms ease-out;
		        transition: all 50ms ease-out;					
	}
	div.rotate150{
		-ms-transform: rotate(150deg); 
    	-webkit-transform: rotate(150deg); 
	    transform: rotate(150deg);	
		-webkit-transition: all 50ms ease-out;
		   -moz-transition: all 50ms ease-out;
		    -ms-transition: all 50ms ease-out;
		     -o-transition: all 50ms ease-out;
		        transition: all 50ms ease-out;					
	}
	
	div.rotate45{
		-ms-transform: rotate(45deg); 
    	-webkit-transform: rotate(45deg); 
	    transform: rotate(45deg);	
		-webkit-transition: all 100ms ease-out;
		   -moz-transition: all 100ms ease-out;
		    -ms-transition: all 100ms ease-out;
		     -o-transition: all 100ms ease-out;
		        transition: all 100ms ease-out;					
	}
	div.rotate135{
		-ms-transform: rotate(135deg); 
    	-webkit-transform: rotate(135deg); 
	    transform: rotate(135deg);	
		-webkit-transition: all 100ms ease-out;
		   -moz-transition: all 100ms ease-out;
		    -ms-transition: all 100ms ease-out;
		     -o-transition: all 100ms ease-out;
		        transition: all 100ms ease-out;					
	}

div.navbar{height:73px;background:#385e97;}

div.circle{
	width: 0px;
	height: 0px; 
	position:absolute;
	top: 35px;
	left: 36px;
	background:#fff;
	opacity:1;
	-webkit-transition: all 300ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
	   -moz-transition: all 300ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
	    -ms-transition: all 300ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
	     -o-transition: all 300ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
	        transition: all 300ms cubic-bezier(0.000, 0.995, 0.990, 1.000);	
}
div.circle.expand{
	width:100vw;
	height:100vh;
  	z-index: 1;
	top: 0;
	left: 0; 	
	-webkit-transition: all 400ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
	   -moz-transition: all 400ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
	    -ms-transition: all 400ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
	     -o-transition: all 400ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
	        transition: all 400ms cubic-bezier(0.000, 0.995, 0.990, 1.000);					
	
}
div.menu {
	width: 100%;
	position: absolute;
	top: 0px; left: 0px;
}
div.menu ul li {
	list-style: none;
	position:absolute;
	top:50px;;
	left:0;
	opacity:0;
	width:100%;
	text-align:center;
	font-size:0px;
	-webkit-transition: all 70ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
	   -moz-transition: all 70ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
	    -ms-transition: all 70ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
	     -o-transition: all 70ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
	        transition: all 70ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
}
div.menu ul li a {
	color:#6B779A;
	text-transform:uppercase;
	text-decoration:none;	
	letter-spacing:3px;			
}

div.menu li.animate{
	font-size:21px;
	opacity:1;
	-webkit-transition: all 150ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
	   -moz-transition: all 150ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
	    -ms-transition: all 150ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
	     -o-transition: all 150ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
	        transition: all 150ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
}
div.menu li.animate:nth-of-type(1){
  z-index: 2;
	top:120px;
	transition-delay: 0.0s;	
}
div.menu li.animate:nth-of-type(2){
  z-index: 2;
	top:190px;
	transition-delay: 0.03s;	
}
div.menu li.animate:nth-of-type(3){
  z-index: 2;
	top:260px;
	transition-delay: 0.06s;		
}
div.menu li.animate:nth-of-type(4){
  z-index: 2;
	top:330px;
	transition-delay: 0.09s;		
}
div.menu li.animate:nth-of-type(5){
  z-index: 2;
	top:400px;
	transition-delay: 0.12s;		
}
div.menu li.animate:nth-of-type(6){
	z-index: 2;
	top:470px;
	transition-delay: 0.15s;				
}
.m0-auto {
	margin: 0 auto;
}
@media (max-width: 480px) {
  .sub-title {
    font-size: 1.3rem;
    line-height: 2rem;
  }
  .title {
	font-family: Roboto;
	font-style: normal;
	font-weight: 500;
	font-size: 1.5rem;
    line-height: 2.4rem;
	letter-spacing: 0.300349px;
	color: #0360AD;
	}
}
</style>